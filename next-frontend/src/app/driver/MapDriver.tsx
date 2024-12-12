"use client";

import { useMap } from "@/hooks/useMap";
import { useRef } from "react";

export default function MapDriver() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap(mapContainerRef as React.RefObject<HTMLDivElement>);

  return <div className="w-2/3" ref={mapContainerRef} />;
}
