"use client";

import { useMap } from "@/hooks/useMap";
import { useRef } from "react";

export default function AdminPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap(mapContainerRef as React.RefObject<HTMLDivElement>);

  return <div className="flex w-full h-full" ref={mapContainerRef} />;
}
