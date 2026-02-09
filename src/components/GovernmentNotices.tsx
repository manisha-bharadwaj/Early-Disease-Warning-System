import {
  AlertTriangle, ShieldAlert, Plane, Syringe, Phone,
  Radio, TriangleAlert, Megaphone
} from "lucide-react";

const alerts = [
  {
    type: "outbreak",
    icon: ShieldAlert,
    title: "H1N1 Influenza Outbreak Detected",
    description: "Cluster of 47 cases reported in South Delhi district. Enhanced surveillance activated.",
    severity: "critical",
    time: "2 hours ago",
  },
  {
    type: "mandate",
    icon: TriangleAlert,
    title: "Mask Mandate — High Risk Zones",
    description: "Mandatory N95 masks in public transport and healthcare facilities until further notice.",
    severity: "warning",
    time: "6 hours ago",
  },
  {
    type: "travel",
    icon: Plane,
    title: "Travel Advisory — Southeast Asia",
    description: "Avoid non-essential travel to affected regions. Mandatory screening at airports.",
    severity: "warning",
    time: "12 hours ago",
  },
  {
    type: "vaccination",
    icon: Syringe,
    title: "Emergency Vaccination Drive",
    description: "Free flu vaccines at 120+ centers across NCR starting Feb 7. Priority: elderly & children.",
    severity: "info",
    time: "1 day ago",
  },
  {
    type: "helpline",
    icon: Phone,
    title: "Emergency Helplines Active 24/7",
    description: "National: 1075 | State: 104 | Ambulance: 108 | Mental Health: 08046110007",
    severity: "info",
    time: "Active",
  },
];

const severityStyles = {
  critical: {
    border: "border-status-red/40",
    bg: "bg-status-red/5",
    badge: "bg-status-red/20 text-status-red",
    icon: "text-status-red",
  },
  warning: {
    border: "border-status-yellow/40",
    bg: "bg-status-yellow/5",
    badge: "bg-status-yellow/20 text-status-yellow",
    icon: "text-status-yellow",
  },
  info: {
    border: "border-primary/30",
    bg: "bg-primary/5",
    badge: "bg-primary/20 text-primary",
    icon: "text-primary",
  },
};

const GovernmentNotices = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Megaphone className="w-5 h-5 text-primary" />
        <h2 className="font-display text-sm font-bold tracking-wider text-foreground">
          GOVERNMENT & SAFETY NOTICES
        </h2>
        <Radio className="w-4 h-4 text-status-red flash-alert ml-auto" />
      </div>

      {/* Critical banner */}
      <div className="neon-border-strong p-3 rounded-lg flash-alert flex items-center gap-3 bg-status-red/5">
        <AlertTriangle className="w-5 h-5 text-status-red flex-shrink-0" />
        <div>
          <p className="text-xs font-display font-bold text-status-red tracking-wider">
            ⚠ OUTBREAK ALERT — ELEVATED RISK LEVEL
          </p>
          <p className="text-[11px] text-muted-foreground font-body mt-0.5">
            Multiple disease clusters detected. Stay vigilant and report symptoms immediately.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {alerts.map((alert, i) => {
          const styles = severityStyles[alert.severity as keyof typeof severityStyles];
          const Icon = alert.icon;
          return (
            <div
              key={i}
              className={`glass-card border ${styles.border} ${styles.bg} p-3 rounded-lg transition-all duration-200 hover:border-primary/50`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${styles.bg}`}>
                  <Icon className={`w-4 h-4 ${styles.icon}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-body font-bold text-foreground truncate">{alert.title}</h3>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full flex-shrink-0 ${styles.badge}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">{alert.description}</p>
                  <p className="text-[10px] font-mono text-muted-foreground/60 mt-1">{alert.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GovernmentNotices;
