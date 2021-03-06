import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("Stonetalon Mountains (23-25)", "The Barrens (25)", "Horde", () => {
  return `
F Sun Rock Retreat
A Cenarius' Legacy |T|
T Boulderslide Ravine |N|Skip the follow-up| |T|
A Trouble in the Deeps
A Elemental War |T|
A Harpies Threaten |T|
h Sun Rock Retreat |T|
A Cycle of Rebirth
C Cycle of Rebirth |N|Pick up seeds around Mirkfallon Lake (48,41)|
C Jin'Zil's Forest Magic |N|Mobs range from the north side of Mirkfallon Lake up to Stonetalon Peak.|
C Cenarius' Legacy |N|In the center of Stonetalon Peak.|
T Cycle of Rebirth
A New Life
T Cenarius' Legacy
A Ordanus

T Further Instructions (Part 2)
A Gerenzo Wrenchwhistle
C Gerenzo Wrenchwhistle |N|At (64,41)|
C Shredding Machines
T Gerenzo Wrenchwhistle
A Arachnophobia |N|From a sign outside Sishir Canyon (59.1, 75.8)|
C Arachnophobia |N|In Sishir Canyon (52.20, 73.90)|
T Jin'Zil's Forest Magic
T Shredding Machines

H Sun Rock Retreat
T Arachnophobia |T| |N|Back at Sun Rock Retreat|
C New Life |N|West in the Charred Vale (32,67)|
C Elemental War
C Harpies Threaten
T New Life |T|
T Elemental War |T|
T Harpies Threaten |T|
A Calling in the Reserves |T|
`;
});
