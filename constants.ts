import { Project, Experience, Education, SkillCategory, Certification, Publication, Leadership } from './types';

export const SOCIAL_LINKS = {
  email: "mehtadhruvi0902@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhruvimehta13/",
  github: "https://github.com/dmehta1310",
  phone: "+1 (978) 305-6262",
  location: "Boston, MA"
};

export const EDUCATION_DATA: Education[] = [
  {
    id: "neu",
    school: "Northeastern University",
    degree: "Master of Science in Information Systems",
    location: "Boston, MA",
    period: "Sep. 2025 – Present (Exp. 2027)",
    coursework: "Data Management & Database Design"
  },
  {
    id: "sakec",
    school: "Shah and Anchor Kutchhi Engineering College",
    degree: "Bachelor of Engineering in Computers",
    location: "Mumbai, India",
    period: "Aug. 2021 – May 2025",
    gpa: "7.97/10.0",
    coursework: "Applied Data Science, Social Media Analytics, Database Management System, Big Data Analytics"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "accenture-da",
    title: "Data Analytics and Visualization Simulation",
    issuer: "Accenture North America (Forage)",
    date: "2024",
    link: "#"
  },
  {
    id: "oracle-sql",
    title: "Oracle Database SQL",
    issuer: "Suven Consultants & Tech",
    date: "2024",
    link: "#"
  },
  {
    id: "python-adv",
    title: "Python (Core and Advanced Concepts)",
    issuer: "Suven Consultants & Tech",
    date: "2024",
    link: "#"
  },
  {
    id: "power-bi-pragmatic",
    title: "Analyzing and Visualizing Data with Microsoft Power BI",
    issuer: "Pragmatic Works",
    date: "2024",
    link: "#"
  },
  {
    id: "google-da",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2023",
    link: "#"
  },
  {
    id: "pres-cert",
    title: "Presidential Excellence Certificate",
    issuer: "Alumni Association",
    date: "2024-2025",
    link: "#"
  }
];

export const LEADERSHIP_DATA: Leadership[] = [
  {
    id: "aa-pres",
    role: "President",
    organization: "Alumni Association, SAKEC",
    period: "2024-2025",
    points: [
      "Conducted 5+ successful large-scale events in the current academic year.",
      "Leading a chapter of 45+ members to work towards goals that improve connections with alumni and promote academics and unity."
    ]
  },
  {
    id: "aa-coord",
    role: "Event and Administration Coordinator",
    organization: "Alumni Association, SAKEC",
    period: "2023 – 2024",
    points: [
      "Conducted more than 5+ successful events in the academic year.",
      "Led a chapter of 30+ members focusing on goal-oriented alumni networking."
    ]
  },
  {
    id: "aa-admin",
    role: "Admin Head",
    organization: "Alumni Association, SAKEC",
    period: "2022 – 2023",
    points: [
      "Coordinated multiple events and managed 10+ departmental teams.",
      "Streamlined task completion protocols for the Association."
    ]
  },
  {
    id: "speaker",
    role: "Public Speaker & Anchor",
    organization: "SAKEC Events",
    period: "2022 – 2025",
    points: [
      "Anchored in 10+ official events.",
      "Lead a team of anchors for 2 events."
    ]
  }
];

export const PUBLICATION_DATA: Publication[] = [
  {
    id: "ocular-paper",
    title: "Ocular Disease Recognition System",
    authors: "Dhruvi Mehta, Atharva Kadam, Dushyant Pande, Aayushi Trivedi, Krupa Chotai, Afreen Banu",
    publisher: "JISEM Journal (Vol. 10 No. 46s)",
    year: "2025-2026",
    description: "Published research focusing on deep learning applications for clinical ocular diagnosis in the prestigious JISEM journal.",
    link: "#"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "coding-samurai",
    role: "Intern",
    company: "Coding Samurai",
    location: "Mumbai, India",
    period: "Jul. 2024 – Aug. 2024",
    points: [
      "Developed Power BI dashboard analyzing 50K+ Airbnb listings with Python-based ETL.",
      "Identified pricing patterns that improved revenue forecasting by 15%."
    ]
  },
  {
    id: "onpoint",
    role: "Data Analyst Intern",
    company: "Onpoint Insights",
    location: "Mumbai, India",
    period: "Jun. 2024 – Jul. 2024",
    points: [
      "Built automated Power BI dashboard tracking 15+ financial KPIs, reducing reporting time by 90%.",
      "Developed credit risk model using XGBoost with 91% accuracy."
    ]
  }
];

export interface ProjectEnhanced extends Project {
  metrics: { label: string; value: string; icon: string }[];
}

export const PROJECTS_DATA: ProjectEnhanced[] = [
  {
    id: "investment-platform",
    title: "Investment Automation",
    description: "Built an ETL pipeline processing 500+ stocks via Yahoo Finance APIs. Implemented multi-factor scoring algorithms and automated DCF valuation.",
    technologies: ["SQL", "Tableau", "Python", "APIs"],
    metrics: [
      { label: "Data points", value: "500K+", icon: "database" },
      { label: "Efficiency", value: "+40%", icon: "zap" }
    ],
    links: { github: "#" },
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "healthcare-analytics",
    title: "Predictive Healthcare",
    description: "Analyzed 500K+ Medicare records to build a readmission risk model. Created automated Power BI dashboards for HEDIS measures.",
    technologies: ["PostgreSQL", "Power BI", "Excel", "Statistics"],
    metrics: [
      { label: "Accuracy", value: "85%", icon: "target" },
      { label: "Records", value: "500K", icon: "activity" }
    ],
    links: { github: "#" },
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "airbnb-analysis",
    title: "Airbnb Market Trends",
    description: "Data visualization project analyzing market trends and pricing strategies using dynamic KPI tracking across major cities.",
    technologies: ["Power BI", "Python", "ETL"],
    metrics: [
      { label: "Forecasting", value: "92%", icon: "trending-up" },
      { label: "KPIs", value: "15+", icon: "bar-chart" }
    ],
    links: { github: "#" },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "credit-risk",
    title: "ML Credit Risk",
    description: "Developed machine learning models to assess loan application risks, improving approval efficiency by 40%.",
    technologies: ["XGBoost", "Python", "Scikit-learn"],
    metrics: [
      { label: "AUC-ROC", value: "0.94", icon: "shield" },
      { label: "Accuracy", value: "91%", icon: "cpu" }
    ],
    links: { github: "#" },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python (pandas, NumPy)", "R", "TypeScript", "SQL", "Java", "C"]
  },
  {
    category: "Data Viz & Tools",
    skills: ["Power BI (DAX)", "Tableau", "Google Data Studio", "Excel", "Git"]
  },
  {
    category: "Machine Learning",
    skills: ["Regression", "Classification (XGBoost)", "Clustering", "Time Series (ARIMA)"]
  },
  {
    category: "Methodologies",
    skills: ["ETL Pipelines", "A/B Testing", "Predictive Analytics", "Agile/Scrum"]
  }
];