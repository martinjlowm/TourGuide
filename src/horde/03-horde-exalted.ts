import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide('Exalted with Factions (Part 3)', 'Exalted with Factions (Part 4)', 'Horde', () => {
  return (
    //--------------------
    // Hillsbrad Foothills
    //--------------------
    `
F Orgrimmar
h Orgrimmar

R Undercity |N|Take the zeppelin outside Orgrimmar to Undercity.|
F Hillsbrad Foothills

A Elixir of Pain (Part 1) |N|First house on the left.|
A The Hammer May Fall |N|First dude you see by the fence|
A Soothing Turtle Bisque |N|Inside the Inn|
A Battle of Hillsbrad (Part 1) |N|From the High Executor, in front of the church|
A Regthar Deathgate |N|Inside the church|
A Helcular's Revenge (Part 1) |N|Graveyard|

C Helcular's Revenge (Part 1)
C Battle of Hillsbrad (Part 1)
C Elixir of Pain (Part 1)
T Elixir of Pain (Part 1)
A Elixir of Pain (Part 2)
T Battle of Hillsbrad (Part 1)
A Battle of Hillsbrad (Part 2)
T Helcular's Revenge (Part 1)
A Helcular's Revenge (Part 2)


R Alterac Mountains
N Charge The Flame of Uzel (37,68) |Q|Helcular's Revenge (Part 2)| |QO|Flame of Uzel charged|
N Charge The Flame of Azel (43.9,28.1) |Q|Helcular's Revenge (Part 2)| |QO|Flame of Azel charged|
N Charge The Flame of Veraz (44.0,26.6) |Q|Helcular's Revenge (Part 2)| |QO|Flame of Veraz charged|

C Battle of Hillsbrad (Part 2)
T Elixir of Pain (Part 2)
T Battle of Hillsbrad (Part 2)
A Battle of Hillsbrad (Part 3)
A Souvenirs of Death
C Battle of Hillsbrad (Part 3)
T Battle of Hillsbrad (Part 3)
A Battle of Hillsbrad (Part 4)
A Dangerous! |N|Wanted sign at the Inn entrance|

C Battle of Hillsbrad (Part 4)
K Clerk Horrace Whitesteed |Q|Dangerous!|
K Citizen Wilkes |Q|Dangerous!|
K Farmer Kalaba |Q|Dangerous!|
T Battle of Hillsbrad (Part 4)
A Battle of Hillsbrad (Part 5)
K Miner Hackett |Q|Dangerous!|
C Battle of Hillsbrad (Part 5)
C Souvenirs of Death
T Battle of Hillsbrad (Part 5)
T Souvenirs of Death

A Elixir of Agony (Part 1)
C Elixir of Agony (Part 1)
T Elixir of Agony (Part 1)
A Elixir of Agony (Part 2)

F Undercity
T Elixir of Agony (Part 2)
A Elixir of Agony (Part 3)
A Going, Going, Guano!
N Buy a Strong Troll's Blood Potion off the AH
F Tarren Mill

T Helcular's Revenge (Part 2) |N|By Southshore|
C Elixir of Agony (Part 3)
T Elixir of Agony (Part 3)
A Elixir of Agony (Part 4)
A Battle of Hillsbrad (Part 6)
A Humbert's Sword

C Soothing Turtle Bisque |N|Find a group for the following quests (elite)|
C Battle of Hillsbrad (Part 6)
C Humbert's Sword
C Elixir of Agony (Part 4)

T Battle of Hillsbrad (Part 6)
A Battle of Hillsbrad (Part 7)
T Humbert's Sword
T Soothing Turtle Bisque
T Elixir of Agony (Part 4)
A Elixir of Agony (Part 5)
T Elixir of Agony (Part 5)
    ` +
    //-----------------
    // Arathi Highlands
    //-----------------
    `
R Arathi Highlands
C The Hammer May Fall |N|At (34,45)|
R Hammerfall |N|Northeast corner of zone (73,36)|
A Hammerfall
T Hammerfall
A Raising Spirits (Part 1)
T The Hammer May Fall
f Grab flight point

C Raising Spirits (Part 1) |N|West of Hammerfall (64,37)|

T Raising Spirits (Part 1)
A Raising Spirits (Part 2)
T Raising Spirits (Part 2)
A Raising Spirits (Part 3)
T Raising Spirits (Part 3)

H Orgrimmar
    ` +
    //-------------------
    // Stranglethorn Vale
    //-------------------
    `
R Grom'gol Base Camp |N|Ride zeppelin to Grom'Gol|
f Grab flight point

R Nesingwary's Expedition |N|Follow the road north, look for a little camp by the river (35,10)|
A Welcome to the Jungle
T Welcome to the Jungle

A Raptor Mastery (Part 1)
A Tiger Mastery (Part 1)
A Panther Mastery (Part 1)

C Tiger Mastery (Part 1) |N|Near the camp, slightly to the east|
C Panther Mastery (Part 1) |N|Near camp and to the north|

T Panther Mastery (Part 1)
A Panther Mastery (Part 2)

T Tiger Mastery (Part 1)
A Tiger Mastery (Part 2)

C Panther Mastery (Part 2) |N|West of camp|
C Tiger Mastery (Part 2) |N|Northwest and northeast of the camp|
C Raptor Mastery (Part 1) |N|East near the ruins (28,14)|

T Raptor Mastery (Part 1)
T Panther Mastery (Part 2)
T Tiger Mastery (Part 2)

N Make sure you are level 31 by now, otherwise grind till you are
    ` +
    //-----------------
    // Thousand Needles
    //-----------------
    `
H Orgrimmar
F The Crossroads
A The Swarm Grows (Part 1) |N|From Korran, west of windrider (51.1, 29.6)| |Z|The Barrens|
T Regthar Deathgate |N|West of the Crossroads in the bunkers (45.3, 28.4)|
A The Kolkar of Desolace |N|West of Crossroads in the bunkers (45.3, 28.4)| |Z|The Barrens|

R The Crossroads
F Freewind Post
A Family Tree

T Test of Strength
A Test of Lore (Part 1)

R The Shimmering Flats
A Hemet Nesingwary |N|From Kravel Koalbeard (77.8, 77.2)|
A Wharfmaster Dizzywig
A Rocket Car Parts
A Salt Flat Venom
A Hardened Shells
A Load Lightening
A A Bump in the Road

C A Bump in the Road
C Hardened Shells
C Load Lightening
C Rocket Car Parts
C Salt Flat Venom

T A Bump in the Road
T Hardened Shells
T Load Lightening
A Goblin Sponsorship (Part 1)
T Rocket Car Parts
T Salt Flat Venom |N|Skip the follow-up|
A Martek the Exiled
A Encrusted Tail Fins |N|Nonelite again!|

N You should be 32 now, if not grind until you are

R Gadgetzan
f Grab flight point
    ` +
    //---------
    // Desolace
    //---------
    `
H Orgrimmar
N Learn new abilities
T The Swarm Grows (Part 1) |N|Valley of Honor (75,34)| |Z|Orgrimmar|
A Alliance Relations (Part 1) |N|From Craven Drok in the Cleft of Shadow (50,47)| |Z|Orgrimmar|
T Alliance Relations (Part 1) |N|To Keldran near west gate of Orgimmar past Valley of Spirits (22,54)| |Z|Orgrimmar|
A Alliance Relations (Part 2)

F Sun Rock Retreat

T Test of Lore (Part 1) |N|Found at his tent by the path towards Ashenvale|
A Test of Lore (Part 2)
T Horde Presence |N|Walk through the cave leading to Ashenvale|
C Test of Lore (Part 2) |N|In the ghost dungeon by the Forsaken camp.|
T Test of Lore (Part 2)
A Test of Lore (Part 3)
T Test of Lore (Part 3)
A Test of Lore (Part 4)

R Desolace

R Thunder Axe Fortress |N|West of the road (55,24).|
N Kill mobs |N|Kill mobs till you get Flayed Demon Skin| |L|20310|
A The Corrupter (Part 1) |N|You get this using Flayed Demon Skin| |U|20310|
A Kodo Roundup |N|From Smeed Scrabblescrew (60.8, 61.9)|

R Ghost Walker Post |N|Follow the road northwest from Scrabblescrew's hut (56,59)|
T Family Tree
A Catch of the Day
T The Kolkar of Desolace
A Khan Dez'hepah
A Gelkis Alliance |N|Skip Magram Alliance|
T Alliance Relations (Part 2)
A Alliance Relations (Part 3)
A Befouled by Satyr
T The Corrupter (Part 1)
A The Corrupter (Part 2)
T Alliance Relations (Part 3)
A The Burning of Spirits

C Befouled by Satyr |N|(75,22)|
C The Corrupter (Part 2) |N|Shadowstalker Scalp is obtained from a Hatefury Shadowstalker|
C Khan Dez'hepah |N|In the Magram village (73,48)|
C Gelkis Alliance |N|Kill Magram centaurs until you gain Gelkis (Friendly)|
C Kodo Roundup
T Kodo Roundup

T Khan Dez'hepah |N|Back at Ghost Walker Post|
A Centaur Bounty
T Befouled by Satyr
T The Corrupter (Part 2)
A The Corrupter (Part 3)
T Gelkis Alliance |N|To Uthek the Wise at (36.3, 79.2)|
A Stealing Supplies

R Shadowprey Village |N|Follow the road west, down on the shore (24,71)|
A Hunting in Stranglethorn
A Hand of Iruxos
h Shadowprey Village
A Other Fish to Fry
A Clam Bait

C Catch of the Day |N|Loot the fish traps underwater|
f Grab flight point |N|Out on the pier|

R Ghost Walker Post
T Catch of the Day

A Sceptre of Light |N|From Azore Aldamort on the hill (38.9, 27.1)|

C The Burning of Spirits |N|In Thunder Axe Fortress (54,29)|
C Sceptre of Light
C Hand of Iruxos

T Sceptre of Light
A Book of the Ancients
A Claim Rackmore's Treasure! |N|From the chest/wrecked boat along the shore (36.1, 30.4).|

C Other Fish to Fry
C Clam Bait
C The Corrupter (Part 3) |N|Collect an Oracle Crystal from a Slitherblade Oracle|
C Claim Rackmore's Treasure! |N|Kill Drysnap Pincers and Crawlers for the silver key, Slitherblade Naga for the golden key.|

T Claim Rackmore's Treasure! |N|Find the chest behind a tree on Ranazjar Isle (30.0, 8.7)|
C Book of the Ancients |N|Clear the area around the statue, then talk to it and kill the naga that spawns.|
T Book of the Ancients |N|Back on shore at the tower|

A Bone Collector |N|From Bibbly F'utzbuckle at Kormek's Hut (62,38)|

T The Burning of Spirits |N|Back at the Ghost Walker Post.|
A Alliance Relations (Part 4)
T The Corrupter (Part 3)
A The Corrupter (Part 4)
T The Corrupter (Part 4)
A The Corrupter (Part 5)

C Bone Collector |N|In the Kodo Graveyard|
C Stealing Supplies |N|In the Magram village with Centaur Bounty (70,74)|
C Centaur Bounty

T Centaur Bounty
T Bone Collector

H Shadowprey Village

N Stable pet |C|Hunter|

T Hand of Iruxos
T Other Fish to Fry
T Clam Bait
T Stealing Supplies |N|At the Gelkis village.  Skip the follow-up|
A Ongeku

N You should be level 34 by now, otherwise grind until you are

P Claw (Rank 5) |N|Tame a Scorpashi Lasher, level 34 (36,77)| |C|Hunter|

F Camp Taurajo
    ` +
    //---------------
    // Razorfen Kraul
    //---------------
    `
N Find a group for RFK
C A Vengeful Fate
C Going, Going, Guano!
    ` +
    //-----------------
    // Dustwallow Marsh
    //-----------------
    `
R Shady Rest Inn |N|South of the road just after you enter Dustwallow Marsh|

A Suspicious Hoofprints |N|Click on hoofprints outside the inn on ground (29.7, 47.7)| |Z|Dustwallow Marsh|
A Lieutenant Paval Reethe |N|Laying on the planks on the ground (29.8, 48.2)| |Z|Dustwallow Marsh|
A The Black Shield (Part 1) |N|On top of fireplace|

R Brackenwall Village |N|North along the road (35,29)| |Z|Dustwallow Marsh|
f Brackenwall Village
T Suspicious Hoofprints
T Lieutenant Paval Reethe
T The Black Shield (Part 1)
A The Black Shield (Part 2)
T The Black Shield (Part 2) |N|Skip the follow-up|

F Orgrimmar
T Alliance Relations (Part 4) |N|Keldran in the Valley of Spirits (21,53)| |Z|Orgrimmar|
A Rig Wars
A Chief Engineer Scooty

F Ratchet
T Goblin Sponsorship (Part 1)
A Goblin Sponsorship (Part 2)
T Wharfmaster Dizzywig
A Parts for Kravel
    ` +
    //-------------------
    // Stranglethorn Vale
    //-------------------
    `
b Booty Bay
T Goblin Sponsorship (Part 2) |N|To Wharfmaster Lozgil (26.3, 73.5)|
A Goblin Sponsorship (Part 3)
h Booty Bay
T Chief Engineer Scooty
A Gnomer-gooooone!
T Gnomer-gooooone!
N Find a group for Gnomeregan
C Rig Wars


A Singing Blue Shards |N|From Crank Fizzlebub (27.1, 77.3)|
A Bloodscalp Ears
A Hostile Takeover
A Investigate the Camp
T Goblin Sponsorship (Part 3) |N|Baron Revilgaz on the boat balcony, 3rd floor of the inn (27.2, 76.9)|
A Goblin Sponsorship (Part 4)

N Keep main pet stabled |N|Continue to use your Scorpashi Lasher| |C|Hunter|

F Grom'gol Base Camp
A The Defense of Grom'gol (Part 1)
A Hunt for Yenniku

P Dash (Rank 1) |N|Tame a Stranglethorn Tiger (29,11)| |C|Hunter|

N Save all Pages |N|Save all Green Hills of Stranglethorn pages|
T Hemet Nesingwary
T Hunting in Stranglethorn
A Tiger Mastery (Part 3)
A Raptor Mastery (Part 3)
C Singing Blue Shards |N|From Basilisk on the coast far to the north (25,19)|
C Tiger Mastery (Part 3) |N|Tigers between the troll ruins and Nessingwary's camp|
C Bloodscalp Ears
C Hunt for Yenniku
C Raptor Mastery (Part 2) |N|Lashtail Raptors near Grom'gol|
C The Defense of Grom'gol (Part 1)

T Hunt for Yenniku |N|Back at Grom'gol|
A Headhunting
A Bloody Bone Necklaces
A The Vile Reef
T The Defense of Grom'gol (Part 1)

N You should be level 35, buy new water/food/repair

C Headhunting |N|(21,14) with Bloody Bone Necklaces|
C Bloody Bone Necklaces
C The Vile Reef |N|The tablet is outside the wall of the underwater city you can avoid the elite murlocs (24,24)|
C Encrusted Tail Fins |N|(24,24)|

T Headhunting
T The Vile Reef
T Bloody Bone Necklaces
A The Defense of Grom'gol (Part 2)
A Mok'thardin's Enchantment (Part 1)

T Tiger Mastery (Part 3) |N|Back at Nesingwary's Expedition|
A Tiger Mastery (Part 4)
T Raptor Mastery (Part 2)
A Raptor Mastery (Part 3)
C Tiger Mastery (Part 4)|N|Sin'Dall is on top of a nearby hill (31,17)|
T Tiger Mastery (Part 4)
A Panther Mastery (Part 3)

C Hostile Takeover |N|Venture Co. geologists near Lake Nazferiti (44,19)|
C Goblin Sponsorship (Part 4)
C Panther Mastery (Part 3) |N|Shadowmaw Panthers (48,21)|
C Mok'thardin's Enchantment (Part 1)
C The Defense of Grom'gol (Part 2) |N|Southeast of Grom'gol at the Mizjah Ruins (32,29)|

T Panther Mastery (Part 3) |N|Back at Nessingwary's, of course.|
A Panther Mastery (Part 4)

H Booty Bay |SZ|The Salty Sailor Tavern|
T Singing Blue Shards
T Hostile Takeover
T Bloodscalp Ears
T Investigate the Camp
T Goblin Sponsorship (Part 4)
A Goblin Sponsorship (Part 5)

F Grom'gol Base Camp
N You should be level 36 by now
T The Defense of Grom'gol (Part 2)
T Mok'thardin's Enchantment (Part 1)
A Mok'thardin's Enchantment (Part 2)
T Headhunting
A Trollbane
T Bloody Bone Necklaces
T The Vile Reef

F Undercity |N|Take Zeppelin|
A To Steal From Thieves |N|In the center of Undercity|
T Test of Lore |N|On the way towards Sylvanas|
A The Crown of Will (Part 1)
T Battle of Hillsbrad (Part 7)
T Going, Going, Guano!
A A Donation of Silk
T A Donation of Silk
N Learn new abilities
    ` +
    //-----------------
    // Arathi Highlands
    //-----------------
    `
F Hammerfall
h Hammerfall
T Trollbane |N|Skip Sigil of Strom for now+.|
A Call to Arms (Part 1)
A Foul Magics
A Guile of the Raptor (Part 1)
C Call to Arms (Part 1) |N|(65,63)|
A The Princess Trapped |N|At the Shards of Myzrael west of Hammerfall (62.5, 33.8)|
C The Princess Trapped |N|In the cave southeast of Hammerfall (78,37)|
T The Princess Trapped |N|In the back of the cave, up on a ledge (84.3, 30.9)|
A Stones of Binding

R Hammerfall
T Call to Arms (Part 1)
A Call to Arms (Part 2)

N Get Cresting Key |N|From Stone of East Binding (66,29)| |Q|Stones of Binding| |QO|Cresting Key: 1/1|
C To Steal From Thieves |N|At Dabyrie Farmstead (54,40)| |NODEBUG|
N Get Thundering Key |N|From Stone of Outer Binding (52,50)| |Q|Stones of Binding| |QO|Thundering Key: 1/1|

C Guile of the Raptor (Part 1)
C Call to Arms (Part 2) |N|(53,75)|

C Foul Magics |N|At Northfold Manor (31,28)|
C Stones of Binding |N|From Stone of West Binding (25,31)|
T Stones of Binding |N|At Stone of Inner Binding (36.2, 57.5)|

H Hammerfall
T Foul Magics
T The Hammer May Fall
T Guile of the Raptor (Part 1)
A Guile of the Raptor (Part 2)
T Guile of the Raptor (Part 2)
A Guile of the Raptor (Part 3)
T Guile of the Raptor (Part 3)
T Call to Arms (Part 2)
    ` +
    //------------------
    // Alterac Mountains
    //------------------
    `
F Tarren Mill
T The Crown of Will (Part 1)
A The Crown of Will (Part 2)
A Infiltration
A Prison Break In |N|From Magus Wordeen Voidglare (61.6, 20.9)| |Z|Hillsbrad Foothills|
A Stone Tokens |N|From Keeper Bel'varil|
C The Crown of Will (Part 2)
C Frostmaw |N|(37,69) up north|
C Infiltration

C Stone Tokens |N|At Dalaran (20,85)| |Z|Hillsbrad Foothills|
C Prison Break In |N|At (20,85)|

T The Crown of Will (Part 2)
T Infiltration
A Gol'dir
T Prison Break In
T Stone Tokens
A Dalaran Patrols
A Bracers of Binding

C Gol'dir |N|The jailor is out in the open - I think 8)|
T Gol'dir |N|Inside the Inn|
A Blackmoore's Legacy

T Blackmoore's Legacy
A Lord Aliden Perenolde
A WANTED: Baron Vardus

C Dalaran Patrols |N|At Dalaran (22,57)|
C Bracers of Binding
C Lord Aliden Perenolde
T Lord Aliden Perenolde
A Taretha's Gift
C WANTED: Baron Vardus
T WANTED: Baron Vardus
T Dalaran Patrols
T Bracers of Binding
T Taretha's Gift

F Undercity
T To Steal From Thieves
N Buy 3 soothing spices from the cooking center
    ` +
    //-----------------
    // Thousand Needles
    //-----------------
    `
R Orgrimmar |N|Take the zeppelin, dur!|
T Rig Wars
A The Swarm Grows (Part 2)
F The Crossroads
h The Crossroads
F Freewind Post

N Stable Pet |C|Hunter|

T The Swarm Grows (Part 2) |N|In The Shimmering Flats|
A The Swarm Grows (Part 3)

P Bite (Rank 5) |N|Tame a turtle in Shimmering Flats and feed him those mushrooms you bought.| |C|Hunter|
N Keep the turtle |C|Hunter|

T Parts for Kravel |N|At the Mirage Raceway (77.8, 77.2)|
A Delivery to the Gnomes
T Delivery to the Gnomes
T Goblin Sponsorship (Part 5)

A The Eighteenth Pilot
T The Eighteenth Pilot

A Razzeric's Tweaking
T Encrusted Tail Fins
A The Rumormonger

A Parts of the Swarm (Part 1) |U|5877| |N|Kill silithid to the south until the item drops to start this.|
C The Swarm Grows (Part 3) |N|You must kill the Drones in order for the Invaders to spawn.|
C Parts of the Swarm (Part 1)
T The Swarm Grows (Part 3)

H The Crossroads
N Abandon the turtle |N|If you want to| |C|Hunter|

T Parts of the Swarm (Part 1)
A Parts of the Swarm (Part 2)
    ` +
    //-----------------
    // Dustwallow Marsh
    //----------------
    `
F Thunder Bluff
T A Vengeful Fate
A Compendium of the Fallen
T Frostmaw |N|(61,80)| |T| |Z|Thunder Bluff|
A Deadmire

F Dustwallow Marsh
A Theramore Spies |T|
A The Black Shield (Part 3) |T|
A Hungry! |N|From Mudcrush Durtfeet, south of Brackenwall (35,37)|

A The Lost Report |N|From a dirt pile near Jarl's hut (55.4, 26.0)|
A Soothing Spices
T Soothing Spices
A Jarl Needs Eyes

C Hungry! |N|On the peninsula (58,15)|

A Stinky's Escape |N|North of the tower (46.78, 17.00).  You may want to clear the area first.|
C Stinky's Escape

C Jarl Needs Eyes |N|Kill spiders to the southwest at Darkmist Cavern (35,21).|
C The Black Shield (Part 3)
C Theramore Spies |N|Stealthed mobs all around Brackenwall Village|

T Theramore Spies |N|Back in Brackenwall Village| |T|
A The Theramore Docks |T|
T The Lost Report |T|
T The Black Shield (Part 3) |T|
A The Black Shield (Part 4) |T|
T The Black Shield (Part 4) |T|

T Hungry! |N|Southwest at Mudcrush Durtfeet (35,38)|

A The Severed Head |N|At Jarl's cabin (55,25)|
T Jarl Needs Eyes

N Grind until you are a little over half way to 39

C The Theramore Docks |N|Under the eastern pier (71,51).  Watch out for the shark!|

N Die to respawn at Brackenwall Village

T The Theramore Docks |T|
T The Severed Head |T|
A The Troll Witchdoctor |T|

H The Crossroads

F Ratchet
T Stinky's Escape |T|
    ` +
    //-------------------
    // Stranglethorn Vale
    //-------------------
    `
b Booty Bay
A The Bloodsail Buccaneers (Part 1)
A Scaring Shaky
A Venture Company Mining
h Booty Bay
T The Rumormonger |N|Up the steps|
A Dream Dust in the Swamp

F Grom'gol Base Camp
T The Troll Witchdoctor
A Marg Speaks |N|Click on the cauldron|

A Bloodscalp Clan Heads
C Bloodscalp Clan Heads
T Bloodscalp Clan Heads

C Raptor Mastery (Part 3) |N|Kill Jungle Stalkers (31,41)|
C Mok'thardin's Enchantment (Part 2) |N|Kill Jungle Stalkers (31,41)|

N Grind raptors/basilisks until level 39
C Venture Company Mining |N|(40,42)|

T Mok'thardin's Enchantment (Part 2) |N|At Grom'gol|
A Mok'thardin's Enchantment (Part 3)

C Panther Mastery (Part 4) |N|Kill Bhag'thera at either (48,20),(49,23),(47,26)|

T Panther Mastery (Part 4)
T Raptor Mastery (Part 3)

H Booty Bay |SZ|The Salty Sailor Tavern|
T Venture Company Mining
T The Bloodsail Buccaneers (Part 1) |N|NW of BB at (27,69) click on the note|
A The Bloodsail Buccaneers (Part 2)

C Scaring Shaky |N|At (32,66)|
C Mok'thardin's Enchantment (Part 3) |N|At (32,66)|

T Scaring Shaky |N|Back at Booty Bay|
A Return to MacKinley
T The Bloodsail Buccaneers (Part 2)
A The Bloodsail Buccaneers (Part 3)
T Return to MacKinley
T The Bloodsail Buccaneers (Part 3) |N|At Fleet Master Seahorn|

F Grom'gol Base Camp
T Mok'thardin's Enchantment (Part 3)
A Mok'thardin's Enchantment (Part 4)
h Grom'gol Base Camp
N Grind to level 40 on raptors/basilisks

R Undercity |N|Take the zeppelin to Undercity|
A Hearts of Zeal
A Into The Scarlet Monastery
    ` +
    //------------------
    // Scarlet Monastery
    //------------------
    `
N Find a group for all Scarlet Monastery wings
C Hearts of Zeal
C Compendium of the Fallen
C Test of Lore (Part 4)
C Into The Scarlet Monastery
A Vorrel's Revenge
    ` +
    //----------
    // Undercity
    //----------
    `
T Test of Lore (Part 4)
A Test of Lore (Part 5)
C Test of Lore (Part 5)
T Test of Lore (Part 5)
A Final Passage
T Hearts of Zeal
T Into The Scarlet Monastery
F Tarren Mill
h Tarren Mill
C Vorrel's Revenge
H Tarren Mill
T Vorrel's Revenge
F Hammerfall

N Find a group for Stromgarde and all the quests there

A The Real Threat |N|The orc lady in front of the Inn|
A Call to Arms (Part 3)
A Sigil of Strom
A Foul Magics (Part 2)

C Sigil of Strom |N|Drops off the Syndicate in Stromgarde|
T Sigil of Strom
A The Broken Sigil |N|[40, 250]|
C The Broken Sigil |N|[40, 250]|
T The Broken Sigil |N|[40, 250]|
A Sigil of Thoradin |N|[40, 25]|
T Sigil of Thoradin |N|[40, 25]|
A Sigil of Arathor |N|[41, 250]|
C Sigil of Arathor |N|[41, 250]|
T Sigil of Arathor |N|[41, 250]|
A Sigil of Trollbane |N|[42, 250]|
C Sigil of Trollbane |N|[42, 250]|
T Sigil of Trollbane |N|[42, 250]|
A Trol'kalar |N|[42, 25]|
C Trol'kalar |N|[42, 350]|
C The Real Threat |N|[40, 350]|
C Call to Arms (Part 3)
C Foul Magics (Part 2)
T The Real Threat |N|[40, 350]|
T Call to Arms (Part 3)
T Trol'kalar |N|[42, 350]|
T Foul Magics (Part 2)

R Badlands
    `
);
});
