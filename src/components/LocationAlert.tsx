import { useEffect, useState } from "react";

interface Props {
  setUserLocation: (loc: string) => void;
}

export default function LocationAlert({ setUserLocation }: Props) {

  const [message, setMessage] = useState("");

  useEffect(() => {

    if (!navigator.geolocation) {
      setMessage("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(

      (pos) => {

        const lat = pos.coords.latitude;

        let locationText = "India";

        if (lat > 12 && lat < 14) {
          locationText = "Chennai, India";
          setMessage("🔴 HIGH RISK — Fever outbreak detected");
        }
        else if (lat > 28 && lat < 29) {
          locationText = "Delhi, India";
          setMessage("🟠 Moderate risk — Cases rising");
        }
        else {
          setMessage("🟢 Low risk in your area");
        }

        setUserLocation(locationText);

      },

      () => setMessage("Location permission denied")

    );

  }, []);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 glass-card px-6 py-4 z-50">

      <h3 className="font-bold text-primary mb-1">
        Health Alert
      </h3>

      <p className="text-sm text-muted-foreground">
        {message}
      </p>

    </div>
  );
}
