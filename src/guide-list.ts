/* const TourGuide = TourGuide
 * const OptionHouse = LibStub('OptionHouse-1.1')
 * const ww = WidgetWarlock
 * WidgetWarlock = null
 *
 *
 * const [NUMROWS, COLWIDTH] = [16, 210];
 * const ROWHEIGHT = 305/NUMROWS
 *
 *
 * let offset = 0
 * const rows = {}
 * const frame;
 *
 *
 * const OnShow = function(self) {
 *   TourGuide.UpdateGuidesPanel()
 *
 *   self.SetAlpha(0)
 *   self.SetScript('OnUpdate', function(arg1) {
 *     ww.FadeIn(this, arg1);
 *   });
 * }
 *
 *
 * const HideTooltip = function() { GameTooltip.Hide() }
 *
 * const ShowTooltip = function(f) {
 *   if (TourGuide.db.char.completion[f.guide] !== 1) {
 *     return;
 *   }
 *
 *   GameTooltip.SetOwner(f, 'ANCHOR_RIGHT')
 *   GameTooltip.SetText('This guide has been completed.  Shift-click to reset it.', null, null, null, null, true)
 * }
 *
 *
 * const OnClick = function(self) {
 *   if (IsShiftKeyDown()) {
 *     TourGuide.db.char.completion[self.guide] = null
 *     TourGuide.db.char.turnins[self.guide] = {}
 *     TourGuide.UpdateGuidesPanel()
 *     GameTooltip.Hide()
 *   } else {
 *     const text = self.guide
 *     if (!text) {
 *       self.SetChecked(false)
 *     } else {
 *       TourGuide.LoadGuide(text)
 *       TourGuide.UpdateStatusFrame()
 *       TourGuide.UpdateGuidesPanel()
 *     }
 *   }
 * }
 *
 *
 * TourGuide.CreateGuidesPanel = function() {
 *   frame = CreateFrame('Frame', null, UIParent);
 *   rows = {};
 *   for (let i = 1; i <= NUMROWS * 3; i++) {
 *     let [anchor, point] = [rows[i-1], 'BOTTOMLEFT'];
 *     if (i === 1) {
 *       [anchor, point] = frame, 'TOPLEFT';
 *     } else if (i === (NUMROWS + 1)) {
 *       [anchor, point] = rows[1], 'TOPRIGHT';
 *     } else if (i === (NUMROWS*2 + 1)) {
 *       [anchor, point] = rows[NUMROWS + 1], 'TOPRIGHT';
 *     }
 *
 *     const row = CreateFrame('CheckButton', null, frame)
 *     row.SetPoint('TOPLEFT', anchor, point)
 *     row.SetHeight(ROWHEIGHT)
 *     row.SetWidth(COLWIDTH)
 *
 *     const highlight = ww.SummonTexture(row, null, null, null, 'Interface/HelpFrame/HelpFrameButton-Highlight')
 *     highlight.SetTexCoord(0, 1, 0, 0.578125)
 *     highlight.SetAllPoints()
 *     row.SetHighlightTexture(highlight)
 *     row.SetCheckedTexture(highlight)
 *
 *     const text = ww.SummonFontString(row, null, 'GameFontWhite', null, 'LEFT', 6, 0);
 *
 *     row.SetScript('OnClick', function(...args: any[]) {
 *       OnClick(this);
 *     })
 *     row.SetScript('OnEnter', function(...args: any[]) {
 *       ShowTooltip(this);
 *     })
 *     row.SetScript('OnLeave', HideTooltip)
 *
 *     row.text = text
 *     rows[i] = row
 *   }
 *
 *   frame.EnableMouseWheel()
 *   frame.SetScript('OnMouseWheel', function(...arg) {
 *     offset = offset - arg1 * NUMROWS
 *     if ((offset + NUMROWS*2) > self.guidelist.length) {
 *       offset = offset - NUMROWS;
 *     }
 *     if (offset < 0) {
 *       offset = 0;
 *     }
 *     self.UpdateGuidesPanel()
 *   });
 *
 *   frame.SetScript('OnShow', function(...args: any[]) {
 *     OnShow(this);
 *   })
 *   ww.SetFadeTime(frame, 0.5);
 *   OnShow(frame);
 *   return frame;
 * }
 *
 *
 * TourGuide.UpdateGuidesPanel = function() {
 *   if (!frame || !frame.IsVisible()) {
 *     return;
 *   }
 *
 *   for (const [i, row] of ipairs<any>(rows)) {
 *     row.i = i + offset + 1
 *
 *     const name = self.guidelist[i + offset + 1]
 *     const complete = self.db.char.currentguide === name && (self.current-1) / self.actions.length || self.db.char.completion[name]
 *     row.guide = name
 *
 *     const [r, g, b] = self.ColorGradient(complete || 0);
 *     const text = complete && complete !== 0 && string.format('%s |cff%02x%02x%02x[%d%%]', name, r*255, g*255, b*255, complete*100) || name
 *     row.text.SetText(text)
 *     row.SetChecked(self.db.char.currentguide === name)
 *   }
 * } */
