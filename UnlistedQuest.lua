
local TourGuide = TourGuide
local L = TourGuide.Locale


function TourGuide:IsQuestAcceptable(name)
    for i, v in pairs(self.actions) do
        if (v == "ACCEPT" or v == "COMPLETE")
        and string.gsub(self.quests[i], L.PART_GSUB, "") == name then
            return true
        end
    end
end


local notlisted = CreateFrame("Frame", nil, QuestFrame)
notlisted:SetFrameStrata("DIALOG")
notlisted:SetWidth(32)
notlisted:SetHeight(32)
notlisted:SetPoint("TOPLEFT", 70, -45)
notlisted:Hide()

notlisted:RegisterEvent("QUEST_DETAIL")
notlisted:RegisterEvent("QUEST_COMPLETE")
notlisted:RegisterEvent("QUEST_FINISHED")
notlisted:SetScript("OnEvent",
                    function(event)
                        if event ~= "QUEST_DETAIL" then
                            return this:Hide()
                        end

                        local quest = GetTitleText()
                        if quest
                        and TourGuide:IsQuestAcceptable(quest) then
                            this:Hide()
                        else
                            this:Show()
                        end
                    end
)


local nltex = notlisted:CreateTexture()
nltex:SetAllPoints()
nltex:SetTexture("Interface\\Icons\\INV_Misc_QuestionMark")

local text = notlisted:CreateFontString(nil, "OVERLAY", "GameFontNormal")
text:SetPoint("TOPLEFT", notlisted, "TOPRIGHT")
text:SetPoint("BOTTOMLEFT", notlisted, "BOTTOMRIGHT")
text:SetPoint("RIGHT", notlisted, "RIGHT", 200, 0)
text:SetText(L["|cffff4500This quest is not listed in your current guide"])
