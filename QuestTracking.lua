local TourGuide = TourGuide
local L = TourGuide.Locale

TourGuide.TrackEvents = {"UI_INFO_MESSAGE", "CHAT_MSG_LOOT", "CHAT_MSG_SYSTEM", "QUEST_WATCH_UPDATE", "QUEST_LOG_UPDATE", "ZONE_CHANGED", "ZONE_CHANGED_INDOORS",
                         "MINIMAP_ZONE_CHANGED", "ZONE_CHANGED_NEW_AREA", "PLAYER_LEVEL_UP", "PLAYER_ENTERING_WORLD"}


function TourGuide:PLAYER_ENTERING_WORLD(event)
    local addon = arg1
    if addon ~= "Blizzard_TrainerUI" then return end

    self:UnregisterEvent("PLAYER_ENTERING_WORLD")

    local f = CreateFrame("Frame", nil, ClassTrainerFrame)
    f:SetScript("OnShow", function(self) if self:GetObjectiveInfo() == "TRAIN" then self:SetTurnedIn() end end)
end


function TourGuide:PLAYER_LEVEL_UP(event)
    local newlevel = arg1

    local level = tonumber((self:GetObjectiveTag("LV")))
    self:Debug(1, "PLAYER_LEVEL_UP", newlevel, level)
    if level and newlevel >= level then self:SetTurnedIn() end
end


function TourGuide:ZONE_CHANGED()
    local zonetext, subzonetext, subzonetag, action, quest = GetZoneText(), GetSubZoneText(), self:GetObjectiveTag("SZ"), self:GetObjectiveInfo()
    if (action == "RUN" or action == "FLY" or action == "HEARTH" or action == "BOAT") and (subzonetext == quest or subzonetext == subzonetag or zonetext == quest or zonetext == subzonetag) then
        self:DebugF(1, "Detected zone change %q - %q", action, quest)
        self:SetTurnedIn()
    end
end
TourGuide.ZONE_CHANGED_INDOORS = TourGuide.ZONE_CHANGED
TourGuide.MINIMAP_ZONE_CHANGED = TourGuide.ZONE_CHANGED
TourGuide.ZONE_CHANGED_NEW_AREA = TourGuide.ZONE_CHANGED


function TourGuide:CHAT_MSG_SYSTEM(event)
    local action, quest = self:GetObjectiveInfo()

    local msg = arg1

    if action == "SETHEARTH" then
        local _, _, loc = string.find(msg, L["(.*) is now your home."])
        if loc then
            self:DebugF(1, "Detected setting hearth to %q", loc)
            self.db.char.hearth = loc
            return loc == quest and self:SetTurnedIn()
        end
    end

    if action == "ACCEPT" then
        local _, _, text = string.find(msg, L["Quest accepted: (.*)"])
        if text and string.gsub(quest, L.PART_GSUB, "") == text then
            self:DebugF(1, "Detected quest accept %q", quest)
            return self:UpdateStatusFrame()
        end
    end
end


function TourGuide:QUEST_WATCH_UPDATE(event)
    if self:GetObjectiveInfo() == "COMPLETE" then self:UpdateStatusFrame() end
end


function TourGuide:QUEST_LOG_UPDATE(event)
    local action, _, logi, complete = self:GetObjectiveInfo(), self:GetObjectiveStatus()
    self:Debug(10, "QUEST_LOG_UPDATE", action, logi, complete)

    if (self.updatedelay and not logi) or action == "ACCEPT" or action == "COMPLETE" and complete then self:UpdateStatusFrame() end

    if action == "KILL" or action == "NOTE" then
        local quest, questtext = self:GetObjectiveTag("Q"), self:GetObjectiveTag("QO")
        if not quest or not questtext then return end

        local qi = self:GetQuestLogIndexByName(quest)
        for i=1,GetNumQuestLeaderBoards(qi) do
            if GetQuestLogLeaderBoard(i, qi) == questtext then self:SetTurnedIn() end
        end
    end
end


function TourGuide:CHAT_MSG_LOOT(event)
    local msg = arg1

    local action, quest = self:GetObjectiveInfo()
    local lootitem, lootqty = self:GetObjectiveTag("L")
    local _, _, itemid, name = string.find(msg, L["^You .*Hitem:(%d+).*(%[.+%])"])
    self:Debug(10, event, action, quest, lootitem, lootqty, itemid, name)

    if action == "BUY" and name and name == quest or (action == "BUY" or action == "KILL" or action == "NOTE") and lootitem and itemid == lootitem and (GetItemCount(lootitem) + 1) >= lootqty then
        return self:SetTurnedIn()
    end
end


function TourGuide:UI_INFO_MESSAGE(event)
    local msg = arg1
    if msg == ERR_NEWTAXIPATH and self:GetObjectiveInfo() == "GETFLIGHTPOINT" then
        self:Debug(1, "Discovered flight point")
        self:SetTurnedIn()
    end
end


local orig = GetQuestReward
GetQuestReward = function(...)
    local quest = GetTitleText()
    TourGuide:Debug(10, "GetQuestReward", quest)
    TourGuide:CompleteQuest(quest, true)

    return orig(unpack(arg))
end
