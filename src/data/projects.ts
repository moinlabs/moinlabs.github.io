import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "isl-translator",
    title: "Portable AI-Based Sign Language Translator",
    role: "Project Lead",
    period: "Feb 2025 – May 2025",
    description:
      "Real-time portable Indian Sign Language translator running on an Arduino Nicla Vision with a quantized INT8 MobileNetV2 CNN under 1 MB.",
    features: [
      "Real-time on-device inference on a microcontroller",
      "Quantized INT8 MobileNetV2, model size < 1 MB",
      "Custom dataset of 3,000+ images, created and augmented in-house",
    ],
    challenges: ["Fitting a usable CNN into severe memory and compute limits of the Nicla Vision"],
    lessons: ["Model compression (quantization, lightweight architectures) for resource-limited deployment"],
    futureImprovements: ["TODO: e.g. larger vocabulary, temporal gesture modelling"],
    tech: ["Arduino Nicla Vision", "MobileNetV2", "INT8 Quantization", "TensorFlow Lite Micro", "Python"],
    tags: ["Edge AI", "Computer Vision", "Embedded"],
    status: "completed",
    featured: true,
  },
  {
    id: "transformer-nmt",
    title: "Transformer from Scratch: English→Hindi NMT",
    period: "Jan 2025 – Mar 2025",
    description:
      "Transformer-based neural machine translation model implemented from scratch in PyTorch, with custom tokenization, attention mechanisms, and sequence optimization.",
    lessons: ["Deep understanding of attention, tokenization, and training dynamics by building every layer by hand"],
    tech: ["PyTorch", "Python", "NLP"],
    tags: ["NLP", "Deep Learning"],
    status: "completed",
    featured: true,
  },
  {
    id: "image-captioning",
    title: "Image Captioning with Deep Fusion Models",
    period: "Jan 2025 – Apr 2025",
    description:
      "CNN–LSTM and deep fusion models (InceptionV3 encoder + LSTM decoder) generating captions from images, trained and evaluated on Flickr8k with BLEU, METEOR, and ROUGE-L.",
    lessons: [
      "Global feature fusion achieves competitive performance vs attention-based models while reducing computational overhead",
    ],
    tech: ["InceptionV3", "LSTM", "TensorFlow/Keras", "Flickr8k"],
    tags: ["Computer Vision", "NLP", "Deep Learning"],
    status: "completed",
    featured: true,
  },
  {
    id: "mpc-quadruped",
    title: "MPC Controller for Stoch Quadruped Robot",
    period: "Sep 2024 – Dec 2024",
    description:
      "Model Predictive Control-based controller in Python and C++ for trajectory optimization, integrating joint constraints and stability margins, validated in ROS 2 + Gazebo simulation for stable locomotion across terrains.",
    tech: ["Python", "C++", "ROS 2", "Gazebo", "MPC"],
    tags: ["Robotics", "Control"],
    status: "completed",
    featured: true,
  },
  {
    id: "building-classification",
    title: "Building Classification for Disaster Risk Management",
    period: "Aug 2024 – Sep 2024",
    description:
      "Automated building classification of Google Street View images into five types using CNNs (ResNet, EfficientNet) over 2,516 images, with class-imbalance handling for disaster-risk assessment.",
    tech: ["ResNet", "EfficientNet", "PyTorch", "CNNs"],
    tags: ["Computer Vision", "Deep Learning"],
    status: "completed",
  },
  {
    id: "stack-bot",
    title: "Stack Bot",
    period: "Aug 2024 – Nov 2024",
    description:
      "Robotic system with precise motion control: real-time feedback, PWM motor control with PID, rotary encoders, H-bridge drivers, and wireless radio control via micro:bits.",
    tech: ["PID Control", "PWM", "Encoders", "micro:bit", "Embedded C"],
    tags: ["Robotics", "Embedded"],
    status: "completed",
  },
  {
    id: "melbourne-eda",
    title: "Exploratory Data Analysis: Greater Melbourne Suburbs",
    period: "Oct 2024 – Nov 2024",
    description:
      "Analysis of demographic, healthcare, and land-usage data using MDS and clustering, with 2D scatter visualizations and urban-planning insights.",
    tech: ["MDS", "Clustering", "Statistical Analysis", "Data Visualization"],
    tags: ["Data Science"],
    status: "completed",
  },
  {
    id: "bwb-aircraft",
    title: "Blended Wing Body Aircraft",
    period: "Aug 2022 – Jun 2023",
    description:
      "Led the design, simulation, and analysis of a BWB aircraft, optimizing fuel efficiency and performance while managing a team — achieved top project status.",
    tech: ["Aerodynamics", "Simulation", "Team Leadership"],
    tags: ["Aerospace"],
    status: "completed",
  },
];

export const allProjectTags = [...new Set(projects.flatMap((p) => p.tags))].sort();
