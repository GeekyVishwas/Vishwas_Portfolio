// data/resume.js — Full resume content from LaTeX

export const resumeData = {
  name: 'Vishwas Gupta',
  title: 'Associate Consultant — Data Engineer & AI Developer',
  contact: {
    phone: '+91-7860745246',
    email: 'vishwasgupta666@gmail.com',
    linkedin: 'https://linkedin.com/in/vishwasgupta07',
    github: 'https://github.com/GeekyVishwas',
    portfolio: 'https://geekyvishwas.github.io/Vishwas_Portfolio/',
    location: 'Vadodara, Gujarat (Current) | Gorakhpur, UP (Permanent)',
  },
  summary:
    'Results-driven Associate Consultant — Data Engineer & AI Developer with 2+ years of experience at BDO India Service Pvt. Ltd. delivering end-to-end data pipelines, AI-powered automation, and cloud analytics solutions. Expert in Microsoft Fabric, Azure, Python, PySpark, and SQL, with hands-on production experience implementing Medallion Architecture, building Copilot Studio AI Agents, and deploying YOLO-based computer vision systems. Recognized with back-to-back SPOT Awards for exceptional delivery. Pursuing MBA in Analytics & Data Science alongside active professional practice.',

  experience: [
    {
      company: 'BDO India Service Pvt. Ltd.',
      location: 'Vadodara, Gujarat, India',
      role: 'Associate Consultant — Data Engineering & AI Development',
      period: 'April 2025 – Present',
      highlights: [
        'Architected production AI Conversational Agent in Copilot Studio integrated into Power Apps',
        'Built YOLO-based wall detection system with FastAPI REST endpoint for downstream integration',
        'Created a multi-language audio recorder app with pause/resume for 4 languages',
        'Developed MS Fabric Data Agent enabling natural language querying of Lakehouse tables',
      ],
    },
    {
      company: 'BDO India Service Pvt. Ltd.',
      location: 'Vadodara, Gujarat, India',
      role: 'Software Engineer Trainee',
      period: 'April 2024 – April 2025',
      highlights: [
        'Built a fraud transaction detection model using Python and SQL (SSMS) identifying suspicious financial patterns',
        'Engineered end-to-end Medallion Architecture pipeline (Bronze/Silver/Gold) on Microsoft Fabric using PySpark',
        'Automated infrastructure provisioning with Terraform and Octopus Deploy for CI/CD workflows',
        'Developed API-driven data ingestion with custom pagination logic and Power Automate alerting',
      ],
    },
  ],

  education: [
    {
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Analytics & Data Science',
      institution: 'Manipal University Jaipur, Rajasthan',
      period: '2024 – Present',
    },
    {
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Information Technology | SGPA: 7.94 / 10',
      institution: 'Buddha Institute of Technology (AKTU), Gorakhpur, U.P.',
      period: '2020 – 2024',
    },
  ],

  certifications: [
    {
      name: 'Microsoft Certified: Azure AI Engineer Associate',
      issuer: 'Microsoft',
      code: 'AI-102',
      detail: 'Azure Cognitive Services, Azure OpenAI, Bot Service, ML Ops',
      url: 'https://learn.microsoft.com/en-us/users/vishwasgupta-2965/credentials/5b0bf3db8810f946',
      badge: '🏆',
      status: 'Active',
    },
    {
      name: 'IBM AI Developer Specialization Certificate',
      issuer: 'IBM / Coursera',
      code: 'IBM AI',
      detail: 'Generative AI, Python for AI, Machine Learning, Deep Learning, FastAPI',
      url: 'https://www.coursera.org/account/accomplishments/specialization/2M9F5QT2604S',
      badge: '📜',
      status: 'Active',
    },
  ],

  achievements: [
    {
      title: 'SPOT Award — 2 Consecutive Quarters',
      org: 'BDO India Service Pvt. Ltd.',
      description:
        'Recognized for outstanding performance, proactive project ownership, and consistent delivery of high-impact solutions across two back-to-back performance quarters.',
      icon: '⭐',
    },
  ],

  skills: {
    'Languages & Querying': 'Python, PySpark, SQL (T-SQL / SSMS)',
    'Data Engineering & Cloud': 'Microsoft Fabric, Azure SQL Database, Azure Data Lake, Lakehouse (Bronze/Silver/Gold), Medallion Architecture',
    'Infrastructure & DevOps': 'Terraform, Octopus Deploy, CI/CD Pipelines, REST APIs, Pagination Logic',
    'AI / ML / Computer Vision': 'YOLO, Machine Learning, Fraud Detection, Conversational Data Agents, FastAPI',
    'Power Platform & Low-Code': 'Microsoft Copilot Studio, Power Automate, Power Apps (Canvas App & Model-Driven App)',
    'Frameworks & Libraries': 'Pandas, NumPy, OpenCV, Scikit-learn, FastAPI, React Native (support)',
    'Tools & Platforms': 'Git, Postman, SSMS, Jupyter Notebooks, VS Code, Microsoft Azure Portal',
  },
};

export const timeline = [
  {
    year: '2020',
    title: 'Started B.Tech in IT',
    org: 'Buddha Institute of Technology (AKTU)',
    description: 'Began my journey in Information Technology, building strong foundations in programming and computer science.',
    icon: '🎓',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2022',
    title: 'AI & Computer Vision Projects',
    org: 'Personal Development',
    description: 'Explored computer vision with OpenCV, built face recognition, gesture control, and object tracking projects.',
    icon: '👁️',
    color: 'from-primary-500 to-violet-500',
  },
  {
    year: '2024',
    title: 'Graduated B.Tech',
    org: 'Buddha Institute of Technology',
    description: 'Graduated with SGPA 7.94/10 in Information Technology, ready to take on real-world challenges.',
    icon: '🏅',
    color: 'from-green-500 to-teal-500',
  },
  {
    year: '2024',
    title: 'Joined BDO India as Software Engineer Trainee',
    org: 'BDO India Service Pvt. Ltd.',
    description: 'Began professional career building foundational knowledge in data pipelines and enterprise analytics.',
    icon: '💻',
    color: 'from-orange-500 to-amber-500',
  },
  {
    year: '2025',
    title: 'Promoted to Associate Consultant',
    org: 'BDO India Service Pvt. Ltd.',
    description: 'Elevated to Associate Consultant, taking ownership of complex data engineering and AI projects.',
    icon: '🚀',
    color: 'from-pink-500 to-rose-500',
  },
  {
    year: '2024',
    title: 'Azure AI Engineer Certified',
    org: 'Microsoft (AI-102)',
    description: 'Earned Microsoft Certified: Azure AI Engineer Associate certification, validating expertise in Azure AI services.',
    icon: '☁️',
    color: 'from-blue-400 to-primary-500',
  },
  {
    year: '2025',
    title: 'IBM AI Developer Specialization',
    org: 'IBM / Coursera',
    description: 'Completed IBM AI Developer Specialization covering Generative AI, Deep Learning, and FastAPI deployment.',
    icon: '🤖',
    color: 'from-primary-500 to-cyan-400',
  },
  {
    year: '2024',
    title: '2x SPOT Award Winner',
    org: 'BDO India Service Pvt. Ltd.',
    description: 'Recognized with consecutive SPOT Awards for exceptional delivery and high-impact solutions.',
    icon: '⭐',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    year: '2024',
    title: 'Enrolled in MBA — Analytics & Data Science',
    org: 'Manipal University Jaipur',
    description: 'Pursuing MBA specializing in Analytics & Data Science alongside active professional practice.',
    icon: '📚',
    color: 'from-violet-500 to-purple-500',
  },
];
