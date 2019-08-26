import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("Stonetalon Mountains (27)", "Thousand Needles (27-29)", "Horde", () => {
return `
F Sun Rock Retreat
T Ordanus |N|Skip "The Den"|
h Sun Rock Retreat
A Bloodfury Bloodline

C Bloodfury Bloodline |N|Kill Bloodfury Ripper (30,63), grinding along the way.|

H Sun Rock Retreat
T Bloodfury Bloodline

F Thunder Bluff
T The Sacred Flame (Part 1)
A The Sacred Flame (Part 2)
`;
});
