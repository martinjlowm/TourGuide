import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("The Barrens (25)", "Thousand Needles (25-26)", "Horde", () => {
  return `
F Camp Taurajo
T Ishamuhale |O|
A Enraged Thunder Lizards |O| |PRE|Ishamuhale|
h Camp Taurajo
A A New Ore Sample
C Enraged Thunder Lizards |O| |PRE|Ishamuhale|
K Washte Pawne |L|5103| |N|(43.2,80.9)|
C Revenge of Gann (Part 1) |N|Dwarf area (47,85)|
T Revenge of Gann (Part 1)
A Revenge of Gann (Part 2)
C Revenge of Gann (Part 2) |N|Blow up (49,84)|
T Revenge of Gann (Part 2)
R The Great Lift
T Calling in the Reserves
A Message to Freewind Post
`;
});
