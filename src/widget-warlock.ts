/** @noSelfInFile */

import { INamespace } from './tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

export interface IWidgetWarlock {
  tooltipBorderBG: any;
  summonCheckBox: (size: number, parent: WoWAPI.UIObject, anchor?: string, xOffset?: number, yOffset?: number) => WoWAPI.CheckButton;
  summonTexture: (
    parent: WoWAPI.Frame,
    layer: string,
    w: number,
    h: number,
    texture: string,
    ...rest: WoWAPI.SetPointArguments
  ) => WoWAPI.Texture;
  summonFontString: (
    parent: WoWAPI.Frame,
    layer: string,
    inherit: WoWAPI.Region | string,
    text: string,
    ...arg: any[]
  ) => WoWAPI.FontString;
  /** @tupleReturn @noSelfInFile */
  conjureScrollBar: (...arg: any[]) => any;
  setFadeTime: (...arg: any[]) => any;
  fadeIn: (...arg: any[]) => any;
}

const WidgetWarlock = {} as IWidgetWarlock;

WidgetWarlock.tooltipBorderBG = {
  bgFile: 'Interface/ChatFrame/ChatFrameBackground',
  edgeFile: 'Interface/Tooltips/UI-Tooltip-Border',
  edgeSize: 16,
  insets: {
    left: 4,
    right: 4,
    top: 4,
    bottom: 4
  }
};


WidgetWarlock.summonCheckBox = function(size, parent, ...arg) {
  const check = CreateFrame('CheckButton', null, parent);
  check.SetWidth(size)
  check.SetHeight(size)

  if (arg.length) {
    check.SetPoint(...arg);
  }

  check.SetNormalTexture('Interface/Buttons/UI-CheckBox-Up');
  check.SetPushedTexture('Interface/Buttons/UI-CheckBox-Down');
  check.SetHighlightTexture('Interface/Buttons/UI-CheckBox-Highlight');
  check.SetDisabledCheckedTexture('Interface/Buttons/UI-CheckBox-Check-Disabled');
  check.SetCheckedTexture('Interface/Buttons/UI-CheckBox-Check');

  return check;
}

WidgetWarlock.summonTexture = function(
  parent: WoWAPI.Frame,
  layer: string,
  w: number,
  h: number,
  texture: string,
  ...arg: WoWAPI.SetPointArguments
) {
  const tex = parent.CreateTexture(null, layer);
  if (w) {
    tex.SetWidth(w);
  }
  if (h) {
    tex.SetHeight(h);
  }
  tex.SetTexture(texture);
  if (arg.length) {
    tex.SetPoint(...arg);
  }
  return tex;
}

WidgetWarlock.summonFontString = function(
  parent: WoWAPI.Frame,
  layer: string,
  inherit: WoWAPI.Region,
  text: string,
  arg1: any,
  ...arg: any[]
) {
  const fs = parent.CreateFontString(null, layer, inherit);

  fs.SetText(text);

  if (arg1) {
    fs.SetPoint(arg1, ...arg);
  }

  return fs;
}


//---------------------
//      Fade In      //
//---------------------

const fadetimes = setmetatable(
  {},
  {
    __index: function() {
      return 1;
    }
  }
);
const elapsed: { [frameAddress: string]: number } = setmetatable(
  {},
  {
    __index: function() {
      return 0;
    }
  }
);

WidgetWarlock.setFadeTime = function(frame, time) {
  assert(frame, 'No frame passed');
  assert(typeof(time) === 'number', 'Time must be a number');
  assert(time > 0, 'Time must be positive');
  fadetimes[frame.toString()] = time;
}


WidgetWarlock.fadeIn = function(frame: WoWAPI.Frame, elap: number) {
  const address = frame.toString();

  elapsed[address] = elapsed[address] + elap;

  if (elapsed[address] > fadetimes[address]) {
    frame.SetScript('OnUpdate', null);
    frame.SetAlpha(1);
    elapsed[address] = 0;
  } else {
    frame.SetAlpha(elapsed[address] / fadetimes[address]);
  }
}


//------------------------
//      Scroll Bar      //
//------------------------

/** @tupleReturn @noSelfInFile */
WidgetWarlock.conjureScrollBar = function(parent: WoWAPI.UIObjectFrame, hasborder: boolean) {
  const f = CreateFrame('Slider', null, parent);
  f.SetWidth(16);

  const upbutt = CreateFrame('Button', null, f, 'UIPanelScrollUpButtonTemplate');
  upbutt.SetPoint('BOTTOM', f, 'TOP');

  const downbutt = CreateFrame('Button', null, f, 'UIPanelScrollDownButtonTemplate');
  downbutt.SetPoint('TOP', f, 'BOTTOM');

  f.SetThumbTexture('Interface/Buttons/UI-ScrollBar-Knob');
  const thumb = f.GetThumbTexture();
  thumb.SetHeight(16);
  thumb.SetWidth(16);
  thumb.SetTexCoord(0.25, 0.75, 0.25, 0.75);

  if (hasborder) {
    const uptext = f.CreateTexture(null, 'BACKGROUND')
    uptext.SetWidth(31)
    uptext.SetHeight(256)
    uptext.SetPoint('TOPLEFT', upbutt, 'TOPLEFT', -7, 5)
    uptext.SetTexture('Interface/PaperDollInfoFrame/UI-Character-ScrollBar')
    uptext.SetTexCoord(0, 0.484375, 0, 1.0)

    const downtex = f.CreateTexture(null, 'BACKGROUND')
    downtex.SetWidth(31)
    downtex.SetHeight(106)
    downtex.SetPoint('BOTTOMLEFT', downbutt, 'BOTTOMLEFT', -7, -3)
    downtex.SetTexture('Interface/PaperDollInfoFrame/UI-Character-ScrollBar')
    downtex.SetTexCoord(0.515625, 1.0, 0, 0.4140625)
  }

  return [f, upbutt, downbutt];
}

_NS.WidgetWarlock = WidgetWarlock;
