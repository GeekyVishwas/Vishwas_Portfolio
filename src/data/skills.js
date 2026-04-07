// data/skills.js

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages & Querying',
    icon: '💻',
    skills: [
      { name: 'Python', level: 90, icon: 'python' },
      { name: 'PySpark', level: 82, icon: 'spark' },
      { name: 'SQL / T-SQL', level: 88, icon: 'database' },
    ],
  },
  {
    id: 'data-cloud',
    label: 'Data Engineering & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Microsoft Fabric', level: 88, icon: 'fabric' },
      { name: 'Azure SQL / Data Lake', level: 82, icon: 'azure' },
      { name: 'Medallion Architecture', level: 85, icon: 'layers' },
      { name: 'MS Fabric Pipelines', level: 83, icon: 'pipeline' },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML / Computer Vision',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', level: 80, icon: 'brain' },
      { name: 'YOLO (Object Detection)', level: 78, icon: 'eye' },
      { name: 'Fraud Detection / Anomaly', level: 82, icon: 'shield' },
      { name: 'FastAPI', level: 80, icon: 'api' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Infrastructure',
    icon: '⚙️',
    skills: [
      { name: 'Terraform', level: 75, icon: 'terraform' },
      { name: 'CI/CD Pipelines', level: 74, icon: 'cicd' },
      { name: 'REST APIs / Pagination', level: 82, icon: 'api' },
      { name: 'Git', level: 85, icon: 'git' },
    ],
  },
  {
    id: 'power-platform',
    label: 'Power Platform & Low-Code',
    icon: '⚡',
    skills: [
      { name: 'Copilot Studio', level: 85, icon: 'copilot' },
      { name: 'Power Automate', level: 82, icon: 'automate' },
      { name: 'Power Apps', level: 78, icon: 'powerapps' },
    ],
  },
  {
    id: 'libraries',
    label: 'Frameworks & Libraries',
    icon: '📚',
    skills: [
      { name: 'Pandas / NumPy', level: 87, icon: 'pandas' },
      { name: 'OpenCV', level: 80, icon: 'opencv' },
      { name: 'Scikit-learn', level: 78, icon: 'sklearn' },
      { name: 'React Native (support)', level: 65, icon: 'react' },
    ],
  },
];

export const techStack = [
  { name: 'Python', color: '#3776AB' },
  { name: 'MS Fabric', color: '#742774' },
  { name: 'Azure', color: '#0078D4' },
  { name: 'PySpark', color: '#E25A1C' },
  { name: 'SQL', color: '#CC2927' },
  { name: 'YOLO', color: '#00FFFF' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Terraform', color: '#7B42BC' },
  { name: 'Power Automate', color: '#0066FF' },
  { name: 'Copilot Studio', color: '#00B4D8' },
  { name: 'OpenCV', color: '#5C3317' },
  { name: 'Pandas', color: '#150458' },
  { name: 'Scikit-learn', color: '#F7931E' },
  { name: 'Git', color: '#F05032' },
  { name: 'Postman', color: '#FF6C37' },
  { name: 'VS Code', color: '#007ACC' },
];
