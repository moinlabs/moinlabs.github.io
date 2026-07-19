import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  { category: "Languages", skills: ["C", "C++", "Python", "MicroPython", "Shell Scripting", "TypeScript"] },
  {
    category: "ML / DL Libraries",
    skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers", "Scikit-learn", "LangChain", "OpenCV", "vLLM", "Pandas", "NumPy"],
  },
  {
    category: "AI / ML Concepts",
    skills: ["Transformers", "RAG", "Fine-tuning", "Seq2Seq", "Knowledge Distillation", "CNNs", "GANs", "Autoencoders", "Model Pruning & Quantization", "Image Segmentation", "Ensemble Methods", "Imbalanced Data (SMOTE)", "PCA / SVD / t-SNE"],
  },
  {
    category: "Robotics & Embedded",
    skills: ["ROS 2", "Gazebo", "MoveIt 2", "Arduino", "Raspberry Pi", "Nicla Vision", "Jetson Nano", "NRF52", "OpenMV", "FreeRTOS", "RTX5", "ARM MBED OS", "UART / SPI / I²C / CAN", "PWM / ADC", "BLE / Wi-Fi"],
  },
  {
    category: "Edge AI",
    skills: ["TensorFlow Lite Micro", "Edge Impulse", "ONNX Runtime", "MJPEG Streaming", "INT8 Quantization"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Label Studio", "Jupyter", "VS Code", "Linux", "MATLAB", "LaTeX"],
  },
];
