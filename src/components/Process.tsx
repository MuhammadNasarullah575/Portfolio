"use client";

export default function Process() {
  const steps = [
    {
      step: "STEP_01",
      title: "Problem & System Architecture",
      desc: "Defining project scope, computational constraints, algorithmic feasibility, and functional specs.",
      isFinal: false,
    },
    {
      step: "STEP_02",
      title: "Data Harvesting & Automated ETL",
      desc: "Building automated Python scraping pipelines (Playwright, APIs) to collect clean, structured datasets.",
      isFinal: false,
    },
    {
      step: "STEP_03",
      title: "Data Cleaning & Preprocessing",
      desc: "Outlier suppression, feature scaling, normalization, and semantic vectorization with Pandas & NumPy.",
      isFinal: false,
    },
    {
      step: "STEP_04",
      title: "Model Selection & Architecture",
      desc: "Selecting vision backbones (YOLOv8), NLP transformers (DistilBART, MiniLM), or quantitative classifiers.",
      isFinal: false,
    },
    {
      step: "STEP_05",
      title: "Training, Vision & Deep Learning",
      desc: "Model training, transfer learning, computer vision annotations, and multi-epoch loss optimization.",
      isFinal: false,
    },
    {
      step: "STEP_06",
      title: "Validation & Performance Metrics",
      desc: "Rigorous benchmarking using confusion matrices, mAP, precision/recall, and latency profiling.",
      isFinal: false,
    },
    {
      step: "STEP_07",
      title: "Full-Stack Web & API Integration",
      desc: "Building responsive Next.js interfaces, RESTful endpoints, and intuitive SaaS dashboards.",
      isFinal: false,
    },
    {
      step: "STEP_08",
      title: "Embedded & Hardware Telemetry",
      desc: "Microcontroller firmware (Arduino Uno), sensor interfacing, and UART communications for IoT applications.",
      isFinal: false,
    },
    {
      step: "STEP_09",
      title: "Production Deployment & CI/CD",
      desc: "Vercel cloud deployment, automated version control pipelines, real-world monitoring, and optimization.",
      isFinal: true,
    },
  ];

  return (
    <section id="process" className="max-w-7xl mx-auto px-6 py-24 border-b border-[#1f2933]">
      <div className="mb-14">
        <p className="font-mono text-[#00ff9c] text-xs tracking-[0.5em] mb-4 uppercase">
          02. WORKFLOW_ENGINEERING
        </p>
        <h2 className="font-header text-3xl sm:text-4xl font-bold text-white text-left">
          My Engineering Process
        </h2>
        <p className="text-[#9da7b3] font-mono text-xs sm:text-sm mt-2">
          End-to-end disciplined methodology from raw data and algorithm design to production deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((item) => (
          <div
            key={item.step}
            className={`p-6 border transition-all duration-300 group relative rounded-sm ${
              item.isFinal
                ? "bg-[#00ff9c]/5 border-[#00ff9c]/40 hover:border-[#00ff9c] hover:shadow-[0_0_25px_rgba(0,255,156,0.2)]"
                : "bg-[#0d1117] border-[#1f2933] hover:border-[#00ff9c]/50 hover:-translate-y-1"
            }`}
          >
            <span className="font-mono text-[#00ff9c] text-xs font-bold block mb-2 tracking-wider">
              {item.step}
            </span>
            <h4 className="text-white font-header uppercase tracking-wider text-sm mb-2 group-hover:text-[#00ff9c] transition-colors">
              {item.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#9da7b3] leading-relaxed font-sans">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

