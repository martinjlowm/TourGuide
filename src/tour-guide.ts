import { IDongle, IDongleStub } from './dongle';
import { IParser } from './parser';
import { IStatusFrameHandler } from './status-frame';
import { IObjectivesFrame } from './objectives-frame';
import { ILocale } from './locale';
import { IWidgetWarlock } from './widget-warlock';

export type INamespace = IParser & IStatusFrameHandler & IObjectivesFrame & ILocale & { WidgetWarlock: IWidgetWarlock } & { TourGuide: ITourGuide };

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

let myfaction: string;
let L = _NS.TourGuideLocale;

interface ITourGuide extends IDongle {
  trackEvents: string[];

  db: any;

  statusFrameHandler: IStatusFrameHandler['statusFrame']['StatusFrameHandler'];
  objectivesFrame: IObjectivesFrame['objectivesFrame']['ObjectivesFrame'];
  actions: any[];
  quests: any[];
  turnedIn: { [questName: string]: boolean };

  petSkills: any[];
  current: number;
  currentZone: string;
  guides: any;
  guideChanged: boolean;
  guidelist: any[];
  nextzones: any;
  Locale: any;
  updateDelay: number;
  cachedturnins: any;
  tags: string[];
  icons: any;

  completeQuest(this: ITourGuide, name: string): void;
  filterGuides(this: ITourGuide): void;
  /** @tupleReturn */
  findBagSlot(this: ITourGuide, item: string): [number, number];
  getItemCount(this: ITourGuide, item: string): number;

  /** @tupleReturn */
  getObjectiveInfo(this: ITourGuide, i?: number): [string, string, string];
  /** @tupleReturn */
  getObjectiveStatus(this: ITourGuide, i?: number): [boolean, number, boolean];
  /** @tupleReturn */
  getObjectiveTag(this: ITourGuide, tag: string, i?: number): string[];

  /** @tupleReturn */
  getQuestDetails(this: ITourGuide, name: string): [number, boolean];
  getQuestLogIndexByName(this: ITourGuide, name?: string): number;

  loadGuide(this: ITourGuide, name: string, complete?: boolean): void;
  loadNextGuide(this: ITourGuide): boolean;
  registerGuide(this: ITourGuide, name: string, nextzone: string, faction: string, sequencefunc: any): void;

  setTurnedIn(this: ITourGuide, i?: number, value?: boolean, noUpdate?: boolean): void;
  updateProgression(this: ITourGuide): void;

  updateQuestWatch(): void;
  updateQuestLog(): void;

  /** @tupleReturn */
  colorGradient(perc: number): [number, number, number];

  // Events
  CHAT_MSG_LOOT(this: ITourGuide, event: string, msg: string): void;
  UI_INFO_MESSAGE(this: ITourGuide, event: string, msg: string): void;
  QUEST_LOG_UPDATE(this: ITourGuide): void;
  CRAFT_SHOW(this: ITourGuide, event: string): void;
  ZONE_CHANGED(this: ITourGuide, event: string): void;
  ZONE_CHANGED_INDOORS(this: ITourGuide, event: string): void;
  MINIMAP_ZONE_CHANGED(this: ITourGuide, event: string): void;
  ZONE_CHANGED_NEW_AREA(this: ITourGuide, event: string): void;
  CHAT_MSG_SYSTEM(this: ITourGuide, event: string): void;
}

const DongleStub: IDongleStub = _G.DongleStub;
if (!DongleStub) {
  // @ts-ignore
  return;
}

const [TourGuide] = (DongleStub('Dongle-1.0') as IDongle)._new<ITourGuide>('TourGuide');

TourGuide.trackEvents = [
  'UI_INFO_MESSAGE',
  'CHAT_MSG_LOOT',
  'CHAT_MSG_SYSTEM',
  'QUEST_LOG_UPDATE',
  'ZONE_CHANGED',
  'ZONE_CHANGED_INDOORS',
  'ZONE_CHANGED_NEW_AREA',
  /* 'CRAFT_SHOW' */
];

TourGuide.actions = [];
TourGuide.quests = [];
TourGuide.turnedIn = {};

TourGuide.petSkills = [];
TourGuide.guides = {};
TourGuide.guideChanged = false;
TourGuide.guidelist = [];
TourGuide.nextzones = {};
TourGuide.Locale = L;
TourGuide.icons = setmetatable(
  {
    ACCEPT: 'Interface\\GossipFrame\\AvailableQuestIcon',
    COMPLETE: 'Interface\\Icons\\Ability_DualWield',
    TURNIN: 'Interface\\GossipFrame\\ActiveQuestIcon',
    KILL: 'Interface\\Icons\\Ability_Creature_Cursed_02',
    RUN: 'Interface\\Icons\\Ability_Tracking',
    MAP: 'Interface\\Icons\\Ability_Spy',
    FLY: 'Interface\\Icons\\Ability_Hunter_EagleEye',
    SETHEARTH: 'Interface\\AddOns\\TourGuide\\src\\resting.tga',
    HEARTH: 'Interface\\Icons\\INV_Misc_Rune_01',
    NOTE: 'Interface\\Icons\\INV_Misc_Note_01',
    USE: 'Interface\\Icons\\INV_Misc_Bag_08',
    BUY: 'Interface\\Icons\\INV_Misc_Coin_01',
    BOAT: 'Interface\\Icons\\Spell_Frost_SummonWaterElemental',
    GETFLIGHTPOINT: 'Interface\\Icons\\Ability_Hunter_EagleEye',
    PET: 'Interface\\Icons\\Ability_Hunter_BeastCall02',
  }, {
    __index: function() {
      return 'Interface\\Icons\\INV_Misc_QuestionMark';
    }
  }
);

TourGuide.initialize = function(this: ITourGuide) {
  [myfaction] = UnitFactionGroup('player')

  const [name] = UnitName('player');
  let guide: string;
  if (name === 'Ankhesa') {
    guide = 'Exalted with Factions (Part 1)';
  } else {
    guide = 'Durotar (1-12)';
  }

  this.db = this.initializeDB(
    'TourGuideAlphaDB', {
      char: {
        hearth: 'Unknown',
        turnedIn: [],
        turnins: {},
        cachedturnins: {},
        trackquests: true,
        completion: {},
        currentguide: guide,
        petskills: {}
      },
    })

  if (this.db.char.turnedIn) {
    this.db.char.turnedIn = null;
  }

  this.cachedturnins = this.db.char.cachedturnins;
  this.current = 1;

  this.filterGuides();

  this.db.char.currentguide = this.db.char.currentguide || guide;
  print(this.db.char.currentguide);
  this.loadGuide(this.db.char.currentguide);

  this.statusFrameHandler = new _NS.statusFrame.StatusFrameHandler();
  this.objectivesFrame = new _NS.objectivesFrame.ObjectivesFrame(this.statusFrameHandler);

  if (this.db.profile.statusframepoint) {
    this.statusFrameHandler.position(this.db.profile.statusframepoint);
  }

  // this.positionItemFrame();
}

{
  const levelSort = function(this: void, left: string, right: string) {
    const levelPattern = '[(]([^)-]*)';

    return ((tonumber(string.match(left, levelPattern)) || 0) <
      (tonumber(string.match(right, levelPattern)) || 0));
  };

  let [guides, nextzones] = [{}, {}];

  TourGuide.filterGuides = function(this: ITourGuide) {
    for (const [name, sequencefunc] of pairs(guides[myfaction] || {})) {
      this.guides[name] = sequencefunc
      table.insert(this.guidelist, name)
    }

    for (const [name, nextzone] of pairs(nextzones[myfaction] || {})) {
      this.nextzones[name] = nextzone
    }

    table.sort(this.guidelist, levelSort);

    guides = null;
    nextzones = null;
  }

  TourGuide.registerGuide = function(name: string, nextzone: string, faction: string, sequencefunc: any) {
    if (!faction) {
      this.guides[name] = sequencefunc;
      table.insert(this.guidelist, name);
    } else {
      if (!guides[faction] && !nextzones[faction]) {
        guides[faction] = {};
        nextzones[faction] = {};
      }

      guides[faction][name] = sequencefunc;
      nextzones[faction][name] = nextzone;
    }
  }
}

TourGuide.enable = function(this: ITourGuide) {
  /* const [_, title] = GetAddOnInfo('TourGuide');
   * const author = GetAddOnMetadata('TourGuide', 'Author');
   * const version = GetAddOnMetadata('TourGuide', 'Version'); */
  const [, , , tocVersion] = GetBuildInfo();

  if (tocVersion === 11302) {
    this.updateQuestLog = () => QuestLog_Update;
    this.updateQuestWatch = () => QuestWatch_Update;
  } else {
    this.updateQuestLog = () => QuestMapFrame_DoFullUpdate;
    this.updateQuestWatch = () => ObjectiveTracker_Update;
  }

  /* const oh = optionHouse.registerAddOn('Tour Guide', title, author, version);
   * oh.registerCategory('Guides', this, 'CreateGuidesPanel');
   * oh.registerCategory('Config', this, 'CreateConfigPanel'); */

  for (const [, event] of ipairs(this.trackEvents)) {
    this.registerEvent(event);
  }

  this.registerEvent('QUEST_COMPLETE', 'updateProgression');
  this.registerEvent('QUEST_DETAIL', 'updateProgression');
  this.trackEvents = null;
  this.QUEST_LOG_UPDATE();

  const action = this.actions[this.current - 1];
  const objective = this.quests[this.current - 1];

  this.statusFrameHandler.update({
    step: this.current,
    text: objective,
    icon: this.icons[action],
  }, false);
};

TourGuide.getQuestLogIndexByName = function(name?: string) {
  name = name || this.quests[this.current];
  [name] = string.gsub(name, L.PART_GSUB, '');
  for (let i = 1; i <= GetNumQuestLogEntries(); i++) {
    const [title,,,, isHeader] = GetQuestLogTitle(i);
    if (!isHeader && title === name) {
      return i;
    }
  }
}

TourGuide.loadNextGuide = function() {
  this.loadGuide(this.nextzones[this.db.char.currentguide] || 'No Guide', true);
  // this.updateGuidesPanel();
  return true;
};

/** @tupleReturn */
TourGuide.getQuestDetails = function(name: string) {
  if (!name) {
    return;
  }

  const i = this.getQuestLogIndexByName(name);
  const [,,,,, isComplete = false] = i ? GetQuestLogTitle(i) : [];

  return [i, isComplete];
}

/** @tupleReturn */
TourGuide.findBagSlot = function(itemId: number | string) {
  for (let bag = 0; bag <= 4; bag++) {
    for (let slot = 1; slot <= GetContainerNumSlots(bag); slot++) {
      const item = GetContainerItemLink(bag, slot);
      if (item && string.find(item, `item:${itemId}`)) {
        return [bag, slot];
      }
    }
  }
};

TourGuide.getObjectiveInfo = function(i?: number) {
  i = i || this.current;

  if (!this.actions[i - 1]) {
    return;
  }

  const [displayName] = string.gsub(this.quests[i - 1], '@.*@', '');
  return [this.actions[i - 1], displayName, this.quests[i - 1]] // Action, display name, full name
}

TourGuide.getObjectiveStatus = function(i?: number) {
  i = i || this.current;

  if (!this.actions[i - 1]) {
    return;
  }

  const [questIndex, isComplete] = this.getQuestDetails(this.quests[i - 1]);

  return [this.turnedIn[this.quests[i - 1]], questIndex, isComplete];
}

TourGuide.setTurnedIn = function(i?: number, value?: boolean, noUpdate?: boolean) {
  i = i || this.current;

  value = value || null;

  this.turnedIn[this.quests[i - 1]] = value;

  this.statusFrameHandler.flush();

  this.debugF(1, 'Set turned in %q = %s', this.quests[i - 1], tostring(value))
  if (!noUpdate) {
    this.updateProgression();
  } else {
    this.updateDelay = i;
  }
}

TourGuide.completeQuest = function(name: string) {
  if (!this.current) {
    this.debugF(1, 'Cannot complete %q, no guide loaded', name);
    return;
  }

  let i = this.current;
  let action: string;
  let quest: any;

  do {
    [action, quest] = this.getObjectiveInfo(i);
    if (action === 'TURNIN' && !this.getObjectiveStatus(i) && name === string.gsub(quest, L.PART_GSUB, '')[0]) {
      this.debugF(1, 'Saving quest turnin %q', quest);
      return this.setTurnedIn(i, true);
    }
    i = i + 1;
  } while (action);

  this.debugF(1, 'Quest %q ! found!', name)
}

/** @tupleReturn */
TourGuide.getObjectiveTag = function(tag: string, i?: number) {
  this._debug(1, 'GetObjectiveTag', tag, i)
  i = i || this.current;
  const tags = this.tags[i - 1]
  if (!tags) {
    return;
  }

  if (tag === 'O') {
    const [match] = string.find(tags, '|O|');
    return [`${!!match}`];
  } else if (tag === 'T') {
    const [match] = string.find(tags, '|T|');
    return [`${!!match}`];
  } else if (tag === 'QID') {
    return [`${(string.match(tags, '|QID|(%d+)|'))}`];
  } else if (tag === 'L') {
    const [,, lootItem, lootQuantity] = string.find(tags, '|L|(%d+)%s?(%d+)|')
    return [lootItem, `${lootQuantity || 1}`];
  }

  const [,, values] = string.find(tags, `|${tag}|([^|]*)|?`);

  return [values];
}

TourGuide.loadGuide = function(name: string, complete?: boolean) {
  if (!name) {
    return;
  }

  if (complete) {
    this.db.char.completion[this.db.char.currentguide] = 1;
  } else if (this.actions) {
    this.db.char.completion[this.db.char.currentguide] = (this.current - 1) / this.actions.length;
  }

  this.db.char.currentguide = this.guides[name] && name || this.guidelist[1];
  this.debugF(1, 'Loading guide. %s', name);
  this.guideChanged = true;
  const [,,zoneName] = string.find(name, '^(.*) %(.*%)$');
  this.currentZone = zoneName;

  {
    const [actions, quests, tags] = _NS.parser.parseQuests(...string.split('\n', this.guides[this.db.char.currentguide]()));

    this.actions = actions;
    this.quests = quests;
    this.tags = tags;
  }

  if (!this.db.char.turnins[name]) {
    this.db.char.turnins[name] = {};
  }

  this.turnedIn = this.db.char.turnins[name]
}

TourGuide.QUEST_LOG_UPDATE = function() {
  let isPreviousComplete: boolean;
  if (this.current && this.current > 1) {
    [, , isPreviousComplete] = this.getObjectiveStatus(this.current - 1);
  }

  let [action, , logi] = this.getObjectiveInfo(this.current);
  let [complete] = this.getObjectiveStatus(this.current);

  this._debug(10, 'QUEST_LOG_UPDATE', action, logi, complete)

  if (!isPreviousComplete || (this.updateDelay && !logi) || action === 'ACCEPT' || action === 'COMPLETE' && complete) {
    this.updateProgression();
  }

  if (action === 'KILL' || action === 'NOTE') {
    const [quest] = this.getObjectiveTag('Q');
    const [questtext] = this.getObjectiveTag('QO');
    if (!quest || !questtext) {
      return
    }

    const qi = this.getQuestLogIndexByName(quest)
    for (let i = 1; i <= GetNumQuestLeaderBoards(qi); i++) {
      const [objectiveText] = GetQuestLogLeaderBoard(i, qi);
      if (objectiveText === questtext) {
        this.setTurnedIn();
      }
    }
  }
}

TourGuide.updateProgression = function() {
  this._debug(1, 'updateProgression', this.current)

  if (this.updateDelay) {
    const [, logi] = this.getObjectiveStatus(this.updateDelay)
    this._debug(1, 'Delayed update', this.updateDelay, logi)
    if (logi) {
      return;
    }
  }

  let nextstep: number;
  this.updateDelay = null

  for (const [i] of ipairs(this.actions)) {
    const [turnedIn] = this.getObjectiveStatus(i)
    /* print(i, turnedIn, nextstep) */
    if (!turnedIn && !nextstep) {
      let [action, name, quest] = this.getObjectiveInfo(i)
      let [turnedIn, logi, complete] = this.getObjectiveStatus(i)

      const [note] = this.getObjectiveTag('N', i);
      const [useItem] = this.getObjectiveTag('U', i);
      let optional: boolean;
      {
        const [o] = this.getObjectiveTag('O', i);
        optional = o === 'true';
      }
      const [lootItem, lootQuantity] = this.getObjectiveTag('L', i);
      const level = tonumber((this.getObjectiveTag('LV', i)))
      const needlevel = level && level > UnitLevel('player')
      this._debug(1, 'updateProgression', i, action, name, note, logi, complete, turnedIn, quest, useItem, optional, lootItem, lootQuantity, lootItem && this.getItemCount(lootItem as string) || 0, level, needlevel)
      const hasUseItem = useItem && this.findBagSlot(useItem)
      const hasLootItem = lootItem && this.getItemCount(lootItem) >= tonumber(lootQuantity)

      // Test for completed objectives && mark them {ne
      if (action === 'SETHEARTH' && this.db.char.hearth === name) {
        return this.setTurnedIn(i, true);
      }

      const zonetext = GetZoneText();
      const subzonetext = (GetSubZoneText().match('^%s*(.-)%s*$') as unknown) as string;
      const [subzonetag] = this.getObjectiveTag('SZ');

      if ((action === 'RUN' || action === 'FLY' || action === 'HEARTH' || action === 'BOAT') && (subzonetext === name || subzonetext === subzonetag || zonetext === name || zonetext === subzonetag)) {
        return this.setTurnedIn(i, true);
      }

      if (action === 'KILL' || action === 'NOTE') {
        if (!optional && hasLootItem) {
          return this.setTurnedIn(i, true);
        }

        const [quest] = this.getObjectiveTag('Q', i);
        const [questtext] = this.getObjectiveTag('QO', i);
        if (quest && questtext) {
          const qi = this.getQuestLogIndexByName(quest)
          for (let lbi = 1; lbi <= GetNumQuestLeaderBoards(qi); lbi++) {
            const [questDescription] = GetQuestLogLeaderBoard(lbi, qi);
            this._debug(1, `${quest}`, questtext, qi, questDescription)
            if (questDescription === questtext) {
              return this.setTurnedIn(i, true);
            }
          }
        }
      }

      if (action === 'PET' && this.db.char.petskills[name]) {
        return this.setTurnedIn(i, true);
      }

      let incomplete: boolean;
      if (action === 'ACCEPT') {
        incomplete = (!optional || hasUseItem || hasLootItem) && !logi;
      } else if (action === 'TURNIN') {
        incomplete = !optional || !!logi;
        /* print('TURNIN WUT?????', incomplete, optional, logi); */
      } else if (action === 'COMPLETE') {
        incomplete = !complete && (!optional || !!logi);
      } else if (action === 'NOTE' || action === 'KILL') {
        incomplete = !optional || lootItem && hasLootItem || needlevel;
      } else {
        incomplete = !logi;
      }

      if (incomplete) {
        nextstep = i;
      }

      if (action === 'COMPLETE' && logi && this.db.char.trackquests) {
        let j = i;
        do {
          [action] = this.getObjectiveInfo(j);
          [turnedIn, logi, complete] = this.getObjectiveStatus(j)
          if (action === 'COMPLETE' && logi && ! complete) {
            AddQuestWatch(logi); // Watch if we're in a 'COMPLETE' block
          } else if (action === 'COMPLETE' && logi) {
            RemoveQuestWatch(logi);
          } // || unwatch if done
          j = j + 1
        } while (action == 'COMPLETE');
      }
    }
  }

  this.updateQuestWatch();
  this.updateQuestLog();

  if (!nextstep && this.loadNextGuide()) {
    return this.updateProgression();
  }

  if (!nextstep) {
    return;
  }

  this.current = nextstep;

  let i = this.current;
  do {
    const [action, objective] = this.getObjectiveInfo(i);
    const [note] = this.getObjectiveTag('N', i);

    this.statusFrameHandler.update({
      step: i,
      text: objective,
      icon: this.icons[action],
      note,
    }, false);

    i++;
  } while (this.getObjectiveTag('G', i)[0] && i < 10);

    /* oldHeight = f.GetHeight()
     * oldWidth = f.GetWidth()

     * newWidth = FIXEDWIDTH

     * do {
     *   const row = GetRow(f, prevRow)
     *   const shadowRow = GetRow(f.shadow, prevShadowRow)

     *   row.step = nextstep
     *   row.check.row = row

     *   const action, quest, fullquest = this.getObjectiveInfo(row.step)
     *   const turnedIn, logi, complete = this.getObjectiveStatus(row.step)
     *   const [note, useitem, optional] = [this.getObjectiveTag('N', row.step), this.getObjectiveTag('U', row.step), this.getObjectiveTag('O', row.step)]
     *   const zonename = this.getObjectiveTag('Z', row.step) || this.zonename
     *   this.debugF(1, 'Progressing to objective \'%s %s\'', action, quest)

     *   // Mapping
     *   if (TomTom && (lastmapped !== quest || lastmappedaction !== action)) {
     *     lastmappedaction, lastmapped = action, quest
     *     this.ParseAndMapCoords(note, quest, zonename) //, zone)
     *   }

     *   const newtext = `${(quest || '???')}${(note && ' [?]' || '')}`;

     *   // ! sure why shadowRow has the previous value && the main row {es not
     *   populateRow(shadowRow, shadowRow.check.GetChecked(), shadowRow.icon.GetTexture(), shadowRow.text.GetText())
     *   populateRow(row, (action === 'COMPLETE' || action === 'KILL') && complete || false, this.icons[action], newtext)

     *   newWidth = math.max(FIXEDWIDTH + row.text.GetWidth(), newWidth)

     *   row.Show()
     *   shadowRow.Show()

     *   prevRow = row
     *   prevShadowRow = shadowRow

     *   nextstep = nextstep + 1
     * } while (this.getObjectiveTag('G', nextstep)); */

    /* newHeight = math.max(1, table.getn(f.rows)) * BASE_HEIGHT + GAP

     * if (animate) {
     *   elapsed = 0
     *   f.shadow.SetWidth(f.GetWidth())
     *   ([,, shadow_anchor] = GetQuadrant(f));
     *   f.shadow.ClearAllPoints()
     *   f.shadow.SetPoint(shadow_anchor, f, shadow_anchor, 0, 0)
     *   f.shadow.SetAlpha(1)

     *   shadow.Show()
     * }

     * if (!f.shadow.IsVisible()) {
     *   f.SetHeight(newHeight)
     *   f.SetWidth(newWidth)
     * }

     * const usetex = useitem && select(9, GetItemInfo(tonumber(useitem)))
     * this.SetUseItem(usetex, useitem)

     * this.UpdateOHPanel() */
}


TourGuide.ZONE_CHANGED = function() {
  const zonetext = GetZoneText();
  const subzonetext = (GetSubZoneText().match('^%s*(.-)%s*$') as unknown) as string;
  const [subzonetag] = this.getObjectiveTag('SZ');
  const [action, quest] = this.getObjectiveInfo();
  if ((action === 'RUN' || action === 'FLY' || action === 'HEARTH' || action === 'BOAT') &&
      (subzonetext === quest || subzonetext === subzonetag || zonetext === quest || zonetext === subzonetag)) {
    this.debugF(1, 'Detected zone change %q - %q', action, quest);
    this.setTurnedIn();
  }
}

TourGuide.ZONE_CHANGED_INDOORS = TourGuide.ZONE_CHANGED;
TourGuide.MINIMAP_ZONE_CHANGED = TourGuide.ZONE_CHANGED;
TourGuide.ZONE_CHANGED_NEW_AREA = TourGuide.ZONE_CHANGED;


TourGuide.CHAT_MSG_SYSTEM = function(msg: string) {
  const [action, quest] = this.getObjectiveInfo();

  const [, , loc] = string.find(msg, L['(.*) is now your home.']);
  if (loc) {
    this.debugF(1, 'Detected setting hearth to %q', loc);
    this.db.char.hearth = loc;
    return action === 'SETHEARTH' && loc === quest && this.setTurnedIn()
  }

  if (action === 'ACCEPT') {
    const [, , text] = string.find(msg, L['Quest accepted. (.*)']);
    const [displayName] = string.gsub(quest, L.PART_GSUB, '');
    if (text && displayName === text) {
      this.debugF(1, 'Detected quest accept %q', quest)
      return this.updateProgression();
    }
  }

  if (action === 'PET') {
    const [, , text] = string.find(msg, L['You have learned a new spell. (.*).']);
    const nextEntry = this.petSkills.length + 1;
    this.petSkills[nextEntry] = text;
    if (text && quest === text) {
      this.debugF(1, 'Detected pet skill train %q', quest);
      return this.setTurnedIn();
    }
  }
}


TourGuide.getItemCount = function(item: string) {
  const pos = this.findBagSlot(item);

  const [, count] = select('#', ...pos) > 0 && GetContainerItemInfo(...pos);

  return count || 0;
}

TourGuide.CHAT_MSG_LOOT = function(event: string, msg: string) {
  const [action, quest] = this.getObjectiveInfo();
  const [lootItem, lootQuantity] = this.getObjectiveTag('L');
  const [, , itemid, name] = string.find(msg, L['^You .*Hitem.(%d+).*(%[.+%])'])
  this._debug(10, event, action, quest, lootItem, lootQuantity, itemid, name)

  if (action === 'BUY' && name && name === quest || (action === 'BUY' || action === 'KILL' || action === 'NOTE') && lootItem && itemid === lootItem && (this.getItemCount(lootItem) + 1) >= tonumber(lootQuantity)) {
    return this.setTurnedIn()
  }
}

TourGuide.UI_INFO_MESSAGE = function(msg) {
  if (msg === _G.ERR_NEWTAXIPATH && this.getObjectiveInfo()[0] === 'GETFLIGHTPOINT') {
    this._debug(1, 'Discovered flight point');
    this.setTurnedIn();
  }
}

TourGuide.CRAFT_SHOW = function() {
  if ('Beast Training' !== GetCraftSkillLine(1)) {
    return;
  }

  for (let i = 1; i <= GetNumCrafts(); i++) {
    const [name, rank] = GetCraftInfo(i);
    this.db.char.petskills[`${name}${(rank === '' ? '' : ` (${rank})`)}`] = true;
  }
  if (this.getObjectiveInfo()[0] === 'PET') {
    this.updateProgression();
  }
}

TourGuide.colorGradient = function(perc) {
  if (perc >= 1) {
    return [0, 1, 0];
  } else if (perc <= 0) {
    return [1, 0, 0];
  }

  const [segment, relperc] = math.modf(perc * 2);
  const [r1, g1, b1, r2, g2, b2] = select(
    (segment * 3) + 1,
    1, 0, 0,
    1, 0.82, 0,
    0, 1, 0
  );

  return [r1 + (r2 - r1) * relperc, g1 + (g2 - g1) * relperc, b1 + (b2 - b1) * relperc];
}

_NS.TourGuide = TourGuide;

if (tekDebug) {
  // enableDebug(10, tekDebug.GetFrame('TourGuide'));
}

//-------------------------------
//      Utility Functions      //
//-------------------------------

/* DumpLoc = function() {
 *   if (IsShiftKeyDown()) {
 *     this.Print(this.db.global.savedpoints || 'No saved points')
 *   } else if (IsControlKeyDown()) {
 *     this.db.global.savedpoints = null
 *     this.Print('Saved points cleared')
 *   } else {
 *     const [,, x, y] = DongleStub('Astrolabe-0.4').GetCurrentPlayerPosition();
 *     const s = string.format('%s, %s, (%.2f, %.2f) // %s %s', GetZoneText(), GetSubZoneText(), x * 100, y * 100, this.getObjectiveInfo());
 *     this.db.global.savedpoints = `${this.db.global.savedpoints || ''}${s}\n`;
 *     this.Print(s);
 *   }
 * }
 */

{
  const orig = GetQuestReward;
  // @ts-ignore
  GetQuestReward = function(choice: number) {
    const quest = GetTitleText();
    TourGuide._debug(10, 'GetQuestReward', quest);
    TourGuide.completeQuest(quest);

    return orig(choice);
  }
}

{
  const orig = AddQuestWatch;
  // @ts-ignore
  AddQuestWatch = function(quest: number) {
    if (IsQuestWatched(quest)) {
      return
    }

    orig(quest);
  }
}

{
  const orig = RemoveQuestWatch;
  // @ts-ignore
  RemoveQuestWatch = function(quest: number) {
    if (!IsQuestWatched(quest)) {
      return
    }

    orig(quest);
  }
}

/* TourGuide.enableDebug(10) */
