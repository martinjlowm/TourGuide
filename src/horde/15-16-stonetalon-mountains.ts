import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("Stonetalon Mountains (15-16)", "The Barrens (16-20)", "Horde", () => {
  return `
R Honor's Stand |N|Grind your way there (34,28)|
A Goblin Invaders
A Avenge My Village
C Avenge My Village
T Avenge My Village
A Kill Grundig Darkcloud
C Kill Grundig Darkcloud |N|Grimtotem Post (73.6,86.1)|
T Kill Grundig Darkcloud
`;
});
