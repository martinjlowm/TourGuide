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


local myclass, myrace = UnitClass("player"), UnitRace("player")
local function ParseQuests(...)
    local accepts, turnins, completes = {}, {}, {}
    local uniqueid = 1
    local actions, quests, tags = {}, {}, {}
    local i = 1

    for j = 1, select('#', arg) do
        local text = select(j, unpack(arg))
        local _, _, classes = string.find(text, "|C|([^|]+)|")
        local _, _, races = string.find(text, "|R|([^|]+)|")

        if text ~= "" and (not classes or string.find(classes, myclass)) and (not races or string.find(races, myrace)) then
            local action, quest, tag = select(3, string.find(text, "^(%a) ([^|]*)(.*)"))
            assert(actiontypes[action], "Unknown action: "..text)
            quest = string.trim(quest)
            if not (action == "A" or action =="C" or action =="T") then
                quest = quest.."@"..uniqueid.."@"
                uniqueid = uniqueid + 1
            end

            actions[i], quests[i], tags[i] = actiontypes[action], quest, tag

            i = i + 1
        end
    end

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
