import { Bell, Shield, Activity, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();   // ← ADD NAVIGATION

  return (
    <header className="glass-card border-b border-border px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      
      {/* LEFT — Title */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Shield
            className="w-8 h-8 text-primary animate-glow-pulse"
            style={{ filter: "drop-shadow(0 0 8px hsl(0 85% 45% / 0.5))" }}
          />

          <div>
            <h1 className="font-display text-lg font-bold tracking-wider text-foreground leading-tight">
              DISEASE SPREAD EARLY WARNING SYSTEM
            </h1>

            <p className="text-xs font-mono text-muted-foreground tracking-widest">
              NATIONAL HEALTH SURVEILLANCE NETWORK
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT — Controls */}
      <div className="flex items-center gap-6">

        {/* LIVE Indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 status-red"></span>
          </span>
          <span className="font-mono text-xs text-primary tracking-wider">
            LIVE
          </span>
        </div>

        {/* Risk Badge */}
        <div className="glass-card px-4 py-1.5 flex items-center gap-2">
          <Activity className="w-4 h-4 text-status-yellow" />
          <span className="font-mono text-xs text-status-yellow tracking-wider">
            RISK: ELEVATED
          </span>
        </div>

        {/* 🗺️ MAP VIEW BUTTON — NOW WORKS */}
        <button
          onClick={() => navigate("/map")}   // ← NAVIGATION ADDED
          className="glass-card-hover px-3 py-1.5 flex items-center gap-2 cursor-pointer"
        >
          <Map className="w-4 h-4 text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground">
            MAP VIEW
          </span>
        </button>

        {/* 🔔 Notifications */}
        <button className="relative p-2 glass-card-hover rounded-full cursor-pointer">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold bg-primary text-primary-foreground">
            3
          </span>
        </button>

      </div>
    </header>
  );
};

export default Header;
