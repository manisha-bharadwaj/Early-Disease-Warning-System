import Header from "@/components/Header";
import SymptomSurvey from "@/components/SymptomSurvey";
import LiveAnalytics from "@/components/LiveAnalytics";
import HospitalCapacity from "@/components/HospitalCapacity";
import GovernmentNotices from "@/components/GovernmentNotices";

import { useState } from "react";
import LocationAlert from "@/components/LocationAlert";

const Index = () => {

  // 🌍 Location state
  const [userLocation, setUserLocation] =
    useState("Detecting location...");

  return (
    <div className="flex flex-col h-screen overflow-hidden">

      <Header />

      <div className="flex-1 flex overflow-hidden">

        {/* Left Panel — Symptom Survey */}
        <aside className="w-[380px] xl:w-[420px] flex-shrink-0 border-r border-border glass-card animate-slide-in-left overflow-hidden">
          <SymptomSurvey userLocation={userLocation} />
        </aside>

        {/* Right Panel — Dashboard */}
        <main className="flex-1 overflow-y-auto scrollbar-dark p-6 space-y-8 animate-slide-in-right">

          {/* 🌍 Location Display */}
          <div className="glass-card px-6 py-4">

            <h3 className="font-mono text-xs text-muted-foreground">
              DETECTED LOCATION
            </h3>

            <p className="text-lg font-bold text-primary">
              {userLocation}
            </p>

          </div>

          {/* Analytics */}
          <LiveAnalytics />

          {/* Hospital Capacity */}
          <div className="border-t border-border pt-6">
            <HospitalCapacity />
          </div>

          {/* Government Notices */}
          <div className="border-t border-border pt-6 pb-8">
            <GovernmentNotices />
          </div>

        </main>
      </div>

      {/* 🚨 Auto Alert */}
      <LocationAlert setUserLocation={setUserLocation} />

    </div>
  );
};

export default Index;
