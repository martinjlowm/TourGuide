import { INamespace } from './tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

const BASE_HEIGHT = 24;
const [ICON_SIZE, CHECK_SIZE, GAP] = [16, 24, 8];
const FIXED_WIDTH = ICON_SIZE + CHECK_SIZE + GAP * 4 - 4;
const PADDING = GAP - 4;

const ww = _NS.WidgetWarlock;

interface IPosition {
  point: string;
  x: number;
  y: number;
}

interface IProperties {
  getObjectiveInfo: () => any,
  getObjectiveTag: () => any,
}

export interface IStatusFrameHandler {
  statusFrame: {
    StatusFrameHandler: StatusFrameHandler;
  };
}

interface StatusFrameHandler {
  position(pos: IPosition): void;
  update(objective: IObjective, isComplete: boolean): void;
  allocateObjectiveRow(): ObjectiveRow;
  buildFrame(width: number, height: number): StatusFrame;
  new(): any;
}

class StatusFrameHandler {

  private framePool: StatusFrame[] = [];
  private objectivePool: ObjectiveRow[] = [];
  private activeFrame: StatusFrame;

  constructor() {
    this.activeFrame = this.buildFrame(FIXED_WIDTH, BASE_HEIGHT);
  }

  position(pos: IPosition) {
    this.activeFrame.position(pos);
  }

  update(objective: IObjective, isComplete: boolean) {
    this.activeFrame.update(objective, isComplete);
  }

  flush() {
    this.activeFrame.flush((self: StatusFrame, objectives: ObjectiveRow[]) => {
      objectives.forEach(obj => {
        table.insert(this.objectivePool, obj);
        obj.row.Hide();
      });
      table.insert(this.framePool, self);
    });
    const width = this.activeFrame.frame.GetWidth();
    const height = this.activeFrame.frame.GetHeight();
    this.activeFrame = this.buildFrame(width, height);
  }

  allocateObjectiveRow() {
    const objective = table.remove(this.objectivePool) || new ObjectiveRow();

    objective.row.EnableMouse(true);
    objective.row.check.EnableMouse(true);
    objective.row.check.SetChecked(false);
    objective.row.SetParent(this.activeFrame.frame);
    objective.row.Show();

    return objective;
  }

  buildFrame(width: number, height: number) {
    const self = this;
    const statusFrame = table.remove(this.framePool) || new StatusFrame(() => self.allocateObjectiveRow())

    statusFrame.frame.SetWidth(width);
    statusFrame.frame.SetHeight(height);
    statusFrame.frame.SetAlpha(1);
    statusFrame.frame.EnableMouse(true);

    statusFrame.frame.ClearAllPoints();
    statusFrame.frame.SetPoint('TOPLEFT', DEFAULT_CHAT_FRAME, 'BOTTOMLEFT', -8, -32);

    statusFrame.frame.Show();

    return statusFrame;
  }
}

_NS.statusFrame = {
  StatusFrameHandler: StatusFrameHandler as any,
};

const bg = {
  bgFile: 'Interface/Tooltips/UI-Tooltip-Background',
  edgeFile: 'Interface/Tooltips/UI-Tooltip-Border',
  edgeSize: 12,
  insets: {
    left: 3, right: 3, top: 3, bottom: 3
  },
  tile: true, tileSize: 16,
};

type IStatusFrame = WoWAPI.Frame & {
  x: number;
  y: number;
  newWidth: number;
  newHeight: number;
  oldWidth: number;
  oldHeight: number;
}

type IAnimator = WoWAPI.Frame & {
  elapsed: number;
  inst: StatusFrame;
}

const animate = function(this: IAnimator, delta: number) {
  this.elapsed = (this.elapsed || 0) + delta;

  if (this.elapsed > 1) {
    this.inst.frame.oldWidth = this.inst.frame.newWidth;
    this.inst.frame.oldHeight = this.inst.frame.newHeight;

    this.inst.frame.SetWidth(this.inst.frame.oldWidth);
    this.inst.frame.SetHeight(this.inst.frame.oldHeight);

    if (this.inst.flushing) {
      const reuseableRows: ObjectiveRow[] = [];

      let row: ObjectiveRow;
      while (row = table.remove(this.inst.rows)) {
        table.insert(reuseableRows, row);
      }

      this.inst.flushing = false;
      this.inst.cleanup(this.inst, reuseableRows);
      this.inst.frame.Hide();
    }

    this.elapsed = 0;
    this.Hide()
  } else {
    if (this.inst.flushing) {
      const [point, relativeTo, relativePoint] = this.inst.frame.GetPoint();
      this.inst.frame.SetPoint(point, relativeTo, relativePoint, this.inst.frame.x, this.inst.frame.y + this.elapsed * 40);
      this.inst.frame.SetAlpha(1 - this.elapsed);
    }

    this.inst.frame.SetWidth(this.inst.frame.oldWidth + (this.inst.frame.newWidth - this.inst.frame.oldWidth) * this.elapsed);
    this.inst.frame.SetHeight(this.inst.frame.oldHeight + (this.inst.frame.newHeight - this.inst.frame.oldHeight) * this.elapsed);
  }
}

class StatusFrame {
  animator: WoWAPI.Frame
  frame: WoWAPI.Frame;
  allocateRow: () => ObjectiveRow;
  rows: ObjectiveRow[];
  flushing: boolean;
  cleanup: (self: StatusFrame, objectives: ObjectiveRow[]) => void;

  constructor(allocateRow: () => ObjectiveRow) {
    this.allocateRow = allocateRow;
    this.rows = [];

    const f = CreateFrame('Button', null, UIParent);

    f.SetHeight(BASE_HEIGHT);
    f.SetFrameStrata('LOW');
    f.SetBackdrop(bg);
    f.SetBackdropColor(0.09, 0.09, 0.19, 0.5);
    f.SetBackdropBorderColor(0.5, 0.5, 0.5, 0.5);

    this.frame = f;

    this.animator = CreateFrame('Frame');
    this.animator.SetScript('OnUpdate', animate);
    this.animator.Hide()
    this.animator.inst = this;
  }

  position(pos: IPosition) {
    this.frame.ClearAllPoints()
    this.frame.SetPoint(pos.point, pos.x, pos.y);
    this.frame.x = pos.x;
    this.frame.y = pos.y;
  }

  update(objective: IObjective, isComplete: boolean) {
    if (this.rows.some(obj => obj.step === objective.step)) {
      return;
    }

    const obj = this.allocateRow();

    obj.row.SetParent(this.frame);
    obj.update(objective, isComplete);

    const latestRow = this.rows[this.rows.length - 1];
    const parent = latestRow ? latestRow.row : this.frame;

    obj.row.ClearAllPoints();
    obj.row.SetPoint('BOTTOMLEFT', parent, latestRow ? 'TOPLEFT' : 'BOTTOMLEFT', 0, latestRow ? 0 : PADDING);
    obj.row.SetPoint('BOTTOMRIGHT', parent, latestRow ? 'TOPRIGHT' : 'BOTTOMRIGHT', 0, latestRow ? 0 : PADDING);

    obj.row.Show();

    table.insert(this.rows, obj);

    this.frame.oldHeight = this.frame.GetHeight();
    this.frame.oldWidth = this.frame.GetWidth();

    this.frame.newHeight = this.rows.length * BASE_HEIGHT + 2 * PADDING;
    this.frame.newWidth = math.max(FIXED_WIDTH, ...this.rows.map((objective) => {
      return objective.row.text.GetStringWidth() + FIXED_WIDTH;
    }));
    const [,,, x, y] = this.frame.GetPoint();
    this.frame.x = x;
    this.frame.y = y;

    this.frame.Show();
    this.animator.elapsed = 0;
    this.animator.Show();
  }

  flush(callback: (self: StatusFrame, objectives: ObjectiveRow[]) => void) {
    this.cleanup = callback;
    this.flushing = true;

    this.frame.EnableMouse(false);
    this.rows.forEach(obj => {
      obj.row.EnableMouse(false);
      obj.row.check.EnableMouse(false);
    });

    this.animator.elapsed = 0;
    this.animator.Show();
  }

}

type IObjectiveRowFrame = WoWAPI.Button & Partial<{
  check: WoWAPI.Frame;
  icon: WoWAPI.Texture;
  note: string;
  text: WoWAPI.FontString;
  step: number;
}>;

const tooltipOnLeave = function() {
  GameTooltip.Hide();
}

const tooltipOnEnter = function(this: IObjectiveRowFrame) {
  if (!this.note) {
    return;
  }

  GameTooltip.SetOwner(this, 'ANCHOR_NONE');
  const [quad, vhalf, hhalf] = GetQuadrant(this)
  const anchpoint = `${(vhalf === 'TOP' ? 'BOTTOM' : 'TOP')}${hhalf}`;
  _NS.TourGuide._debug(1, 'Setting tooltip anchor', anchpoint, quad, hhalf, vhalf);

  GameTooltip.SetPoint(quad, this, anchpoint);
  GameTooltip.SetText(this.note, null, null, null, null, true);
}

const onClick = function(this: WoWAPI.Button & { text: WoWAPI.Region }, button: string, down: boolean) {
  if (this.text.GetText() !== 'No Guide') {
    if (button === 'RightButton') {
      if (_NS.TourGuide.objectivesFrame.frame.IsVisible()) {
        HideUIPanel(_NS.TourGuide.objectivesFrame.frame);
      } else {
        const [quad, vhalf, hhalf] = GetQuadrant(this);
        const anchpoint = `${(vhalf === 'TOP' && 'BOTTOM' || 'TOP')}${hhalf}`;
        _NS.TourGuide.objectivesFrame.frame.ClearAllPoints();
        _NS.TourGuide.objectivesFrame.frame.SetPoint(quad, this.GetParent(), anchpoint);
        ShowUIPanel(_NS.TourGuide.objectivesFrame.frame);
      }
    } else {
      const i = _NS.TourGuide.getQuestLogIndexByName();
      if (i) {
        SelectQuestLogEntry(i);
      }
      ShowUIPanel(QuestLogFrame);
    }
  }
}

const checkOnClick = function(this: WoWAPI.Region) {
  _NS.TourGuide.setTurnedIn(this.objective.step, this.GetChecked());
}

interface IObjective {
  icon: string;
  note?: string;
  step: number;
  text: string;
}

class ObjectiveRow {
  row: IObjectiveRowFrame;
  note: string;
  step: number;

  constructor() {
    const row: IObjectiveRowFrame = CreateFrame('Button', null, UIParent);
    row.SetScript('OnClick', onClick);
    row.RegisterForClicks('LeftButtonUp', 'RightButtonUp');
    row.SetScript('OnLeave', tooltipOnLeave);
    row.SetScript('OnEnter', tooltipOnEnter);

    row.SetHeight(BASE_HEIGHT);

    const check = ww.summonCheckBox(CHECK_SIZE, row, 'LEFT', GAP, 0);
    check.SetScript('OnClick', checkOnClick);

    const icon = ww.summonTexture(row, 'ARTWORK', ICON_SIZE, ICON_SIZE, null, 'LEFT', check, 'RIGHT', GAP - 4, 0);
    icon.SetTexCoord(4 / 48, 44 / 48, 4 / 48, 44 / 48);
    icon.SetTexture(1, 0, 0);

    const text = ww.summonFontString(row, 'OVERLAY', 'GameFontNormalSmall', null, 'RIGHT', -GAP - 4, 0);
    text.SetPoint('LEFT', icon, 'RIGHT', GAP - 4, 0);
    text.SetPoint('RIGHT', row, 'RIGHT', GAP - 4, 0);
    text.SetJustifyH('LEFT');
    text.SetHeight(10);

    row.check = check;
    row.icon = icon;
    row.text = text;

    check.objective = this;

    this.row = row;
  }

  update(objective: IObjective, isComplete: boolean) {
    this.row.icon.SetTexture(objective.icon);
    this.row.text.SetText(objective.text)
    this.row.check.SetChecked(isComplete);
    this.note = objective.note;
    this.step = objective.step;
  }
}


/* @tupleReturn */
const GetQuadrant = function(this: void, frame: WoWAPI.Frame) {
  const [x, y] = frame.GetCenter();
  if (!x || !y) {
    return ['BOTTOMLEFT', 'BOTTOM', 'LEFT'];
  }

  const hhalf = (x > UIParent.GetWidth() / 2) && 'RIGHT' || 'LEFT';
  const vhalf = (y > UIParent.GetHeight() / 2) && 'TOP' || 'BOTTOM';

  return [`${vhalf}${hhalf}`, vhalf, hhalf];
}

// f.shadow = shadow

// TourGuide.SetText = function(row, shadowRow, i) {
//   const action, quest = self.GetObjectiveInfo(i)
//   const note = self.GetObjectiveTag('N')
//   const newtext = `${(quest || '???')}${(note && ' [?]' || '')}`;

//   if (row.text.GetText() !== newtext || icon.GetTexture() !== self.icons[action]) {
//     row.SetAlpha(0)
//     elapsed = 0

//     f.shadow.SetWidth(f.GetWidth())
//     _, _, shadow_anchor = GetQuadrant(f)
//     f.shadow.ClearAllPoints()
//     f.shadow.SetPoint(shadow_anchor, f, shadow_anchor, 0, 0)
//     f.shadow.SetAlpha(1)
//     shadowRow.icon.SetTexture(row.icon.GetTexture())
//     shadowRow.icon.SetTexCoord(4/48, 44/48, 4/48, 44/48)
//     shadowRow.text.SetText(row.text.GetText())
//     // f.shadow.Show()
//   }

//   row.icon.SetTexture(self.icons[action])

//   if (action !== 'ACCEPT' && action !== 'TURNIN') {
//     row.icon.SetTexCoord(4/48, 44/48, 4/48, 44/48)
//   }
//   if (self.GetObjectiveTag('T')) {
//     f.SetBackdropColor(0.09, 0.5, 0.19, 0.5)
//   } else {
//     f.SetBackdropColor(0.09, 0.09, 0.19, 0.5)
//   }

//   row.text.SetText(newtext)
//   row.check.SetChecked(false)
//   row.check.SetButtonState('NORMAL')
//   if (self.db.char.currentguide === 'No Guide') {
//     row.check.Disable()
//   } else {
//     row.check.Enable()
//   }

//   // if i === 1 {
//   //     f.SetWidth(FIXED_WIDTH + row.text.GetWidth())
//   // }
//   // newWidth = math.max(FIXED_WIDTH + row.text.GetWidth(), newWidth || 0)
//   // row.SetWidth(newWidth)

//   if (self.UpdateFubarPlugin) {
//     self.UpdateFubarPlugin(quest, self.icons[action], note)
//   }
// }

// const populateRow = function(row, checked, icon, text) {
//   row.icon.SetTexture(icon)
//   row.text.SetText(text)
//   row.check.SetChecked(checked)
// }

let lastmapped, lastmappedaction;


// TourGuide.GetUIParentAnchor = function(frame) {
//   const [w, h, x, y] = [UIParent.GetWidth(), UIParent.GetHeight(), frame.GetCenter()];
//   const [hhalf, vhalf] = [(x > w/2) && 'RIGHT' || 'LEFT', (y > h / 2) && 'TOP' || 'BOTTOM']
//   const dx = hhalf === 'RIGHT' && math.floor(frame.GetRight() + 0.5) - w || math.floor(frame.GetLeft() + 0.5)
//   const dy = vhalf === 'TOP' && math.floor(frame.GetTop() + 0.5) - h || math.floor(frame.GetBottom() + 0.5)

//   return [`${vhalf}${hhalf}`, dx, dy];
// }


// f.RegisterForDrag('LeftButton')
// f.SetMovable(true)
// f.SetClampedToScreen(true)
// f.SetScript(
//   'OnDragStart',
//   function(...args: any[]) {
//     if (TourGuide.objectiveframe.IsVisible()) {
//       HideUIPanel(TourGuide.objectiveframe)
//     }
//     this.StartMoving()
//   }
// );
// f.SetScript(
//   'OnDragStop',
//   function(...args: any[]) {
//     this.StopMovingOrSizing()
//     TourGuide.db.profile.statusframepoint, TourGuide.db.profile.statusframex, TourGuide.db.profile.statusframey = TourGuide.GetUIParentAnchor(this)
//     TourGuide.Debug(1, 'Status frame moved', TourGuide.db.profile.statusframepoint, TourGuide.db.profile.statusframex, TourGuide.db.profile.statusframey)
//     this.ClearAllPoints()
//     this.SetPoint(TourGuide.db.profile.statusframepoint, TourGuide.db.profile.statusframex, TourGuide.db.profile.statusframey)
//   }
// )

// const origAddQuestWatch = AddQuestWatch
// AddQuestWatch = function(...arg) {
//   if (IsQuestWatched(arg[1])) {
//     return;
//   }

//   origAddQuestWatch(...arg)
// }

// const origRemoveQuestWatch = RemoveQuestWatch
// RemoveQuestWatch = function(...arg) {
//   if (!IsQuestWatched(arg[1])) {
//     return;
//   }

//   origRemoveQuestWatch(...arg);
// }
