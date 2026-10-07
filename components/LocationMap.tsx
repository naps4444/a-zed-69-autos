
"use client";

import dynamic from "next/dynamic";

const MapContent = dynamic(() => import("./MapContent"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full animate-pulse rounded-2xl bg-zinc-900" />
  ),
});

export default function LocationMap() {
  return <MapContent />;
}
