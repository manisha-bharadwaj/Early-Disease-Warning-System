import { TrendingUp, PieChart as PieChartIcon, BarChart3, AlertTriangle } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar,
} from "recharts";

const dailyCases = [
  { day: "Mon", cases: 120, recovered: 80 },
  { day: "Tue", cases: 180, recovered: 95 },
  { day: "Wed", cases: 250, recovered: 130 },
  { day: "Thu", cases: 310, recovered: 160 },
  { day: "Fri", cases: 280, recovered: 200 },
  { day: "Sat", cases: 350, recovered: 220 },
  { day: "Sun", cases: 420, recovered: 250 },
];

const symptomData = [
  { name: "Fever", value: 35 },
  { name: "Cough", value: 25 },
  { name: "Headache", value: 15 },
  { name: "Body Pain", value: 12 },
  { name: "Breathing", value: 8 },
  { name: "Other", value: 5 },
];

const pieColors = [
  "hsl(0, 85%, 45%)",
  "hsl(0, 60%, 55%)",
  "hsl(25, 80%, 50%)",
  "hsl(45, 90%, 50%)",
  "hsl(0, 40%, 35%)",
  "hsl(0, 20%, 30%)",
];

const infectionGrowth = [
  { zone: "Zone A", infections: 420, previous: 350 },
  { zone: "Zone B", infections: 310, previous: 280 },
  { zone: "Zone C", infections: 250, previous: 190 },
  { zone: "Zone D", infections: 180, previous: 200 },
  { zone: "Zone E", infections: 130, previous: 110 },
];

const riskZones = [
  { name: "South Delhi", level: "Critical", cases: 420, trend: "+18%" },
  { name: "Central Mumbai", level: "High", cases: 310, trend: "+12%" },
  { name: "North Kolkata", level: "Moderate", cases: 180, trend: "+5%" },
  { name: "East Bangalore", level: "Low", cases: 65, trend: "-3%" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-2 border border-border text-xs font-mono">
        <p className="text-foreground">{label}</p>
        {payload.map((entry: any, i: number) => (
          <p key={i} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const LiveAnalytics = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h2 className="font-display text-sm font-bold tracking-wider text-foreground">
          LIVE CASE ANALYTICS
        </h2>
        <span className="ml-auto font-mono text-[10px] text-muted-foreground">
          LAST UPDATED: 2 MIN AGO
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Daily Case Trend */}
        <div className="glass-card-hover p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="font-display text-xs tracking-wider text-muted-foreground">DAILY CASE TREND</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={dailyCases}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 20%, 15%)" />
              <XAxis dataKey="day" tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 10 }} stroke="hsl(0, 20%, 15%)" />
              <YAxis tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 10 }} stroke="hsl(0, 20%, 15%)" />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="cases" stroke="hsl(0, 85%, 45%)" strokeWidth={2} dot={{ fill: "hsl(0, 85%, 45%)", r: 3 }} name="Cases" />
              <Line type="monotone" dataKey="recovered" stroke="hsl(140, 70%, 45%)" strokeWidth={2} dot={{ fill: "hsl(140, 70%, 45%)", r: 3 }} name="Recovered" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Symptom Distribution */}
        <div className="glass-card-hover p-4">
          <div className="flex items-center gap-2 mb-3">
            <PieChartIcon className="w-4 h-4 text-primary" />
            <span className="font-display text-xs tracking-wider text-muted-foreground">SYMPTOM DISTRIBUTION</span>
          </div>
          <div className="flex items-center">
            <ResponsiveContainer width="50%" height={180}>
              <PieChart>
                <Pie data={symptomData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="value" stroke="none">
                  {symptomData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-1/2 space-y-1.5 pl-2">
              {symptomData.map((item, i) => (
                <div key={item.name} className="flex items-center gap-2 text-xs font-body">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: pieColors[i] }} />
                  <span className="text-muted-foreground truncate">{item.name}</span>
                  <span className="ml-auto text-foreground font-mono">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infection Growth */}
        <div className="glass-card-hover p-4">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="font-display text-xs tracking-wider text-muted-foreground">INFECTION GROWTH BY ZONE</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={infectionGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 20%, 15%)" />
              <XAxis dataKey="zone" tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 10 }} stroke="hsl(0, 20%, 15%)" />
              <YAxis tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 10 }} stroke="hsl(0, 20%, 15%)" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="previous" fill="hsl(0, 20%, 25%)" radius={[3, 3, 0, 0]} name="Previous" />
              <Bar dataKey="infections" fill="hsl(0, 85%, 45%)" radius={[3, 3, 0, 0]} name="Current" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Zone Rankings */}
        <div className="glass-card-hover p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-primary" />
            <span className="font-display text-xs tracking-wider text-muted-foreground">RISK ZONE RANKING</span>
          </div>
          <div className="space-y-2">
            {riskZones.map((zone, i) => (
              <div key={zone.name} className="glass-card p-3 flex items-center gap-3">
                <span className="font-display text-lg font-bold text-primary/60 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-body font-semibold text-foreground truncate">{zone.name}</p>
                  <p className="text-[10px] font-mono text-muted-foreground">{zone.cases} active cases</p>
                </div>
                <span
                  className={`text-xs font-mono font-bold ${
                    zone.trend.startsWith("+") ? "text-status-red" : "text-status-green"
                  }`}
                >
                  {zone.trend}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    zone.level === "Critical"
                      ? "bg-status-red/20 text-status-red"
                      : zone.level === "High"
                      ? "bg-status-yellow/20 text-status-yellow"
                      : zone.level === "Moderate"
                      ? "bg-primary/20 text-primary"
                      : "bg-status-green/20 text-status-green"
                  }`}
                >
                  {zone.level.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAnalytics;
