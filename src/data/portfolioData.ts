export interface HardwareProject {
  id: string;
  title: string;
  image: string;
  category: string;
  components: string[];
  description: string;
  impact: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI/ML" | "Web Development" | "Robotics & IoT" | "Data Science";
  tag: string;
  featured: boolean;
  image?: string;
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
  accentColor?: string;
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
    "Computer Engineer (PEC Registered)",
    "Robotics & IoT Specialist",
    "Data Scraping & Automation Expert",
  ],
  tagline: "Building Intelligent Solutions Through AI, Engineering, and Modern Web Technologies.",
  location: "Sargodha, Punjab, Pakistan",
  email: "nasarullah.lak@gmail.com",
  phone: "+92 323 3937672",
  whatsapp: "https://wa.me/923233937672",
  github: "https://github.com/MuhammadNasarullah575",
  linkedin: "https://www.linkedin.com/in/muhammad-nasarullah-504664282/",
  fiverr: "https://www.fiverr.com/",
  status: "Available for AI/ML, Full-Stack & Automation Opportunities",
  education: {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Institute of Space Technology (IST), KICSIT",
    pecRegistered: true,
    hafizEQuran: true,
    academics: [
      { label: "BS Computer Engineering (IST/KICSIT)", score: "First Division", note: "Academic Distinction" },
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
    { value: "8+", label: "Production & Engineering Projects" },
    { value: "3+", label: "Industry & Tech Fellowship Roles" },
    { value: "PEC", label: "Registered Professional Engineer" },
    { value: "30+", label: "Students Trained in Robotics & STEM" },
  ],
  bioParagraphs: [
    "I am Muhammad Nasarullah, a Computer Engineer with a deep passion for Artificial Intelligence, Machine Learning, Full-Stack Web Development, and cyber-physical systems.",
    "I hold a Bachelor's degree in Computer Engineering from the Institute of Space Technology (IST), KICSIT. I combine the analytical rigor of hardware & system engineering with modern full-stack web architectures and deep learning pipelines.",
    "My hands-on experience spans across production AI/ML systems, automated web scraping (Playwright/Python), computer vision, robotics, IoT, and educational technology. As a Tech Fellow under the Federal Directorate of Education's Disruptive Education initiative, I trained 30+ students in practical STEM, Arduino, sensors, and hardware prototyping.",
    "I believe in continuous learning, practical experimentation, and engineering intelligent software that solves real-world human and commercial challenges."
  ],
  vision: "My vision is to contribute to the development of intelligent technologies that make everyday processes smarter, faster, and more efficient. I aim to grow at the intersection of AI/ML and Full-Stack Engineering, transforming complex algorithms into scalable, accessible products."
};

export const hardwareProjects: HardwareProject[] = [
  {
    id: "milk-quality-detection",
    title: "Milk Quality Detection using pH Sensor",
    image: "/images/tech-fellow/milk-quality.jpg",
    category: "IoT Food Safety & Biochemical Sensing",
    components: ["Arduino Uno", "pH Sensor Probe", "16x2 I2C LCD Display", "Python", "Embedded Systems"],
    description: "Developed an IoT-based milk quality detection system using a pH sensor to measure milk acidity and assess its quality. The system analyzes pH readings and displays real-time results, helping identify potentially spoiled or poor-quality milk.",
    impact: "Evaluates biochemical milk acidity levels in real-time, preventing consumption of spoiled or unsafe dairy products."
  },
  {
    id: "door-lock",
    title: "Smart Keypad Door Lock System",
    image: "/images/tech-fellow/door-lock.jfif",
    category: "Access Control & Embedded Security",
    components: ["Arduino Uno", "4x4 Matrix Keypad", "Micro Servo (SG90)", "16x2 I2C LCD Display", "Buzzer"],
    description: "An automated electronic locking mechanism requiring secure passcode authentication via matrix keypad, actuating a high-torque servo bolt and displaying status messages on an LCD screen.",
    impact: "Built & demonstrated to teach students security electronics, password hashing logic, and digital actuator control."
  },
  {
    id: "pong-game",
    title: "Arduino OLED Retro Pong Game",
    image: "/images/tech-fellow/pong-game.jfif",
    category: "Interactive Embedded Gaming",
    components: ["Arduino Uno", "0.96-inch I2C OLED Display", "Analog Potentiometers", "Tactile Pushbuttons"],
    description: "A complete physical hardware gaming console running real-time 2D physics, collision detection algorithms, and dynamic paddle controls rendered smoothly on a high-contrast OLED display.",
    impact: "Demonstrated real-time coordinate math, frame-buffer rendering, and analog input processing to STEM students."
  },
  {
    id: "heart-rate",
    title: "Smart Heart Rate Pulse Monitor",
    image: "/images/tech-fellow/heart-rate.jfif",
    category: "Biomedical Telemetry & IoT",
    components: ["Optical Pulse Sensor", "Arduino Uno", "OLED/LCD Display", "Piezo Buzzer Alert"],
    description: "Photoplethysmography (PPG) optical sensor measuring capillary blood volume variations to compute real-time Beats Per Minute (BPM) with cardiac arrhythmia threshold alerts.",
    impact: "Showcased biomedical signal sampling, noise filtering, and threshold detection in healthcare electronics."
  },
  {
    id: "digital-ruler",
    title: "Ultrasonic Digital Measuring Ruler",
    image: "/images/tech-fellow/digital-ruler.jfif",
    category: "Acoustic Spatial Sensing",
    components: ["HC-SR04 Ultrasonic Sensor", "Arduino Uno", "16x2 LCD Display", "Pushbutton Mode Switch"],
    description: "High-accuracy contactless distance measurement instrument calculating spatial clearance through 40kHz acoustic echo time-of-flight physics with millimeter precision.",
    impact: "Taught speed-of-sound time-of-flight mathematical calculations and sensor calibration techniques."
  },
  {
    id: "keypad-calc",
    title: "Hardware Embedded Keypad Calculator",
    image: "/images/tech-fellow/keypad-calc.jfif",
    category: "Mathematical Logic & Embedded OS",
    components: ["Arduino Uno", "Numeric Matrix Keypad", "16x2 LCD Display", "C/C++ Math Engine"],
    description: "A standalone mathematical computing unit processing arithmetic operations (+, -, *, /) directly in microcontroller memory with instant LCD evaluation and operand parsing.",
    impact: "Reinforced data parsing, string arithmetic, and state-machine input handling in embedded environments."
  },
  {
    id: "digital-piano",
    title: "Tactile Electronic Digital Piano",
    image: "/images/tech-fellow/digital-piano.jfif",
    category: "Acoustic Frequency Synthesis",
    components: ["Tactile Switch Array", "Arduino Uno", "Piezo Tone Transducer", "Resistor Ladder Network"],
    description: "Multi-frequency sound synthesizer generating musical octave frequencies (C4, D4, E4, F4, G4, A4, B4) through precise PWM timer wave generation when tactile inputs are pressed.",
    impact: "Demonstrated acoustic frequency generation, resistor ladder signal multiplexing, and timer interrupts."
  }
];

export const projects: Project[] = [
  {
    id: "tijaaro-ecommerce",
    title: "Tijaaro — Modern Full-Stack E-Commerce Platform",
    subtitle: "High-Converting Storefront + Comprehensive Administrative Master Gateway",
    category: "Web Development",
    tag: "Production Web App",
    featured: true,
    image: "/images/tijaaro-showcase.png",
    accentColor: "#00b3ff",
    summary: "A production-grade, ultra-responsive e-commerce platform engineered with Next.js, React, and modern UI architecture. Features a lightning-fast customer shopping experience paired with an enterprise-level administrative control gateway for catalog and order management.",
    objective: "To develop an elegant, scalable, and responsive commerce application featuring dual user/admin interfaces with high conversion rates and seamless checkout workflows.",
    technologies: ["Next.js (App Router)", "React", "JavaScript (ES6+)", "Tailwind CSS", "Vercel", "Git/GitHub", "REST APIs"],
    keyFeatures: [
      "Customer Storefront: Dynamic product catalog, real-time search, cart management, and responsive layouts.",
      "Administrative Master Gateway: Dedicated back-office dashboard for inventory, orders, and website management.",
      "Mobile-First Responsive UI: Optimized viewports across smartphones, tablets, and high-res desktops.",
      "Blazing Fast Performance: Server-side rendering (SSR) and client components for sub-second load times.",
      "CI/CD Cloud Deployment: Live production hosting on Vercel with automated GitHub integration."
    ],
    metrics: ["Live Production App", "Dual Store & Admin Portals", "Sub-Second Page Loads"],
    links: {
      demo: "https://e-commerce-websites-ecru.vercel.app/",
      adminDemo: "https://e-commerce-websites-ecru.vercel.app/sz-master-gateway-9842xk",
      github: "https://github.com/MuhammadNasarullah575"
    }
  },
  {
    id: "daraz-scraper",
    title: "Daraz Marketplace Automated Data Harvester",
    subtitle: "Resilient Python Web Scraping & Structured ETL Extraction Pipeline",
    category: "Data Science",
    tag: "Automation & ETL",
    featured: true,
    image: "/images/daraz-scraper.jfif",
    accentColor: "#f97316",
    summary: "A robust, automated web harvesting pipeline built in Python to extract structured product intelligence from Pakistan's largest e-commerce marketplace (Daraz). Designed to overcome dynamic JavaScript rendering, infinite scroll, and anti-bot obstacles to harvest clean product catalogs.",
    objective: "To automate competitor product monitoring, pricing intelligence, and customer sentiment analytics by building a fault-tolerant web data extraction engine.",
    technologies: ["Python", "Playwright", "BeautifulSoup4", "Pandas", "NumPy", "JSON/CSV Export", "Anti-Bot Bypass"],
    keyFeatures: [
      "Automated extraction of product titles, current/discounted prices, star ratings, review counts, and seller badges.",
      "Dynamic browser automation handling heavy client-side JavaScript rendering and lazy-loaded product grids.",
      "Resilient pagination crawler collecting multi-page catalog datasets with rate-limit evasion.",
      "Automated data cleaning, deduplication, and structured export to CSV/JSON formats for analytical pipelines.",
      "Error handling and retry mechanisms ensuring uninterrupted long-running batch extraction jobs."
    ],
    metrics: ["1,000+ Products/Min", "Dynamic JS Handling", "Clean Structured Data"],
    links: {
      github: "https://github.com/MuhammadNasarullah575"
    }
  },
  {
    id: "fire-detection",
    title: "AI-Based Real-Time Fire & Smoke Detection System",
    subtitle: "Computer Vision Hazard Detection with YOLOv8 & Automated Notifications",
    category: "AI/ML",
    tag: "Final Year Project",
    featured: true,
    accentColor: "#ef4444",
    summary: "An intelligent, life-saving computer vision system developed as my Final Year Project at IST/KICSIT. Utilizing custom-trained YOLOv8 models, OpenCV, and Kalman filtering to identify fire, flame, smoke, and sparks in real-time CCTV streams, triggering automated SMTP email alerts.",
    objective: "To drastically improve fire safety in industrial and commercial buildings through automated, ultra-fast visual detection, false-alarm suppression, and real-time alert notifications.",
    technologies: ["Python", "YOLOv8", "OpenCV", "CVZone", "Kalman Filter", "Tkinter", "Pygame", "SMTP", "XAMPP"],
    keyFeatures: [
      "Real-time simultaneous detection of fire, flame, smoke, and hazardous sparks with high mAP accuracy.",
      "Kalman Filter integration for robust multi-frame tracking and noise reduction across live CCTV feeds.",
      "Automated instant email alert dispatch via secure SMTP protocol with attached hazard snapshot.",
      "Audible hazard alarm triggering powered by Pygame audio engine.",
      "Desktop GUI built with Tkinter for live CCTV feed visualization, threshold adjustment, and control."
    ],
    metrics: ["Real-Time 30+ FPS", "Multi-Hazard Detection", "Instant SMTP Alerts"],
    links: {
      github: "https://github.com/MuhammadNasarullah575"
    }
  },
  {
    id: "short-squeeze",
    title: "Short Squeeze Risk Prediction System",
    subtitle: "Quantitative Financial Market Analysis & Technical Indicator Engine",
    category: "Data Science",
    tag: "FinTech & ML",
    featured: true,
    accentColor: "#00ff9c",
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
    accentColor: "#a855f7",
    summary: "An advanced machine learning system that digests real-time financial journalism, processes news semantics using Transformer NLP models (DistilBART), and forecasts market price actions into Spike, Neutral, and Crash categories.",
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
      github: "https://github.com/MuhammadNasarullah575"
    }
  },
  {
    id: "news-classification",
    title: "Machine Learning-Based News Classification",
    subtitle: "High-Dimensional Semantic Embeddings & Neural NLP Classifier",
    category: "AI/ML",
    tag: "NLP & Deep Learning",
    featured: false,
    accentColor: "#06b6d4",
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
      github: "https://github.com/MuhammadNasarullah575"
    }
  }
];

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
      "E-commerce platforms with customer storefront and admin controls (like Tijaaro)",
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
