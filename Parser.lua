local _G = getfenv(0)

local actiontypes = {
	A = "ACCEPT",
	C = "COMPLETE",
	T = "TURNIN",
	K = "KILL",
	R = "RUN",
	H = "HEARTH",
	h = "SETHEARTH",
	F = "FLY",
	f = "GETFLIGHTPOINT",
	N = "NOTE",
	B = "BUY",
	b = "BOAT",
	U = "USE",
	P = "PET",
}

function TourGuide:GetObjectiveTag(tag, i)
    self:Debug(11, "GetObjectiveTag", tag, i)
    i = i or self.current
    local tags = self.tags[i]
    if not tags then return end

    if tag == "O" then
        return string.find(tags, "|O|")
    elseif tag == "T" then
        return string.find(tags, "|T|")
    elseif tag == "QID" then
        return tonumber((string.match(tags, "|QID|(%d+)|")))
    elseif tag == "L" then
        local _, _, lootitem, lootqty = string.find(tags, "|L|(%d+)%s?(%d*)|")
        lootqty = tonumber(lootqty) or 1

        return lootitem, lootqty
    end

    return select(3, string.find(tags, "|"..tag.."|([^|]*)|?"))
end


local function DumpQuestDebug(accepts, turnins, completes)
	for quest in pairs(accepts) do if not turnins[quest] then TourGuide:DebugF(1, "Quest has no 'turnin' objective: %s", quest) end end
	for quest in pairs(turnins) do if not accepts[quest] then TourGuide:DebugF(1, "Quest has no 'accept' objective: %s", quest) end end
	for quest in pairs(completes) do if not accepts[quest] and not turnins[quest] then TourGuide:DebugF(1, "Quest has no 'accept' and 'turnin' objectives: %s", quest) end end
end


local titlematches = {"For", "A", "The", "Or", "In", "Then", "From", "To"}
local function DebugQuestObjective(text, action, quest, accepts, turnins, completes)
	local haserrors

	if (action == "A" and accepts[quest] or action == "T" and turnins[quest] or action == "C" and completes[quest]) and not string.find(text, "|NODEBUG|") then
		TourGuide:DebugF(1, "%s %s -- Duplicate objective", action, quest)
		haserrors = true
	end

	if action == "A" then accepts[quest] = true
	elseif action == "T" then turnins[quest] = true
	elseif action == "C" then completes[quest] = true end

	if string.find(text, "|NODEBUG|") then return haserrors end

	if action == "A" or action == "C" or action == "T" then
		-- Catch bad Title Case
		for _,word in pairs(titlematches) do
			if string.find(quest, "[^:]%s"..word.."%s") or string.find(quest, "[^:]%s"..word.."$") or string.find(quest, "[^:]%s"..word.."@") then
				TourGuide:DebugF(1, "%s %s -- Contains bad title case", action, quest)
				haserrors = true
			end
		end
	end

	if string.find(text, "[“”’]") then
		TourGuide:DebugF(1, "%s %s -- Contains bad char", action, quest)
		haserrors = true
	end

	local _, _, comment = string.find(text, "(|[NLUC]V?|[^|]+)$") or string.find(text, "(|[NLUC]V?|[^|]+) |[NLUC]V?|")
	if comment then
		TourGuide:Debug(1, "Unclosed comment: ".. comment)
		haserrors = true
	end

	return haserrors
end


local myclass, myrace = UnitClass("player"), UnitRace("player")
local function ParseQuests(...)
    local accepts, turnins, completes = {}, {}, {}
    local uniqueid = 1
    local actions, quests, tags = {}, {}, {}
    local i, haserrors = 1, false

    for j = 1, table.getn(arg) do
        local text = arg[j]

        local class = select(3, string.find(text, "|C|([^|]+)|"))
        local race = select(3, string.find(text, "|R|([^|]+)|"))

        if text ~= "" and (not class or class == myclass) and (not race or race == myrace) then
            local action, quest, tag = select(3, string.find(text, "^(%a) ([^|]*)(.*)"))
            assert(actiontypes[action], "Unknown action: "..text)
            quest = string.trim(quest)
            if not (action == "A" or action =="C" or action =="T") then
                quest = quest.."@"..uniqueid.."@"
                uniqueid = uniqueid + 1
            end

            actions[i], quests[i], tags[i] = actiontypes[action], quest, tag

            i = i + 1

            haserrors = DebugQuestObjective(text, action, quest, accepts, turnins, completes) or haserrors
        end
    end

    DumpQuestDebug(accepts, turnins, completes)

    if haserrors and TourGuide:IsDebugEnabled() then TourGuide:Print("This guide contains errors") end

    return actions, quests, tags
end


function TourGuide:LoadGuide(name, complete)
    if not name then return end

    if complete then self.db.char.completion[self.db.char.currentguide] = 1
    elseif self.actions then self.db.char.completion[self.db.char.currentguide] = (self.current-1)/table.getn(self.actions) end

    self.db.char.currentguide = self.guides[name] and name or self.guidelist[1]
    self:DebugF(1, "Loading guide: %s", name)
    self.guidechanged = true
    local zonename = select(3, string.find(name, "^(.*) %(.*%)$"))
    self.zonename = zonename

    self.actions, self.quests, self.tags = ParseQuests(string.split("\n", self.guides[self.db.char.currentguide]()))

    if not self.db.char.turnins[name] then self.db.char.turnins[name] = {} end
    self.turnedin = self.db.char.turnins[name]
end


function TourGuide:DebugGuideSequence(dumpquests)
	local accepts, turnins, completes = {}, {}, {}
	local function DebugParse(...)
		local uniqueid, haserrors = 1

		for j = 1, select('#', arg) do
			local text = select(j, arg)

			if text ~= "" then
                            local action, quest, tag = select(3, string.find(text, "^(%a) ([^|]*)(.*)"))
                            if not actiontypes[action] then TourGuide:Debug(1, "Unknown action: "..text) end
                            quest = string.trim(quest)
                            if not (action == "A" or action =="C" or action =="T") then
                                quest = quest.."@"..uniqueid.."@"
                                uniqueid = uniqueid + 1
                            end

                            haserrors = DebugQuestObjective(text, action, quest, accepts, turnins, completes) or haserrors
			end
		end

		return haserrors
	end

	self:Debug(1, "------ Begin Full Debug ------")

	local name, lastzone = self.db.char.currentguide
	repeat
		if not self.guides[name] then
			self:DebugF(1, "Cannot find guide %q", name)
			name, lastzone = nil, name
		elseif DebugParse(string.split("\n", self.guides[name]())) then
			self:DebugF(1, "Errors in guide: %s", name)
			self:Debug(1, "---------------------------")
		end
		name, lastzone = self.nextzones[name], name
	until not name

	if dumpquests then
		self:Debug(1, "------ Quest Continuity Debug ------")
		DumpQuestDebug(accepts, turnins, completes)
	end
	self:Debug(1, "Last zone loaded:", lastzone)
	self:Debug(1, "------ End Full Debug ------")
end
