import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("The Barrens (12-15)", "Stonetalon Mountains (15-16)", "Horde", () => {
  return `
R Razor Hill |R|Undead|
A Conscript of the Horde |R|Undead|

R The Barrens

R Camp Taurajo |N|Stay on the road| |R|Tauren|
A Journey to the Crossroads |R|Tauren|

T Conscript of the Horde |N|Just over the bridge from Durotar to The Barrens| |R|Orc, Troll, Undead|
A Crossroads Conscription |R|Orc, Troll, Undead|
T Ak'Zeloth |N|Skip the follow-up| |R|Orc, Troll|

N Tame a Savannah Huntress while running to the Crossroads |C|Hunter| |R|Orc, Troll|
R The Crossroads |N|Follow the road, taking left turn to the Crossroads (52,30)| |R|Orc, Troll, Undead|
T Crossroads Conscription |R|Orc, Troll, Undead|

R The Crossroads |N|Take the road north| |R|Tauren|
T The Barrens Oases |O|
T Journey to the Crossroads |R|Tauren|
T Sergra Darkthorn |O|

A A Bundle of Hides |R|Tauren| |N|At the north edge of Crossroad, in the forge (51.19, 29.11)|
T A Bundle of Hides |R|Tauren|
A Ride to Thunder Bluff |R|Tauren|
F Thunder Bluff |R|Tauren|
T Ride to Thunder Bluff |R|Tauren| |N|Fly to Thunder Bluff. At the base of the windrider totem (45.65, 55.90)|
A Tal the Wind Rider Master |R|Tauren|
T Tal the Wind Rider Master |R|Tauren|
A Return to Jahan |R|Tauren|
T Return to Jahan |R|Tauren| |N|Fly back to Crossroads!|

A Meats to Orgrimmar |R|Orc, Troll|
T Meats to Orgrimmar |R|Orc, Troll|

A Plainstrider Menace
A Raptor Thieves
h The Crossroads
A Disrupt the Attacks

N Kill crap... |N|Kill any raptors you come across for "Raptor Thieves" and plainstriders for "Plainstrider Menace"|
C Disrupt the Attacks |N|East of the Crossroads, north of the mountain (54,26)|
T Disrupt the Attacks
A The Disruption Ends
A Supplies for the Crossroads
A Wharfmaster Dizzywig
C The Disruption Ends |N|East of the Crossroads, north of the mountain (56,26) Keep an eye out for boxes of Supplies.|
C Supplies for the Crossroads
C Plainstrider Menace

R Ratchet
A Chen's Empty Keg |U|4926| |O|
T Chen's Empty Keg |O|
A WANTED: Baron Longshore |N|From the sign outside the bank|
A Samophlange (Part 1)
f Grab flight point |T|
A Southsea Freebooters |N|From Gazlowe|
T Wharfmaster Dizzywig
A Miner's Fortune

C WANTED: Baron Longshore
C Southsea Freebooters

T Southsea Freebooters
A The Missing Shipment (Part 1)
T WANTED: Baron Longshore
T The Missing Shipment (Part 1)
A The Missing Shipment (Part 2)
T The Missing Shipment (Part 2)
A Stolen Booty
A Raptor Horns
C Stolen Booty

H The Crossroads
T Supplies for the Crossroads
T The Disruption Ends
T Plainstrider Menace
N Make sure you have three 6-slot bags, otherwise buy them at the bag vendor
A The Zhevra
A The Forgotten Pools
A Harpy Raiders |N|Up on the watch tower|
A Fungal Spores

N Kill Zhevra... |N|Kill any you come across for "The Zhevra"|

A Kolkar Leaders |N|Run west of the Crossroads (45.4,28.4)|
A Centaur Bracers

C Kolkar Leaders |N|Barak is at (43,24)|
C Fungal Spores
C The Forgotten Pools
C Harpy Raiders |N|Northwest corner of the Barrens (38,17)|
`
});
