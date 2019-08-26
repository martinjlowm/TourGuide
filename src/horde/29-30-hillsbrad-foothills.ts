import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("Hillsbrad Foothills (29-30)", "Alterac Mountains (30)", "Horde", () => {
  return `
F Orgrimmar
h Orgrimmar

R The Undercity |N|Take the zeppelin outside Orgrimmar to Undercity.|
f The Undercity
R Hillsbrad Foothills |N|Exit through the sewers|
A Time To Strike |N|You get this at Southpoint Tower (20,47) as soon as you enter Hillsbrad|

R Tarren Mill
T Time To Strike
f Grab flight point
A Regthar Deathgate
A The Hammer May Fall
A Helcular's Revenge (Part 1)
A Elixir of Pain

K Yetis |L|3708| |N|(46,31)|
N Grind yetis until you hit level 30
H Orgrimmar
N Learn new abilities
R The Undercity

F Tarren Mill
T Helcular's Revenge (Part 1)
A Helcular's Revenge (Part 2)
N Charge The Flame of Azel (43.9,28.1) |Q|Helcular's Revenge| |QO|Flame of Azel charged|
N Charge The Flame of Veraz (44.0,26.6) |Q|Helcular's Revenge| |QO|Flame of Veraz charged|
N Grind yetis until your pet levels up|C|Hunter|
`;
});
