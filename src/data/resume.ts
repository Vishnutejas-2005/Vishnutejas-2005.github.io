// Single source of truth for everything on the site, transcribed from the resume.
// Edit here; components only handle layout.

export const profile = {
  name: 'J S Vishnu Teja',
  shortName: 'Vishnu',
  programme: 'B.Tech, Mathematics & Computing',
  institute: 'Indian Institute of Science, Bengaluru',
  classOf: 2027,
  pitch:
    'I work where probability meets systems: quantizing networks onto on-device NPUs, predicting credit distress from market data, filings and supply chains, and building LLM search on top of knowledge graphs.',
  emails: ['vishnutejas@iisc.ac.in', 'vishnuteja2045@gmail.com'],
  phone: '+91 97425 90888',
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
  cta?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'CrisisNet: Early Warning for Corporate Credit Distress',
    context: 'E0 259 Data Analytics · IISc',
    dates: 'Mar – Apr 2026',
    metric: { value: '0.83', label: 'test ROC-AUC, vs 0.62 for the Altman Z-score' },
    summary:
      'Flags financial distress across 40 S&P 500 energy companies by fusing market data, filing text and supply-chain contagion into one model.',
    points: [
      'Fused three signal modules into a LightGBM model: time-series credit features (Merton distance-to-default, volatility, FRED credit spreads), FinBERT and LDA signals from 10-K filings, and a supply-chain graph with DebtRank contagion.',
      'Beat the Altman, Ohlson, Zmijewski and Merton baselines on held-out 2019–2025 data at 71% recall, with walk-forward cross-validation and bootstrap confidence intervals.',
      'Served per-company health scores through a FastAPI endpoint and a Streamlit dashboard with SHAP explanations.',
    ],
    tags: ['Credit risk', 'LightGBM', 'FinBERT', 'Network contagion'],
    href: 'https://github.com/E0259-Data-Analytics/CrisisNet-E0259-Project',
    cta: 'View on GitHub →',
  },
  {
    title: 'BeeKurse: Conversational E-commerce on KURSE',
    context: 'ADSAI Project · IISc · team of 7',
    dates: 'Nov – Dec 2025',
    summary:
      'Shop by describing what you want in plain English, over WhatsApp, on top of KURSE, our neuro-symbolic inference engine.',
    points: [
      'Built on a tri-store architecture: SQLite for structured data, a Qdrant vector DB and a Memgraph knowledge graph, joined by a search orchestrator.',
      'An LLM parser sorts each message into search, product Q&A, chat or cart actions; search runs four scoring paths in parallel, mixing vector similarity with knowledge-graph relations.',
      'Small vendors update inventory by photographing handwritten notes, which OCR turns into catalogue entries.',
    ],
    tags: ['Knowledge graphs', 'Vector search', 'LLM agents', 'FastAPI', 'React'],
    href: 'https://github.com/VarK-3077/BeeKurse',
    cta: 'View on GitHub →',
  },
  {
    title: 'CampusTrotter: Live Campus Shuttle Platform',
    context: 'DS252 Cloud Computing · Supervised by Prof. Yogesh Simmhan',
    dates: 'Aug 2025 – Dec 2025',
    metric: { value: '~1.5 s', label: 'live shuttle updates to riders and admins' },
    summary:
      'A full-stack platform for IISc’s campus shuttles (TransVahan) connecting riders, drivers and administrators, with live tracking, seat occupancy and ETAs.',
    points: [
      'One React Native app with rider and driver modes: drivers push GPS and occupancy, riders see buses live on the map with seats and ETAs.',
      'Express backend on Firestore streams vehicle, reservation and alert updates over WebSockets, with background jobs that build trip summaries and expire stale reservations.',
      'React admin portal for routes, vehicles, driver assignments, alerts and analytics reports; backend containerised on AWS App Runner and infrastructure provisioned with Terraform.',
    ],
    tags: ['AWS', 'Firebase', 'WebSockets', 'React Native', 'Terraform'],
    href: 'https://github.com/DS252-CampusTrotters/CampusTrotter',
    cta: 'View on GitHub →',
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
];

export const skills = [
  {
    group: 'Mathematics & Quant',
    items: ['Probability', 'Time-Series Analysis', 'Convex Optimization', 'Statistical Inference', 'Credit Risk Modelling'],
  },
  {
    group: 'Programming',
    items: ['C++', 'Python', 'SQL', 'JavaScript / TypeScript', 'NumPy', 'Pandas', 'PyTorch', 'SciPy'],
  },
  {
    group: 'ML & AI',
    items: ['XGBoost / LightGBM', 'FinBERT & NLP', 'LLM Agents', 'Vector Search (Qdrant)', 'Knowledge Graphs (Memgraph)', 'SHAP', 'FlashAttention'],
  },
  {
    group: 'Systems & Cloud',
    items: ['CUDA', 'Triton', 'LLVM', 'Linux / Bash', 'AWS', 'Firebase', 'Docker', 'Terraform', 'FastAPI', 'Node.js', 'React / React Native', 'WebSockets'],
  },
];

export const positions = [
  {
    role: 'Accommodation Co-ordinator',
    event: 'Pravega, IISc 2026',
    dates: 'Feb 2026',
    note: 'Managed accommodation for 250+ participants.',
  },
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
    role: 'Student Volunteer',
    event: 'IISc UG Counselling Q&A Session',
    dates: 'Jun 2025, Jul 2024',
    note: 'Answered prospective students’ questions about the IISc undergraduate programme.',
  },
];
