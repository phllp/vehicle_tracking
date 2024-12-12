"use client";

import { useMap } from "@/hooks/useMap";
import { DirectionsData } from "@/utils/models";
import { useRef, useEffect } from "react";

export type MapNewRouteProps = {
  directionsData: DirectionsData;
};

export default function MapNewRoute({ directionsData }: MapNewRouteProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapContainerRef as React.RefObject<HTMLDivElement>);

  useEffect(() => {
    if (!map || !directionsData) return;

    console.log("directionsData", directionsData);
    console.log("directionsData.routes", directionsData.routes);

    map.removeAllRoutes();
    map.addRouteWithIcons({
      routeId: "1",
      startMarkerOptions: {
        position: directionsData.routes[0].legs[0].start_location,
      },
      endMarkerOptions: {
        position: directionsData.routes[0].legs[0].end_location,
      },
      carMarkerOptions: {
        position: directionsData.routes[0].legs[0].start_location,
      },
    });
  }, [map, directionsData]);

  return <div className="w-2/3" ref={mapContainerRef} />;
}
