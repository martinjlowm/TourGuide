import { INamespace } from './tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

export interface ILocale {
  TourGuideLocale: {
    [key: string]: string;
  };
}

let localized: ILocale['TourGuideLocale'];
const loc = GetLocale();

//---------------------
//      English      //
//---------------------

const english = {
  PART_GSUB: '%s%(Part %d+%)',
  PART_FIND: '(.+)%s%(Part %d+%)',

  // Mapping.lua
  COORD_MATCH: '%(([%d.]+),%s?([%d.]+)%)',
}


//--------------------
//      German      //
//--------------------

if (loc === 'deDE') {
  localized = {
    PART_GSUB: '%s%(Teil %d+%)',
    PART_FIND: '(.+)%s%(Teil %d+%)',
    '(.*) is now your home.': '(.*) ist jetzt Euer Zuhause.',
    'Quest accepted. (.*)': 'Quest angenommen. (.*)',
    '^You .*Hitem.(%d+).*(%[.+%])': '^Ihr .*Hitem.(%d+).*(%[.+%])',
    '|cffff4500This quest is not listed in your current guide': '|cffff4500Diese Quest ist nicht in deinem Guide',
  }
}


//--------------------
//      French      //
//--------------------

if (loc === 'frFR') {
  localized = {
    PART_GSUB: '%s%(Partie %d+%)',
    PART_FIND: '(.+)%s%(Partie %d+%)',
    '(.*) is now your home.': '(.*) est maintenant votre foyer.',
    'Quest accepted. (.*)': 'Quête acceptée. (.*)',
    '^You .*Hitem.(%d+).*(%[.+%])': '^Vous .*Hitem.(%d+).*(%[.+%])',
    '|cffff4500This quest is not listed in your current guide': "|cffff4500Cette quête n'est pas listé dans votre guide actuel",
  }
}


// Metatable majicks... makes localized table fallback to engrish, or fallback to the index requested.
// This ensures we ALWAYS get a value back, even if it's the index we requested originally
_NS.TourGuideLocale = localized && setmetatable(localized, {
  __index: function(key) {
    return english[key] || key;
  }
}) || setmetatable(english, {
  __index: function(key) {
    return key;
  }
});
