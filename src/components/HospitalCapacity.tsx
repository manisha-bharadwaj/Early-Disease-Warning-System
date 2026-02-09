import { Building2, Heart, Wind, BedDouble, Activity, Users } from "lucide-react";

/* 🏥 Chennai Hospitals Data */
const hospitals = [
  {
    name: "Apollo Hospitals, Greams Road",
    beds: 42,
    icu: 8,
    oxygen: 12,
    ventilators: 5,
    load: 78,
    status: "limited",
  },
  {
    name: "Fortis Malar Hospital, Adyar",
    beds: 25,
    icu: 6,
    oxygen: 9,
    ventilators: 3,
    load: 65,
    status: "available",
  },
  {
    name: "MIOT International Hospital",
    beds: 30,
    icu: 10,
    oxygen: 14,
    ventilators: 6,
    load: 88,
    status: "full",
  },
  {
    name: "Government General Hospital, Chennai",
    beds: 120,
    icu: 20,
    oxygen: 40,
    ventilators: 15,
    load: 92,
    status: "full",
  },
  {
    name: "Sri Ramachandra Medical Centre",
    beds: 55,
    icu: 12,
    oxygen: 18,
    ventilators: 7,
    load: 70,
    status: "limited",
  },
];

/* Status Config */
const statusConfig = {
  available: {
    label: "AVAILABLE",
    className: "status-green",
    textClass: "text-status-green",
  },
  limited: {
    label: "LIMITED",
    className: "status-yellow",
    textClass: "text-status-yellow",
  },
  full: {
    label: "FULL",
    className: "status-red",
    textClass: "text-status-red",
  },
};

const HospitalCapacity = () => {
  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Building2 className="w-5 h-5 text-primary" />
        <h2 className="font-display text-sm font-bold tracking-wider text-foreground">
          HOSPITAL CAPACITY MONITOR
        </h2>
        <Heart className="w-4 h-4 text-primary animate-heartbeat ml-auto" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">

        {hospitals.map((hospital) => {

          const status = statusConfig[hospital.status as keyof typeof statusConfig];

          return (
            <div key={hospital.name} className="glass-card-hover p-4 space-y-3">

              {/* Hospital Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <h3 className="text-sm font-body font-bold text-foreground truncate">
                    {hospital.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className={`w-2 h-2 rounded-full ${status.className}`} />
                  <span className={`text-[10px] font-mono ${status.textClass}`}>
                    {status.label}
                  </span>
                </div>
              </div>

              {/* Capacity Bar */}
              <div>
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-1">
                  <span>PATIENT LOAD</span>
                  <span className={status.textClass}>{hospital.load}%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      hospital.load >= 90
                        ? "bg-status-red"
                        : hospital.load >= 70
                        ? "bg-status-yellow"
                        : "bg-status-green"
                    }`}
                    style={{ width: `${hospital.load}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2">

                <StatItem
                  icon={BedDouble}
                  label="Total Beds"
                  value={hospital.beds}
                />

                <StatItem
                  icon={Activity}
                  label="ICU Beds"
                  value={hospital.icu}
                  alert={hospital.icu < 10}
                />

                <StatItem
                  icon={Wind}
                  label="Oxygen Beds"
                  value={hospital.oxygen}
                />

                <StatItem
                  icon={Users}
                  label="Ventilators"
                  value={hospital.ventilators}
                  alert={hospital.ventilators < 5}
                />

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

/* Stat Item */
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

    <Icon
      className={`w-3.5 h-3.5 ${
        alert ? "text-status-red" : "text-muted-foreground"
      }`}
    />

    <div>
      <p className="text-[9px] font-mono text-muted-foreground leading-tight">
        {label}
      </p>

      <p
        className={`text-sm font-display font-bold leading-tight ${
          alert ? "text-status-red" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  </div>
);

export default HospitalCapacity;
