import { useEffect, useState } from "react";

interface Props {
  setUserLocation: (loc: string) => void;
}

export default function LocationAlert({ setUserLocation }: Props) {

  const [message, setMessage] = useState("");

  useEffect(() => {

    // Ask location automatically
    if (!navigator.geolocation) {
      setMessage("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(

      (pos) => {

        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        let locationText = "India";
        let alertText = "🟢 Low risk in your area";

        // Demo outbreak region mapping
        if (lat > 12 && lat < 14) {
          locationText = "Chennai, Tamil Nadu";
          alertText =
            "🔴 HIGH RISK ALERT — Fever outbreak detected in Chennai";
        }

        else if (lat > 28 && lat < 29) {
          locationText = "Delhi, India";
          alertText =
            "🟠 Moderate risk — Cases rising in Delhi";
        }

        else if (lat > 19 && lat < 20) {
          locationText = "Mumbai, India";
          alertText =
            "🟢 Low risk — Situation under control";
        }

        // Send location to dashboard
        setUserLocation(locationText);

        // Show alert
        setMessage(alertText);

      },

      () => {
        setMessage("Location permission denied");
        setUserLocation("Permission Denied");
      }

    );

  }, []);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 glass-card px-6 py-4 z-50 animate-pulse">

      <h3 className="font-bold text-primary mb-1">
        Health Alert
      </h3>

      <p className="text-sm text-muted-foreground">
        {message}
      </p>

    </div>
  );
}
