import {
  Thermometer, Wind, CloudSnow, Brain, CircleAlert,
  Droplets, Bone, Fingerprint, HeartPulse, MapPin,
  Plane, Users, Syringe, CalendarDays, Send, Activity
} from "lucide-react";
import { useState } from "react";

const symptoms = [
  { id: "fever", label: "Fever", icon: Thermometer },
  { id: "cough", label: "Cough", icon: Wind },
  { id: "cold", label: "Cold", icon: CloudSnow },
  { id: "headache", label: "Headache", icon: Brain },
  { id: "vomiting", label: "Vomiting", icon: CircleAlert },
  { id: "diarrhea", label: "Diarrhea", icon: Droplets },
  { id: "bodyPain", label: "Body Pain", icon: Bone },
  { id: "skinRash", label: "Skin Rash", icon: Fingerprint },
  { id: "breathing", label: "Breathing Difficulty", icon: HeartPulse },
];

const severityLevels = ["Mild", "Moderate", "Severe"];
const durations = ["1–2 days", "3–5 days", "1 week+"];
const ageGroups = ["0–12", "13–17", "18–30", "31–50", "51–65", "65+"];
const vaccinationStatuses = ["Fully Vaccinated", "Partially", "Not Vaccinated", "Booster Done"];

const SymptomSurvey = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [severity, setSeverity] = useState("Mild");
  const [duration, setDuration] = useState("");
  const [travelHistory, setTravelHistory] = useState(false);
  const [crowdedExposure, setCrowdedExposure] = useState(false);
  const [vaccination, setVaccination] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2 mb-1">
          <Activity className="w-5 h-5 text-primary" />
          <h2 className="font-display text-sm font-bold tracking-wider text-foreground">
            SYMPTOM INTELLIGENCE
          </h2>
        </div>
        <p className="text-xs text-muted-foreground font-body">
          Anonymous health report — your data helps save lives
        </p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-dark px-5 py-4 space-y-6">
        {/* Location */}
        <div className="glass-card p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-mono">LOCATION DETECTED</p>
            <p className="text-sm text-foreground font-body font-semibold">New Delhi, India — 28.6139°N</p>
          </div>
          <span className="ml-auto relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 status-green"></span>
          </span>
        </div>

        {/* Symptoms */}
        <div>
          <label className="font-display text-xs tracking-wider text-muted-foreground mb-3 block">
            SELECT SYMPTOMS
          </label>
          <div className="grid grid-cols-2 gap-2">
            {symptoms.map(({ id, label, icon: Icon }) => {
              const isActive = selectedSymptoms.includes(id);
              return (
                <button
                  key={id}
                  onClick={() => toggleSymptom(id)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg text-left text-sm font-body transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "neon-border bg-primary/10 text-foreground"
                      : "glass-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-primary" : ""}`} />
                  <span className="truncate">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Severity */}
        <div>
          <label className="font-display text-xs tracking-wider text-muted-foreground mb-3 block">
            SEVERITY LEVEL
          </label>
          <div className="flex gap-2">
            {severityLevels.map((level) => (
              <button
                key={level}
                onClick={() => setSeverity(level)}
                className={`flex-1 py-2 rounded-lg text-sm font-body font-semibold transition-all duration-200 cursor-pointer ${
                  severity === level
                    ? level === "Severe"
                      ? "neon-border-strong bg-primary/20 text-primary"
                      : level === "Moderate"
                      ? "neon-border bg-status-yellow/10 text-status-yellow"
                      : "neon-border bg-status-green/10 text-status-green"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="font-display text-xs tracking-wider text-muted-foreground mb-3 block">
            SYMPTOM DURATION
          </label>
          <div className="flex gap-2">
            {durations.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`flex-1 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  duration === d
                    ? "neon-border bg-primary/10 text-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle switches */}
        <div className="space-y-3">
          <ToggleRow
            icon={Plane}
            label="Travel History (Last 14 Days)"
            value={travelHistory}
            onChange={setTravelHistory}
          />
          <ToggleRow
            icon={Users}
            label="Crowded Place Exposure"
            value={crowdedExposure}
            onChange={setCrowdedExposure}
          />
        </div>

        {/* Vaccination Status */}
        <div>
          <label className="font-display text-xs tracking-wider text-muted-foreground mb-3 block">
            <Syringe className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            VACCINATION STATUS
          </label>
          <div className="grid grid-cols-2 gap-2">
            {vaccinationStatuses.map((status) => (
              <button
                key={status}
                onClick={() => setVaccination(status)}
                className={`py-2 px-3 rounded-lg text-xs font-body transition-all duration-200 cursor-pointer ${
                  vaccination === status
                    ? "neon-border bg-primary/10 text-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Age Group */}
        <div>
          <label className="font-display text-xs tracking-wider text-muted-foreground mb-3 block">
            <CalendarDays className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            AGE GROUP
          </label>
          <div className="grid grid-cols-3 gap-2">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => setAgeGroup(age)}
                className={`py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  ageGroup === age
                    ? "neon-border bg-primary/10 text-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button className="w-full py-3.5 rounded-lg glow-button text-primary-foreground font-display text-sm font-bold tracking-widest flex items-center justify-center gap-2 cursor-pointer">
          <Send className="w-4 h-4" />
          SUBMIT REPORT
        </button>

        <p className="text-[10px] text-muted-foreground text-center font-mono pb-2">
          DATA IS ENCRYPTED & ANONYMOUS • HIPAA COMPLIANT
        </p>
      </div>
    </div>
  );
};

const ToggleRow = ({
  icon: Icon,
  label,
  value,
  onChange,
}: {
  icon: React.ElementType;
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) => (
  <div className="glass-card p-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-muted-foreground" />
      <span className="text-sm font-body text-foreground">{label}</span>
    </div>
    <button
      onClick={() => onChange(!value)}
      className={`w-11 h-6 rounded-full relative transition-all duration-300 cursor-pointer ${
        value ? "bg-primary" : "bg-muted"
      }`}
    >
      <span
        className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 ${
          value
            ? "left-[22px] bg-primary-foreground shadow-[0_0_8px_hsl(0_85%_45%/0.5)]"
            : "left-0.5 bg-muted-foreground"
        }`}
      />
    </button>
  </div>
);

export default SymptomSurvey;
