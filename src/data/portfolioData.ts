export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI/ML" | "Web Development" | "Robotics & IoT" | "Data Science";
  tag: string;
  featured: boolean;
  summary: string;
  objective: string;
  technologies: string[];
  keyFeatures: string[];
  links?: {
    demo?: string;
    adminDemo?: string;
    github?: string;
    detailsUrl?: string;
  };
  metrics?: string[];
  gradient: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  badgeColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: { name: string; level: number; isKey?: boolean }[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  icon: string;
  badge: string;
}

export const personalData = {
  name: "Muhammad Nasarullah",
  title: "AI/ML Engineer & Full-Stack Web Developer",
  roleSubtitles: [
    "AI/ML Engineer",
    "Full-Stack Web Developer",
    "Computer Engineer",
    "Robotics & IoT Specialist",
    "Computer Vision & NLP Explorer",
  ],
  tagline: "Building Intelligent Solutions Through AI, Engineering, and Modern Web Technologies.",
  location: "Sargodha, Punjab, Pakistan",
  email: "nasarullah.engr@gmail.com", // Professional placeholder easy to customize
  phone: "+92 300 0000000",
  github: "https://github.com/MuhammadNasarullah575",
  linkedin: "https://www.linkedin.com/in/muhammad-nasarullah/", // easy to replace
  fiverr: "https://www.fiverr.com/",
  status: "Available for AI/ML & Full-Stack Opportunities",
  education: {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Institute of Space Technology (IST), KICSIT",
    cgpa: "3.23 / 4.00",
    pecRegistered: true,
    hafizEQuran: true,
    academics: [
      { label: "BS Computer Engineering (IST/KICSIT)", score: "CGPA 3.23 / 4.00", note: "First Division" },
      { label: "Intermediate (Pre-Engineering)", score: "64.4%", note: "First Division" },
      { label: "Matriculation (Science)", score: "87.8%", note: "First Division / High Distinction" },
    ],
    distinctions: [
      "PEC (Pakistan Engineering Council) Registered Engineer",
      "Hafiz-e-Quran",
      "Consistent First Division throughout Academic Career",
      "Final Year Project on Real-time Computer Vision Fire Detection",
    ]
  },
  heroStats: [
    { value: "6+", label: "Major Production & AI Projects" },
    { value: "3+", label: "Industry & Research Roles" },
    { value: "3.23", label: "BS Computer Engineering CGPA" },
    { value: "100+", label: "Students Mentored in Robotics & STEM" },
  ],
  bioParagraphs: [
    "I am Muhammad Nasarullah, a Computer Engineer with a deep passion for Artificial Intelligence, Machine Learning, Full-Stack Web Development, and emerging cyber-physical systems.",
    "I hold a Bachelor's degree in Computer Engineering from the Institute of Space Technology (IST), KICSIT, with a CGPA of 3.23/4.00. I combine the analytical rigor of hardware & system engineering with the agility of modern full-stack software and deep learning models.",
    "My hands-on experience spans across production AI/ML development, web scraping, data processing, computer vision, robotics, IoT, and educational technology. I also served as a Tech Fellow under the Federal Directorate of Education's Disruptive Education initiative, training the next generation in STEM, Arduino, and smart automation.",
    "I believe in continuous learning, practical experimentation, and engineering intelligent software that solves real-world human and commercial challenges."
  ],
  vision: "My vision is to contribute to the development of intelligent technologies that make everyday processes smarter, faster, and more efficient. I aim to grow at the intersection of AI/ML and Full-Stack Engineering, transforming complex algorithms into scalable, accessible products."
};

export const experiences: Experience[] = [
  {
    id: "limeox",
    company: "LimeoX LLC",
    role: "AI/ML Intern",
    period: "July 2026 – Present",
    isCurrent: true,
    location: "Remote / Hybrid",
    description: "Contributing to the development of intelligent data-driven solutions, automation workflows, and predictive market models.",
    responsibilities: [
      "Developing Python-based web scraping and automated data ingestion pipelines.",
      "Collecting, cleaning, and preprocessing structured and unstructured financial data from diverse online sources.",
      "Architecting financial news sentiment and stock market prediction systems.",
      "Exploring and applying state-of-the-art Machine Learning and Natural Language Processing (NLP) techniques.",
      "Supporting AI-driven predictive workflows and end-to-end data analysis.",
      "Delivering high-reliability software components meeting strict commercial and business requirements."
    ],
    technologies: ["Python", "Machine Learning", "NLP", "Web Scraping", "Pandas", "PostgreSQL", "LightGBM", "Streamlit"],
    badgeColor: "emerald"
  },
  {
    id: "learnobots",
    company: "LearnOBots / Federal Directorate of Education",
    role: "Tech Fellow – Disruptive Education",
    period: "May 2025 – May 2026",
    isCurrent: false,
    location: "Islamabad / Sargodha, Pakistan",
    description: "Delivered hands-on technology, robotics, and STEM-based learning experiences under the Federal Directorate of Education's flagship initiative.",
    responsibilities: [
      "Taught core robotics, electronics, sensors, and Internet of Things (IoT) principles to students.",
      "Conducted practical, interactive Arduino-based project workshops and coding labs.",
      "Designed and prototyped real-world circuit systems using microcontrollers, UART protocols, and sensor arrays.",
      "Taught circuit analysis including series/parallel configurations, signals, and actuator controls.",
      "Mentored students from ideation through debugging and physical product assembly.",
      "Cultivated critical problem-solving, engineering mindset, and entrepreneurial thinking."
    ],
    technologies: ["Arduino Uno", "IoT", "Sensors", "C/C++", "UART Communication", "Electronics", "STEM Pedagogy"],
    badgeColor: "cyan"
  },
  {
    id: "aitec",
    company: "AITeC / NCP",
    role: "AI & Computer Vision Intern",
    period: "July 2023 – August 2023",
    isCurrent: false,
    location: "Islamabad, Pakistan",
    description: "Completed an intensive internship focused on Artificial Intelligence and Computer Vision, contributing to an AI-Based Real-Time Fire Detection System (also completed as Final Year Project).",
    responsibilities: [
      "Built Computer Vision pipelines using Python, OpenCV, and deep learning architectures.",
      "Implemented and fine-tuned YOLOv8 object detection models for rapid hazard identification.",
      "Trained and evaluated vision models to accurately detect fire, flame, smoke, and sparks with low false positives.",
      "Integrated Kalman filtering and CVZone for dynamic object tracking across live video feeds.",
      "Benchmarked inference speeds and latency across edge and standard compute environments."
    ],
    technologies: ["Python", "OpenCV", "YOLOv8", "Computer Vision", "CVZone", "Kalman Filter", "Deep Learning"],
    badgeColor: "blue"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Artificial Intelligence & ML",
    description: "Computer vision, deep neural networks, predictive modeling, and NLP pipelines",
    icon: "Brain",
    skills: [
      { name: "Computer Vision & YOLOv8", level: 92, isKey: true },
      { name: "OpenCV & Video Processing", level: 90, isKey: true },
      { name: "Machine Learning (Scikit-learn)", level: 88, isKey: true },
      { name: "Natural Language Processing (NLP)", level: 85, isKey: true },
      { name: "Deep Learning (TensorFlow / Keras)", level: 80 },
      { name: "Sentence Transformers & Embeddings", level: 84 },
      { name: "Data Preprocessing & Augmentation", level: 90 },
      { name: "Model Evaluation & Metrics", level: 88 }
    ]
  },
  {
    title: "Full-Stack Web Development",
    description: "Modern, responsive, user-centric web applications and scalable APIs",
    icon: "Layout",
    skills: [
      { name: "React.js & Next.js", level: 90, isKey: true },
      { name: "JavaScript (ES6+) & TypeScript", level: 88, isKey: true },
      { name: "HTML5 & Tailwind CSS / Modern CSS", level: 95, isKey: true },
      { name: "RESTful API Design & Integration", level: 86 },
      { name: "Node.js & Express.js", level: 80 },
      { name: "PostgreSQL & SQL", level: 82 },
      { name: "MongoDB & Mongoose", level: 78 },
      { name: "Responsive UI / UX Architecture", level: 92 }
    ]
  },
  {
    title: "Data Science & Automation",
    description: "Web data extraction, pipeline automation, analytics dashboards, and processing",
    icon: "Database",
    skills: [
      { name: "Python Scripting & Automation", level: 94, isKey: true },
      { name: "Web Scraping (Playwright, BS4)", level: 92, isKey: true },
      { name: "Pandas & NumPy Data Wrangling", level: 90, isKey: true },
      { name: "Streamlit Dashboard Development", level: 88 },
      { name: "Financial Data Analysis & Risk Metrics", level: 85 },
      { name: "Data Cleaning & Structured Pipelines", level: 90 },
      { name: "Data Visualization (Matplotlib, Seaborn)", level: 84 }
    ]
  },
  {
    title: "Robotics & Embedded Systems",
    description: "Microcontroller programming, sensor integration, hardware prototyping",
    icon: "Cpu",
    skills: [
      { name: "Arduino Uno & Microcontrollers", level: 90, isKey: true },
      { name: "IoT & Sensor Interfacing", level: 88, isKey: true },
      { name: "UART & Serial Communications", level: 85 },
      { name: "C / C++ Embedded Basics", level: 82 },
      { name: "Electronics & Circuit Design", level: 84 },
      { name: "Actuators, Displays & Motor Control", level: 86 }
    ]
  },
  {
    title: "Tools, Platforms & Deployment",
    description: "Development environments, version control, and cloud hosting",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub Version Control", level: 92, isKey: true },
      { name: "VS Code & Extensions", level: 95 },
      { name: "Vercel Deployment & CI/CD", level: 90, isKey: true },
      { name: "Google Colab & Jupyter Notebooks", level: 92 },
      { name: "Linux / CLI Environments", level: 82 },
      { name: "XAMPP & Local Server Stacks", level: 85 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "fire-detection",
    title: "AI-Based Fire Detection System",
    subtitle: "Real-Time Hazard Detection with Computer Vision & Automated Alerts",
    category: "AI/ML",
    tag: "Final Year Project",
    featured: true,
    gradient: "from-orange-500/20 via-red-500/10 to-amber-500/20",
    summary: "An intelligent, life-saving computer vision application developed as my Final Year Project at IST/KICSIT. It utilizes custom-trained YOLOv8 models to identify fire, flame, smoke, and sparks in real-time video streams, automatically dispatching alert emails.",
    objective: "To drastically improve fire safety in high-risk zones through automated, ultra-fast visual detection, false-alarm suppression, and real-time alert notifications.",
    technologies: ["Python", "YOLOv8", "OpenCV", "CVZone", "Kalman Filter", "Tkinter", "Pygame", "SMTP", "XAMPP"],
    keyFeatures: [
      "Real-time simultaneous detection of fire, flame, smoke, and hazardous sparks.",
      "Fine-tuned YOLOv8 deep learning vision backbone with high mAP accuracy.",
      "Kalman Filter integration for robust multi-frame tracking and noise reduction.",
      "Automated instant email alert dispatch via secure SMTP protocol.",
      "Audible hazard alarm triggering powered by Pygame audio engine.",
      "Desktop GUI built with Tkinter for live CCTV feed visualization and control."
    ],
    metrics: ["Real-time 30+ FPS detection", "Multi-hazard classification", "Instant SMTP notifications"],
    links: {
      github: "https://github.com/MuhammadNasarullah575",
    }
  },
  {
    id: "short-squeeze",
    title: "Short Squeeze Risk Prediction System",
    subtitle: "Quantitative Financial Market Analysis & Technical Indicator Engine",
    category: "Data Science",
    tag: "FinTech & ML",
    featured: true,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    summary: "A data-driven financial intelligence engine built to analyze US-listed equities, evaluate short interest dynamics, and estimate 5-day short squeeze probabilities using statistical models and technical indicators.",
    objective: "To equip traders and quantitative analysts with probabilistic squeeze forecasts by processing real-time exchange data, short interest, and volume surges.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "FINRA Data", "Financial APIs"],
    keyFeatures: [
      "Automated pipeline harvesting FINRA short volume and exchange trading statistics.",
      "Dynamic computation of technical indicators: RSI, MACD, Relative Volume (RVOL), and Days-to-Cover.",
      "Probabilistic 5-day Short Squeeze Risk classification model using Scikit-learn.",
      "Interactive, responsive Streamlit dashboard featuring intuitive equity screener and charting.",
      "Historical backtesting data modules with alert triggers for unusual volume spikes."
    ],
    metrics: ["5-Day Risk Classification", "FINRA Data Ingestion", "Interactive Live Dashboard"],
    links: {
      github: "https://github.com/MuhammadNasarullah575",
    }
  },
  {
    id: "tijaaro-ecommerce",
    title: "Tijaaro – E-Commerce Web Application",
    subtitle: "Dual-Interface Modern Commerce Platform with Admin Control Center",
    category: "Web Development",
    tag: "Full-Stack Web",
    featured: true,
    gradient: "from-blue-500/20 via-indigo-500/10 to-sky-500/20",
    summary: "A production-grade, responsive e-commerce web platform engineered with modern Next.js and React architecture, featuring both a high-converting storefront and a dedicated administrative master gateway.",
    objective: "To deliver a blazing-fast, elegant shopping experience for end customers paired with comprehensive back-office product and order management for administrators.",
    technologies: ["Next.js", "React", "JavaScript", "HTML5", "CSS3 / Tailwind", "Git", "GitHub", "Vercel"],
    keyFeatures: [
      "High-performance customer storefront with catalog browsing, search, and dynamic product filtering.",
      "Secure administrative master gateway dashboard for inventory and product management.",
      "Fully responsive, mobile-first design optimized for all screen viewports.",
      "Ultra-fast page loads and SEO optimization powered by Next.js server and client components.",
      "Production deployment with automated CI/CD pipeline on Vercel."
    ],
    metrics: ["Live Production App", "Dual Customer & Admin Portal", "100% Mobile Responsive"],
    links: {
      demo: "https://e-commerce-websites-ecru.vercel.app/",
      adminDemo: "https://e-commerce-websites-ecru.vercel.app/sz-master-gateway-9842xk",
      github: "https://github.com/MuhammadNasarullah575"
    }
  },
  {
    id: "news-stock-prediction",
    title: "News-Based Stock Market Prediction System",
    subtitle: "NLP Sentiment Classification & Multi-Horizon Market Impact Modeling",
    category: "AI/ML",
    tag: "NLP & Predictive AI",
    featured: true,
    gradient: "from-purple-500/20 via-pink-500/10 to-indigo-500/20",
    summary: "An advanced machine learning system that digests real-time financial journalism, processes news semantics using Transformer NLP models, and forecasts market price actions into Spike, Neutral, and Crash categories.",
    objective: "To investigate and quantify the predictive correlation between breaking financial headlines and intraday stock price movement regimes.",
    technologies: ["Python", "NLP", "DistilBART", "LightGBM", "Logistic Regression", "PostgreSQL", "Financial APIs"],
    keyFeatures: [
      "Automated extraction and continuous text preprocessing of live financial news streams.",
      "Deep semantic feature embedding and sentiment classification via DistilBART transformers.",
      "Multi-class market movement prediction: categorizing outcomes into Spike, Neutral, and Crash.",
      "Hybrid ensemble architecture marrying NLP text signals with numerical market indicators.",
      "Robust PostgreSQL storage layer for chronological historical headline and ticker data."
    ],
    metrics: ["DistilBART Transformers", "Spike/Neutral/Crash Regime", "PostgreSQL Storage"],
    links: {
      github: "https://github.com/MuhammadNasarullah575",
    }
  },
  {
    id: "news-classification",
    title: "Machine Learning-Based News Classification",
    subtitle: "High-Dimensional Semantic Embeddings & Neural NLP Classifier",
    category: "AI/ML",
    tag: "NLP & Deep Learning",
    featured: false,
    gradient: "from-cyan-500/20 via-blue-500/10 to-teal-500/20",
    summary: "An end-to-end NLP news classification framework built upon 3,460 manually labeled headlines. Leveraged state-of-the-art sentence transformers (all-MiniLM-L6-v2), dimensionality reduction, and comparative model architectures.",
    objective: "To automate multi-domain topic classification for high-throughput news aggregation feeds with top-tier precision and low latency.",
    technologies: ["Python", "NLP", "Sentence Transformers", "MiniLM", "PCA", "ANOVA", "SVC", "BiLSTM", "PostgreSQL"],
    keyFeatures: [
      "Rigorous dataset curation and labeling across 3,460 domain-specific news headlines.",
      "Dense semantic vector representation using pretrained all-MiniLM-L6-v2 sentence embeddings.",
      "Dimensionality reduction and feature selection using PCA and statistical ANOVA testing.",
      "Benchmarking between Support Vector Classifiers (SVC) and Bidirectional LSTM (BiLSTM) networks.",
      "High accuracy multi-category text categorization pipeline."
    ],
    metrics: ["3,460 Hand-Labeled Dataset", "Sentence-Transformers", "SVC vs BiLSTM Benchmarking"],
    links: {
      github: "https://github.com/MuhammadNasarullah575",
    }
  },
  {
    id: "robotics-iot",
    title: "Robotics, Electronics & IoT Suite",
    subtitle: "Embedded Hardware Prototyping, Sensor Networks & Interactive Systems",
    category: "Robotics & IoT",
    tag: "Embedded Systems",
    featured: true,
    gradient: "from-green-500/20 via-emerald-500/10 to-lime-500/20",
    summary: "A diverse collection of physical computing and embedded engineering projects developed both independently and as part of the Tech Fellowship with LearnOBots and the Federal Directorate of Education.",
    objective: "To pioneer practical, functional prototypes by synthesizing microcontrollers, sensor telemetry, and hardware-level programming.",
    technologies: ["Arduino Uno", "C/C++", "Sensors", "LCD / OLED Displays", "Servo Motors", "IoT", "UART"],
    keyFeatures: [
      "Smart Door Lock: Secured access system incorporating numeric keypad, servo motor lock bolt, and LCD display.",
      "Arduino OLED Pong Game: Physical hardware gaming system rendered on a 0.96-inch I2C OLED display with tactile inputs.",
      "Keypad-Based Embedded Calculator: Hardware math processor with keypad and instant LCD evaluation.",
      "Ultrasonic Measurement System: Accurate distance and spatial clearance metering via ultrasonic soundwave echoes.",
      "Heart Rate & Biomedical Monitoring: Pulse sensor integration tracking real-time BPM and cardiac rhythms.",
      "Smart Irrigation Prototype: Soil moisture sensor triggering automated relay-actuated plant watering."
    ],
    metrics: ["8+ Functional Prototypes", "Arduino & Microcontroller Tech", "STEM Curriculum Certified"],
    links: {
      github: "https://github.com/MuhammadNasarullah575",
    }
  }
];

export const services: Service[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning Solutions",
    shortDesc: "End-to-end intelligent models, Computer Vision, and NLP systems tailored for real-world impact.",
    description: "From custom YOLOv8 object detection models to predictive analytics and natural language processing pipelines, I design, train, evaluate, and deploy production-ready AI solutions that automate complex tasks.",
    deliverables: [
      "YOLOv8 & OpenCV computer vision (object detection, tracking, safety monitoring)",
      "Predictive machine learning algorithms (classification, regression, time-series)",
      "NLP workflows, text categorization, sentiment & topic analysis",
      "Model optimization, evaluation, and edge inference deployment"
    ],
    icon: "Brain",
    badge: "Most Requested"
  },
  {
    id: "fullstack-web",
    title: "Full-Stack Web Development",
    shortDesc: "Fast, modern, responsive websites, e-commerce stores, and intuitive admin dashboards.",
    description: "Building production-grade web applications utilizing Next.js, React, Tailwind CSS, and robust backend APIs. Focused on clean code, exceptional user experience, high SEO scores, and blazing speed.",
    deliverables: [
      "Custom responsive web applications with Next.js & React",
      "E-commerce platforms with customer storefront and admin controls",
      "RESTful API design and database integrations (PostgreSQL, MongoDB)",
      "Modern UI/UX design implementation, SEO & mobile optimization"
    ],
    icon: "Layout",
    badge: "Production Ready"
  },
  {
    id: "web-scraping",
    title: "Web Scraping & Data Automation",
    shortDesc: "Reliable automated data collection pipelines, structured extraction, and analytics.",
    description: "Extracting valuable market, competitor, or research data from complex web sources. I create resilient Python scraping scripts that handle dynamic pagination, JavaScript rendering, and structured ETL workflows.",
    deliverables: [
      "Automated web scraping with Python, Playwright, and BeautifulSoup",
      "Data cleaning, normalization, and aggregation using Pandas & NumPy",
      "Financial data pipelines & technical indicator computations",
      "Interactive visual dashboards using Streamlit"
    ],
    icon: "Database",
    badge: "Automation"
  },
  {
    id: "robotics-iot",
    title: "Robotics & IoT Prototyping",
    shortDesc: "Microcontroller programming, sensor telemetry, and embedded hardware development.",
    description: "Bridging software with the physical world. Leveraging Arduino Uno, IoT communication protocols, and sensor integration to build working hardware prototypes, automation systems, and educational STEM kits.",
    deliverables: [
      "Arduino-based embedded systems and firmware development in C/C++",
      "Sensor integration (ultrasonic, temperature, pulse, moisture, motion)",
      "Actuator and motor control (servo, stepper, relay switches)",
      "Interactive displays (OLED, LCD) and serial/UART communication"
    ],
    icon: "Cpu",
    badge: "Hardware & IoT"
  }
];

export const professionalStrengths = [
  {
    title: "Analytical Problem Solving",
    desc: "Rigorous ability to dissect complex technical bottlenecks and engineer pragmatic, production-grade solutions.",
    icon: "Sparkles"
  },
  {
    title: "Interdisciplinary Engineering",
    desc: "Seamlessly bridging deep learning, full-stack software, data pipelines, and embedded hardware systems.",
    icon: "Layers"
  },
  {
    title: "Research & Rapid Prototyping",
    desc: "Adept at translating academic papers, experimental models, and new frameworks into functional prototypes.",
    icon: "Search"
  },
  {
    title: "Technical Communication",
    desc: "Proven track record as a Tech Fellow communicating complex engineering concepts with clarity and impact.",
    icon: "Users"
  },
  {
    title: "Continuous Learning",
    desc: "Deep curiosity and disciplined self-learning, consistently mastering modern toolchains and emerging tech.",
    icon: "TrendingUp"
  },
  {
    title: "Product & Business Focus",
    desc: "Balancing algorithm performance with real-world user experience, speed, and client business outcomes.",
    icon: "CheckCircle2"
  }
];

