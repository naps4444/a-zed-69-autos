"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [
  6.645534650614144,
  3.3231956985851516,
];

const markerIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapContent() {
  return (
    <div className="relative z-0 h-[400px] w-full overflow-hidden rounded-2xl border border-white/10">
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        className="relative z-0 h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="dark-map-tiles"
        />

        <Marker position={position} icon={markerIcon}>
          <Popup>
            <div className="text-sm">
              <strong>A-ZED 69 AUTOS</strong>
              <br />
              1 Dada-Bello Cl, IJU,
              <br />
              off Iju Road, Ifako Agege,
              <br />
              Lagos 100215, Lagos
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      <style jsx global>{`
        .dark-map-tiles {
          filter: brightness(0.55) contrast(1.25) saturate(0.35);
        }

        .leaflet-container {
          position: relative;
          z-index: 0 !important;
          background: #080808;
        }

        .leaflet-pane {
          z-index: 1 !important;
        }

        .leaflet-top,
        .leaflet-bottom {
          z-index: 2 !important;
        }

        .leaflet-popup {
          z-index: 3 !important;
        }

        .leaflet-popup-content-wrapper,
        .leaflet-popup-tip {
          background: #111111;
          color: #ffffff;
        }

        .leaflet-popup-content {
          margin: 14px;
        }

        .leaflet-popup-close-button {
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}