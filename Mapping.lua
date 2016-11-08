
local L = TourGuide.Locale

local zonei, zonec = {}, {}
for ci,c in pairs{GetMapContinents()} do
    for zi,z in pairs{GetMapZones(ci)} do
        zonei[z], zonec[z] = zi, ci
    end
end


local function MapPoint(zone, x, y, desc)
    TourGuide:DebugF(1, "Mapping %q - %s (%.2f, %.2f)", desc, zone, x, y)
    local zi, zc = zone and zonei[zone], zone and zonec[zone]
    if not zi then
        if zone then TourGuide:PrintF("Cannot find zone %q, using current zone.", zone)
        else TourGuide:Print("No zone provided, using current zone.") end

        zi, zc = GetCurrentMapZone(), GetCurrentMapContinent()
    end

    if TomTom then TomTom:AddZWaypoint(zc, zi, x, y, "[TG] "..desc) --AddZWaypoint(c,z,x,y,desc)  select(z, GetMapZones(c))
    elseif Cartographer_Waypoints then Cartographer_Waypoints:AddLHWaypoint(zc, zi, x, y, desc) end -- continent, zone, x, y desc
end


function TourGuide:ParseAndMapCoords(note, desc, zone)
    if TomTom then
        local Astrolabe = DongleStub("Astrolabe-0.4")
        local TomTom = TomTom

        if TomTom.m_points then
            for c,ctbl in pairs(TomTom.m_points) do
                for z,ztbl in pairs(ctbl) do
                    for idx,entry in pairs(ztbl) do
                        if type(entry) == "table" then
                            if entry.label and string.sub(entry.label, 1, 5) == "[TG] " then
                                self:DebugF(1, "Removing %q from Astrolabe", entry.label)
                                Astrolabe:RemoveIconFromMinimap(entry.icon)
                                entry:Hide()
                                table.insert(TomTom.minimapIcons, entry.icon)
                                ztbl[idx] = nil
                            end
                        end
                    end
                end
            end
        end

        if TomTom.w_points then
            for k,wp in ipairs(TomTom.w_points) do
                if wp.icon.label and string.sub(wp.icon.label, 1, 5) == "[TG] " then
                    self:DebugF(1, "Removing %q from TomTom", wp.icon.label)
                    local icon = wp.icon
                    icon:Hide()
                    TomTom.w_points[k] = nil
                    table.insert(TomTom.worldmapIcons, icon)
                end
            end
        end
    end

    if not note then return end

    for x,y in string.gmatch(note, L.COORD_MATCH) do MapPoint(zone, tonumber(x), tonumber(y), desc) end
end
