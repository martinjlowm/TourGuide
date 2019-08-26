/*
 * const L = TourGuide.Locale
 *
 * const [zonei, zonec, zonenames] = [{}, {}, {}];
 * for (const [ci, c] of pairs({ GetMapContinents() })) {
 *     zonenames[ci] = { GetMapZones(ci) }
 *     for (const [zi, z] of pairs(zonenames[ci])) {
 *         zonei[z], zonec[z] = zi, ci
 *     }
 * }
 *
 *
 * const cache = {}
 * const MapPoint = function(zone, x, y, desc) {
 *   TourGuide.DebugF(1, 'Mapping %q - %s (%.2f, %.2f)', desc, zone, x, y)
 *   let [zi, zc] = [zone && zonei[zone], zone && zonec[zone]];
 *   if (!zi) {
 *     if (zone) {
 *       TourGuide.PrintF('Cannot find zone %q, using current zone.', zone)
 *     } else {
 *       TourGuide.Print('No zone provided, using current zone.')
 *     }
 *
 *     [zi, zc] = [GetCurrentMapZone(), GetCurrentMapContinent()]
 *     zone = zonenames[zc][zi]
 *   }
 *
 *   if (TomTom) {
 *     TomTom.AddZWaypoint(zc, zi, x, y, `[TG] ${desc}`) //AddZWaypoint(c,z,x,y,desc)  select(z, GetMapZones(c))
 *   }
 * }
 *
 *
 * TourGuide.ParseAndMapCoords = function(note, desc, zone) {
 *   if (TomTom) {
 *     const Astrolabe = DongleStub('Astrolabe-0.4');
 *     const TomTom = TomTom
 *
 *     if (TomTom.m_points) {
 *       for (const [c,ctbl] of pairs(TomTom.m_points)) {
 *         for (const [z,ztbl] of pairs(ctbl)) {
 *           for (const [idx,entry] of pairs(ztbl)) {
 *             if (typeof entry === 'table') {
 *               if (entry.label && string.sub(entry.label, 1, 5) === '[TG] ') {
 *                 self.DebugF(1, 'Removing %q from Astrolabe', entry.label)
 *                 Astrolabe.RemoveIconFromMinimap(entry.icon)
 *                 entry.Hide()
 *                 table.insert(TomTom.minimapIcons, entry.icon)
 *                 ztbl[idx] = null
 *               }
 *             }
 *           }
 *         }
 *       }
 *     }
 *
 *     if (TomTom.w_points) {
 *       for (const [k,wp] of ipairs(TomTom.w_points)) {
 *         if (wp.icon.label && string.sub(wp.icon.label, 1, 5) === '[TG] ') {
 *           self.DebugF(1, 'Removing %q from TomTom', wp.icon.label)
 *           const icon = wp.icon
 *           icon.Hide()
 *           TomTom.w_points[k] = null
 *           table.insert(TomTom.worldmapIcons, icon)
 *         }
 *       }
 *     }
 *   }
 *
 *   if (!note) {
 *     return;
 *   }
 *
 *   for (const [x, y] of string.gmatch(note, L.COORD_MATCH)) {
 *     MapPoint(zone, tonumber(x), tonumber(y), desc)
 *   }
 * } */
