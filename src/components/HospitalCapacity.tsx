import { Building2, Heart, Wind, BedDouble, Activity, Users } from "lucide-react";

const hospitals = [
  {
    name: "AIIMS New Delhi",
    totalBeds: 240,
    icuBeds: 32,
    oxygenBeds: 45,
    ventilators: 18,
    currentLoad: 82,
    status: "limited" as const,
  },
  {
    name: "Safdarjung Hospital",
    totalBeds: 180,
    icuBeds: 20,
    oxygenBeds: 30,
    ventilators: 12,
    currentLoad: 45,
    status: "available" as const,
  },
  {
    name: "Max Super Specialty",
    totalBeds: 150,
    icuBeds: 8,
    oxygenBeds: 15,
    ventilators: 5,
    currentLoad: 95,
    status: "full" as const,
  },
  {
    name: "Apollo Hospital",
    totalBeds: 200,
    icuBeds: 25,
    oxygenBeds: 35,
    ventilators: 14,
    currentLoad: 60,
    status: "available" as const,
  },
  {
    name: "Fortis Healthcare",
    totalBeds: 160,
    icuBeds: 5,
    oxygenBeds: 12,
    ventilators: 3,
    currentLoad: 88,
    status: "limited" as const,
  },
  {
    name: "Sir Ganga Ram Hospital",
    totalBeds: 120,
    icuBeds: 0,
    oxygenBeds: 5,
    ventilators: 2,
    currentLoad: 98,
    status: "full" as const,
  },
];

const statusConfig = {
  available: { label: "AVAILABLE", className: "status-green", textClass: "text-status-green" },
  limited: { label: "LIMITED", className: "status-yellow", textClass: "text-status-yellow" },
  full: { label: "FULL", className: "status-red", textClass: "text-status-red" },
};

const HospitalCapacity = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Building2 className="w-5 h-5 text-primary" />
        <h2 className="font-display text-sm font-bold tracking-wider text-foreground">
          HOSPITAL CAPACITY MONITOR
        </h2>
        <Heart className="w-4 h-4 text-primary animate-heartbeat ml-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {hospitals.map((hospital) => {
          const status = statusConfig[hospital.status];
          return (
            <div key={hospital.name} className="glass-card-hover p-4 space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <h3 className="text-sm font-body font-bold text-foreground truncate">{hospital.name}</h3>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className={`w-2 h-2 rounded-full ${status.className}`} />
                  <span className={`text-[10px] font-mono ${status.textClass}`}>{status.label}</span>
                </div>
              </div>

              {/* Capacity bar */}
              <div>
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-1">
                  <span>PATIENT LOAD</span>
                  <span className={status.textClass}>{hospital.currentLoad}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      hospital.currentLoad >= 90
                        ? "bg-status-red"
                        : hospital.currentLoad >= 70
                        ? "bg-status-yellow"
                        : "bg-status-green"
                    }`}
                    style={{ width: `${hospital.currentLoad}%` }}
                  />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-2">
                <StatItem icon={BedDouble} label="Total Beds" value={hospital.totalBeds} />
                <StatItem icon={Activity} label="ICU Beds" value={hospital.icuBeds} alert={hospital.icuBeds < 10} />
                <StatItem icon={Wind} label="O₂ Beds" value={hospital.oxygenBeds} />
                <StatItem icon={Users} label="Ventilators" value={hospital.ventilators} alert={hospital.ventilators < 5} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StatItem = ({
  icon: Icon,
  label,
  value,
  alert = false,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  alert?: boolean;
}) => (
  <div className="flex items-center gap-2 p-1.5 rounded bg-background/30">
    <Icon className={`w-3.5 h-3.5 ${alert ? "text-status-red" : "text-muted-foreground"}`} />
    <div>
      <p className="text-[9px] font-mono text-muted-foreground leading-tight">{label}</p>
      <p className={`text-sm font-display font-bold leading-tight ${alert ? "text-status-red" : "text-foreground"}`}>
        {value}
      </p>
    </div>
  </div>
);

export default HospitalCapacity;
