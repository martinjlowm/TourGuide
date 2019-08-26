/* {
 *   const TourGuide = TourGuide;
 *   const L = TourGuide.Locale;
 *   const ww = WidgetWarlock;
 *
 *   TourGuide.CreateConfigPanel = function() {
 *     const frame = CreateFrame('Frame', null, UIParent)
 *     frame.SetFrameStrata('DIALOG')
 *
 *     const qtrack = ww.SummonCheckBox(22, frame, 'TOPLEFT', 5, -5)
 *     ww.SummonFontString(qtrack, 'OVERLAY', 'GameFontNormalSmall', 'Automatically track quests', 'LEFT', qtrack, 'RIGHT', 5, 0)
 *     qtrack.SetScript('OnClick', function() {
 *       return self.db.char.trackquests = ! self.db.char.trackquests;
 *     });
 *
 *
 *     const OnShow = function(f) {
 *       qtrack.SetChecked(self.db.char.trackquests)
 *
 *       f.SetAlpha(0);
 *       f.SetScript('OnUpdate', function(...arg: any[]) {
 *         ww.FadeIn(self || this, arg1);
 *       });
 *     }
 *
 *     frame.SetScript('OnShow', function() {
 *       OnShow(this);
 *     });
 *
 *     ww.SetFadeTime(frame, 0.5);
 *
 *     OnShow(frame);
 *
 *     return frame;
 *   }
 * } */
