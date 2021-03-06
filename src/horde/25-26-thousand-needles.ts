import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("Thousand Needles (25-26)", "Ashenvale (26-27)", "Horde", () => {
  return `
R Freewind Post
T Message to Freewind Post
A Pacify the Centaur
A Wanted - Arnak Grimtotem
A Alien Egg
A Wind Rider
f Freewind Post

C Pacify the Centaur |N|Just north of Freewind|
A Test of Faith |N|Cave Northeast of Freewind Post (52,43)|
C Test of Faith |N|*WALK* off the platform, do *NOT* jump.|
T Test of Faith |N|Do not accept "Test of Endurance" unless you're a hardcore masochist|
C A New Ore Sample |N|East side of map.  Skip if you can't get the drop.|
C Alien Egg |N|Look for occamy nests Southeast of Freewind Post|

N Grind till you are level 26

R Freewind Post
T Pacify the Centaur
A Grimtotem Spying
T Alien Egg
A Serpent Wild

H Camp Taurajo
A Washte Pawne |U|5103| |O|
T Washte Pawne |U|5103| |O|
T Enraged Thunder Lizards |O|
A Cry of the Thunderhawk |O| |PRE|Enraged Thunder Lizards|
T A New Ore Sample
C Cry of the Thunderhawk |O| |PRE|Enraged Thunder Lizards|
T Cry of the Thunderhawk |O| |PRE|Enraged Thunder Lizards| |N|Skip the follow-up|

F Thunder Bluff
N Learn new abilities
T Melor Sends Word |N|On Hunter Rise (61,80)|
A Steelsnap |N|Hunter Rise|
T The Elder Crone
A The Sacred Flame
`;
});
