local TourGuide = TourGuide

local frame = CreateFrame("Button", "TourGuideItemFrame", UIParent, "ActionButtonTemplate")
frame:SetFrameStrata("LOW")
frame:SetHeight(36)
frame:SetWidth(36)
frame:SetPoint("BOTTOMRIGHT", QuestWatchFrame, "TOPRIGHT", -62, 10)
frame:Hide()
frame:RegisterForClicks("LeftButtonUp", "RightButtonUp")

local itemicon = frame:CreateTexture(nil, "ARTWORK")
itemicon:SetWidth(24) itemicon:SetHeight(24)
itemicon:SetTexture("Interface\\Icons\\INV_Misc_Bag_08")
itemicon:SetAllPoints(frame)

function TourGuide:SetUseItem(texture, item)
    if texture then
        itemicon:SetTexture(texture)
        frame:SetScript("OnClick",
                        function(...)
                            UseContainerItem(self:FindBagSlot(item))
                        end
        )
        frame:Show()
        texture = nil
    else
        frame:Hide()
    end
end

frame:RegisterForDrag("LeftButton")
frame:SetMovable(true)
frame:SetClampedToScreen(true)
frame:SetScript("OnDragStart", frame.StartMoving)
frame:SetScript("OnDragStop", function(frame)
                    frame:StopMovingOrSizing()
                    TourGuide.db.profile.itemframepoint, TourGuide.db.profile.itemframex, TourGuide.db.profile.itemframey = TourGuide.GetUIParentAnchor(frame)
                    TourGuide:Debug(1, "Item frame moved", TourGuide.db.profile.itemframepoint, TourGuide.db.profile.itemframex, TourGuide.db.profile.itemframey)
end)


function TourGuide:PositionItemFrame()
    if self.db.profile.itemframepoint then
        frame:ClearAllPoints()
        frame:SetPoint(self.db.profile.itemframepoint, self.db.profile.itemframex, self.db.profile.itemframey)
    end
    self.PositionItemFrame = nil
end
