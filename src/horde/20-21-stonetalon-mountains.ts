import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("Stonetalon Mountains (20-21)", "Ashenvale (21-22)", "Horde", () => {
  return `
R Honor's Stand |N|Take the road west out of the Crossroads to the edge of Stonetalon Mountains|

A Blood Feeders |N|At Malaka'Jin (71,95)|
T Letter to Jin'Zil |O|
A Jin'Zil's Forest Magic

C Blood Feeders
C Deepmoss Spider Eggs

T Ziz Fizziks |N|In a hut at Windshear Crag (60,63)|
A Super Reaper 6000

C Super Reaper 6000 |N|Kill operators on the broken down super reaper (62,53)|
C Goblin Invaders

T Super Reaper 6000
A Further Instructions (Part 1)

R Sun Rock Retreat
f Grab flight point
A Boulderslide Ravine |T|

N Stable your pet |C|Hunter| |T|
P Bite (Rank 3) |N|Tame a Deepmoss Creeper, along the road to the south.| |C|Hunter|
C Boulderslide Ravine |N|Far south down the road, hidden little cave up in the mountains (61,92)|

T Blood Feeders
T Goblin Invaders
A The Elder Crone
A Shredding Machines
H The Crossroads

T Report to Kadrak |N|At the border to Ashenvale|
`;
});
