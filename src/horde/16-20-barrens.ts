import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("The Barrens (16-20)", "Stonetalon Mountains (20-21)", "Horde", () => {
  return `
T Kolkar Leaders |N|West of the Crossroads (45.4, 28.4). Grind your way back|
A Verog the Dervish

C Centaur Bracers
C The Zhevra

T The Zhevra
A Prowlers of the Barrens
T The Forgotten Pools
T Fungal Spores
A Apothecary Zamah
A Lost in Battle

C Lost in Battle |N|South of the bridge, in a hut north of the road (49.3, 50.4). Grind your way down south|
R Camp Taurajo
A Journey to the Crossroads |R|Orc, Troll, Undead|
A Tribes at War

R Thunder Bluff |N|Take the road west into Mulgore, then north at Bloodhoof Village|
N Train new abilities and learn weapon skills (40,62)
T Apothecary Zamah |N|Cave below Spirit Rise (22.9, 20.9)| |Z|Thunder Bluff|

f Grab flight point |N|In the central tower|
H The Crossroads
A The Stagnant Oasis
T Harpy Raiders
A Harpy Lieutenants
T Lost in Battle

C Prowlers of the Barrens |N|(37,20)|
C Harpy Lieutenants |N|Kill Witchwing Slayer's - Northwest Barrens (38,14)|
T Samophlange (Part 1) |N|Grind your way east|
A Samophlange (Part 2)
T Samophlange (Part 2)
A Samophlange (Part 3)
C Samophlange (Part 3) |N|Tinkerer is in the hut on the hill|
T Samophlange (Part 3)
A Samophlange (Part 4)

A Ignition
C Ignition
T Ignition
A The Escape
C The Escape
C Miner's Fortune
C The Stagnant Oasis |N|Grind your way there|
C Verog the Dervish

R Ratchet
T Stolen Booty
T The Escape
T Miner's Fortune
T Samophlange (Part 4)
A The Guns of Northwatch

F The Crossroads
T The Stagnant Oasis
A Altered Beings
T Prowlers of the Barrens
A Echeyakee
T Harpy Lieutenants
A Serena Bloodfeather
T Centaur Bracers
T Verog the Dervish

C Serena Bloodfeather |N|Serena Bloodfeather - Northwest Barrens (38,11)|
C Echeyakee |N|Grind mobs along the way|
C Raptor Thieves

H The Crossroads
T Raptor Thieves
A Stolen Silver
T Echeyakee
A The Angry Scytheclaws
T Serena Bloodfeather
A Letter to Jin'Zil
A Consumed by Hatred

C Altered Beings |N|(55,42)|
C The Angry Scytheclaws |N|(51,46)|
C Raptor Horns

C Consumed by Hatred |N|(51,54)|
C Tribes at War
C Stolen Silver

R Camp Taurajo |N|Grind your way there|
A Weapons of Choice
T Tribes at War
A Blood Shards of Agamaggan
T Blood Shards of Agamaggan
A Betrayal from Within (Part 1)
A Melor Sends Word
N Turn in 10 bloodshards for Spirit of the Wind and grind to level 20 just north of Camp Taurajo
K Owatanka |O|

R The Crossroads
T Stolen Silver
A Report to Kadrak
T The Angry Scytheclaws
A Jorn Skyseer
T Consumed by Hatred
T Altered Beings
A Egg Hunt

F Orgrimmar
N Learn new abilities
A The Ashenvale Hunt |N|Don't skip this quest, you need it for quests later!|
H The Crossroads

F Ratchet
A Ziz Fizziks
T Raptor Horns
A Deepmoss Spider Eggs

C The Guns of Northwatch
A Free From the Hold |N|Escort quest|
C Free From the Hold

T The Guns of Northwatch |N|Back in Ratchet|
T Free From the Hold

H The Crossroads |N|Fly if your Hearthstone isn't ready!|
`
});
