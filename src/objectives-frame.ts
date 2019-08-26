import { INamespace } from './tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

const TourGuide = _NS.TourGuide;
const L = TourGuide.Locale;
const ww = _NS.WidgetWarlock;


const ROWHEIGHT = 30;
const ROWOFFSET = 6;
const NUMROWS = math.floor(305 / ROWHEIGHT);


const rows: WoWAPI.Button[] = [];
let scrollbar, upbutt, downbutt, title;
let completed: WoWAPI.FontString;


const hideTooltip = function() {
  GameTooltip.Hide();
};

const showTooltip = function(f) {
  if (f.text.GetStringWidth() <= f.GetWidth()) {
    return;
  }

  GameTooltip.SetOwner(f, 'ANCHOR_RIGHT');
  GameTooltip.SetText(f.text.GetText(), null, null, null, null, true);
}

const createButton = function(parent, relPoint?: string, f?: WoWAPI.Frame, point?: string, x?: number, y?: number) {
  const b = CreateFrame('Button', null, parent);
  if (relPoint) {
    b.SetPoint(relPoint, f, point, x, y);
  }
  b.SetWidth(80);
  b.SetHeight(22);

  // Fonts //
  b.SetDisabledFontObject(GameFontDisable);
  b.SetHighlightFontObject(GameFontHighlight);

  // Textures //
  b.SetNormalTexture('Interface/Buttons/UI-Panel-Button-Up');
  b.SetPushedTexture('Interface/Buttons/UI-Panel-Button-Down');
  b.SetHighlightTexture('Interface/Buttons/UI-Panel-Button-Highlight');
  b.SetDisabledTexture('Interface/Buttons/UI-Panel-Button-Disabled');
  b.GetNormalTexture().SetTexCoord(0, 0.625, 0, 0.6875);
  b.GetPushedTexture().SetTexCoord(0, 0.625, 0, 0.6875);
  b.GetHighlightTexture().SetTexCoord(0, 0.625, 0, 0.6875);
  b.GetDisabledTexture().SetTexCoord(0, 0.625, 0, 0.6875);
  b.GetHighlightTexture().SetBlendMode('ADD');

  return b;
}

const accepted = {};

export interface IObjectivesFrame {
  objectivesFrame: {
    ObjectivesFrame: ObjectivesFrame;
  };
}

interface ObjectivesFrame {
  frame: WoWAPI.Frame;
  new(statusFrameHandler: any): any;
}

class ObjectivesFrame {

  private statusFrameHandler: any;
  frame: WoWAPI.Frame;
  private offset: number;

  constructor(statusFrameHandler: any) {
    const self = this;

    this.statusFrameHandler = statusFrameHandler;

    const frame = CreateFrame('Frame', 'TourGuideObjectives', UIParent);
    frame.SetFrameStrata('DIALOG');
    frame.SetWidth(630);
    frame.SetHeight(305 + 28);
    frame.SetBackdrop({
      bgFile: 'Interface/Tooltips/UI-Tooltip-Background',
      edgeFile: 'Interface/Tooltips/UI-Tooltip-Border',
      edgeSize: 16,
      insets: {left: 5, right: 5, top: 5, bottom: 5},
      tile: true, tileSize: 16,
    });
    frame.SetBackdropColor(0.09, 0.09, 0.19, 1);
    frame.SetBackdropBorderColor(0.5, 0.5, 0.5, 0.5);
    frame.Hide();
    frame.SetScript('OnShow', function() {
      self.createObjectivePanel();
    });
    table.insert(UISpecialFrames, 'TourGuideObjectives')
    this.frame = frame;

    this.offset = 0;
  }

  show() {
    this.frame.ClearAllPoints();
    this.frame.SetPoint('TOPLEFT', this.statusFrameHandler.activeFrame.frame, 'BOTTOMLEFT');
  }

  updatePanel(frame: WoWAPI.Frame, offset?: number) {
    if (!frame || !frame.IsVisible()) {
      return;
    }

    frame.title.SetText(_NS.TourGuide.db.char.currentguide || 'No Guide Loaded')
    const [r,g,b] = _NS.TourGuide.colorGradient((_NS.TourGuide.current - 1) / _NS.TourGuide.actions.length)
    completed.SetText(string.format('|cff%02x%02x%02x%d%% complete',
                                    r*255, g*255, b*255,
                                    (_NS.TourGuide.current - 1) / _NS.TourGuide.actions.length * 100))

    if (offset) {
      this.offset = math.floor(offset);
    }

    if ((this.offset + NUMROWS) > _NS.TourGuide.actions.length) {
      this.offset = _NS.TourGuide.actions.length - NUMROWS;
    }

    if (this.offset < 0) {
      this.offset = 0;
    }

    if (this.offset === 0) {
      upbutt.Disable();
    } else {
      upbutt.Enable();
    }

    if (this.offset === _NS.TourGuide.actions.length - NUMROWS) {
      downbutt.Disable()
    } else {
      downbutt.Enable()
    }

    for (const [i] of ipairs(accepted)) {
      accepted[i] = null;
    }

    for (const [i] of ipairs(_NS.TourGuide.actions)) {
      const [, name] = _NS.TourGuide.getObjectiveInfo(i);
      const [, , quest] = string.find(name, L.PART_FIND);
      if (quest && !accepted[quest] && !_NS.TourGuide.getObjectiveStatus(i)) {
        accepted[quest] = name;
      }
    }

    for (const [i, row] of ipairs(rows)) {
      row.i = i + this.offset;
      const [action, name] = _NS.TourGuide.getObjectiveInfo(i + this.offset);

      if (!name) {
        row.Hide();
      } else {
        let [turnedin, logi, complete] = _NS.TourGuide.getObjectiveStatus(i + this.offset);
        let optional: boolean;
        {
          const [o] = _NS.TourGuide.getObjectiveTag('O', i + this.offset);
          optional = o === 'true';
        }
        let inTown: boolean;
        {
          const [it] = _NS.TourGuide.getObjectiveTag('T', i + this.offset);
          inTown = it === 'true';
        }

        row.Show();

        if (inTown) {
          row.SetBackdropColor(0,0.5,0,0.5)
        } else {
          row.SetBackdropColor(0,0,0,0);
        }

        const [shortname] = string.gsub(name, L.PART_GSUB, '');
        logi = !turnedin && (!accepted[shortname] || (accepted[shortname] === name)) && logi;
        complete = !turnedin && (!accepted[shortname] || (accepted[shortname] === name)) && complete;
        const checked = turnedin || action === 'ACCEPT' && logi || action === 'COMPLETE' && complete;

        row.icon.SetTexture(_NS.TourGuide.icons[action]);
        if (action !== 'ACCEPT' && action !== 'TURNIN') {
          row.icon.SetTexCoord(4/48, 44/48, 4/48, 44/48);
        }
        row.text.SetText(`${name}${optional && ' |cff808080(Optional)' || ''}`);
        row.detail.SetText(_NS.TourGuide.getObjectiveTag('N', i + this.offset));
        row.check.SetChecked(checked);

        if ((_NS.TourGuide.current > (i + this.offset)) && optional && !checked) {
          row.text.SetTextColor(0.5, 0.5, 0.5);
          row.check.Disable();
        } else {
          row.text.SetTextColor(1, 0.82, 0);
          row.check.Enable();
        }

        if (_NS.TourGuide.db.char.currentguide === 'No Guide') {
          row.check.Disable();
        }
      }
    }
  }

  createObjectivePanel() {
    const self = this;
    /* const guidebutton = createButton(frame, 'BOTTOMRIGHT', -6, 6);
     * guidebutton.SetText('Guides');
     * guidebutton.SetFont(STANDARD_TEXT_FONT, 12);
     * guidebutton.SetScript('OnClick', function() {
     *   frame.Hide();
     *   LibStub('OptionHouse-1.1').Open('Tour Guide', 'Guides');
     * });

     * const configbutton = createButton(frame, 'RIGHT', guidebutton, 'LEFT');
     * configbutton.SetText('Config')
     * configbutton.SetFont(STANDARD_TEXT_FONT, 12)
     * configbutton.SetScript('OnClick', function() {
     *   frame.Hide();
     *   LibStub('OptionHouse-1.1').Open('Tour Guide', 'Config');
     * });

     * if (tekDebug) {
     *   const b = createButton(frame, 'RIGHT', configbutton, 'LEFT')
     *   b.SetText('Debug')
     *   b.SetScript('OnClick', function() {
     *     frame.Hide();
     *     LibStub('OptionHouse-1.1').Open('tekDebug', 'TourGuide')
     *   });
     * } */

    const title = ww.summonFontString(this.frame, null, 'SubZoneTextFont', null, 'BOTTOM', this.frame, 'TOP');
    const [fontname, fontheight, fontflags] = title.GetFont();
    title.SetFont(fontname, 18, fontflags);
    this.frame.title = title;

    completed = ww.summonFontString(this.frame, null, 'NumberFontNormalLarge', null, 'BOTTOMLEFT', 10, 10);

    [scrollbar, upbutt, downbutt] = ww.conjureScrollBar(this.frame);
    scrollbar.SetPoint('TOPRIGHT', this.frame, -7, -21);
    scrollbar.SetPoint('BOTTOM', this.frame, 0, 22 + 22);
    scrollbar.SetScript('OnValueChanged', function(value: number) {
      self.updatePanel(self.frame, value);
    });

    upbutt.SetScript('OnClick', function(f) {
      scrollbar.SetValue(self.offset - NUMROWS + 1);
      /* PlaySound('UChatScrollButton'); */
    });

    downbutt.SetScript('OnClick', function(f) {
      scrollbar.SetValue(self.offset + NUMROWS - 1);
      /* PlaySound('UChatScrollButton'); */
    });

    const bg = { bgFile: 'Interface/Tooltips/UI-Tooltip-Background' };
    for (let i = 0; i < NUMROWS; i++) {
      const row = CreateFrame('Button', null, this.frame)
      row.SetPoint('TOPLEFT', i === 0 ? this.frame : rows[i - 1],
                   i === 0 ? 'TOPLEFT' : 'BOTTOMLEFT', 0, i === 0 ? -3 : 0);
      row.SetWidth(630 - 24);
      row.SetHeight(ROWHEIGHT);
      row.SetBackdrop(bg);

      const check = ww.summonCheckBox(ROWHEIGHT - ROWOFFSET, row, 'LEFT', ROWOFFSET, 0);
      const icon = ww.summonTexture(row, null, ROWHEIGHT - ROWOFFSET,
                                    ROWHEIGHT - ROWOFFSET, null, 'LEFT', check,
                                    'RIGHT', ROWOFFSET, 0)
      const text = ww.summonFontString(row, null, 'GameFontNormal', null,
                                       'LEFT', icon, 'RIGHT', ROWOFFSET, 0);

      const detailhover = CreateFrame('Button', null, row)
      detailhover.SetHeight(ROWHEIGHT - ROWOFFSET)
      detailhover.SetPoint('LEFT', text, 'RIGHT', ROWOFFSET*3, 0);
      detailhover.SetPoint('RIGHT', scrollbar, 'LEFT', -ROWOFFSET, 0);
      detailhover.SetScript('OnEnter', function(...args: any[]) {
        showTooltip(this);
      });
      detailhover.SetScript('OnLeave', hideTooltip)

      const detail = ww.summonFontString(detailhover, null, 'GameFontNormal', null);
      detail.SetAllPoints(detailhover)
      detail.SetJustifyH('RIGHT')
      detail.SetTextColor(240/255, 121/255, 2/255)
      detailhover.text = detail

      check.SetScript('OnClick', function(...args: any[]) {
        _NS.TourGuide.setTurnedIn(row.i, this.GetChecked());
        self.show();
        self.updatePanel(self.frame);
      })

      row.text = text
      row.detail = detail
      row.check = check
      row.icon = icon

      table.insert(rows, row);
    }

    this.frame.EnableMouseWheel();
    this.frame.SetScript('OnMouseWheel', function(value) {
      scrollbar.SetValue(self.offset - value);
    });

    const OnShow = function(this) {
      const newval = math.max(0, (_NS.TourGuide.current || 0) - NUMROWS / 2 - 1)

      scrollbar.SetMinMaxValues(0, math.max(_NS.TourGuide.actions.length - NUMROWS, 1))
      scrollbar.SetValue(newval)

      self.updatePanel(this, newval);

      this.SetAlpha(0)
      this.SetScript('OnUpdate', function(arg1) {
        ww.fadeIn(this, arg1);
      });
    };
    this.frame.SetScript('OnShow', OnShow);
    ww.setFadeTime(this.frame, 0.5);
    OnShow.call(this.frame);

    return this.frame;
  }

}

_NS.objectivesFrame = {
  ObjectivesFrame: ObjectivesFrame as any,
};
