/*
 * const L = TourGuide.Locale
 *
 * TourGuide.IsQuestAcceptable = function(name) {
 *   for (const [i, v] of pairs(this.actions)) {
 *     if ((v === 'ACCEPT' || v === 'COMPLETE') &&
 *         string.gsub(this.quests[i], L.PART_GSUB, '') === name) {
 *       return true;
 *     }
 *   }
 * }
 *
 *
 * const notlisted = CreateFrame('Frame', null, QuestFrame);
 * notlisted.SetFrameStrata('DIALOG');
 * notlisted.SetWidth(32);
 * notlisted.SetHeight(32);
 * notlisted.SetPoint('TOPLEFT', 70, -45);
 * notlisted.Hide();
 *
 * notlisted.RegisterEvent('QUEST_DETAIL');
 * notlisted.RegisterEvent('QUEST_COMPLETE');
 * notlisted.RegisterEvent('QUEST_FINISHED');
 * notlisted.SetScript('OnEvent', function(event: string) {
 *   if (event !== 'QUEST_DETAIL') {
 *     return this.Hide();
 *   }
 *
 *   const quest = GetTitleText();
 *   if (quest && TourGuide.IsQuestAcceptable(quest)) {
 *     this.Hide();
 *   } else {
 *     this.Show();
 *   }
 * });
 *
 * const nltex = notlisted.CreateTexture()
 * nltex.SetAllPoints()
 * nltex.SetTexture('Interface/Icons/INV_Misc_QuestionMark')
 *
 * const text = notlisted.CreateFontString(null, 'OVERLAY', 'GameFontNormal')
 * text.SetPoint('TOPLEFT', notlisted, 'TOPRIGHT')
 * text.SetPoint('BOTTOMLEFT', notlisted, 'BOTTOMRIGHT')
 * text.SetPoint('RIGHT', notlisted, 'RIGHT', 200, 0)
 * text.SetText(L['|cffff4500This quest is not listed in your current guide'])
 *
 * export {}; */
