import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "Chevron",
    role: "Software Engineer",
    period: "2026 – Present",
    location: "Bangalore, India",
    type: "work",
    points: [
      "TODO: add responsibilities and impact once you settle into the role.",
    ],
    tech: [],
  },
  {
    company: "Siemens",
    role: "Research Intern",
    period: "May 2025 – Aug 2025",
    type: "internship",
    points: [
      "Built a PCB segmentation pipeline using U²-Net and SAM with Label Studio, accelerating and improving annotation quality.",
      "Implemented eye-to-hand calibration of an Intel RealSense D435 with a Doosan A0509 manipulator using ROS 2 & MoveIt 2, applying multiple solvers for precise robot–camera alignment.",
    ],
    tech: ["U²-Net", "SAM", "Label Studio", "ROS 2", "MoveIt 2", "Intel RealSense"],
    impact: "Deep learning-driven PCB segmentation and camera-to-robot calibration",
  },
  {
    company: "IISc Bangalore",
    role: "Teaching Assistant — Data Science in Practice",
    period: "2024 – 2026",
    type: "academic",
    points: [
      "Delivered tutorials for 90+ PG students on ML/DL fundamentals: neural networks, CNNs, object detection, segmentation, decision trees, regression, and EDA.",
    ],
  },
  {
    company: "IISc Bangalore",
    role: "Teaching Assistant — Design of Cyber-Physical Systems",
    period: "2024 – 2026",
    type: "academic",
    points: [
      "Conducted tutorials for 30+ PG students on GPIO drivers, encoders, radio control, motor interfacing, and PID control — integrating control theory with embedded design.",
    ],
  },
  {
    company: "Air India",
    role: "Technical Intern",
    period: "Jun 2022 – Jul 2022",
    type: "internship",
    points: [
      "Worked on aircraft maintenance and inspection procedures.",
      "Gained hands-on experience with aeronautical systems and safety protocols.",
    ],
  },
];
