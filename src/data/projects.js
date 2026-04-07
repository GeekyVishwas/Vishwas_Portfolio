// data/projects.js — All project data for Vishwas's portfolio

export const professionalProjects = [
  {
    id: 'fraud-detection',
    title: 'Fraud Transaction Detection System',
    description:
      'Built a fraud detection analytics pipeline using Python and SQL (SSMS). Performed EDA, feature engineering, and anomaly detection to identify suspicious financial patterns, enabling business stakeholders to act on flagged transactions in real time.',
    tech: ['Python', 'SQL', 'SSMS', 'Pandas', 'Anomaly Detection'],
    category: 'AI & ML',
    type: 'professional',
    icon: '🔍',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'medallion-pipeline',
    title: 'Enterprise Data Pipeline — Medallion Architecture',
    description:
      'Engineered a full end-to-end data pipeline ingesting from Azure SQL DB, transforming data through Bronze, Silver, and Gold Lakehouses via PySpark Notebooks and Fabric Pipelines. Automated infra provisioning using Terraform and Octopus Deploy.',
    tech: ['MS Fabric', 'PySpark', 'Azure SQL DB', 'Terraform', 'Octopus Deploy', 'Python'],
    category: 'Data Engineering',
    type: 'professional',
    icon: '🏗️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ai-agent',
    title: 'End-to-End AI Conversational Agent',
    description:
      'Architected and deployed a production-grade AI agent using Microsoft Copilot Studio covering appointment creation, order booking, invoice search/download, task creation, and case management — integrated into Canvas App and Model-Driven App.',
    tech: ['Copilot Studio', 'Power Automate', 'Canvas App', 'Model-Driven App', 'Prompt Actions'],
    category: 'AI & ML',
    type: 'professional',
    icon: '🤖',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'wall-detection',
    title: 'Wall Detection & Dimensional Measurement',
    description:
      'Developed an object detection solution using YOLO and Python to classify company-owned walls from images. Implemented spatial measurement logic to compute height and width of detected walls, exposed via FastAPI endpoint.',
    tech: ['YOLO', 'Python', 'FastAPI', 'OpenCV', 'Computer Vision'],
    category: 'Computer Vision',
    type: 'professional',
    icon: '👁️',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 'data-agent',
    title: 'Conversational Data Agent — MS Fabric',
    description:
      'Built an intelligent Data Agent in Microsoft Fabric enabling natural language querying of Lakehouse tables. Trained the agent using curated SQL query sets to generate reliable business insights for non-technical stakeholders.',
    tech: ['Microsoft Fabric', 'SQL', 'NLP', 'Data Agent', 'Python'],
    category: 'AI & ML',
    type: 'professional',
    icon: '💬',
    color: 'from-primary-500 to-cyan-400',
  },
];

export const personalProjects = [
  {
    id: 'face-matching',
    title: 'Face Matching Web App',
    description:
      'A Streamlit-based web application that matches faces between two images (captured via webcam or uploaded) and provides an accuracy percentage with visual feedback using OpenCV.',
    tech: ['Python', 'Streamlit', 'OpenCV', 'Computer Vision'],
    category: 'Computer Vision',
    type: 'personal',
    github: 'https://github.com/GeekyVishwas/Face-Matching-Web-App',
    icon: '😊',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'smart-attendance',
    title: 'Smart Attendance Management System',
    description:
      'Face-recognition-based attendance system using Python, OpenCV, and dlib. Captures user images, trains a classifier, and records attendance automatically into CSV or a MySQL database.',
    tech: ['Python', 'OpenCV', 'face_recognition', 'dlib', 'MySQL'],
    category: 'Computer Vision',
    type: 'personal',
    github: 'https://github.com/GeekyVishwas/Smart-Attendance-Management-System',
    icon: '📋',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'hand-gesture',
    title: 'Hand Gesture Presentation Control',
    description:
      'Enables gesture-based control of presentations using OpenCV and Mediapipe. Supports next/previous slides, pointing, underlining, and erasing — no mouse or keyboard needed.',
    tech: ['Python', 'OpenCV', 'Mediapipe', 'Computer Vision'],
    category: 'Computer Vision',
    type: 'personal',
    github: 'https://github.com/GeekyVishwas/Hand-Gesture-Based-Presentation-Control',
    icon: '✋',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'diabetes-prediction',
    title: 'Diabetes Prediction App',
    description:
      'Machine learning-powered Streamlit web application that predicts diabetes risk based on user-inputted health parameters with trained ML models for accurate, swift risk assessments.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Machine Learning'],
    category: 'AI & ML',
    type: 'personal',
    github: 'https://github.com/GeekyVishwas/diabetes_prediction',
    icon: '🩺',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'rock-paper-scissors',
    title: 'Hand Gesture Rock Paper Scissors',
    description:
      'Interactive hand-gesture-based Rock Paper Scissors game using OpenCV and a Hand Tracking Module. The user plays live against the computer by showing their choice to the webcam.',
    tech: ['Python', 'OpenCV', 'Hand Tracking Module'],
    category: 'Computer Vision',
    type: 'personal',
    github: 'https://github.com/GeekyVishwas/Rock-Paper-Scissors-Game',
    icon: '✊',
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 'mini-alexa',
    title: 'Mini Alexa Voice Assistant',
    description:
      'A Python voice assistant inspired by Alexa that listens to voice commands, searches Wikipedia, plays music, and tells jokes — responding via speech synthesis using pyttsx3.',
    tech: ['Python', 'speech_recognition', 'pyttsx3', 'Wikipedia API'],
    category: 'AI & ML',
    type: 'personal',
    github: 'https://github.com/GeekyVishwas/Mini-Alexa',
    icon: '🎙️',
    color: 'from-cyan-500 to-sky-500',
  },
  {
    id: 'ball-tracking',
    title: 'Real-Time Ball Tracking',
    description:
      'Tracks the trajectory of a specific object (green ball) in a video stream using OpenCV computer vision techniques. Provides real-time visual feedback with path visualization.',
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    category: 'Computer Vision',
    type: 'personal',
    github: 'https://github.com/GeekyVishwas/Ball-tracking',
    icon: '⚽',
    color: 'from-green-500 to-emerald-500',
  },
];

export const allProjects = [...professionalProjects, ...personalProjects];

export const categories = ['All', 'Professional', 'Personal', 'AI & ML', 'Computer Vision', 'Data Engineering'];
