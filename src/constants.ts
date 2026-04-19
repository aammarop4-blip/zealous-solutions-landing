import { Job, TrainingModule } from "./types";

export const AVAILABLE_JOBS: Job[] = [
  {
    id: "1",
    title: "Inbound Support Agent",
    department: "Operations",
    description: "High-authority resolution specialist for technical telemetry support and enterprise client relations.",
    type: "Full-Time",
    location: "Remote",
  },
  {
    id: "2",
    title: "Outbound Sales Executive",
    department: "Growth",
    description: "Kinetic authority lead responsible for identifying global strategic opportunities and network expansion.",
    type: "Commission",
    location: "Hybrid",
  },
  {
    id: "3",
    title: "Lead Operations Analyst",
    department: "Operations",
    description: "Senior role focusing on operational intelligence and workforce management.",
    type: "Full-Time",
    location: "On-site",
  }
];

export const TRAINING_MODULES: TrainingModule[] = [
  { id: "mva", title: "MVA Training Phase", duration: "12:00", status: "in-progress" },
  { id: "medicare", title: "Medicare Training", duration: "08:45", status: "locked" },
  { id: "aca", title: "ACA Training", duration: "10:30", status: "locked" },
  { id: "foundation", title: "Foundation Training", duration: "05:00", status: "completed" }
];
