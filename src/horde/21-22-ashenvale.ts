import { INamespace } from '../tour-guide';

let _NS: INamespace; { const [, NS] = [...FILE_ARGUMENTS]; _NS = NS; }

_NS.TourGuide.registerGuide("Ashenvale (21-22)", "Southern Barrens (22-23)", "Horde", () => {
  return `
R Splintertree Post |N|(73,65)|
T The Ashenvale Hunt
f Splintertree Post

R The Zoram Strand |N|Grind mobs on your way there|
f The Zoram Strand
A Vorsha the Lasher
A Naga at the Zoram Strand

P Claw (Rank 3) |N|Tame a Clattering Crawler.| |C|Hunter|
C Vorsha the Lasher |N|Make sure you are level 22. Skip it for now if you fail|
C Naga at the Zoram Strand
T Naga at the Zoram Strand
T Vorsha the Lasher
H The Crossroads
`;
})
