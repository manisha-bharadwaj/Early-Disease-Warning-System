import Header from "@/components/Header";
import SymptomSurvey from "@/components/SymptomSurvey";
import LiveAnalytics from "@/components/LiveAnalytics";
import { useState } from "react";
import LocationAlert from "@/components/LocationAlert";

import HospitalCapacity from "@/components/HospitalCapacity";
import GovernmentNotices from "@/components/GovernmentNotices";

const Index = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel — Symptom Survey */}
        <aside className="w-[380px] xl:w-[420px] flex-shrink-0 border-r border-border glass-card animate-slide-in-left overflow-hidden">
          <SymptomSurvey />
        </aside>

        {/* Right Panel — Dashboard */}
        <main className="flex-1 overflow-y-auto scrollbar-dark p-6 space-y-8 animate-slide-in-right">
          <LiveAnalytics />

          <div className="border-t border-border pt-6">
            <HospitalCapacity />
          </div>

          <div className="border-t border-border pt-6 pb-8">
            <GovernmentNotices />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
