import {
  Thermometer, Wind, CloudSnow, Brain, CircleAlert,
  Droplets, Bone, Fingerprint, HeartPulse, MapPin,
  Plane, Users, Syringe, CalendarDays, Send, Activity
} from "lucide-react";
import { useState } from "react";

/* 🧬 RECEIVE LOCATION FROM DASHBOARD */
interface Props {
  userLocation: string;
}

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
const vaccinationStatuses = [
  "Fully Vaccinated",
  "Partially",
  "Not Vaccinated",
  "Booster Done",
];

const SymptomSurvey = ({ userLocation }: Props) => {

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [severity, setSeverity] = useState("Mild");
  const [duration, setDuration] = useState("");
  const [travelHistory, setTravelHistory] = useState(false);
  const [crowdedExposure, setCrowdedExposure] = useState(false);
  const [vaccination, setVaccination] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="h-full flex flex-col">

      {/* 🟢 AFTER SUBMIT — POSITIVE DASHBOARD */}
      {submitted ? (

        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-6">

          <div className="w-20 h-20 rounded-full bg-status-green/20 flex items-center justify-center animate-pulse">
            <HeartPulse className="w-10 h-10 text-status-green" />
          </div>

          <h2 className="text-xl font-bold text-status-green">
            Report Submitted Successfully
          </h2>

          <p className="text-sm text-muted-foreground max-w-md">
            Thank you for contributing to the Disease Spread Early Warning System.
            Your anonymous report helps detect outbreaks early and protect communities.
          </p>

          <div className="grid gap-3 w-full max-w-sm">
            <div className="glass-card p-3">
              🧬 Strengthens outbreak prediction models
            </div>
            <div className="glass-card p-3">
              🏥 Helps hospitals prepare resources
            </div>
            <div className="glass-card p-3">
              🌍 Supports national health surveillance
            </div>
          </div>

          <div className="glass-card p-4 border border-primary/30">
            <h3 className="font-bold text-primary mb-2">
              Recommended Precautions
            </h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Wear masks in crowded places</li>
              <li>• Stay hydrated</li>
              <li>• Monitor symptoms</li>
              <li>• Seek medical care if needed</li>
            </ul>
          </div>

        </div>

      ) : (

        /* 🔴 BEFORE SUBMIT — FULL FORM */
        <>

          {/* HEADER */}
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

          {/* FORM BODY */}
          <div className="flex-1 overflow-y-auto scrollbar-dark px-5 py-4 space-y-6">

            {/* LOCATION */}
            <div className="glass-card p-3 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">
                  LOCATION DETECTED
                </p>
                <p className="text-sm font-semibold">
                  {userLocation}
                </p>
              </div>
            </div>

            {/* SYMPTOMS */}
            <div>
              <label className="text-xs mb-2 block">
                SELECT SYMPTOMS
              </label>

              <div className="grid grid-cols-2 gap-2">
                {symptoms.map(({ id, label, icon: Icon }) => {
                  const active = selectedSymptoms.includes(id);

                  return (
                    <button
                      key={id}
                      onClick={() => toggleSymptom(id)}
                      className={`flex items-center gap-2 p-2 rounded ${
                        active
                          ? "neon-border bg-primary/10"
                          : "glass-card"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SEVERITY */}
            <div>
              <label className="text-xs mb-2 block">
                SEVERITY LEVEL
              </label>

              <div className="flex gap-2">
                {severityLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSeverity(level)}
                    className={`flex-1 py-2 rounded ${
                      severity === level
                        ? "neon-border bg-primary/10"
                        : "glass-card"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* DURATION */}
            <div>
              <label className="text-xs mb-2 block">
                SYMPTOM DURATION
              </label>

              <div className="flex gap-2">
                {durations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`flex-1 py-2 rounded ${
                      duration === d
                        ? "neon-border bg-primary/10"
                        : "glass-card"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* TOGGLES */}
            <ToggleRow
              icon={Plane}
              label="Travel History"
              value={travelHistory}
              onChange={setTravelHistory}
            />

            <ToggleRow
              icon={Users}
              label="Crowded Exposure"
              value={crowdedExposure}
              onChange={setCrowdedExposure}
            />

            {/* VACCINATION */}
            <div>
              <label className="text-xs mb-2 block">
                VACCINATION STATUS
              </label>

              <div className="grid grid-cols-2 gap-2">
                {vaccinationStatuses.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVaccination(v)}
                    className={`py-2 rounded ${
                      vaccination === v
                        ? "neon-border bg-primary/10"
                        : "glass-card"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* AGE */}
            <div>
              <label className="text-xs mb-2 block">
                AGE GROUP
              </label>

              <div className="grid grid-cols-3 gap-2">
                {ageGroups.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAgeGroup(a)}
                    className={`py-2 rounded ${
                      ageGroup === a
                        ? "neon-border bg-primary/10"
                        : "glass-card"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-3 rounded glow-button flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              SUBMIT REPORT
            </button>

          </div>

        </>

      )}

    </div>
  );
};

/* Toggle Row */
const ToggleRow = ({
  icon: Icon,
  label,
  value,
  onChange,
}: any) => (
  <div className="glass-card p-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4" />
      {label}
    </div>

    <button
      onClick={() => onChange(!value)}
      className={`w-10 h-5 rounded-full ${
        value ? "bg-primary" : "bg-muted"
      }`}
    />
  </div>
);

export default SymptomSurvey;
