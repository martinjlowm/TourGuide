import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide('Exalted with Factions (Part 1)', 'Exalted with Factions (Part 2)', 'Horde', () => {
  return `
A Your Place In The World
T Your Place In The World
A Cutting Teeth
C Cutting Teeth
A Sarkoth (Part 1) |N|Western Valley of Trials (40.6, 62.6)|
C Sarkoth (Part 1) |N|South of the questgiver (40.6, 67.1)|
T Sarkoth (Part 1)
A Sarkoth (Part 2)
T Sarkoth (Part 2)
T Cutting Teeth

A Sting of the Scorpid

A Etched Tablet |C|Hunter|
T Etched Tablet |C|Hunter|
A Rune-Inscribed Parchment |C|Shaman|
T Rune-Inscribed Parchment |C|Shaman|

A Vile Familiars
A Galgar's Cactus Apple Surprise
A Lazy Peons

C Lazy Peons |U|16114|
C Galgar's Cactus Apple Surprise |G|
C Sting of the Scorpid |G|
C Vile Familiars |G|

T Galgar's Cactus Apple Surprise
T Sting of the Scorpid
A Call of Earth (Part 1) |C|Shaman|
T Vile Familiars
A Burning Blade Medallion
T Lazy Peons
A Thazz'ril's Pick

C Thazz'ril's Pick |N|In the cave at North end of Valley of Trials. Go straight ahead at the fork. (43.7,53.7)|
C Burning Blade Medallion |N|Go back to the fork and take the northern path at the fork. (42.7,52.9)| |G|
C Call of Earth (Part 1) |C|Shaman| |G|

H Valley of Trials
T Burning Blade Medallion
A Report to Sen'jin Village
T Call of Earth (Part 1) |C|Shaman|
A Call of Earth (Part 2) |C|Shaman|
T Call of Earth (Part 2) |C|Shaman| |N|Head south-west to the Hidden Path (41.6,73.2) then follow the path to the Spirit Rock| |U|6635|
A Call of Earth (Part 3) |C|Shaman|
T Call of Earth (Part 3) |C|Shaman|
T Thazz'ril's Pick
A A Peon's Burden |N|From the orc just outside the newbie area (52.0,68.3)|

R Sen'jin Village
T Report to Sen'jin Village
A Minshina's Skull
A Zalazane
A Report to Orgnil
A A Solvent Spirit
A Practical Prey

R Razor Hill |N|Follow the road north.|
T Report to Orgnil |T|
T A Peon's Burden |T|
h Razor Hill |T|

R The Barrens
N Get killed up the hill along the road and res at XR
f The Crossroads

N Run south and die on purpose after the bridge by the Barrens canyon
f Camp Taurajo
R Mulgore
N Die, resurrect and repair (in the big tent)
R Camp Narache
`
  // Consider skipping Thwarting Kolkar above - the quest giver is close to the quest area anyway
  // Red Cloud Mesa
    + `
A The Hunt Begins
A A Humble Task (Part 1)
A Break Sharptusk!
C The Hunt Begins
T The Hunt Begins
T A Humble Task (Part 1) |N|Southeast at the well (50,81)|
A A Humble Task (Part 2)
C A Humble Task (Part 2)
T A Humble Task (Part 2)

A Etched Note |C|Hunter|
A Simple Note |C|Warrior|
A Rune-Inscribed Note |C|Shaman| |R|Tauren|
A Verdant Note |C|Druid|

A The Hunt Continues

T Etched Note |C|Hunter|
T Simple Note |C|Warrior|
T Rune-Inscribed Note |C|Shaman| |R|Tauren|
T Verdant Note |C|Druid|

A Rites of the Earthmother (Part 1)
C The Hunt Continues
T Rites of the Earthmother (Part 1) |N|South of Camp Narache (42.59, 92.13)|
A Rite of Strength
T The Hunt Continues |N|Back at camp|
A The Battleboars


C The Battleboars
C Rite of Strength
C Break Sharptusk!
N Find the Dirt-stained Map |L|4851| |N|In the cave to the south of Sharptusk's hut (63.21, 82.75)|
A Attack on Camp Narache |U|4851|

R Camp Narache
T The Battleboars
T Break Sharptusk!
T Rite of Strength
T Attack on Camp Narache
A Rites of the Earthmother (Part 2)
A A Task Unfinished |N|Take the road out of camp|

R Bloodhoof Village |N|Swim across the water and go into the Inn from the left.|
T A Task Unfinished
T Rites of the Earthmother (Part 2)

R Thunder Bluff
f Thunder Bluff
H Razor Hill

F Tirisfal Glades |N|Jump off the Zeppelin once it reaches the shore, die and resurrect at Deathknell.|
` +
    // Deathknell
    `
R Deathknell
A Rude Awakening |N|The guy right outside of the starting crypt|
T Rude Awakening |N|Right down the hill|
A The Mindless Ones
A Piercing the Veil |C|Warlock|
C The Mindless Ones
C Piercing the Veil |C|Warlock|
T The Mindless Ones
T Piercing the Veil |C|Warlock|

A Rattling the Rattlecages |T|
A The Damned |T|
A Encrypted Scroll |C|Rogue| |T|
A Tainted Scroll |C|Warlock| |T|
T Encrypted Scroll |C|Rogue| |T|
T Tainted Scroll |C|Warlock| |T|

C The Damned
C Rattling the Rattlecages

T The Damned |T|
T Rattling the Rattlecages |T|
A Marla's Last Wish |T|
A Night Web's Hollow |T|
A Scavenging Deathknell |T|

C Night Web's Hollow |N|Cave to the north (27.5,58.0)|
K Samuel Fipps |N|Undead to the east (36.7,61.6)| |L|16333| |Z|Tirisfal Glades|
C Scavenging Deathknell
T Scavenging Deathknell
C Marla's Last Wish |N|Bury Samuel's remains|

T Marla's Last Wish |T|
T Night Web's Hollow |T|
A The Scarlet Crusade |T|
C The Scarlet Crusade |N|They are at a camp at (36.0, 67.5)|
T The Scarlet Crusade |T|
A The Red Messenger |T|
C The Red Messenger |N|Kill Meven Korgal to get the documents|
T The Red Messenger |T|
A In Favor of Darkness |C|Priest| |N|From the priest trainer|
A Vital Intelligence |T|
A A Rogue's Deal (Part 1) |N|North end of Deathknell|
A Fields of Grief (Part 1) |N|By the sign out front|
A Gordo's Task |N|Along the road to Brill|
A A Putrid Task
T Vital Intelligence |T|
A At War With The Scarlet Crusade (Part 1)
T A Rogue's Deal (Part 1)
h Brill
T In Favor of Darkness |C|Priest|
A Garments of Darkness |C|Priest|
C Garments of Darkness |C|Priest| |N|To the north of the graveyard.|

C A Putrid Task
C Gordo's Task

A A Rogue's Deal (Part 2) |N|Back in Deathknell|
C A Rogue's Deal (Part 2) |N|Wait for him to recover and turn in the quest|
T A Rogue's Deal (Part 2)
C Fields of Grief (Part 1) |N|At the farm above Deathknell (35,50)|
C At War With The Scarlet Crusade (Part 1)

R Brill

T A Putrid Task
A The Mills Overrun |T|
T Gordo's Task |T| |N|At the graveyard|
T Fields of Grief (Part 1) |T| |N|In the house opposite to the graveyard|
A Fields of Grief (Part 2) |T|
A A New Plague (Part 1) |T|
T At War With The Scarlet Crusade (Part 1) |T|
A Wanted: Maggot Eye |T|
A Graverobbers |T| |N|Inside the town hall.|
A The Chill of Death |T| |N|Back inside the Inn - upstairs|
T Garments of Darkness |C|Priest| |T|
T Fields of Grief (Part 2) |T| |N|In the basement|
A The Haunted Mills |T| |N|Next to the Inn keeper|
A Doom Weed |T|

C Graverobbers
C Doom Weed
C Wanted: Maggot Eye |N|In the smaller building at the north end of the farm (58,30)|
K Bats for The Chill Of Death |L|2876 5|
C A New Plague (Part 1)

T The Chill of Death |N|Buy the coarse thread off the vendor by the trade wagon.| |T|
T Wanted: Maggot Eye |T| |N|By the town hall.|
T Graverobbers |T|
A Forsaken Duties |T|
A The Prodigal Lich |T|
T Doom Weed |T| |N|At the graveyard|

T A New Plague (Part 1)
A A New Plague (Part 2)

C The Mills Overrun |N|At Agamand Mills|
C The Haunted Mills
C A New Plague (Part 2)

H Brill |SZ|Gallows' End Tavern| |T|

T The Haunted Mills |T|
T A New Plague (Part 2)
A A New Plague (Part 3)
A A Letter Undelivered |U|2839| |O| |T|
T A Letter Undelivered |O| |T|
T The Mills Overrun |T| |N|Western part of town.|

F Durotar
R Orgrimmar
` +
    // Mulgore
    `
F Thunder Bluff |N|When you land, jump off, heal up, jump off and heal up again :) - unless you are doing professions...|

A Gathering Leather |O| |N|If you plan on leveling skinning, get this quest at the leatherworking trainer|
A Kodo Hide Bag |O| |N|If you plan on leveling leatherworking, get this quest at the leatherworking trainer|

R Bloodhoof Village

A Mazzranache |N|By the drums in the circle of dirt|
A Swoop Hunting |N|In the OPEN big tent|
A Sharing the Land |N|By the totem|
A Rite of Vision (Part 1)
A Dwarven Digging
A Dangers of the Windfury |N|South of the Inn.|
A Poison Water |N|Next to the big OPEN tent.|
T Rite of Vision (Part 1)
A Rite of Vision (Part 2)

N Kill and loot... |N|Kill any Swoops you see, also loot acorns under trees|
C Sharing the Land |N|To the south by the cliffs|
C Poison Water

T Poison Water
A Winterhoof Cleansing |R|Tauren| |N|This may be available, but the item requires one to be Tauren|
C Rite of Vision (Part 2) |N|Grab the well stones and acorn on the ground near trees.|
C Winterhoof Cleansing |N|South of town at the well (53.55, 66.42)| |U|5411| |R|Tauren|
T Winterhoof Cleansing |R|Tauren|
A Thunderhorn Totem |R|Tauren|
T Sharing the Land
N Train First Aid in the inn and Cooking and Skinning (and a knife - for more sellables) in the big tent. Cook any meat you migh have at this moment. Get to cooking skill 15 before The Barrens

T Rite of Vision (Part 2)
A Rite of Vision (Part 3)
U Drink up! |U|4823|
T Rite of Vision (Part 3) |N|Follow the vision, or just run to the cave he's leading you to (32.68, 36.06)|
A Rite of Wisdom

C Thunderhorn Totem |N|All over the plains south of Bluff| |R|Tauren|
C Dwarven Digging |N|Kill the dorfs for their tools, then find the forge in the camp and break them.| |U|4702|
C Swoop Hunting
C Mazzranache
C Gathering Leather |O|
C Kodo Hide Bag |O|

T Thunderhorn Totem |N|Back at Bloodhoof Village| |R|Tauren|
T Dwarven Digging
T Swoop Hunting
T Mazzranache

A Thunderhorn Cleansing |R|Tauren|
C Thunderhorn Cleansing |U|5415| |R|Tauren|
T Thunderhorn Cleansing |R|Tauren|
A Wildmane Totem |R|Tauren|

A Veteran Uzzek |C|Warrior| |N|By the warrior trainer|
A The Ravaged Caravan (Part 1) |N|To the east|
T The Ravaged Caravan (Part 1) |N|To the north|
A The Ravaged Caravan (Part 2)
T The Ravaged Caravan (Part 2) |N|Back down on the road|
A The Venture Co.
A Supervisor Fizsprocket

C Dangers of the Windfury |N|To the east, south of the road (64,70).|
C Wildmane Totem |R|Tauren|

T Wildmane Totem |N|Back at Bloodhoof Village| |R|Tauren|
A Wildmane Cleansing |R|Tauren|

A The Hunter's Path |C|Hunter|
T The Hunter's Path |C|Hunter|
A Taming the Beast (Part 1) |C|Hunter|
C Taming the Beast (Part 1) |C|Hunter| |N|North of town|
T Taming the Beast (Part 1) |C|Hunter|
A Taming the Beast (Part 2) |C|Hunter|
C Taming the Beast (Part 2) |C|Hunter| |N|North of town|
T Taming the Beast (Part 2) |C|Hunter|
A Taming the Beast (Part 3) |C|Hunter|
C Taming the Beast (Part 3) |C|Hunter| |N|East of town|
T Taming the Beast (Part 3) |C|Hunter|
P Bite (Rank 2) |N|Tame a Prarie Wolf Alpha.  Keep it for your main pet unless you find The Rake.| |C|Hunter|
A Training the Beast |C|Hunter|

A Heeding the Call |C|Druid|

T Dangers of the Windfury

A The Hunter's Way

R Thunder Bluff
A Preparation for Ceremony
T Training the Beast |C|Hunter| |N|Over on Hunter Rise (to the south)|

N Train weapon skills

T Gathering Leather |O|
T Kodo Hide Bag |O|

T Heeding the Call |C|Druid|
A Moonglade |C|Druid|
T Moonglade |C|Druid| |N|Teleport you twit!|
A Great Bear Spirit |C|Druid|
C Great Bear Spirit |C|Druid| |N|Northwest corner of Moonglade (39.15, 27.78)| |Z|Moonglade|
T Great Bear Spirit |C|Druid|
A Back to Thunder Bluff |C|Druid|
T Back to Thunder Bluff |C|Druid|
A Body and Heart |C|Druid|
C Body and Heart |C|Druid| |N|On the edge of the Barrens, just as you leave Mulgore, south of the road behind the hut (42.00, 60.89).  Use the dust, kill the boomkin, talk to him.| |U|15710|
T Body and Heart |C|Druid| |N|Run east to Camp Taurajo and fly to Bluff|

C Wildmane Cleansing |N|North of Bluff| |U|5416| |R|Tauren|
C The Hunter's Way
A A Sacred Burial |N|East at Red Rocks Amphitheatre (59.83, 25.60)|
T Rite of Wisdom |N|To the north, in the middle of the graveyard|
A Journey into Thunder Bluff
C A Sacred Burial
T A Sacred Burial
C Preparation for Ceremony |N|Harpies to the north.  You can also find a bunch west of Bluff.|

T Journey into Thunder Bluff |N|At Cairne Bloodhoof on the highest tier.|
T The Hunter's Way |N|On Hunter Rise (61.48, 80.86)|
A Sergra Darkthorn
A Rites of the Earthmother (Part 3)
T Preparation for Ceremony |N|Back on Bluff|

C Rites of the Earthmother (Part 3) |N|East of Bluff.  If you cannot find him, he spawns at (49,19) and patrols clockwise.  He goes north to (52,10) and south to (54,35)|
K Ghost Howl |L|4854| |N|He wanders around Thunder Bluff. Respawn timer is unknown|
T Rites of the Earthmother (Part 3)
A The Barrens Oases |N|From the Arch Druid on Elder Rise (78.61, 28.52)|
A Searching for the Lost Satchel |N|Right outside the tent|
A Testing an Enemy's Strength

R Bloodhoof Village
A The Demon Scarred Cloak |O| |U|4854|
T The Demon Scarred Cloak |O|
T Wildmane Cleansing |R|Tauren|

C Supervisor Fizsprocket |N|In the mine to the east of the Ravaged Caravan (61,47)|
C The Venture Co.
T The Venture Co.
T Supervisor Fizsprocket

R The Barrens
R Camp Taurajo
A Journey to the Crossroads |N|Kirge Sternhorn - he may not have this availble|
F The Crossroads
T Journey to the Crossroads
T The Barrens Oases
T Sergra Darkthorn
A Meats to Orgrimmar
T Meats to Orgrimmar
A Ride to Orgrimmar

R Far Watch Post |C|Warrior| |N|At the border to Durotar|
T Veteran Uzzek |C|Warrior| |N|(61,21)|
A Path of Defense |C|Warrior|
R Durotar

` +
    //  Durotar
    `
A Carry Your Weight |N|From watch tower northwest of town (49.9,40.3)|
A Break a Few Eggs |T|
A Vanquish the Betrayers |T|
A Encroachment |T|
A Dark Storms |T|

C Carry Your Weight
C Vanquish the Betrayers |N|Tiragarde Keep (57,55)|
N Open the box on the ramparts upstairs from Benedict. |L|4881|

A The Admiral's Orders (Part 1) |U|4881|
T The Admiral's Orders (Part 1)
A The Admiral's Orders (Part 2)
T Vanquish the Betrayers |T|
A From The Wreckage.... |T|

C A Solvent Spirit |N|Along the beaches (62,50)|
C From The Wreckage.... |N|Helps if you have water breathing|

R Razor Hill
T From The Wreckage.... |T|
T Carry Your Weight

K Razormane Scout |N|Razormane Grounds (51.1,49.4)| |Q|Encroachment| |QO|Razormane Scout: 4/4|
K Razormane Quilboar |Q|Encroachment| |QO|Razormane Quilboar: 4/4|

A Thwarting Kolkar Aggression |N|West of Sen'jin Village (54,75)|
C Thwarting Kolkar Aggression |N|West of Sen'jin, each little camp has an item to pickup. (48,79)|
A Ju-Ju Heaps |N|In Sen'jin village| |C|Mage|
C Break a Few Eggs |N|Head over to the Echo Isles (59.6,82.6). Kill Tigers if you see them.|
C Practical Prey
C Minshina's Skull |N|The skull is by the glowing ritual circle above Zalazane (67,87)|
C Ju-Ju Heaps |C|Mage|
C Zalazane |N|Zalazane is at (67,86)|
R Sen'jin Village

T Minshina's Skull
T Zalazane
T A Solvent Spirit
T Practical Prey
T Ju-Ju Heaps |C|Mage|
N Save quest reward from "Faintly Glowing Skull" for later quest "Burning Shadows"
T Thwarting Kolkar Aggression

T Break a Few Eggs
C Encroachment |N|(42,38)|
A Lost But Not Forgotten |N|At the little farm Northwest of Razor Hill (43,30)|
A Winds in the Desert |N|Follow the canyon/road from Razor Hill to Orgrimmar (46.4,23.0)|
C Winds in the Desert
T Winds in the Desert
A Securing the Lines
C Securing the Lines
T Securing the Lines

N Do Pet Quests |C|Hunter|
N Train Encrusted Surf Crawler at (57,16)|C|Hunter|
A Need for a Cure |N|Troll hidden in rocks to the west of Orgrimmar (41.5,18.6)|

R Orgrimmar
T Ride to Orgrimmar
A Doras the Wind Rider Master
T Doras the Wind Rider Master
A Return to the Crossroads
N Turn in Hunter Beast Quest |C|Hunter|
T The Admiral's Orders (Part 2) |N|In Thrall's Room (33,37)|
A Hidden Enemies (Part 1)
A The Spirits of Stonetalon
A Finding the Antidote |N|In the Cleft of Shadow (46,53)|
N Get Professions in The Drag
C Finding the Antidote |N|Head west towards river|
C Lost But Not Forgotten
T Lost But Not Forgotten |N|At the little farm Northwest of Razor Hill (43,30)|
T Finding the Antidote
T Need for a Cure |N|Back to the troll in the rocks outside Orgrimmar (41,18)|
C Dark Storms |N|In the canyons to the Southwest of Orgrimmar (41,26)|
C Path of Defense |C|Warrior|

T Dark Storms |N|Back at Razor Hill|
T Encroachment |N|Back at Razor Hill|
A Margoz |N|Turn in near the pond southeast of Orgrimmar (56,20)|
T Margoz
A Skull Rock
C Skull Rock |N|Cave to the east of Orgrimmar|
C Hidden Enemies (Part 1)
N Attempt to kill Gazz'uz for item started quest, use "Faintly Glowing Skull" to help
T Skull Rock |N|Back to Margoz near the pond (56,20)|
A Neeru Fireblade

T Hidden Enemies (Part 1) |N|In Orgrimmar at Thrall's Chamber (31.9,37.1)|
A Hidden Enemies (Part 2)
T Neeru Fireblade |N|Neeru Fireblade (49.6,50.4) in the Cleft of Shadow|
A Ak'Zeloth
C Hidden Enemies (Part 2) |N|Talk to Neeru Fireblade|
A Burning Shadows |U|4903| |O|
T Burning Shadows |O|
T Hidden Enemies (Part 2) |N|And back to Thrall!|
A Hidden Enemies (Part 3)

R Razor Hill |N|Or cross in a line towards the Barrens bridge.|
A Conscript of the Horde |N|By the western entrance of Razor Hill (50.9, 43.6)|
T Conscript of the Horde |N|Over the bridge in the Barrens|
A Crossroads Conscription
T Ak'Zeloth
A The Demon Seed
N Loot a power stone
T Path of Defense |C|Warrior|

C The Demon Seed
T The Demon Seed
` +
    // Tirisfal Glades
    `
H Brill |SZ|Gallows' End Tavern| |T|

A Deaths in the Family |T|
A At War With The Scarlet Crusade (Part 2) |T|
A Proof of Demise |T|

A Delivery to Silverpine Forest |T| |N|From the Apothecary in the house to the west|

C Deaths in the Family

R Undercity
T Halgar's Summons |C|Warlock| |T|
A Creature of the Void |C|Warlock| |T|
T The Prodigal Lich |N|In the Magic Quarter| |T|
A The Lich's Identity |T|
A The Deathstalkers |C|Rogue| |T|

C At War With The Scarlet Crusade (Part 2) |N|Leave Undercity through the sewers and you'll end up near the mobs for this quest.|
C Proof of Demise
C Creature of the Void |C|Warlock|
C The Deathstalkers |C|Rogue|

T At War With The Scarlet Crusade (Part 2) |N|Back in Brill| |T|
T Proof of Demise |T|
A At War With The Scarlet Crusade (Part 3) |T|
T Deaths in the Family |T|
A Speak with Sevren |T|
A Halgar's Summons |N|Upstairs| |C|Warlock| |T|
T Speak with Sevren |N|In the town hall| |T|
A The Family Crypt |T|

T Forsaken Duties |N|Southeast of Brill at the campfire (65.5, 60.0)| |T|
A Return to the Magistrate |T|
A Rear Guard Patrol |T|

C Rear Guard Patrol |N|At the farm further east down the road (75,60).|
C At War With The Scarlet Crusade (Part 3)
C The Lich's Identity |N|Book on the island (67,42)|

T Rear Guard Patrol |T|
T At War With The Scarlet Crusade (Part 3) |T|
A At War With The Scarlet Crusade (Part 4) |T|
T Return to the Magistrate |N|In the town hall| |T|

T Creature of the Void |N|Back in Undercity| |C|Warlock| |T|
A The Binding |C|Warlock| |T|
C The Binding |C|Warlock| |T|
T The Binding |C|Warlock| |T|
T The Lich's Identity |N|Back in Undercity| |T|

A Return the Book |T|
T The Deathstalkers |C|Rogue| |T|
N Learn weapon skills |N|The weapon master is in the War Quarter (57,32)| |Z|Undercity| |T|
T Return the Book |N|Back on the island (68,42). Talk to the guy.| |T|
A Proving Allegiance |T|
N Grab a candle from the crate |L|3080| |T|
C Proving Allegiance
T Proving Allegiance |T|
A The Prodigal Lich Returns |T|
C At War With The Scarlet Crusade (Part 4)

T At War With The Scarlet Crusade (Part 4) |N|Back in Brill| |T|
C The Family Crypt |N|At Agamand Mills|
H Brill |SZ|Gallows' End Tavern| |T|
T The Family Crypt |T|
T The Prodigal Lich Returns |N|Back in Undercity| |T|

N Learn skills and abilities. Professions if you will. |T|
A Hex of Weakness |R|Troll| |C|Priest| |N|From Father Lankester, priest trainer|
N Get a wand (Magic Quarter) if you don't have one already or buy one from the AH |N|(70,27)| |C|Mage, Warlock, Priest| |Z|Undercity| |T|
` +
    // -----------------
    // Silverpine Forest
    // -----------------
    `
R Silverpine Forest |N|Out through the sewers|
N Save all discolored worg hearts you find

A Escorting Erland |N|(57,11)|
C Escorting Erland
T Escorting Erland
A The Deathstalkers' Report

R The Sepulcher |T|
f Grab flight point |T|
A Border Crossings |T|
A Supplying the Sepulcher |T|
T The Deathstalkers' Report |N|In the crypt| |T|
A Speak with Renferrel |T|
A Lost Deathstalkers |T|
A The Dead Fields |T|
h The Sepulcher |T|
N Buy food and water from the innkeeper |T|
T Delivery to Silverpine Forest |N|Next to the crypt| |T|
T Speak with Renferrel |T|
A Zinge's Delivery |T|
A A Recipe For Death (Part 1) |T|
A Prove Your Worth |T|

T Supplying the Sepulcher |T|
A Ride to the Undercity |T|

C Prove Your Worth |N|Right outside the Sepulcher|
T Lost Deathstalkers
A Wild Hearts
C The Dead Fields
C A Recipe For Death (Part 1)
C Wild Hearts |N|Kill worgs on your way to Tirisfal Glades|

R Undercity |N|Through the sewers|
T A Recipe For Death (Part 1) |N|At the Apothecarium, skip follow-up for now| |T|
T Zinge's Delivery |T|
A Sample for Helbrim |T|
A The Power to Destroy... |N|Quest for Ragefire Chasm| |T|
T Ride to the Undercity |N|In the center of Undercity| |T|
A Michael Garrett |T|
T Michael Garrett |T|
A Return to Podrig |T|
F The Sepulcher |T|

T Return to Podrig |T|
T The Dead Fields |N|In the crypt| |T|
A The Decrepit Ferry |T|
T Wild Hearts |N|Next to the crypt| |T|
T Prove Your Worth |T|
A Arugal's Folly (Part 1) |T|

T The Decrepit Ferry |N|Boat by the dock to the east|
A Rot Hide Clues
C Arugal's Folly (Part 1) |N|Upstairs in the house at (52,28)|
T Return to Quinn |N|To the north at Ivar's Patch, upstairs in the house|
A Ivar the Foul |N|Right outside the house|
C Ivar the Foul |N|In the barn|
T Ivar the Foul

T Rot Hide Clues |N|In the crypt back at The Sepulcher| |T|
A The Engraved Ring |T|
T Arugal's Folly (Part 1) |T|
A Arugal's Folly (Part 2) |T|

C Arugal's Folly (Part 2) |N|East of the Sepulcher (56,46)|
C Rot Hide Ichor |N|On Fenris Isle| |N|Kill mobs till A Talking Head drops|

H The Sepulcher

A Resting in Pieces |U|3317| |T|
T Arugal's Folly (Part 2) |T|
A Arugal's Folly (Part 3) |T|
T Rot Hide Ichor |T|
A Rot Hide Origins |T|

C Arugal's Folly (Part 3) |N|Inside the mine to the east|
T Border Crossings |N|A Dalaran crate to the south|
A Maps and Runes

T Maps and Rune |N|Back at the Sepulcher| |T|
A Dalar's Analysis |T|
T Arugal's Folly (Part 3) |T|
T Dalar's Analysis |T|
A Dalaran's Intentions |T|
T Dalaran's Intentions |T|

F Undercity
h Undercity
T The Engraved Ring |N|In Brill|
A Raleigh and the Undercity
` +
    // -----------
    // The Barrens
    // -----------
    `
F Durotar |N|Take the Zeppelin to Durotar|
R Orgrimmar
T Hex of Weakness |R|Troll| |C|Priest|
F The Crossroads

T Return to the Crossroads
T Crossroads Conscription |T|
A Plainstrider Menace |T|
A The Forgotten Pools |T|
A Lost in Battle |T|
A Raptor Thieves |T|
A Disrupt the Attacks |T|
A Supplies for the Crossroads |T|
A Harpy Raiders |T|
T Sample for Helbrim |T|
A Fungal Spores |T|
A Wharfmaster Dizzywig |T|

C Plainstrider Menace
C Fungal Spores
C The Forgotten Pools
C Harpy Raiders
C Disrupt the Attacks

T Plainstrider Menace |T|
A The Zhevra |T|
T The Forgotten Pools |T|
A The Stagnant Oasis |T|
T Disrupt the Attacks |T|
A The Disruption Ends |T|
T Harpy Raiders |T|
A Harpy Lieutenants |T|
T Fungal Spores |T|
` +
    // -----------
    // Ragefire Chasm
    // -----------
    `
F Orgrimmar
N Find a group to Ragefire Chasm if possible for The Power to Destroy...
A Slaying the Beast |N|Outside Ragefire Chasm|
T Searching for the Lost Satchel |N|In Ragefire Chasm|
A Returning the Lost Satchel
C Slaying the Beast
C Testing an Enemy's Strength
C The Power to Destroy...
C Hidden Enemies (Part 3)

T Slaying the Beast
T Hidden Enemies (Part 3)
A Hidden Enemies (Part 4)
T Hidden Enemies (Part 4) |N|Back at Neeru Fireblade|
A Hidden Enemies (Part 5)
T Hidden Enemies (Part 5) |N|Back at Thrall|
` +
    // -----------
    // The Barrens
    // -----------
    `
F The Crossroads

A Apothecary Zamah |T|

N Pick up Chen's Empty Keg if it's anywhere to be found at the quilboars
C Supplies for the Crossroads
C The Disruption Ends |N|Be done with this before the timer has 25 minutes left|
C The Zhevra |N|Kill zhevra on your way to Stagnant Oasis|
C The Stagnant Oasis |N|Kill any raptors on your way there|
C Lost in Battle
R Camp Taurajo
F Thunder Bluff
N Train new abilities and learn weapon skills (40, 62)
T Apothecary Zamah |N|Cave below Spirit Rise (22.9, 20.9)| |Z|Thunder Bluff| |T|
T Returning the Lost Satchel |T|
T Testing an Enemy's Strength |T|
F The Crossroads

T Supplies for the Crossroads |T|
T Journey to the Crossroads |T|
T The Disruption Ends |T|
T Lost in Battle |T|
T The Stagnant Oasis |T|
A Altered Beings |T|
T The Zhevra |T|

R Ratchet
A Chen's Empty Keg (Part 1) |U|4926| |O| |T|
T Chen's Empty Keg (Part 1) |O| |T|
A Chen's Empty Keg (Part 2) |O| |T|
A WANTED: Baron Longshore |N|From the sign outside the bank| |T|
A Samophlange (Part 1) |T|
A Ziz Fizziks
f Grab flight point |T|
A Southsea Freebooters |N|From Gazlowe| |T|
T Wharfmaster Dizzywig |T|
A Miner's Fortune |T|

C WANTED: Baron Longshore
C Southsea Freebooters

T Southsea Freebooters |T|
A The Missing Shipment (Part 1)
T WANTED: Baron Longshore
T The Missing Shipment (Part 1)
A The Missing Shipment (Part 2)
T The Missing Shipment (Part 2)
A Stolen Booty
A Raptor Horns
A Deepmoss Spider Eggs
C Stolen Booty
C Altered Beings

T Altered Beings |N|Back at Crossroads|
A Hamuul Runetotem
A Mura Runetotem
A Prowlers of the Barrens

A Kolkar Leaders |N|West of Crossroads|
A Centaur Bracers

C Centaur Bracers
C Kolkar Leaders |N|Barak is at (43,24)|

T Centaur Bracers
T Kolkar Leaders
C Prowlers of the Barrens
`;
});
