/** @noSelfInFile */

// @ts-ignore
const [, _NS] = [...FILE_ARGUMENTS];

const actiontypes = {
  A: 'ACCEPT',
  C: 'COMPLETE',
  T: 'TURNIN',
  K: 'KILL',
  R: 'RUN',
  H: 'HEARTH',
  h: 'SETHEARTH',
  F: 'FLY',
  f: 'GETFLIGHTPOINT',
  N: 'NOTE',
  B: 'BUY',
  b: 'BOAT',
  U: 'USE',
  P: 'PET',
}

const [playerClass] = UnitClass('player');
const [playerRace] = UnitRace('player');

export interface IParser {
  parser: {
    /** @tupleReturn */
    parseQuests: (this: void, ...args: VarArg<string>) => [string[], string[], string[]];
  };
}

const parseQuests: IParser['parser']['parseQuests'] = function(...args) {
  /* const [accepts, turnins, completes] = [{}, {}, {}]; */

  const actions: string[] = [];
  const quests: string[] = [];
  const tags: string[] = [];

  let uniqueid = 1;

  let i = 0;

  for (let j = 1; j <= select('#', ...args); j++) {
    const [text] = select(j, ...args)

    const [,, classes] = string.find(text, '|C|([^|]+)|');
    const [,, races] = string.find(text, '|R|([^|]+)|');

    if (text !== '' && (!classes || string.find(classes, playerClass)) && (!races || string.find(races, playerRace))) {
      let [,,action, quest, tag] = string.find(text, '^(%a) ([^|]*)(.*)');

      assert(actiontypes[action], `Unknown action. ${text}`)
      quest = (`${quest || ''}`.match('^%s*(.-)%s*$') as unknown) as string;

      if (!(action === 'A' || action == 'C' || action == 'T')) {
        quest = `${quest}@${uniqueid}@`;
        uniqueid++;
      }

      actions[i] = actiontypes[action];
      quests[i] = quest;
      tags[i] = tag;

      i++;
    }
  }

  return [actions, quests, tags];
}

_NS.parser = {
  parseQuests,
};

export {};
