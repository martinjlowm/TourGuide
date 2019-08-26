/* const TourGuide = TourGuide
 *
 * const frame = CreateFrame('Button', 'TourGuideItemFrame', UIParent, 'ActionButtonTemplate')
 * frame.SetFrameStrata('LOW')
 * frame.SetHeight(36)
 * frame.SetWidth(36)
 * frame.SetPoint('BOTTOMRIGHT', QuestWatchFrame, 'TOPRIGHT', -62, 10)
 * frame.Hide()
 * frame.RegisterForClicks('LeftButtonUp', 'RightButtonUp')
 *
 * const itemicon = frame.CreateTexture(null, 'ARTWORK')
 * itemicon.SetWidth(24)
 * itemicon.SetHeight(24)
 * itemicon.SetTexture('Interface/Icons/INV_Misc_Bag_08')
 * itemicon.SetAllPoints(frame)
 *
 * TourGuide.SetUseItem = function(texture, item) {
 *   if (texture) {
 *     itemicon.SetTexture(texture)
 *     frame.SetScript(
 *       'OnClick',
 *       function(...arg) {
 *         UseContainerItem(...this.FindBagSlot(item) as [number, number])
 *       }
 *     );
 *     frame.Show()
 *     texture = null
 *   } else {
 *     frame.Hide()
 *   }
 * }
 *
 * frame.RegisterForDrag('LeftButton')
 * frame.SetMovable(true)
 * frame.SetClampedToScreen(true)
 * frame.SetScript('OnDragStart', frame.StartMoving)
 * frame.SetScript('OnDragStop', function(frame) {
 *   frame.StopMovingOrSizing()
 *   TourGuide.db.profile.itemframepoint, TourGuide.db.profile.itemframex, TourGuide.db.profile.itemframey = TourGuide.GetUIParentAnchor(frame)
 *   TourGuide.Debug(1, 'Item frame moved', TourGuide.db.profile.itemframepoint, TourGuide.db.profile.itemframex, TourGuide.db.profile.itemframey)
 * });
 *
 * TourGuide.PositionItemFrame = function() {
 *   if (self.db.profile.itemframepoint) {
 *     frame.ClearAllPoints()
 *     frame.SetPoint(self.db.profile.itemframepoint, self.db.profile.itemframex, self.db.profile.itemframey)
 *   }
 *
 *   self.PositionItemFrame = null
 * } */
