// Single source of truth for everything on the site, transcribed from the resume.
// Edit here; components only handle layout.

export const profile = {
  name: 'J S Vishnu Teja',
  shortName: 'Vishnu',
  programme: 'B.Tech, Mathematics & Computing',
  institute: 'Indian Institute of Science, Bengaluru',
  classOf: 2027,
  pitch:
    'I work where probability meets systems: quantizing networks onto on-device NPUs, rationing KV-cache memory for long-context LLMs, and stress-testing trading signals until the data-snooping falls out.',
  emails: ['vishnutejas@iisc.ac.in', 'vishnuteja2045@gmail.com'],
};

export const socials = [
  {
    label: 'GitHub',
    handle: 'Vishnutejas-2005',
    href: 'https://github.com/Vishnutejas-2005',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.815 1.102.815 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    label: 'LinkedIn',
    handle: 'js-vishnu-teja',
    href: 'https://www.linkedin.com/in/js-vishnu-teja/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'LeetCode',
    handle: 'vishnuteja_48',
    href: 'https://leetcode.com/u/vishnuteja_48/',
    path: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z',
  },
];

export const stats = [
  { value: '9.0', unit: '/10', label: 'CGPA at IISc' },
  { value: '436', unit: 'AIR', label: 'JEE Advanced 2023' },
  { value: '99.96', unit: '%ile', label: 'JEE Main 2023' },
  { value: '77', unit: 'rank', label: 'KCET 2023, state' },
];

export const experience = [
  {
    org: 'Samsung R&D Institute India',
    place: 'Noida',
    role: 'Research Intern',
    dates: 'May 2026 – Jul 2026',
    tags: ['Quantization', 'On-device NPU', 'Agentic data'],
    points: [
      'Implemented the <b>Turbo Quant</b> algorithm (ICML 2026) for neural-network quantization and deployed the optimized model onto an on-device <b>NPU</b> for low-latency inference.',
      'Engineered an automated UI data-collection pipeline that records screen activity and captures screenshots on action triggers and at fixed intervals.',
      'Designed a scraper that parses XML UI dumps into structured JSON datasets with precise bounding-box annotations for clickable and scrollable elements, used to train vision-based agentic models.',
    ],
  },
  {
    org: 'National Payments Corporation of India',
    place: 'NPCI',
    role: 'Research Intern',
    dates: 'Sep 2024 – Jul 2025',
    tags: ['LLMs', 'Text-to-SQL', 'Analytics'],
    points: [
      'Built <b>TexQL</b>, an LLM-based system that translates natural-language questions into optimized SQL over financial datasets with <b>millions of records</b>, giving analysts fast, direct data access.',
      'Designed intent detection that routes each query to a tabular answer or a charting pipeline, integrated into NPCI’s core analytics platform.',
    ],
  },
];

export type Project = {
  title: string;
  context: string;
  dates: string;
  metric?: { value: string; label: string };
  summary: string;
  points: string[];
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Layer-Aware Adaptive KV Cache Management for LLM Inference',
    context: 'IISc',
    dates: 'Jan 2026',
    metric: { value: '−40%', label: 'KV-cache memory, <1.3% accuracy drop' },
    summary:
      'A KKT-constrained water-filling solver that gives each layer only as much KV-cache budget as it needs.',
    points: [
      'Tackled the memory bottleneck of long-context inference by allocating KV-cache budget per layer via a KKT-constrained water-filling solver.',
      'Deployed FlashAttention tiling and chunked prefill to scale inference to 128K context on RTX 4090s.',
    ],
    tags: ['LLM inference', 'Convex optimization', 'FlashAttention', 'CUDA'],
    featured: true,
  },
  {
    title: 'Bollinger Bands Strategy on NIFTY 50',
    context: 'Supervised by Prof. Shashi Jain',
    dates: 'May 2025 – Jul 2025',
    metric: { value: '1-min', label: 'high-frequency OHLC, for a Bengaluru HFT firm' },
    summary:
      'Quant research on minute-level NIFTY 50 data: diagnose the series, model it, then learn when to trade it.',
    points: [
      'Validated time-series assumptions with ADF and Ljung–Box tests; modeled trend and volatility with ARIMA and GARCH(1,1).',
      'Trained an XGBoost classifier on engineered features to find profitable entry/exit signals, with SPA testing to rule out data-snooping bias.',
    ],
    tags: ['Time series', 'GARCH', 'XGBoost', 'Quant research'],
    featured: true,
  },
  {
    title: 'Transvahan Cloud Shuttle System',
    context: 'Supervised by Prof. Yogesh Simmhan',
    dates: 'Aug 2025 – Dec 2025',
    metric: { value: '500+', label: 'concurrent users, sub-second sync' },
    summary:
      'A cloud-native platform that tracks IISc’s campus shuttles and their seat occupancy in real time.',
    points: [
      'Architected on GCP with serverless functions and NoSQL storage.',
      'Streamed vehicle GPS and seat occupancy over WebSockets instead of batch polling, keeping every client in sync with sub-second latency.',
    ],
    tags: ['GCP', 'Serverless', 'WebSockets', 'NoSQL'],
  },
  {
    title: 'KURSE: Knowledge Retrieval & Summarisation Engine',
    context: 'ADSAI Project · IISc',
    dates: 'Sep – Dec 2025',
    metric: { value: '>95%', label: 'target retrieval accuracy' },
    summary:
      'An agentic RAG pipeline over documents, images and audio, backed by a tri-layer store.',
    points: [
      'Combined SQL, a vector DB and a knowledge graph with semantic reranking and hallucination-avoidance, targeting <1% factual error.',
    ],
    tags: ['Agentic RAG', 'Knowledge graphs', 'Multi-modal'],
  },
  {
    title: 'Kolmogorov–Arnold Networks (KAN)',
    context: 'Supervised by Prof. Chiranjib Bhattacharya & Prof. Shishir N Y Kolathaya',
    dates: 'Apr 2025',
    summary:
      'Reproduced and extended the original KAN paper’s claims on interpretability, scaling laws and symbolic regression.',
    points: [
      'Tested B-spline-based KANs in low-data regimes and empirically checked universal approximation via the Kolmogorov–Arnold representation theorem against MLP baselines.',
    ],
    tags: ['Deep learning theory', 'Symbolic regression', 'PyTorch'],
  },
  {
    title: 'CoinFlow',
    context: 'Android app',
    dates: 'Case study',
    summary:
      'An expense tracker that reads bank and UPI SMS on-device and turns each transaction into a one-tap notification, with zero network calls by default.',
    points: [],
    tags: ['Android', 'On-device', 'Privacy'],
    href: '/projects/coinflow',
  },
];

export const achievements = [
  { year: '2023', title: 'JEE Advanced', result: 'AIR 436', note: 'out of ~180,000 qualified candidates (General)' },
  { year: '2023', title: 'JEE Main', result: 'AIR 526', note: '99.96 percentile (General)' },
  { year: '2023', title: 'KCET', result: 'Rank 77', note: 'State rank, Karnataka (General)' },
  { year: '2021', title: 'National Chemistry Olympiad (HBCSE)', result: 'INChO Merit', note: 'among top performers nationally' },
  { year: '2019', title: 'Regional Mathematics Olympiad', result: 'Top 30', note: 'selected in Karnataka' },
  { year: '2017', title: 'Unified Cyber Olympiad', result: 'Top 20', note: 'National Merit Awardee, India' },
];

export const education = [
  {
    year: '2027',
    degree: 'B.Tech in Mathematics and Computing',
    institute: 'Indian Institute of Science (IISc)',
    score: '9 / 10',
    scoreLabel: 'CGPA',
  },
  {
    year: '2023',
    degree: 'Class 12 (CBSE)',
    institute: 'Narayana Olympiad School',
    score: '95.6%',
    scoreLabel: 'Board',
  },
];

export const coursework = [
  { name: 'Probability & Statistics', grade: 'A+' },
  { name: 'Stochastic Models & Applications', grade: 'A+' },
  { name: 'Numerical Methods', grade: 'A+' },
  { name: 'Linear Algebra & Multivariable Calculus', grade: 'A, A+' },
  { name: 'Linear & Non-Linear Optimization', grade: 'A' },
  { name: 'Intro to AI/ML', grade: 'A' },
  { name: 'Cloud Computing', grade: 'A' },
  { name: 'Data Analytics', grade: 'A' },
  { name: 'Compiler Design', grade: 'A' },
  { name: 'Data Structures & Algorithms', grade: 'B+' },
  { name: 'Applied Data Science & AI', grade: 'B+' },
  { name: 'Systems for ML', grade: 'B+' },
];

export const skills = [
  {
    group: 'Mathematics & Quant',
    items: ['Probability', 'Stochastic Calculus', 'Time-Series Analysis', 'Convex Optimization', 'Statistical Inference'],
  },
  {
    group: 'Programming',
    items: ['C++', 'Python', 'NumPy', 'Pandas', 'PyTorch', 'SciPy', 'SQL'],
  },
  {
    group: 'Systems & ML',
    items: ['CUDA', 'Triton', 'LLVM', 'FlashAttention', 'Linux / Bash', 'GCP', 'Low-Latency Networking', 'Memory Profiling'],
  },
];

export const positions = [
  {
    role: 'Team Lead',
    event: 'CAPTCHA Exhibit, IISc Open Day 2025',
    dates: 'Feb 2025',
    note: 'Led a team of 6 under the Databased Club to design and demo interactive CAPTCHA models, and coordinated with departments and visitors to present the work to a broad audience.',
  },
  {
    role: 'Executive',
    event: 'Pravega Cultural Committee',
    dates: 'Jan 2025',
    note: 'Managed and ran cultural activities at Pravega 2025, IISc’s annual science and cultural fest.',
  },
  {
    role: 'Coordinator',
    event: 'Carvaan Pravega, Bangalore',
    dates: 'Oct 2024',
    note: 'Handled event logistics and participant coordination for the outreach event.',
  },
  {
    role: 'Volunteer',
    event: 'GAME-ARTS Symposium, Dept. of CSA',
    dates: 'Jul 2024',
    note: 'Helped organize the Game Theory Lab’s symposium on game theory, mechanism design and AI.',
  },
  {
    role: 'Student Volunteer',
    event: 'IISc UG Counselling Q&A Session',
    dates: 'Jun 2025, Jul 2024',
    note: 'Answered prospective students’ questions about the IISc undergraduate programme.',
  },
];
