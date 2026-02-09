import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {

  /* 🔴 Chennai Severe */
  const chennaiSevere = [
    [13.25, 80.10],
    [13.30, 80.35],
    [13.10, 80.45],
    [12.95, 80.35],
    [12.90, 80.15],
    [13.05, 80.05],
  ];

  /* 🟠 Chennai Moderate */
  const chennaiModerate = [
    [13.40, 80.00],
    [13.45, 80.50],
    [13.10, 80.65],
    [12.75, 80.45],
    [12.70, 80.00],
    [13.00, 79.85],
  ];

  /* 🟠 Delhi */
  const delhiModerate = [
    [28.80, 77.05],
    [28.90, 77.35],
    [28.60, 77.50],
    [28.40, 77.30],
    [28.45, 77.00],
  ];

  /* 🟢 Mumbai */
  const mumbaiLow = [
    [19.30, 72.70],
    [19.40, 73.05],
    [19.05, 73.20],
    [18.85, 72.95],
    [18.95, 72.65],
  ];

  return (
    <div className="w-full h-screen">

      <MapContainer
        center={[20.5937, 78.9629]}   // India center (safer zoom)
        zoom={5}
        className="w-full h-full"
      >

        {/* Base Map */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 🔴 Chennai Severe */}
        <Polygon
          positions={chennaiSevere as any}
          pathOptions={{
            color: "red",
            fillColor: "red",
            fillOpacity: 0.55,
          }}
        >
          <Popup>
            <b>Chennai — Severe Risk 🔴</b><br/>
            2,184 Active Cases
          </Popup>
        </Polygon>

        {/* 🟠 Chennai Moderate */}
        <Polygon
          positions={chennaiModerate as any}
          pathOptions={{
            color: "orange",
            fillColor: "orange",
            fillOpacity: 0.35,
          }}
        >
          <Popup>
            <b>Chennai Peripheral 🟠</b><br/>
            Moderate Risk Zone
          </Popup>
        </Polygon>

        {/* 🟠 Delhi */}
        <Polygon
          positions={delhiModerate as any}
          pathOptions={{
            color: "orange",
            fillColor: "orange",
            fillOpacity: 0.4,
          }}
        >
          <Popup>
            Delhi — Moderate Risk 🟠
          </Popup>
        </Polygon>

        {/* 🟢 Mumbai */}
        <Polygon
          positions={mumbaiLow as any}
          pathOptions={{
            color: "green",
            fillColor: "green",
            fillOpacity: 0.35,
          }}
        >
          <Popup>
            Mumbai — Low Risk 🟢
          </Popup>
        </Polygon>

      </MapContainer>
    </div>
  );
}
