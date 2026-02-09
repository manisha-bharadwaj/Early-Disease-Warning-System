import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";

export default function MapView() {

  // 🔴 Severe outbreak zone — Chennai
  const severeZone = [
    [13.0827, 80.2707],
    [13.10, 80.30],
    [12.95, 80.25]
  ];

  // 🟠 Moderate zone — Delhi
  const moderateZone = [
    [28.6139, 77.2090],
    [28.70, 77.15],
    [28.55, 77.05]
  ];

  // 🟢 Low risk — Mumbai
  const lowZone = [
    [19.0760, 72.8777],
    [19.15, 72.95],
    [18.95, 72.80]
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[22.9734, 78.6569]} // India center
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >

        {/* Map Tiles */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 🔴 Severe Polygon */}
        <Polygon positions={severeZone} pathOptions={{ color: "red" }}>
          <Popup>
            Chennai — HIGH RISK 🔴 <br />
            182 active cases
          </Popup>
        </Polygon>

        {/* 🟠 Moderate Polygon */}
        <Polygon positions={moderateZone} pathOptions={{ color: "orange" }}>
          <Popup>
            Delhi — MODERATE RISK 🟠 <br />
            96 active cases
          </Popup>
        </Polygon>

        {/* 🟢 Low Polygon */}
        <Polygon positions={lowZone} pathOptions={{ color: "green" }}>
          <Popup>
            Mumbai — LOW RISK 🟢 <br />
            32 active cases
          </Popup>
        </Polygon>

      </MapContainer>
    </div>
  );
}
