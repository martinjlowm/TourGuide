import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide('Exalted with Factions (Part 4)', 'Exalted with Factions (Part 5)', 'Horde', () => {
  return (
    //---------
    // Badlands
    //---------
    `
T Martek the Exiled |N|Turn in at (42,52)|
A Indurium
A Barbecued Buzzard Wings
C Indurium |N|At (51,67)|
T Indurium
A News for Fizzle
A Study of the Elements: Rock (Part 1) |N|Up at (25,44)|

R Kargath
A Coyote Thieves |N|In the tower|
A Report to Helgrum
f Kargath
A Broken Alliances (Part 1)
A Badlands Reagent Run

C Barbecued Buzzard Wings
C Coyote Thieves
C Broken Alliances (Part 1)
C Badlands Reagent Run
C Study of the Elements: Rock (Part 1) |N|Lessers|

T Study of the Elements: Rock (Part 1)
A Study of the Elements: Rock (Part 2) |N|Regulars|
C Study of the Elements: Rock (Part 2)

T Study of the Elements: Rock (Part 2) |N|Skip the follow-up|
T Coyote Thieves
T Broken Alliances (Part 1)
T Badlands Reagent Run
T Barbecued Buzzard Wings

K (Elite) Dwarves at Uldaman for a quest necklace |L|7666|

H Tarren Mill

A The Crown of Will (Part 3)
C The Crown of Will (Part 3) |N|Kill the 3 elites|
T The Crown of Will (Part 3)
A The Crown of Will (Part 4)
C The Crown of Will (Part 4) |N|Kill the named elite inside the fortress|
T The Crown of Will (Part 4)
A The Crown of Will (Part 5)

F Undercity
T The Crown of Will (Part 5)
F Grom'gol Base Camp
A Split Bone Necklace
A Speaking with Nezzliok |N|From the cauldron|
A Speaking with Gan'zulah

N Buy the remaining Green Hills pages on an alt and send it to this toon
T The Green Hills of Stranglethorn

A Nothing But The Truth (Part 1) |N|Follow the road north into Duskwood (87.8,35.7)| |Z|Duskwood|
T Nothing But The Truth (Part 1)
A Nothing But The Truth (Part 2)
    ` +
    //-----------------
    // Swamp of Sorrows
    //-----------------
    `
R Swamp of Sorrows
N Clear whelps around the small lake once. |N|Will do more later (14,59)|
K Mire Lord |L|6081| |N|Nothing But The Truth (Part 2)|

K Noboru the Cudgel |L|6196|
A Noboru the Cudgel |U|6196|
T Noboru the Cudgel |N|At The Harborage (26.0,31.6)|
A Draenethyst Crystals

R Stonard |N|Grind your way there (45,54)|
h Stonard
A Lack of Surplus |T|
A Fresh Meat
f Grab flight point
T Report to Helgrum |T|
A Pool of Tears |T|

P Bite (Rank 6) |N|Tame a Deathstrike Tarantula, then abandon| |C|Hunter|
P Claw (Rank 6) |N|Tame a Silt Crawler, then abandon| |C|Hunter|

C Lack of Surplus (Part 1) |N|Just north-east of Stonard|
C Pool of Tears |N|Artifacts in the water around the big lake|
T Lack of Surplus (Part 1) |N|At Misty Reed Post on the southern part of the beach (81,80)|

A Lack of Surplus (Part 2)
C Lack of Surplus (Part 2)

K Shadow Panther |Q|Nothing But The Truth (Part 2)| |QO|Shadow Panther Heart: 5/5|

C Dream Dust in the Swamp |N|Kill Scalebane Dragons along the east and northern shores of the big lake|
C Ongeku
C Draenethyst Crystals

T Draenethyst Crystals |N|Back at The Harborage (26.0,31.6)|
T Lack of Surplus (Part 2)
A Threat From the Sea (Part 1)
T Threat From the Sea (Part 1)
A Threat From the Sea (Part 2)

C Threat From the Sea (Part 2)
C Fresh Meat |N|By the beach|

T Threat From the Sea (Part 2)
A Threat From the Sea (Part 3)
T Threat From the Sea (Part 3)

H Stonard
T Fresh Meat
T Pool of Tears |T|
A The Atal'ai Exile |T|
N You should be level 42 now
    ` +
    //-------------------
    // Stranglethorn Vale
    //-------------------
    `
F Booty Bay
A The Bloodsail Buccaneers (Part 3) |T|
A Skullsplitter Tusks |T| |N|Kebok|
T Dream Dust in the Swamp |T|
A Up to Snuff |T|
h Booty Bay |T|
A Akiris by the Bundle |T|
A Keep An Eye Out |T|

C The Bloodsail Buccaneers (Part 3) |N|Along the southern shore of Stranglethorn Vale (31,80)|
C Up to Snuff
C Keep An Eye Out |N|If you have not found this yet Brutus on the single ship has an almost 100% droprate (32.9,88.3)|

C Akiris by the Bundle |N|Off the Naga at Nek'mani Wellspring (25,63)|
C Mok'thardin's Enchantment (Part 4)

C Skullsplitter Tusks
C Split Bone Necklace
C Speaking with Nezzliok
C Speaking with Gan'zulah

N Grind until you are 2-3 bars away from 43

H Booty Bay |SZ|The Salty Sailor Tavern|
T Keep An Eye Out |T| |N|On the way out of Booty Bay|
T Akiris by the Bundle |T| |N|By the bank|
T Up to Snuff |T| |N|First floor inside the Inn|
T Skullsplitter Tusks
T The Bloodsail Buccaneers (Part 3) |T|

A Stoley's Debt |T|
A Whiskey Slim's Lost Grog |T|
A Tran'rek |T|
A Rumors for Kravel |T|

F Grom'gol Base Camp
T Mok'thardin's Enchantment (Part 4) |N|Back at Grom'gol Base Camp (32.1,29.2)|
T Speaking with Nezzliok
T Speaking with Gan'zulah
A The Fate of Yenniku
T The Fate of Yenniku
T Split Bone Necklace
A Grim Message
    ` +
    //--------
    // Uldaman
    //--------
    `
F Undercity
h Undercity
A Reclaimed Treasures

F Orgrimmar
T Parts of the Swarm (Part 2)
A Necklace Recovery
A Ripple Recovery (Part 1)
T Ripple Recovery (Part 1)
T Necklace Recovery
A Necklace Recovery, Take 2

F Badlands |N|Zeppelin to Grom'gol|

N Uldatime!
T Necklace Recovery, Take 2 |N|A dead paladin near the start of the dungeon|
A Translating the Journal (Part 1)
T Translating the Journal (Part 1) |N|Back at Kargath|
A Translating the Journal (Part 2)
T Translating the Journal (Part 2)
A Find the Gems and Power Source
A Uldaman Reagent Run
C Uldaman Reagent Run |N|Shrooms outside the dungeon (inside the cave)|
C Reclaimed Treasures
C Find the Gems and Power Source
A The Platinum Discs (Part 1) |N|At the end of the dungeon|
C The Platinum Discs (Part 1) |N|Talk to the watcher|
T The Platinum Discs (Part 1)
A The Platinum Discs (Part 2)
T Uldaman Reagent Run
T Find the Gems and Power Source
A Deliver the Gems

A Badlands Reagent Run II |O|
C Badlands Reagent Run II |O|
T Badlands Reagent Run II |O|

H Undercity
T Reclaimed Treasures
A Bring the End |N|Magic Quarter, Razorfen Downs quest|

F Orgrimmar
T Deliver the Gems
    ` +
    //---------
    // Desolace
    //---------
    `
F Thunder Bluff
T Compendium of the Fallen
T The Platinum Discs (Part 2)
A The Platinum Discs (Part 3)
T The Platinum Discs (Part 3) |N|Alchemy cow|
F Desolace
h Shadowprey Village
A Portals of the Legion

T Ongeku
K Deepstrider Giant |L|6082| |N|Don't waste too much time on this. Abandon Nothing But The Truth if necessary|

C Portals of the Legion
A The Corrupter (Part 5) |N|At Ghost Walker Post|
C The Corrupter (Part 5)

T The Corrupter (Part 5)
H Shadowprey Village
T Portals of the Legion
    ` +
    //-----------------
    // Dustwallow Marsh
    //-----------------
    `
F Brackenwall Village
A Overlord Mok'Morokk's Concern |T|
A Identifying the Brood |T|
A Army of the Black Dragon |T|
A Questioning Reethe |N|Head out east side of town and follow road south-east (40.9,36.7)|
C Questioning Reethe

C Deadmire |N|(48.8,56.8)|
C Marg Speaks |N|Kill mobs around (58,63)|
C Identifying the Brood |N|Off the whelps and hatchlings|
C Army of the Black Dragon
N Pickup the Grog |N|At the Den of Flame (38.7,65.6)| |Q|Overlord Mok'Morokk's Concern| |QO|Mok'Morokk's Grog: 1/1|
N Pickup the Strongbox |N|Inside the cave ((36.6,69.5)| |Q|Overlord Mok'Morokk's Concern| |QO|Mok'Morokk's Strongbox: 1/1|
C Overlord Mok'Morokk's Concern |N|Snuff is in the Stonemaul Ruins (44.5,66.1)|

C Razzeric's Tweaking |N|At the Zeppelin crash site|

R Brackenwall Village |N|Grind your way there|
T Questioning Reethe
T Marg Speaks |T||QID|1261|
A Report to Zor |T|
T Overlord Mok'Morokk's Concern |T|
T Army of the Black Dragon |T|
T Identifying the Brood |T|
A The Brood of Onyxia (Part 1) |T|
T The Brood of Onyxia (Part 1) |T| |N|Run back and forth, but don't do final quest|
A The Brood of Onyxia (Part 2) |T|
T The Brood of Onyxia (Part 2) |T|
    ` +
    //--------
    // Tanaris
    //--------
    `
F Gadgetzan

N Check the following steps. They might not be necessary. Skip to the WANTED quests if not
R Mirage Raceway |N|In the Shimmering Flats (77.8,77.3)| |Z|Thousand Needles|
T Rumors for Kravel
T News for Fizzle
T Razzeric's Tweaking
A Safety First (Part 1)
A Keeping Pace
T Keeping Pace |N|At Zamek, then go pick up Rizzle's Plans (79.8,77.0)| |Z|Thousand Needles|
A Rizzle's Schematics
A Back to Booty Bay |N|At Kravel Koalbeard|
T Rizzle's Schematics |N|At Pozzik|
T Final Passage

R Gadgetzan
T Safety First (Part 1) |T|
A Safety First (Part 2) |T|
T Safety First (Part 2) |N|Back at Mirage Raceway (80.2,76.2)| |Z|Thousand Needles|

A WANTED: Caliph Scorpidsting |N|Wanted poster in front of the cage| |T|
A WANTED: Andre Firebeard |T|
T Tran'rek |T|
A Gadgetzan Water Survey |N|Southwest side of town on a hill (50.2,27.5)| |T|
A Wastewander Justice |N|Between the bank and the inn (52.5,28.5)| |T|
A Water Pouch Bounty |T|
h Gadgetzan

R Steamwheedle Port
A Pirate Hats Ahoy!
A Screecher Spirits
A Southsea Shakedown
T Stoley's Debt
A Stoley's Shipment

C Water Pouch Bounty
C Wastewander Justice |N|At (64,29)|

C WANTED: Andre Firebeard |N|At Lost Rigger Cove (73.4,47.1)|
C Stoley's Shipment |N|Upstairs in the northern building (72.1,46.7)|
C Pirate Hats Ahoy!
C Southsea Shakedown
N Grind pirates until you get the ship schedule from a Pirate's Footlocker |L|9250|

H Gadgetzan
T Water Pouch Bounty
T Wastewander Justice
A More Wastewander Justice
C Gadgetzan Water Survey |N|Grind mobs along the way, at (38,29)|
T Gadgetzan Water Survey

T Pirate Hats Ahoy! |N|Back at Steamwheedle Port|
T Stoley's Shipment
T Southsea Shakedown
A Deliver to MacKinley
T WANTED: Andre Firebeard
A Ship Schedules |U|9250| |O|
T Ship Schedules |O|

C More Wastewander Justice |N|At (59,37)|
C WANTED: Caliph Scorpidsting |N|At (59,37)|

H Gadgetzan |N|Prepare for a RFD group|
T More Wastewander Justice
N Save all Wastewander Water Pouches
T WANTED: Caliph Scorpidsting
    ` +
    //--------
    // Feralas
    //--------
    `
F Freewind Post
C Bring the End |N|Find a group for RFD|
R Camp Mojache |N|West in Feralas|
A A New Cloak's Sheen |T|
A The Ogres of Feralas (Part 1) |T|
f Grab flight point
A Gordunni Cobalt |T|
A War on the Woodpaw |T|
A The Mark of Quality |T|
A A Strange Request |T|
h Camp Mojache |T|

C War on the Woodpaw |N|North of Camp Mojache (71,37)|
C Gordunni Cobalt |N|North of Camp Mojache, up the path by the waterfall (75,31)| |U|9466|
C The Ogres of Feralas (Part 1)
A The Gordunni Scroll |N|From the scrolls lying around on the floor| |U|9370|
C A New Cloak's Sheen |N|West of Camp Mojache, on the north side of the path (70,47)|

T War on the Woodpaw |N|Back at Camp Mojache| |T|
A Alpha Strike |T|
T Gordunni Cobalt |T|
T The Ogres of Feralas (Part 1) |T|
A The Ogres of Feralas (Part 2) |T|
T The Gordunni Scroll |T|
A Dark Ceremony |T|
T A New Cloak's Sheen |T|
A A Grim Discovery (Part 1) |T|

C Alpha Strike |N|Southwest of Camp Mojache (72,56)|
T Alpha Strike |T|
A Woodpaw Investigation |T|
C Woodpaw Investigation |N|Southwest of Camp Mojache (71.6,55.9)|
T Woodpaw Investigation
A The Battle Plans

C A Grim Discovery (Part 1) |N|West of Camp Mojache (66,46)|

T The Battle Plans |T|
A Zukk'ash Infestation |T|
A Stinglasher |T|
T A Grim Discovery (Part 1) |T|
A A Grim Discovery (Part 2) |T|

C Stinglasher |N|Both in the hive area south of Camp Mojache (74,62)|
C Zukk'ash Infestation
C Screecher Spirits |N|South of Dire Maul (55,56)| |U|10699|
C The Ogres of Feralas (Part 2) |N|South of Dire Maul (59,68)|
C Dark Ceremony |N|In the ruins to the south (59,68)|
N Pick up a Hippograph Egg |N|Around (55,76) in nests| |L|8564|
C The Mark of Quality |N|Southwest of Dire Maul (55.4,56.4)|

T The Mark of Quality |N|Back at Camp Mojache| |T|
T Stinglasher |T|
T Zukk'ash Infestation |T|
A Zukk'ash Report |T|
T The Ogres of Feralas (Part 2) |T|
T Dark Ceremony |T|
A The Gordunni Orb |T|

F Orgrimmar
T Zukk'ash Report |N|In The Drag (56,46)| |Z|Orgrimmar| |T|
A Ripple Recovery (Part 1) |N|From Dran Droffers in The Drag (59.4, 36.9)| |Z|Orgrimmar| |T|
T Ripple Recovery (Part 1) |N|The other guy in the same building| |T|
A Ripple Recovery (Part 2) |T|
T A Grim Discovery (Part 2) |T| |N|At Belgrom Rockmaul in the Valley of Honor (75,34)| |Z|Orgrimmar| |T|
A Betrayed (Part 1) |T|
T A Strange Request |N|In the Cleft of Shadow (49.6,50.6)| |Z|Orgrimmar| |T|
A Return to Witch Doctor Uzer'i
T Report to Zor |N|In the Valley of Wisdom (38.9,38.4)| |Z|Orgrimmar| |T|
A Service to the Horde |T|
T Service to the Horde |T|
T The Gordunni Orb |N|In the Valley of Spirits (39,86)| |Z|Orgrimmar| |T|

A A Donation of Silk (Darkspear Trolls) |T|
T A Donation of Silk (Darkspear Trolls) |T|
A A Donation of Mageweave (Darkspear Trolls) |T|
T A Donation of Mageweave (Darkspear Trolls) |T|

A A Donation of Silk (Orgrimmar) |T|
T A Donation of Silk (Orgrimmar) |T|
A A Donation of Mageweave (Orgrimmar) |T|
T A Donation of Mageweave (Orgrimmar) |T|

N Buy mount now if you have the gold!

H Camp Mojache
T Return to Witch Doctor Uzer'i
A Natural Materials
A Testing the Vessel
C Natural Materials
N Grind Hippogryphs until Natural Materials is complete
A Find OOX-22/FE! |U|8705| |O|
C Find OOX-22/FE! |O|
T Find OOX-22/FE! |O|
N Grind to level 46 on Hippogryphs
H Camp Mojache
T Natural Materials
F Thunder Bluff
T Deadmire
A Portents of Uldum |N|By Sage Truthseeker, lowest level|
T Portents of Uldum
N Learn new abilities
    ` +
    //--------
    // Azshara
    //--------
    `
F Splintertree Post |N|Ashenvale|
R Azshara |N|Go east dur!|

A Spiritual Unrest |N|To the south of the road as you enter the zone (11.4,78.2)|
A A Land Filled with Hatred
C Spiritual Unrest |N|Ghosts in the ruins north of the road (17,66)|
C A Land Filled with Hatred |N|Further north, more ruins containing satyrs (20,62)|
T Spiritual Unrest
T A Land Filled with Hatred

R Valormok |N|North of the road, on the mountain's edge (21,52)|
T Betrayed (Part 1)

f Grab flight point
F Orgrimmar
A Shadowshard Fragments
N Train abilities
h Orgrimmar
N Try to find a group for Maraudon
F Desolace
A Vyletongue Corruption |N|The fishtown|
A The Pariah's Instructions |N|Some centaur at the southern Desolace, south west of the coven (Centaur Pariah)|
A Twisted Evils |N|The undead lady in the house to the north|
K The Nameless Prophet |L|17757|
K Kolk |L|17761| |N|He's at the Scepter entrance|
K Gelk |L|17762| |N|He's in the purple zone, outside the instance|
C Shadowshard Fragments |N|Shadowshard Rumblers in the purple zone (level 40 elites)|
A Legends of Maraudon |N|A Dryad just outside of the orange part of the instance|
N Fill the vial for Vyletongue Corruption |L|17696|
K Magra |L|17763| |N|He's in the orange zone, outside the instance up the ramp instead of going inside the instance|
K Veng |L|17765| |N|He's in the orange zone, inside the instance|
C Vyletongue Corruption
C Twisted Evils
C Legends of Maraudon |N|From the Water Elemental in orange and the Satyr in purple|
C The Pariah's Instructions |N|The room past the Satyr, click one of the gems to complete|
T Legends of Maraudon |N|At Celebras the Redeemed|
A The Scepter of Celebras
C The Scepter of Celebras
T The Scepter of Celebras

A Seed of Life |N|After princess is dead - To be turned-in in Moonglade|
N Die and res
T The Pariah's Instructions
T Twisted Evils
T Vyletongue Corruption
H Orgrimmar
T Shadowshard Fragments
F Undercity
A Lines of Communication |N|Magic Quarter|
T Bring the End
A Errand for Apothecary Zinge (Part 1)
T Errand for Apothecary Zinge (Part 1) |N|Out in other room|
A Errand for Apothecary Zinge (Part 2)
T Errand for Apothecary Zinge (Part 2)
F Tarren Mill
h Tarren Mill
    ` +
    //----------------
    // The Hinterlands
    //----------------
    `
R The Hinterlands
T Ripple Recovery (Part 2) |N|(26.7,48.6)|
A A Sticky Situation

R Revantusk Village |N|(77,80)|
A Vilebranch Hooligans
A Cannibalistic Cousins
A Message to the Wildhammer
A Stalking the Stalkers
A Hunt the Savages
A Avenging the Fallen

C Whiskey Slim's Lost Grog
C Vilebranch Hooligans
C Cannibalistic Cousins
C A Sticky Situation
C Stalking the Stalkers
C Hunt the Savages
C Testing the Vessel
C Avenging the Fallen
C Lines of Communication
C Message to the Wildhammer
A Rin'ji is Trapped! |N|(31,48)|
C Rin'ji is Trapped! |N|(31,48)|
C Grim Message

A Venom Bottles
A Find OOX-09/HL! |U|8704| |O|
C Find OOX-09/HL! |O|
T Find OOX-09/HL! |N|(49,48)|
T Rin'ji is Trapped! |N|Off the coast, on a small island (86,59)|
A Rin'ji's Secret

R Revantusk Village
T Vilebranch Hooligans
T Cannibalistic Cousins
T Message to the Wildhammer
T Stalking the Stalkers
T Hunt the Savages
T Avenging the Fallen

f Grab flight point
F Tarren Mill
T Venom Bottles
A Undamaged Venom Sac

R The Hinterlands

T A Sticky Situation
A Ripple Delivery
C Undamaged Venom Sac
T The Atal'ai Exile
A Return to Fel'Zerul
H Tarren Mill
T Undamaged Venom Sac
A Consult Master Gadrin |N|[45, 150]|
F Undercity

A Into the Field
A Seeping Corruption (Part 1) |N|Apothecarium Quarter|
A A Donation of Silk (Undercity) |T|
T A Donation of Silk (Undercity) |T|
A A Donation of Mageweave (Undercity) |T|
T A Donation of Mageweave (Undercity) |T|

T Lines of Communication
T Rin'ji's Secret
A Oran's Gratitude
C Oran's Gratitude
T Oran's Gratitude
    ` +
    //-------------------
    // Stranglethorn Vale
    //-------------------
    `
F Orgrimmar

T Ripple Delivery
A Necklace Recovery, Take 3 |N|In the drag|

F Booty Bay |N|To Grom'gol and fly from there|

T Whiskey Slim's Lost Grog |T|
T Back to Booty Bay |T|
A Zanzil's Secret |T|
T Deliver to MacKinley |T|
A Voodoo Dues |T| |N|In the hut next to the Inn.|
T Rescue OOX-09/HL!
T Rescue OOX-09/FE! |N|Don't think we had space for this one earlier.|

F Grom'gol Base Camp

T Grim Message
A The Singing Crystals
A Raptor Mastery (Part 4) |N|At the Nesingwary camp|
C Raptor Mastery (Part 4) |N|Tethis kill at (28,44)|
T Raptor Mastery (Part 4) |N|At Nessingwary's Camp|
A Big Game Hunter
C Big Game Hunter |N|Can you solo? He's on top of a small hill south-east of Grom'gol on the other side of the river (38,35)|
C The Singing Crystals |N|In the basilisk cave|

R Grom'gol Base Camp
T The Singing Crystals
A The Mind's Eye
C The Mind's Eye |N|Find a group for this one.|

T Big Game Hunter |N|Back at Nessingwary's Camp|

R Grom'gol Base Camp
T The Mind's Eye
A Saving Yenniku |N|Wait for him to do his thing+.|

N Ensure you get an Ichor of Undeath (1) |C|Priest|
C Saving Yenniku |N|Long run to the Zanzil beach|
C Voodoo Dues |N|Two of the named mobs are at the ruins just opposite the arena entrance. The third is on the beach (39,58)|
C Zanzil's Secret

R Booty Bay
T Voodoo Dues |T|
T Zanzil's Secret |T|
h Booty Bay |T|
A The Bloodsail Buccaneers (Part 5) |T|
A The Captain's Chest |T|

C The Captain's Chest |N|On the beach east of Booty Bay, head north when you reach the sea (36.3,69.7)|
N Loot the bottles on the beach |L|4098|
A Message in a Bottle (Part 1) |U|4098|
T Message in a Bottle (Part 1) |N|On the large island east of Booty Bay (38.5, 80.6)|
A Message in a Bottle (Part 2)
C Message in a Bottle (Part 2) |N|South-east side of the island (40.4, 82.7)|
T Message in a Bottle (Part 2)
C The Bloodsail Buccaneers (Part 5) |N|In the three ships off the coast - make sure to check downstairs in each one for the riddle.|
N Loot Cortello's Riddle but don't start it yet. |L|4056|

H Booty Bay |SZ|The Salty Sailor Tavern| |N|or die!|
T The Bloodsail Buccaneers (Part 5) |T|
T The Captain's Chest |T|
N Before you leave+.  |N|Make sure you have a stack of Silk Cloth|
    ` +
    //--------------
    // Searing Gorge
    //--------------
    `
F Kargath
T Necklace Recovery, Take 3
A Report to Helgrum
R Searing Gorge |N|West!|
A Caught! |N|Guy in the outhouse southeast of map (65,62)|
T Caught!
A Ledger from Tanaris
N Loot the ledger |L|11727|
N Kill Glassweb Spiders |Q|Ledger from Tanaris| |QO|Solid Crystal Leg Shaft: 20/20|
A Divine Retribution |N|Talk to Kalaran Windblade at (39,38)|
T Divine Retribution |N|Talk to him to complete quest|
A The Flawless Flame
R Thorium Point
A WANTED: Overseer Maltorius
A STOLEN: Smithing Tuyere and Lookout's Spyglass
A JOB OPPORTUNITY: Culling the Competition
A Curse These Fat Fingers
A Fiery Menace!
A Incendosaurs? Whateverosaur is More Like It
A What the Flux?

C Fiery Menace! |N|West side of zone|
C Curse These Fat Fingers |N|Just south of Thorium Point|
C STOLEN: Smithing Tuyere and Lookout's Spyglass |N|Just south of Thoriun Point|
C The Flawless Flame

T The Flawless Flame |N|At Kalaran Windblade (39,38)|
A Forging the Shaft

C Forging the Shaft |N|Dark Iron taskmasters and slavers of the cauldron (64,61)|
C JOB OPPORTUNITY: Culling the Competition |N|SE of Thorium, just east of prev quest|
C WANTED: Overseer Maltorius
C What the Flux?
C Incendosaurs? Whateverosaur is More Like It
A The Key to Freedom |U|11818| |O|
T The Key to Freedom |N|At the outhouse (65,62)| |O|

T Forging the Shaft |N|Kalaran Windblade (39,38)|
A The Flame's Casing
C The Flame's Casing |N|Around (24,36) kill til item drops|
T The Flame's Casing |N|Kalaran Windblade (39,38)|
A The Torch of Retribution (Part 1)
C The Torch of Retribution (Part 1)
T The Torch of Retribution (Part 1)
A The Torch of Retribution (Part 2)
C The Torch of Retribution (Part 2) |N|Just pick up the torch on the ground|
T The Torch of Retribution (Part 2)
A Squire Maltrake
T Squire Maltrake
A Set Them Ablaze!
C Set Them Ablaze! |N|north=(33,54) south=(44,61) east=(50,54) west=(35,60)|
T Set Them Ablaze!
A Trinkets+. |N|click on the chest on the ground (38,38)|
T Trinkets+. |N|Click on the chest again|
N Keep the Black Dragonflight Molt in your inventory as you will need for a later quest
N Make sure you have 20 solid crystal leg shafts

R Thorium Point
T WANTED: Overseer Maltorius
T Curse These Fat Fingers
T Fiery Menace!
T Incendosaurs? Whateverosaur is More Like It
T STOLEN: Smithing Tuyere and Lookout's Spyglass
T JOB OPPORTUNITY: Culling the Competition |N|SE of Thorium, just east of prev quest|
T What the Flux?

R Burning Steppes |N|You have to go through Black Rock Mountain, SW of map|
f Get the FP |N|at (65,25)| |Z|Burning Steppes|
    ` +
    //-----------------
    // Swamp of Sorrows
    //-----------------
    `
F Stonard |N|Swamp of Sorrows|
T Report to Helgrum
h Stonard
A Fall From Grace
T Fall From Grace
A The Disgraced One |N|Talk to Fallen Hero of the Horde (34,66) until he gives you the quest|
A Cortello's Riddle (Part 1) |U|4056|
T Cortello's Riddle (Part 1) |N|Under the bridge (22,48)|
A Cortello's Riddle (Part 2)

T Nothing But The Truth (Part 2)
A Nothing But The Truth (Part 3)
T Nothing But The Truth (Part 3)
A Nothing But The Truth (Part 4)
H Stonard

T Nothing But The Truth (Part 4)
T Return to Fel'Zerul |N|Back at Stonard|
T The Disgraced One
A The Missing Orders
T The Missing Orders |N|At the Inn|
A The Swamp Talker

A Continued Threat |N|At the orc camp|
C The Swamp Talker |N|At the cave at (65,78)|
C Continued Threat
T Continued Threat
K Jarquia |N|At around (94,50) or (92,65)|

N Die on purpose and spirit ress

T The Swamp Talker |N|At Fallen Hero of the horde (34,66)|
A A Tale of Sorrow |N|Talk to him|
T A Tale of Sorrow |N|talk talk|

R Stonard
F Grom'gol Base Camp
T Saving Yenniku
F Booty Bay

R Sen'jin Village |N|Jump off the boat as soon as the loadscreen is over.|
T Consult Master Gadrin
A The Spider God
R Ratchet

F Brackenwall Village |N|Boat to Ratchet and fly down|
A The Brood of Onyxia |T|

N Get Overdue Package |N|From the zeppelin crash (54,55) for "Ledger from Tanaris"| |Z|Dustwallow Marsh| |L|11724|
C The Brood of Onyxia |N|Eggs at (53,72) and (48,75)| |Z|Dustwallow Marsh|
T Cortello's Riddle (Part 2) |N|West to Bloodfen Cave (31,67)| |Z|Dustwallow Marsh|
A Cortello's Riddle (Part 3)

T The Brood of Onyxia |N|Back at Brackenwall Village| |T|
A Challenge Overlord Mok'Morokk |T|
C Challenge Overlord Mok'Morokk |N|Elite 45| |T|
T Challenge Overlord Mok'Morokk |T|

F Gadgetzan
N Turn in the obtained egg at the "The Super Egg-O-Matic" machine
A A Bad Egg |N|Presumably+.|
A An Extraordinary Egg
A A Fine Egg
T A Bad Egg
T An Extraordinary Egg
T A Fine Egg
T Into the Field
A Slake That Thirst
C Slake That Thirst
T Slake That Thirst
A Tanaris Field Sampling |N|An item from the previously completed quest|
C Tanaris Field Sampling
T Tanaris Field Sampling
A Return to Apothecary Zinge
T Ledger from Tanaris
    ` +
    //-----------------
    // Feralas
    //-----------------
    `
F Camp Mojache
T Testing the Vessel
A Hippogryph Muisek
A Improved Quality
A Vengeance on the Northspring
A Dark Heart
h Camp Mojache

C Hippogryph Muisek
H Camp Mojache
T Hippogryph Muisek

A Faerie Dragon Muisek
C Faerie Dragon Muisek
T Faerie Dragon Muisek

A Treant Muisek
C Treant Muisek
T Treant Muisek

A Mountain Giant Muisek
P Stable pet |C|Hunter|
P Claw (Rank 7) |C|Hunter| |N|Tame an Ironfur Patriarch|
A Zapped Giants

C Improved Quality
K Yetis for Perfect Yeti Hide |L|18972|
A Perfect Yeti Hide |U|18972|
C Vengeance on the Northspring
C Dark Heart
C Mountain Giant Muisek
C Zapped Giants

T Zapped Giants
H Camp Mojache
P Abandon bear, get cat back out |C|Hunter|
T Mountain Giant Muisek
A The Sunken Temple |T| |N|From the Witch Doctor - requires level 46|
A Weapons of Spirit
T Weapons of Spirit
T Improved Quality
T Perfect Yeti Hide
T Vengeance on the Northspring
T Dark Heart
    ` +
    //--------
    // Tanaris
    //--------
    `
F Gadgetzan |N|Tanaris|
T Screecher Spirits |N|At Steamwheedle Port|
A The Prophecy of Mosh'aru
A Divino-matic Rod
A Troll Temper |N|From the Night Elf|
A Gahz'rilla |N|If the group has the Mallet - probably not at this point (Shimmering Flats)|
N Find a group for Zul'Farrak
C Troll Temper
C The Prophecy of Mosh'aru
C The Spider God
C Scarab Shells
C Divino-matic Rod
C Gahz'rilla |N|Skip if the group doens't have the mallet|
T Gahz'rilla
T Scarab Shells
A Thistleshrub Valley
A The Super Egg-O-Matic |N|Machine in Gadgetzan|
T The Super Egg-O-Matic |N|Egg from feralas|
A The Dunemaul Compound |N|Gnome next to/behind the Inn|
h Gadgetzan
T Divino-matic Rod
A The Thirsty Goblin
A Noxious Lair Investigation
T Troll Temper
T The Sunken Temple |N|at (52,45)|
A The Stone Circle
A Gahz'ridian

C The Dunemaul Compound |N|(46,66) and (40,73), Gor'marok is in cave (40,58)|
C Gahz'ridian
C Noxious Lair Investigation |N|At (34,47)|
C Thistleshrub Valley |N|(28,65) with next one|
C The Thirsty Goblin |N|At (28,65)|

A Tooga's Quest
C Tooga's Quest |N|Long escort quest ends at Torta (66,25)|
T Tooga's Quest
T The Prophecy of Mosh'aru
A The Ancient Egg

H Gadgetzan
T Thistleshrub Valley
T The Dunemaul Compound |N|Turn left|
T The Thirsty Goblin
A In Good Taste
T In Good Taste
A Sprinkle's Secret Ingredient
T Noxious Lair Investigation
A The Scrimshank Redemption


C Tanaris Field Sampling
T Gahz'ridian |N|At (52,45)|
A Find OOX-17/TN! |U|8623| |O|
T Find OOX-17/TN! |O| |N|Skip the follow-up unless you want to do a long crappy escort.|
C The Scrimshank Redemption |N|Cave at (53,70), keep making rights|
N Die on purpose

T The Scrimshank Redemption
A Insect Part Analysis (Part 1)
T Insect Part Analysis (Part 1)
A Insect Part Analysis (Part 2)
T Insect Part Analysis (Part 2)
A Rise of the Silithid
    ` +
    //--------
    // Azshara
    //--------
    `
F Orgrimmar
h Orgrimmar
R Sen'jin Village
T The Spider God
A Summoning Shadra
R Orgrimmar

F Azshara
A Stealing Knowledge
C Stealing Knowledge |N|At Ruins of Eldarath (36,54)|
C Seeping Corruption (Part 1) |N|Tide Pools at: 1-(47,61) 2-(47,51) 3-(48,48) 4-(47,46)|
T Stealing Knowledge
A Delivery to Archmage Xylem
A Delivery to Magatha
A Delivery to Jes'rimon
A Delivery to Andron Gant
T Delivery to Archmage Xylem |N|Take teleporter at (28,50)|
A Xylem's Payment to Jediga

F Thunder Bluff
T Delivery to Magatha |N|Elder Rise|
A Magatha's Payment to Jediga

H Orgrimmar
T Rise of the Silithid |N|In the Drag (56,46)| |Z|Orgrimmar|
A March of the Silithid
T Delivery to Jes'rimon |N|Other side of the Drag (55,34)| |Z|Orgrimmar|
A Jes'rimon's Payment to Jediga
A Bone-Bladed Weapons

N Learn new abilities

F Undercity
T Delivery to Andron Gant |N|Apothecarium Quarter|
A Andron's Payment to Jediga
T Seeping Corruption (Part 1)
T Return to Apothecary Zinge
A Seeping Corruption (Part 2)
T Seeping Corruption (Part 2)
A +. and a Batch of Ooze |N|You can disband this quest when you have a sufficient amount of items if quest space becomes too tight. Reaccept it later to complete it.|
    ` +
    //------------
    // Hinterlands
    //------------
    `
F Revantusk Village
A Snapjaws, Mon!
A Gammerita, Mon!
A Lard Lost His Lunch

C Snapjaws, Mon!
C Gammerita, Mon!
T Cortello's Riddle (Part 3) |N| At (80,46) a little chest in the water|
C Lard Lost His Lunch |N| (84,42)|
T Snapjaws, Mon!
T Gammerita, Mon!
T Lard Lost His Lunch

N Try to find a group for Jinthalor
C The Ancient Egg

C Sprinkle's Secret Ingredient |N|(41,60)|
C Summoning Shadra |N|Elite, but can be kited up and down the stairs (R1 SW:P)|
A Jammal'an the Prophet |N|Maybe+.|
T Summoning Shadra |N|Tarren Mill|

H Orgrimmar
B [Mithril Casing] |N|From the AH, or find an Engineer|
F Azshara
T Magatha's Payment to Jediga
T Jes'rimon's Payment to Jediga
T Andron's Payment to Jediga
T Xylem's Payment to Jediga

F The Crossroads
h The Crossroads
F Ratchet
C The Stone Circle
A Volcanic Activity
    ` +
    //--------------
    // Blasted Lands
    //--------------
    `
F Stonard
R Blasted Lands
A A Boar's Vitality
A Snickerfang Jowls
A The Basilisk's Bite
A The Decisive Striker
A Vulture's Vigor

C The Decisive Striker
T The Decisive Striker
C A Boar's Vitality
C Snickerfang Jowls
C The Basilisk's Bite
C Vulture's Vigor

T A Boar's Vitality
T Snickerfang Jowls
T The Basilisk's Bite
T Vulture's Vigor

A Everything Counts In Large Amounts |L|10593| |O|
T Everything Counts In Large Amounts |O|
A Flawless Draenethyst Sphere |L|8244| |O| |N|Highly unlikely, but oh well|
T Flawless Draenethyst Sphere |O|

H The Crossroads
F Thunder Bluff
A Seeing What Happens |N|Elder Rise|

F Gadgetzan
A Super Sticky
T Sprinkle's Secret Ingredient
A Delivery for Marin
T March of the Silithid
A Bungle in the Jungle
T Delivery for Marin
A Noggenfogger Elixir
T Noggenfogger Elixir
T The Ancient Egg
T The Stone Circle |N| At (52,45) in Tanaris| |Z|Tanaris|
T Seeing What Happens
A The Stone Watcher
T The Stone Watcher
A Return to Thunder Bluff
    ` +
    //---------------
    // Un'goro Crater
    //---------------
    `
R Un'Goro Crater |N|Southwest corner of the zone (26,52)| |Z|Tanaris|
N Look for loot+. |N|There are many loot nodes scattered across this zone.  You'll need 7 of each color of power crystals.  Also loot any dirt piles or sprouts you find.|

A The Apes of Un'Goro |N|Tauren on the hill to the left of the ramp from Tanaris (69,77)|
A The Fare of Lar'korwi

A It's a Secret to Everybody (Part 1) |N|Find the wrecked raft (63.04, 68.54)|
T It's a Secret to Everybody (Part 1) |N|Just underwater nearby|
A It's a Secret to Everybody (Part 2)
C The Fare of Lar'korwi |N|Find the Threshadon Carcass (68.8, 56.7) amongst the raptors.|

T The Fare of Lar'korwi
A The Scent of Lar'korwi
C The Scent of Lar'korwi |N|Find the egg nests and stand on them (60,72) (62,65) (63,77) (67,73) (67,67) (58,78) (70,61)|
T The Scent of Lar'korwi
A The Bait for Lar'korwi
A Williden's Journal |U|11116| |N|Kill raptors until the journal drops to start this quest|

N Find 7 Red power crystals |L|11186 7|
N Find 7 Yellow power crystals |L|11188 7|
N Find 7 Green power crystals |L|11185 7|
N Find 7 Blue power crystals |L|11184 7|

A Chasing A-Me 01 (Part 1) |N|At the entrance to Marshal's Refuge (46,13)|
A Shizzle's Flyer
A Lost! |N|Near the sign|
A Beware of Pterrordax
A Roll the Bones
A Alien Ecology
T Williden's Journal
A Expedition Salvation
T It's a Secret to Everybody (Part 2)
A It's a Secret to Everybody (Part 3)
A Larion and Muigin |N|Hidden on the north side of the valley|
f Get flight point |N|Up on the hill, easy to miss|
A Crystals of Power |N|In the back of the cave|
T Crystals of Power
A The Northern Pylon

N Kill stuff+. |N|Kill any bloodpetals, diametradons, and pterrordaxes you come across - save all the soil you find for repz!|

C The Northern Pylon |N|Along the north edge of the zone to the east (56.46, 12.48).  Kill pterrordaxes here.|
T Chasing A-Me 01 (Part 1) |N|East in the gorilla cave (63,17).  Skip the follow-up.|
A Chasing A-Me 01 (Part 2)
C Chasing A-Me 01 (Part 2)
C The Apes of Un'Goro
C Super Sticky |N|At the tarpits in the north half of the zone|
T Chasing A-Me 01 (Part 2)
T The Northern Pylon
A The Eastern Pylon
A The Western Pylon
N Find [Crate of Foodstuffs] |N|At the abandoned camp in the east side of the zone (68.52, 36.59)| |L|11113|
C Larion and Muigin |N|Kill lasher around the camp area.  Also kill any diemetradons or pterrordaxes you come across|
C The Eastern Pylon |N|To the east, of course (76,51)|
C The Bait for Lar'korwi |N|Use the meat and mixture at the flat rock behind the east pylon (79.9, 49.9)| |U|11568|
T The Bait for Lar'korwi
T The Apes of Un'Goro |N|Skip the follow-up|

C Alien Ecology |N|Down in the Slithering Scar (50,77).  Head left inside to the big room (48.62, 85.33), use the vial| |U|11132|
N Kill bugs for [Gorishi Scent Gland] |L|11837|
C Expedition Salvation |N|At the other camp (38.5, 66.0)|
C The Western Pylon |N|(23,59)|
A Finding the Source |N|From a goblin near the hot springs (30.9, 50.4)|
C Bone-Bladed Weapons

C Roll the Bones |N|Scattered all over the west half of the zone and drop from diemetradons.  Kill pterrordaxes over here too.|
C Beware of Pterrordax |N|You can find the Frenzied Pterrordaxes all over the west half of the zone, more towards the northwest part.  Normal Pterrordaxes are in the south half of the zone, and a few near the North pylon.|
C Shizzle's Flyer |N|Kill diemetradons and pterrordaxes, all over the zone.|

C Finding the Source |N|At the volcano in the center of the zone.  Use the thermometer at "Hot Spots" until you complete the quest.| |U|12472|
C Volcanic Activity |N|Kill elementals, mainly around the cave on the south side of the volcano.|
T Lost! |N|In the cave on the south side of the volcano (51,49)|
A A Little Help From My Friends
C A Little Help From My Friends |N|Use the canteen on him if he faints. Run back to Marshal's Refuge.| |U|11804|
T Shizzle's Flyer
T A Little Help From My Friends
T Beware of Pterrordax
T Roll the Bones
T Alien Ecology
T Expedition Salvation
T The Eastern Pylon
T The Western Pylon
T Larion and Muigin
A Marvon's Workshop
A Making Sense of It
T Making Sense of It

T Finding the Source |N|Back at the hot springs (30.9, 50.4)|
A The New Springs

K Oozes |L|12235 30|

R Silithus |N|Take the path up out of the crater in the northwest corner of the zone (29,22)|
R Cenarion Hold |N|Follow the road|
f Cenarion Hold
F Gadgetzan |N|FP is up the big hill|
T Super Sticky
T Bungle in the Jungle
A The God Hakkar |N|Steamwheedle Port|
A Into the Depths |N|Maybe+.|

F Camp Mojache
A The Strength of Corruption

F Thunder Bluff
T Return to Thunder Bluff
A A Future Task
A Un'Goro Soil |N|On Elder Rise|
T Un'Goro Soil
A Morrowgrain Research (Part 1)
T Morrowgrain Research (Part 1)
A Morrowgrain Research (Part 2)
T Morrowgrain Research (Part 2)
A Morrowgrain to Thunder Bluff |N|Maybe buy some off the AH|
T Morrowgrain to Thunder Bluff
T A Future Task

A Cenarion Aid |C|Priest|
N Learn new abilities

H The Crossroads

F Ratchet
T Volcanic Activity
T Marvon's Workshop
A Zapper Fuel
F Orgrimmar
F Undercity
A A Sample of Slime+. |N|You can disband this quest when you have a sufficient amount of items if quest space becomes too tight. Reaccept it later to complete it.|
A Vivian Lagrave
F Grom'gol Base Camp

F Kargath
T Vivian Lagrave
A Dreadmaul Rock |N|From the Troll, cannot be accepted if he's patrolling :(|
A The Rise of the Machines (Part 1)
    ` +
    //----------------
    // Burning Steppes
    //----------------
    `
F Burning Steppes
A Broodling Essence
A Tablet of the Seven

C Broodling Essence |N|To the East, grind on the dragon whelps|

A A Taste of Flame |N| In the cave (94,31)|
T A Taste of Flame
T Dreadmaul Rock |N| At (79,45)|
A Krom'Grul

C Krom'Grul |N| He has two spawn points in either cave|
C The Rise of the Machines (Part 1)
C Tablet of the Seven |N| Loc: (54,40)|

T Broodling Essence
A Felnok Steelspring
T Tablet of the Seven

F Kargath
T Krom'Grul
A Broken Alliances (Part 2)
T The Rise of the Machines (Part 1)
A The Rise of the Machines (Part 2)
T The Rise of the Machines (Part 2) |N|In the Badlands (25,44)| |Z|Badlands|
C Broken Alliances (Part 2) |N|To the far east in the Badlands|
T Broken Alliances (Part 2)

H The Crossroads
F Orgrimmar
h Orgrimmar
T Bone-Bladed Weapons |N|(52,34)| |Z|Orgrimmar|
    ` +
    //--------
    // Azshara
    //--------
    `
F Azshara
A Betrayed (Part 2)
T The Hunter's Charm |C|Hunter|
A Courser Antlers |C|Hunter|
T Cenarion Aid |C|Priest| |N|Somewhere close to the furbolgs|
A Of Coursers We Know |C|Priest|
A Kim'jael Indeed!

C Courser Antlers |C|Hunter|
C Of Coursers We Know |C|Priest|
C Betrayed (Part 2)
T Betrayed (Part 2)
A Betrayed (Part 3)
C Betrayed (Part 3)
C Kim'jael Indeed!

T Kim'jael Indeed!
A Kim'jael's "Missing" Equipment
T Of Coursers We Know |C|Priest|
A The Ichor of Undeath |C|Priest|
T The Ichor of Undeath |C|Priest|
A Blood of Morphaz |C|Priest|

C Kim'jael's "Missing" Equipment |N|From the Naga at the Ruins of Eldarath|

T Courser Antlers |C|Hunter|
T Wavethrashing |C|Hunter|
T Kim'jael's "Missing" Equipment

N Grind to level 54 on Blood Elves

T Betrayed (Part 3)
A Betrayed (Part 4)
F Orgrimmar
T Betrayed (Part 4) |N|Valley of Honor|
N Train new abilities
    ` +
    //--------
    // Felwood
    //--------
    `
F Splintertree Post

R Felwood |N|Head west out of town.  At the fork near the retreat head north out of the zone (55.75, 29.50)| |Z|Ashenvale|

A Timbermaw Ally
C Timbermaw Ally
T Timbermaw Ally
A Speak to Nafien

R Emerald Sanctuary |N|Just ahead, north of the road (51,81)|
A Forces of Jaedenar
A Verifying the Corruption

A Cleansing Felwood |N|On the west side of the road to the north (46.8, 83.1)|

K Cursed Oozes |N|Follow the road south to the Ruins of Constellas (40,69).  Get 30+. what fun.| |L|12230 30|
C Forces of Jaedenar |N|To the west, outside the caves (37,59)|

R Bloodvenom Post |N|(34,52)|
A Wild Guardians (Part 1)
f Bloodvenom Post

C Verifying the Corruption |N|North at Shatter Scar Vale (40.52, 41.78).  Watch out for the elite infernals!|
C Cleansing Felwood |N|Kill elementals at Irontree Cavern (55,17)|
C The Strength of Corruption

T Speak to Nafien |N|North, at the end of the road (64.8,8.2)|
A Deadwood of the North
C Deadwood of the North
T Deadwood of the North
A Speak to Salfa

N Grind till somewhat friendly with the furbolgs 8)
R Moonglade
f Get le FP!
T Seed of Life |N|From Maraudon|
R Winterspring |N|Grind through the cave!|
    ` +
    //-------------
    // Winterspring
    //-------------
    `
T Speak to Salfa
T The New Springs |N|To the south near the hot springs (31.27, 45.20)|
A Strange Sources
T It's a Secret to Everybody (Part 3)

R Everlook |N|Follow the road east.|
A Trouble in Winterspring!
A Are We There, Yeti? (Part 1)
A The Everlook Report
A Duke Nicholas Zverenhoff
A Sister Pamela
T Felnok Steelspring
A Chillwind Horns
h Everlook

C Strange Sources |N|Take the road south to Darkwhisper Gorge (59,73)|

H Everlook
C Are We There, Yeti? (Part 1)
C Wild Guardians (Part 1) |N|Ragged Owls are west of Everlook, Raging are just north|
C Chillwind Horns |N|Large Chimera concentration around (66,29)|

T Trouble in Winterspring!
T Strange Sources
A Threat of the Winterfall
A Winterfall Activity
C Winterfall Activity
C Threat of the Winterfall
T Winterfall Activity
A Winterfall Ritual Totem |O| |U|20741|
T Winterfall Ritual Totem |O| |N|Claims to require Neutral rep, perhaps too early|
T Threat of the Winterfall |N|at (31,45)|
A Winterfall Firewater |U|12771|
T Winterfall Firewater
A Falling to Corruption

T Are We There, Yeti? (Part 1) |N|Everlook (61,38)|
A Are We There, Yeti? (Part 2)
T Chillwind Horns

C Are We There, Yeti? (Part 2) |N|Pristine Horns (66,43)|

H Everlook
T Are We There, Yeti? (Part 2)
A Are We There, Yeti? (Part 3)
N Scare Legacki |Q|Are We There, Yeti? (Part 3)| |QO|Scare Legacki|
    ` +
    //--------
    // Felwood
    //--------
    `
F Bloodvenom Post
T Wild Guardians (Part 1)
A Well of Corruption
A A Husband's Last Battle

T Cleansing Felwood |N|North along the road|
N Get a Cenarion Beacon from Maybess (46.8,83.1) |L|11511|

T Verifying the Corruption
T Forces of Jaedenar
A Collection of the Corrupt Water

C A Husband's Last Battle
C Well of Corruption
C Collection of the Corrupt Water

R Bloodvenom Post
T A Husband's Last Battle
T Well of Corruption
A Corrupted Sabers
T Collection of the Corrupt Water
A Seeking Spiritual Aid

C Corrupted Sabers |N|(32,66)| |Z|Felwood|
T Corrupted Sabers |N|First talk to the cat|

T Falling to Corruption |N|The cauldron at (60,5)| |Z|Felwood|
A Mystery Goo
A Deadwood Ritual Totem |O| |U|20741|
T Deadwood Ritual Totem |O| |N|Turn-in at a furblog halfway thru the hold|

R Winterspring
T Winterfall Activity
T Mystery Goo |N|(31,45) in Winterspring, skip the follow-up| |Z|Winterspring|
A The Videre Elixir

N Grind till level 55

H Everlook

F Azshara
R Duke Hydraxis
A Poisoned Water
A Stormers and Rumblers

F Camp Mojache
T The Strength of Corruption
C The Videre Elixir

F Gadgetzan
N Scare Sprinkle |Q|Are We There, Yeti? (Part 3)| |QO|Scare Sprinkle|
A Pawn Captures Queen
h Gadgetzan
    ` +
    //---------
    // Silithus
    //---------
    `
F Cenarion Hold

A Report to General Kirika
A The Twilight Mystery
A Securing the Supply Lines
A Deadly Desert Venom
A Wanted - Deathclasp, Terror of the Sands

C Stormers and Rumblers |N|To the northwest|
C The Twilight Mystery
C Securing the Supply Lines |N|To the northeast|
C Deadly Desert Venom

T Securing the Supply Lines
A Stepping Up Security
T Deadly Desert Venom
A Noggle's Last Hope
T The Twilight Mystery

C Stepping Up Security

T Report to General Kirika |N|(50,69)|
A Scouring the Desert

C Noggle's Last Hope
C Scouring the Desert |N|Return the Silithyst to the Horde base|
T Scouring the Desert

C Wanted - Deathclasp, Terror of the Sands

T Stepping Up Security
T Noggle's Last Hope
A Noggle's Lost Satchel
T Wanted - Deathclasp, Terror of the Sands
A The Deserter

C Noggle's Lost Satchel |N|(40,90)|
T The Deserter
N Die on purpose and spirit resurrect

T Noggle's Lost Satchel

R Marshal's Refuge |N|In Un'goro Crater|
N Scare Quixxil |Q|Are We There, Yeti? (Part 3)| |QO|Scare Quixxil|
A The Mighty U'cha |N|For southeast|
C The Mighty U'cha
T The Mighty U'cha
C Pawn Captures Queen
R Marshal's Refuge |N|In Un'goro Crater|
F Gadgetzan
T Pawn Captures Queen
A Calm Before the Storm (Part 1)
A Into the Depths
F Orgrimmar
T Calm Before the Storm (Part 1) |N|The Drag|
A Calm Before the Storm (Part 2)
T Calm Before the Storm (Part 2)
T Betrayed (Part 4)
F Grom'gol Base Camp |N|Find a group for Sunken Temple|
N Find a group 8)
F Stonard
A The Temple of Atal'Hakkar
C The Temple of Atal'Hakkar
C Zapper Fuel
T Into the Depths |N|Downstairs, there's an altar by the end|
A Secret of the Circle
C Blood of Morphaz |N|Turn in later in Felwood|
C Secret of the Circle
C The God Hakkar
A The Essence of Eranikus (Part 1) |U|10454|
T The Essence of Eranikus (Part 1)
T The Temple of Atal'Hakkar
N Talk to Itharius in the SW cave of Swamp of Sorrows
A The Essence of Eranikus (Part 2) |U|10589|
T The Essence of Eranikus (Part 2)
A In Eranikus' Own Words

H Gadgetzan
F Marshal's Refuge
T Zapper Fuel
N Go loot a Bloodpetal Sprout
T Bloodpetal Zapper
F Orgrimmar
    ` +
    //--------------------
    // Western Plaguelands
    //--------------------
    `
F Undercity
A A Call to Arms: The Plaguelands! |N|From Harbinger Balthazad, he patrols around the center and middle rings of the city.|
A A Sample of Slime+. |N|You can disband this quest when you have a sufficient amount of items if quest space becomes too tight. Reaccept it later to complete it.|
T A Sample of Slime+.
A +. and a Batch of Ooze |N|You can disband this quest when you have a sufficient amount of items if quest space becomes too tight. Reaccept it later to complete it.|
T +. and a Batch of Ooze
A The Champion of the Banshee Queen |N|From Sylvanas|
h Undercity

R The Bulwark
T A Call to Arms: The Plaguelands!
A Scarlet Diversions
N Get a Flame in a Bottle |N|From the Box of Incendiaries| |L|12814|
T The Everlook Report
N Get a Commission |N|Talk to the quartermaster and get a commission, you should have this equipped any time you are in the plaguelands.  Turn in any scourgestones you get when you are in town if you have a full stack.| |L|12846|
A A Plague Upon Thee (Part 1)

C Scarlet Diversions |N|Burn the tent, plant the banner (40,51)|

T Scarlet Diversions |N|Back at the Bulwark|
A All Along the Watchtowers
A The Scourge Cauldrons
T The Scourge Cauldrons
A Target: Felstone Field

C Target: Felstone Field |N|To the east at Felstone Field (37,56).  Kill Cauldron Lord Bilemaw for the key, then talk to the cauldren.|
T Target: Felstone Field |N|Talk to the cauldren|
A Return to the Bulwark (Part 1)

A Better Late Than Never (Part 1) |N|In the house on the northeast side of the field (38,54), upstairs|
T Better Late Than Never (Part 1) |N|Next door in the barn, talk to the box (38.8, 55.2)|
A Better Late Than Never (Part 2)

T Return to the Bulwark (Part 1)
A Target: Dalson's Tears

C Target: Dalson's Tears |N|To the east at Dalson's Tears (46,52).  Kill Cauldron Lord Malvinious for the key, then talk to the cauldren.|
T Target: Dalson's Tears |N|Talk to the cauldren|
A Return to the Bulwark (Part 2)

N Read Mrs. Dalson's Diary |N|On the floor in the barn (47.8, 50.7).  Nothing to accept, just read the book.|
K Wandering Skeleton |N|Patrols around the house and barn, you are looking for the outhouse key.  Scarlets might kill this mob.| |L|12738|
K Farmer Dalson |N|Open the outhouse, get his key| |L|12739|
N Open cabinet |N|Locked cabinet upstairs in the house.|

T Return to the Bulwark (Part 2)
A Target: Writhing Haunt

C Target: Writhing Haunt |N|To the east at Writhing Haunt (53,65).  Kill Cauldron Lord Razarch for the key, then talk to the cauldren.|
T Target: Writhing Haunt |N|Talk to the cauldren|
A Return to the Bulwark (Part 3)

A The Wildlife Suffers Too (Part 1) |N|In the house by the field (54,65)|
C The Wildlife Suffers Too (Part 1) |N|To the north, between the Felstone and Dalson's Fields, and north of Dalson's Field.|

T Return to the Bulwark (Part 3)
A Target: Gahrron's Withering

C All Along the Watchtowers |U|12815| |N|Mark each tower in Andorhal, you can get close enough to mark without aggroing mobs inside if you are careful. (47,71) (40,71) (42,66) (44,63)|

T The Wildlife Suffers Too (Part 1)
A The Wildlife Suffers Too (Part 2)
C The Wildlife Suffers Too (Part 2) |N|East, between Writhing Haunt and Gahrron's Withering (52,56)|

C Target: Gahrron's Withering |N|To the east at Writhing Haunt (62,58).  Kill Cauldron Lord Soulwrath for the key, then talk to the cauldren.|
T Target: Gahrron's Withering |N|Talk to the cauldren|
A Return to the Bulwark (Part 4)

T The Wildlife Suffers Too (Part 2)
A Glyphed Oaken Branch

T All Along the Watchtowers |N|Back at the Bulwark|
A Scholomance
T Scholomance
A Skeletal Fragments

R The Hinterlands |N|South of Scholomance there's a path to The Hinterlands.|
T Jammal'an the Prophet
    ` +
    //--------------------
    // Eastern Plaguelands
    //--------------------
    `
R Eastern Plaguelands
A Demon Dogs |N|Follow the river north (7,43)|
A Blood Tinged Skies
A Carrion Grubbage

N Kill crap+. |N|Kill any plaguehounds, carrion worms, and plaguebats you encounter in EPL for each respective quest.|
T The Champion of the Banshee Queen
A To Kill With Purpose |N|At the Marris Stead (26,74)|
A Un-Life's Little Annoyances

T Sister Pamela |N|In a house in Darrowshire (36,90)|
A Pamela's Doll
C Pamela's Doll |N|Parts are found in the houses nearby.  Ghosts spawn when you get near them.|
T Pamela's Doll
A Auntie Marlene
A Uncle Carlin

K Plaguehounds |Q|Demon Dogs| |QO|Plaguehound Runt slain: 20/20| |N|All over the southwestern section of the zone|
C Blood Tinged Skies
C Poisoned Water

T Uncle Carlin |N|East at Light's Hope Chapel (81,58)|
A Defenders of Darrowshire
A The Restless Souls
T Duke Nicholas Zverenhoff
A Zaeldarr the Outcast |N|Southwest near the corpse pits (79,63)|

N Free Spirits+. |N|Kill any cannibal ghouls, gibbering ghouls and diseased flayers you come across.  Speak to any ghosts that spawn for "Defenders of Darrowshire".|
C Demon Dogs |N|Plaguehounds near Light's Hope to the east, Frenzied Plaguehound in the north half of the zone.|
C A Plague Upon Thee (Part 1) |N|Find termite mounds all around the northern part of the zone.|

C To Kill With Purpose
C Defenders of Darrowshire
C Carrion Grubbage
C Un-Life's Little Annoyances

A Augustus' Receipt Book |N|From hut at (13,34)|
C Augustus' Receipt Book |N|Book is upstairs in the inn at (15,33)|
T The Restless Souls |N|Egan is in the hut at (13,34)|
T Augustus' Receipt Book

T Demon Dogs |N|On the west edge of the zone|
T Blood Tinged Skies
T Carrion Grubbage
A Redemption
C Redemption |N|Blah blah blah+. he talks to much.|
T Redemption
A Of Forgotten Memories

T To Kill With Purpose |N|at (26,74)|
T Un-Life's Little Annoyances
A The Ranger Lord's Behest

C Of Forgotten Memories |N|South at the Undercroft (28,86).  Talk to the grave and Mercutio and his adds will walk in (not spawn).  Try to pull him away from the adds, kill and loot him, and get out.  You might need help.|
C Zaeldarr the Outcast |N|(27,85)|

T Of Forgotten Memories |N|Back on the west edge of the zone|
A Of Lost Honor

H Undercity
T Better Late Than Never (Part 2)
A The Jeremiah Blues
T The Jeremiah Blues |N|Right underneath the bank|
A Good Luck Charm
    ` +
    //--------------------
    // Western Plaguelands
    //--------------------
    `
R The Bulwark
T Return to the Bulwark (Part 4)
T A Plague Upon Thee (Part 1)
A A Plague Upon Thee (Part 2)
N Mission Accomplished |N|Talk to+. who?|

T Good Luck Charm |N|At the house at Felstone Field (38,54)|
A Two Halves Become One
C Two Halves Become One |N|Go out in the field and kill the Jabbering Ghoul (only one with a pitchfork), then combine the pieces.|
T Two Halves Become One

T A Plague Upon Thee (Part 2) |N|(47,32)|
A A Plague Upon Thee (Part 3)

A Unfinished Business (Part 1) |N|(51,28)|

C Unfinished Business (Part 1) |N|(49,42), (51,43)|
T Unfinished Business (Part 1) |N|(51,28)|
A Unfinished Business (Part 2)

C Unfinished Business (Part 2) |N|Huntsman Radly (57,36)|
T Unfinished Business (Part 2)
A Unfinished Business (Part 3)
C Unfinished Business (Part 3) |N|Go to top of tower at (45,19)|
T Unfinished Business (Part 3)

T Auntie Marlene |N|House in Sorrow Hill (49,78)|
A A Strange Historian
C A Strange Historian |N|Gravestone just north of the house (49,76)|
T A Strange Historian |N|In the inn in Andorhal (39.43, 66.81)|
A The Annals of Darrowshire
A A Matter of Time

C A Matter of Time |N|Find the blue glowy silos around the edges of Andorhal (45.05, 62.73).  Use horn.|  |U|12627|
C The Annals of Darrowshire |N|In the town hall (43.91, 69.22).  Loot books till you find it.|

T A Matter of Time |N|Back at the inn|
A Counting Out Time
T The Annals of Darrowshire
A Brother Carlin

C Counting Out Time |N|Find lunchboxes in the houses all around Andorhal.|
C Skeletal Fragments |N|Kill undead all over Andorhal.|

T Counting Out Time |N|Back at the inn|

T A Plague Upon Thee (Part 3) |N|Back at the Bulwark|
T Skeletal Fragments
A Mold Rhymes With+.

R Tarren Mill
A Venom to the Undercity

F Undercity
T Venom to the Undercity
A Melding of Influences |N|At the apothecary (ooze guys from earlier)|

F Light's Hope Chapel
T Defenders of Darrowshire
T Brother Carlin
A Villains of Darrowshire
A Heroes of Darrowshire
A Bonescythe Digs |N|Probably not available|
C Bonescythe Digs
T Bonescythe Digs
T Zaeldarr the Outcast

C Of Lost Honor |N|At Northdale|
C The Ranger Lord's Behest |N|At the high elves area to the north|
C Villains of Darrowshire |N|At Corrin's crossing and the lake just north from there|

T The Ranger Lord's Behest
A Duskwing, Oh How I Hate Thee+.
A The Corpulent One
T Of Lost Honor
A Of Love and Family (Part 1)
T Of Love and Family (Part 1) |N|By the Caer Darrow dock|
A Of Love and Family (Part 2)

C Heroes of Darrowshire |N|In Hearthglen, utilize Mind Soothe and Psychic Scream to get the libram from the town hall. The shield is at Gahrron's Withering|
C Duskwing, Oh How I Hate Thee+.
C The Corpulent One

T Duskwing, Oh How I Hate Thee+.
T The Corpulent One
A The Call to Command
A Ramstein

N Grind to level 58

T Heroes of Darrowshire
T Villains of Darrowshire
A Marauders of Darrowshire
C Marauders of Darrowshire
T Marauders of Darrowshire
A Return to Chromie
    ` +
    //-------------
    // Winterspring
    //-------------
    `
F Undercity
T The Call to Command
A The Crimson Courier

F Orgrimmar
N Learn new abilities
N Buy 2xThorium Bar

F Gadgetzan
T Mold Rhymes With+.
A Fire Plume Forged

F Un'Goro Crater
C Fire Plume Forged
C Melding of Influences

H Undercity
T Melding of Influences
A Vivian Lagrave and the Darkstone Tablet
T Fire Plume Forged |N|At the Bulwark|

F Orgrimmar

F Bloodvenom Post
A Wild Guardians (Part 2)

F Everlook
N Stable pet |C|Hunter|
h Everlook
T Are We There, Yeti? (Part 3)
A Luck Be With You
A Ursius of the Shardtooth

P Claw (Rank 8) |N|Tame a Winterspring Screecher| |C|Hunter|
C Luck Be With You |N|At the south|
H Everlook

C Ursius of the Shardtooth |N|Grind bears on the hill to the north while waiting for Ursius|
T In Eranikus' Own Words |N|At the Winterspring trainer to the east of the Bear hill|

T Luck Be With You
C Ursius of the Shardtooth |N|Grind mobs north of everlook til he shows up|
T Ursius of the Shardtooth
A Brumeran of the Chillwind
C Brumeran of the Chillwind |N|Pats near (60,60)|
C Wild Guardians (Part 2) |N|Grind owls for a few hours when you are a few bars from 59|

R Everlook
T Luck Be With You
T Brumeran of the Chillwind
A Shy-Rotam
C Shy-Rotam
T Shy-Rotam
A Past Endeavors
T Past Endeavors

F Bloodvenom Post
T Wild Guardians (Part 2)
A Wild Guardians (Part 3)
H Everlook

T The Videre Elixir |N|To the west|
A Meet at the Grave
A Toxic Horrors

C Wild Guardians (Part 3)
N Grind owls until you are 59 and a half, then die on purpose

F Bloodvenom Post
T Wild Guardians (Part 3)
A Guarding Secrets (Part 1) |O| |U|4882|
T Guarding Secrets (Part 1) |O|
A Guarding Secrets (Part 2)
C Toxic Horrors

F Ashenvale
h Ashenvale
F Azshara
T Poisoned Water
T Stormers and Rumblers
H Ashenvale

F Ratchet
T Seeking Spiritual Aid
A Cleansed Water Returns to Felwood

F Gadgetzan
h Gadgetzan
T Meet at the Grave
A A Grave Situation
T A Grave Situation
A Linken's Sword

F Marshal's Refuge
T Linken's Sword
A A Gnome's Assistance
T A Gnome's Assistance
A Linken's Memory

F Thunder Bluff
T Guarding Secrets (Part 2)
T Glyphed Oaken Branch
A Rabine Saturna

F Everlook

T Toxic Horrors
A Winterfall Runners
C Winterfall Runners
T Winterfall Runners
A High Chief Winterfall
C High Chief Winterfall
A The Final Piece |U|12842|
T The Final Piece
A Words of the High Chief
T High Chief Winterfall

R Moonglade
T Rabine Saturna
A Wasteland
A A Reliquary of Purity

F Bloodvendom Post
R Emerald Sanctuary
T Linken's Memory
A Silver Heart
T Cleansed Water Returns to Felwood
T Blood of Morphaz
T Words of the High Chief
C Silver Heart |N|Wolves and a heart of an Irontree elemental|
T Silver Heart |N|Wolves and a heart of an Irontree elemental|
A Aquementas
H Gadgetzan
C Aquementas

F Marshal's Refuge
T Aquementas
A Linken's Adventure
T Linken's Adventure
A It's Dangerous to Go Alone
C It's Dangerous to Go Alone |N|It doesn't have much health, can be feared. Try to solo else find a group - else skip it for now. The OH is fairly good|
T It's Dangerous to Go Alone

F Silithus
T Wasteland
A The Spirits of Southwind
C The Spirits of Southwind
C A Reliquary of Purity
T The Spirits of Southwind
A Hive in the Tower
C Hive in the Tower
T Hive in the Tower
A Umber, Archivist

N Grind elementals till honored/1.5 bar left to 60 or find a group for BRD 8)

H Gadgetzan
F Moonglade
T Umber, Archivist
A Uncovering Past Secrets
T Uncovering Past Secrets
A Under the Citing Was+.
T Under the Citing Was+.

N Get a bunch of Un'Goro Soil and start morrowgraining! Else do BRD and the following quests for extra rep+.

T Vivian Lagrave and the Darkstone Tablet |N|Kargath|
A Disharmony of Flame
h Kargath
C Disharmony of Flame

T Disharmony of Flame
A Disharmony of Fire
A The Last Element
A KILL ON SIGHT: Dark Iron Dwarves
A KILL ON SIGHT: High Ranking Dark Iron Officials

C Disharmony of Fire
C The Last Element
C KILL ON SIGHT: Dark Iron Dwarves
C KILL ON SIGHT: High Ranking Dark Iron Officials

T Disharmony of Fire |N|Return to Kargath to get the next round of quests|
T The Last Element
T KILL ON SIGHT: Dark Iron Dwarves
T KILL ON SIGHT: High Ranking Dark Iron Officials

A Commander Gor'shak |N|In the tower|
A Warlord's Command
A The Pack Mistress
A Operative Bijou

A Attunement to the Core
C Commander Gor'shak |N|BRD again, yey! - the prison|
T Commander Gor'shak |N|BRD again, yey! - the prison|
A What Is Going On? (Part 1)
C What Is Going On? (Part 1)
T What Is Going On? (Part 1)
A What Is Going On? (Part 2)
C What Is Going On? (Part 2)

T What Is Going On? (Part 2) |N|At Thrall|
A The Eastern Kingdom
T The Eastern Kingdom
A The Royal Rescue
C Attunement to the Core
C The Royal Rescue |N|Back in BRD - save the princess!|
T The Royal Rescue
A The Princess Saved?
T The Princess Saved? |N|Back at Thrall|

T Attunement to the Core
C The Pack Mistress |N|LBRS, let someone (or yourself if so lucky) get the all gems and get the UBRS key|
T Operative Bijou
A Bijou's Belongings
C Bijou's Belongings |N|At the bottom in a corner towards the spider boss.|
T Bijou's Belongings
A Bijou's Reconnaissance Report
C Warlord's Command
T The Pack Mistress |N|Back in Kargath|
T Bijou's Reconnaissance Report

T Warlord's Command
A Eitrigg's Wisdom
C Eitrigg's Wisdom
T Eitrigg's Wisdom
A For The Horde
C The Darkstone Tablet
C For The Horde |N|UBRS|
T For The Horde
A What the Wind Carries
T What the Wind Carries
A The Champion of the Horde
T The Champion of the Horde |N|Rexxar my booooi|
A The Testament of Rexxar
F Undercity

A Araj's Scarab
A Alas, Andorhal
T Return to Chromie
A The Battle of Darrowshire

C Araj's Scarab |N|If ppl are up for it|
C Alas, Andorhal

T The Testament of Rexxar |N|WPL - perhaps possible to do plaguelands quests now+.|
A Oculus Illusions
T Araj's Scarab
T Alas, Andorhal

H Kargath
C Oculus Illusions |N|UBRS, again|
T Oculus Illusions |N|WPL|
A Emberstrife

F Brackenwall Village |N|Or to Camp Taurajo if you have epic mount!|

T Emberstrife |N|Far south|
A The Test of Skulls, Scryer
A The Test of Skulls, Somnus
A The Test of Skulls, Chronalis

F Gadgetzan |N|Tanaris, bring a mage 8)|
C The Test of Skulls, Chronalis
R Orgrimmar
F Winterspring
C The Test of Skulls, Scryer
H Kargath
T The Darkstone Tablet
F Stonard
C The Test of Skulls, Somnus
R Thunder Bluff

F Brackenwall Village |N|Or to Camp Taurajo if you have epic mount!|

T The Test of Skulls, Scryer
T The Test of Skulls, Somnus
T The Test of Skulls, Chronalis

A The Test of Skulls, Axtroz
R Undercity
F Hammerfall
C The Test of Skulls, Axtroz
H Camp Taurajo
T The Test of Skulls, Axtroz |N|Port to Thunder Bluff - if you have epic mount fly to Camp Taurajo and ride from there|
A Ascension+.

T Ascension+. |N|At Rexxar|
A Blood of the Black Dragon Champion
C Blood of the Black Dragon Champion |N|UBRS|
T Blood of the Black Dragon Champion |N|At Rexxar|

C Of Love and Family (Part 2) |N|Stratholme - living|
T Of Love and Family (Part 2)
A Find Myranda
T Find Myranda |N|WPL|
A Scarlet Subterfuge
T Scarlet Subterfuge
A In Dreams
C In Dreams
T In Dreams

C The Battle of Darrowshire
T The Battle of Darrowshire
A Hidden Treasures
T Hidden Treasures

C The Crimson Courier |N|To the plaguelands!|
T The Crimson Courier
A Nathanos' Ruse
T Nathanos' Ruse
A Return to Nathanos
T Return to Nathanos
A The Scarlet Oracle, Demetria
C The Scarlet Oracle, Demetria
T The Scarlet Oracle, Demetria

A Ramstein
C Ramstein |N|Stratholme - undead|
T Ramstein
    `
);
});
