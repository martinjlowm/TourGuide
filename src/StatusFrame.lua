
local bg = {
	bgFile = "Interface/Tooltips/UI-Tooltip-Background",
	edgeFile = "Interface/Tooltips/UI-Tooltip-Border",
	edgeSize = 16,
	insets = {left = 5, right = 5, top = 5, bottom = 5},
	tile = true, tileSize = 16,
}

local ICONSIZE, CHECKSIZE, GAP = 16, 16, 8
local FIXEDWIDTH = ICONSIZE + CHECKSIZE + GAP*4 - 4

local TourGuide = TourGuide
local OptionHouse = LibStub("OptionHouse-1.1")
local ww = WidgetWarlock

local function GetQuadrant(frame)
	local x,y = frame:GetCenter()
	if not x or not y then return "BOTTOMLEFT", "BOTTOM", "LEFT" end
	local hhalf = (x > UIParent:GetWidth()/2) and "RIGHT" or "LEFT"
	local vhalf = (y > UIParent:GetHeight()/2) and "TOP" or "BOTTOM"
	return vhalf..hhalf, vhalf, hhalf
end

local BASE_HEIGHT = 24
local f = CreateFrame("Button", nil, UIParent)
TourGuide.statusframe = f
f:SetPoint("TOPRIGHT", QuestWatchFrame, "BOTTOMRIGHT", -5, -15)
f:SetHeight(BASE_HEIGHT)
f:SetFrameStrata("LOW")
f:EnableMouse(true)
f:SetBackdrop(bg)
f:SetBackdropColor(0.09, 0.09, 0.19, 0.5)
f:SetBackdropBorderColor(0.5, 0.5, 0.5, 0.5)
f.rows = {}


local function ShowTooltip(self)
    local tip = TourGuide:GetObjectiveTag("N", self.step)
    if not tip then return end
    GameTooltip:SetOwner(self, "ANCHOR_NONE")
    local quad, vhalf, hhalf = GetQuadrant(self)
    local anchpoint = (vhalf == "TOP" and "BOTTOM" or "TOP")..hhalf
    TourGuide:Debug(11, "Setting tooltip anchor", anchpoint, quad, hhalf, vhalf)
    GameTooltip:SetPoint(quad, self, anchpoint)
    GameTooltip:SetText(tip, nil, nil, nil, nil, true)
end

local function tooltipOnLeave()
    GameTooltip:Hide()
end

local function tooltipOnEnter(...)
    ShowTooltip(this)
end

local function onClick(...)
    if TourGuide.db.char.currentguide == "No Guide" then
        OptionHouse:Open("Tour Guide", "Guides")
    else
        if arg1 == "RightButton" then
            if TourGuide.objectiveframe:IsVisible() then
                HideUIPanel(TourGuide.objectiveframe)
            else
                local quad, vhalf, hhalf = GetQuadrant(this)
                local anchpoint = (vhalf == "TOP" and "BOTTOM" or "TOP")..hhalf
                TourGuide.objectiveframe:ClearAllPoints()
                TourGuide.objectiveframe:SetPoint(quad, f, anchpoint)
                ShowUIPanel(TourGuide.objectiveframe)
            end
        else
            local i = TourGuide:GetQuestLogIndexByName()
            if i then SelectQuestLogEntry(i) end
            ShowUIPanel(QuestLogFrame)
        end
    end
end

local rowPool = {}

local function ReleaseRows(owner)
    for i = table.getn(owner.rows), 1, -1 do
        local row = table.remove(owner.rows, i)
        row:ClearAllPoints()
        row:SetAlpha(1)
        row:Hide()
        table.insert(rowPool, row)
    end
end

local function checkOnClick()
    TourGuide:SetTurnedIn(this.row.step, this:GetChecked())
end

local function GetRow(owner, relativeFrame)
    local row = table.remove(rowPool)

    if not row then
        row = CreateFrame('Button', nil, owner)

        row:EnableMouse(true)
        row:SetScript("OnClick", onClick)
        row:RegisterForClicks("LeftButtonUp", "RightButtonUp")
        row:SetScript("OnLeave", tooltipOnLeave)
        row:SetScript("OnEnter", tooltipOnEnter)

        row:SetHeight(BASE_HEIGHT)

        local check = ww.SummonCheckBox(CHECKSIZE, row, "LEFT", GAP, 0)
        local icon = ww.SummonTexture(row, "ARTWORK", ICONSIZE, ICONSIZE, nil, "LEFT", check, "RIGHT", GAP-4, 0)
        icon:SetTexCoord(4/48, 44/48, 4/48, 44/48)

        local text = ww.SummonFontString(row, "OVERLAY", "GameFontNormalSmall", nil, "RIGHT", -GAP-4, 0)
        text:SetPoint("LEFT", icon, "RIGHT", GAP-4, 1)
        text:SetJustifyH('LEFT')

        check:SetScript("OnClick", checkOnClick)

        row.check = check
        row.icon = icon
        row.text = text
    end

    row:SetParent(owner)
    row:ClearAllPoints()
    row:SetPoint('TOPLEFT', relativeFrame or owner, relativeFrame and 'BOTTOMLEFT' or 'TOPLEFT', 0, relativeFrame and 0 or -GAP+4)
    row:SetPoint('TOPRIGHT', relativeFrame or owner)

    table.insert(owner.rows, row)

    return row
end


local shadow = CreateFrame("Frame", nil, UIParent)
local shadow_anchor = "RIGHT"
shadow:SetHeight(32)
shadow:SetWidth(100)
shadow:Hide()
shadow.rows = {}

local elapsed, oldHeight, oldWidth, newHeight, newWidth
shadow:SetScript("OnUpdate",
    function(...)
        elapsed = elapsed + arg1
        if elapsed > 1 then
            this:Hide()

            for _, row in next, f.rows do
                row:SetAlpha(1)
            end

            f:SetWidth(newWidth)
            f:SetHeight(newHeight)
        else
            this:SetPoint(shadow_anchor, f, shadow_anchor, 0, elapsed * 40)
            this:SetAlpha(1 - elapsed)

            for _, row in next, f.rows do
                row:SetAlpha(elapsed)
            end

            f:SetWidth(oldWidth + (newWidth - oldWidth) * elapsed)
            f:SetHeight(oldHeight + (newHeight - oldHeight) * elapsed)
        end
    end
)

f.shadow = shadow

function TourGuide:PositionStatusFrame()
    if self.db.profile.statusframepoint then
        f:ClearAllPoints()
        f:SetPoint(self.db.profile.statusframepoint, self.db.profile.statusframex, self.db.profile.statusframey)
    end
end


function TourGuide:SetText(row, shadowRow, i)
    local action, quest = self:GetObjectiveInfo(i)
    local note = self:GetObjectiveTag("N")
    local newtext = (quest or"???")..(note and " [?]" or "")

    if row.text:GetText() ~= newtext or icon:GetTexture() ~= self.icons[action] then
        row:SetAlpha(0)
        elapsed = 0

        f.shadow:SetWidth(f:GetWidth())
        _, _, shadow_anchor = GetQuadrant(f)
        f.shadow:ClearAllPoints()
        f.shadow:SetPoint(shadow_anchor, f, shadow_anchor, 0, 0)
        f.shadow:SetAlpha(1)
        shadowRow.icon:SetTexture(row.icon:GetTexture())
        shadowRow.icon:SetTexCoord(4/48, 44/48, 4/48, 44/48)
        shadowRow.text:SetText(row.text:GetText())
        -- f.shadow:Show()
    end

    row.icon:SetTexture(self.icons[action])

    if action ~= "ACCEPT" and action ~= "TURNIN" then
        row.icon:SetTexCoord(4/48, 44/48, 4/48, 44/48)
    end
    if self:GetObjectiveTag("T") then
        f:SetBackdropColor(0.09, 0.5, 0.19, 0.5)
    else
        f:SetBackdropColor(0.09, 0.09, 0.19, 0.5)
    end

    row.text:SetText(newtext)
    row.check:SetChecked(false)
    row.check:SetButtonState("NORMAL")
    if self.db.char.currentguide == "No Guide" then
        row.check:Disable()
    else
        row.check:Enable()
    end

    -- if i == 1 then
    --     f:SetWidth(FIXEDWIDTH + row.text:GetWidth())
    -- end
    -- newWidth = math.max(FIXEDWIDTH + row.text:GetWidth(), newWidth or 0)
    -- row:SetWidth(newWidth)

    if self.UpdateFubarPlugin then
        self.UpdateFubarPlugin(quest, self.icons[action], note)
    end
end

local function populateRow(row, checked, icon, text)
    row.icon:SetTexture(icon)
    row.text:SetText(text)
    row.check:SetChecked(checked)
end

local lastmapped, lastmappedaction
function TourGuide:UpdateStatusFrame()
    self:Debug(1, "UpdateStatusFrame", self.current)

    if self.updatedelay then
        local _, logi = self:GetObjectiveStatus(self.updatedelay)
        self:Debug(1, "Delayed update", self.updatedelay, logi)
        if logi then return end
    end

    local nextstep
    self.updatedelay = nil

    for i in ipairs(self.actions) do
        local turnedin, logi, complete = self:GetObjectiveStatus(i)

        if not turnedin and not nextstep then
            local action, name, quest = self:GetObjectiveInfo(i)
            local turnedin, logi, complete = self:GetObjectiveStatus(i)
            local note, useitem, optional, lootitem, lootqty = self:GetObjectiveTag("N", i), self:GetObjectiveTag("U", i), self:GetObjectiveTag("O", i), self:GetObjectiveTag("L", i)
            local level = tonumber((self:GetObjectiveTag("LV", i)))
            local needlevel = level and level > UnitLevel("player")
            self:Debug(11, "UpdateStatusFrame", i, action, name, note, logi, complete, turnedin, quest, useitem, optional, lootitem, lootqty, lootitem and self:GetItemCount(lootitem) or 0, level, needlevel)
            local hasuseitem = useitem and self:FindBagSlot(useitem)
            local haslootitem = lootitem and self:GetItemCount(lootitem) >= lootqty

            -- Test for completed objectives and mark them done
            if action == "SETHEARTH" and self.db.char.hearth == name then return self:SetTurnedIn(i, true) end

            local zonetext, subzonetext, subzonetag = GetZoneText(), string.trim(GetSubZoneText()), self:GetObjectiveTag("SZ")
            if (action == "RUN" or action == "FLY" or action == "HEARTH" or action == "BOAT") and (subzonetext == name or subzonetext == subzonetag or zonetext == name or zonetext == subzonetag) then
                return self:SetTurnedIn(i, true)
            end

            if action == "KILL" or action == "NOTE" then
                if not optional and haslootitem then return self:SetTurnedIn(i, true) end

                local quest, questtext = self:GetObjectiveTag("Q", i), self:GetObjectiveTag("QO", i)
                if quest and questtext then
                    local qi = self:GetQuestLogIndexByName(quest)
                    for lbi=1,GetNumQuestLeaderBoards(qi) do
                        self:Debug(1, quest, questtext, qi, GetQuestLogLeaderBoard(lbi, qi))
                        if GetQuestLogLeaderBoard(lbi, qi) == questtext then return self:SetTurnedIn(i, true) end
                    end
                end
            end

            if action == "PET" and self.db.char.petskills[name] then return self:SetTurnedIn(i, true) end

            local incomplete
            if action == "ACCEPT" then incomplete = (not optional or hasuseitem or haslootitem) and not logi
            elseif action == "TURNIN" then incomplete = not optional or logi
            elseif action == "COMPLETE" then incomplete = not complete and (not optional or logi)
            elseif action == "NOTE" or action == "KILL" then incomplete = not optional or lootitem and haslootitem or needlevel
            else incomplete = not logi end

            if incomplete then nextstep = i end

            if action == "COMPLETE" and logi and self.db.char.trackquests then
                local j = i
                repeat
                    action = self:GetObjectiveInfo(j)
                    turnedin, logi, complete = self:GetObjectiveStatus(j)
                    if action == "COMPLETE" and logi and not complete then
                        AddQuestWatch(logi) -- Watch if we're in a 'COMPLETE' block
                    elseif action == "COMPLETE" and logi then
                        RemoveQuestWatch(logi) end -- or unwatch if done
                    j = j + 1
                until action ~= "COMPLETE"
            end
        end
    end

    QuestLog_Update()
    QuestWatch_Update()

    if not nextstep and self:LoadNextGuide() then return self:UpdateStatusFrame() end

    if not nextstep then return end

    local animate
    if self.current ~= nextstep then
        animate = true
    end

    self.current = nextstep

    ReleaseRows(f)
    ReleaseRows(f.shadow)

    local prevRow
    local prevShadowRow

    oldHeight = f:GetHeight()
    oldWidth = f:GetWidth()

    newWidth = FIXEDWIDTH

    repeat
        local row = GetRow(f, prevRow)
        local shadowRow = GetRow(f.shadow, prevShadowRow)

        row.step = nextstep
        row.check.row = row

        local action, quest, fullquest = self:GetObjectiveInfo(row.step)
        local turnedin, logi, complete = self:GetObjectiveStatus(row.step)
        local note, useitem, optional = self:GetObjectiveTag("N", row.step), self:GetObjectiveTag("U", row.step), self:GetObjectiveTag("O", row.step)
        local zonename = self:GetObjectiveTag("Z", row.step) or self.zonename
        self:DebugF(1, "Progressing to objective \"%s %s\"", action, quest)

        -- Mapping
        if TomTom and (lastmapped ~= quest or lastmappedaction ~= action) then
            lastmappedaction, lastmapped = action, quest
            self:ParseAndMapCoords(note, quest, zonename) --, zone)
        end

        local newtext = (quest or "???")..(note and " [?]" or "")

        -- Not sure why shadowRow has the previous value and the main row does not
        populateRow(shadowRow, shadowRow.check:GetChecked(), shadowRow.icon:GetTexture(), shadowRow.text:GetText())
        populateRow(row, (action == 'COMPLETE' or action == 'KILL') and complete or false, self.icons[action], newtext)

        newWidth = math.max(FIXEDWIDTH + row.text:GetWidth(), newWidth)

        row:Show()
        shadowRow:Show()

        prevRow = row
        prevShadowRow = shadowRow

        nextstep = nextstep + 1
    until not self:GetObjectiveTag("G", nextstep)

    newHeight = math.max(1, table.getn(f.rows)) * BASE_HEIGHT + GAP

    if animate then
        elapsed = 0
        f.shadow:SetWidth(f:GetWidth())
        _, _, shadow_anchor = GetQuadrant(f)
        f.shadow:ClearAllPoints()
        f.shadow:SetPoint(shadow_anchor, f, shadow_anchor, 0, 0)
        f.shadow:SetAlpha(1)

        shadow:Show()
    end

    if not f.shadow:IsVisible() then
        f:SetHeight(newHeight)
        f:SetWidth(newWidth)
    end

    local usetex = useitem and select(9, GetItemInfo(tonumber(useitem)))
    self:SetUseItem(usetex, useitem)

    self:UpdateOHPanel()
end

function TourGuide.GetUIParentAnchor(frame)
    local w, h, x, y = UIParent:GetWidth(), UIParent:GetHeight(), frame:GetCenter()
    local hhalf, vhalf = (x > w/2) and "RIGHT" or "LEFT", (y > h/2) and "TOP" or "BOTTOM"
    local dx = hhalf == "RIGHT" and math.floor(frame:GetRight() + 0.5) - w or math.floor(frame:GetLeft() + 0.5)
    local dy = vhalf == "TOP" and math.floor(frame:GetTop() + 0.5) - h or math.floor(frame:GetBottom() + 0.5)

    return vhalf..hhalf, dx, dy
end


f:RegisterForDrag("LeftButton")
f:SetMovable(true)
f:SetClampedToScreen(true)
f:SetScript("OnDragStart",
            function(...)
                if TourGuide.objectiveframe:IsVisible() then
                    HideUIPanel(TourGuide.objectiveframe)
                end
                this:StartMoving()
            end
)
f:SetScript("OnDragStop",
            function(...)
                this:StopMovingOrSizing()
                TourGuide.db.profile.statusframepoint, TourGuide.db.profile.statusframex, TourGuide.db.profile.statusframey = TourGuide.GetUIParentAnchor(this)
                TourGuide:Debug(1, "Status frame moved", TourGuide.db.profile.statusframepoint, TourGuide.db.profile.statusframex, TourGuide.db.profile.statusframey)
                this:ClearAllPoints()
                this:SetPoint(TourGuide.db.profile.statusframepoint, TourGuide.db.profile.statusframex, TourGuide.db.profile.statusframey)
            end
)

local origAddQuestWatch = AddQuestWatch
AddQuestWatch = function(...)
    if IsQuestWatched(arg[1]) then
        return
    end

    origAddQuestWatch(unpack(arg))
end

local origRemoveQuestWatch = RemoveQuestWatch
RemoveQuestWatch = function(...)
    if not IsQuestWatched(arg[1]) then
        return
    end

    origRemoveQuestWatch(unpack(arg))
end
