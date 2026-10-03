// Portfolio content sourced from Sahil Kumar's updated resume.
export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  color: string;
  tags: string[];
  features: string[];
  github?: string;
  demo?: string;
  overview: string;
  problem: string;
  workflow: string;
  workflowDescription: string;
  dataset?: string;
  role: string;
  outcome: string;
  learned: string[];
};

export const personalInfo = {
  name: "Sahil Kumar",
  roles: ["MCA (AI & ML) Student", "AI/ML Enthusiast", "RAG & LLM Builder", "Data Analytics Enthusiast"],
  tagline: "I build practical AI systems, data products, and intelligent software experiences.",
  about: "MCA (AI & ML) student at Sharda University with hands-on experience building AI-powered applications using Python, NLP, RAG pipelines, Large Language Models, and deep learning. Built an AI tutoring system with semantic search, a CNN-based facial emotion detection web app, a demand-forecasting and multi-tool business assistant, and a Power BI analytics dashboard.",
  location: "Greater Noida, UP, India",
  email: "Sahilkr9615@gmail.com",
  phone: "+91-9142355328",
  github: "https://github.com/sahilkr1512",
  linkedin: "https://linkedin.com/in/sahil-kumar-1a9372258",
  resume: "/resume.pdf",
};

export const skills: Record<string, string[]> = {
  Languages: ["Python", "SQL", "JavaScript (basic)", "C (beginner)", "C++ (beginner)"],
  "Data Structures & Algorithms": ["Arrays", "Linked Lists", "Stacks", "Queues", "Recursion", "Searching & Sorting"],
  "Machine Learning & Deep Learning": ["CNNs", "TensorFlow / Keras", "TensorFlow.js", "Demand Forecasting", "Feature Engineering", "Model Validation"],
  "NLP & LLMs": ["Natural Language Processing", "RAG Pipelines", "Large Language Models", "Prompt Engineering", "Vector Embeddings"],
  "Data Analysis & Databases": ["NumPy", "Pandas", "Data Manipulation", "EDA", "SQL", "Star Schema Design"],
  "Data Visualization / BI": ["Power BI", "Dashboard Development", "Data Reporting"],
};

export const projects: Project[] = [
  {
    slug: "retailiq",
    title: "RetailIQ — Demand Forecasting & Multi-Tool Business Assistant",
    category: "AI / ML",
    color: "#8b5cf6",
    summary: "End-to-end retail intelligence application that forecasts demand at product-store-week level and answers natural-language business questions.",
    overview: "RetailIQ is an AI-powered retail analytics platform designed to help businesses understand sales data, forecast demand, and generate useful business insights. It combines data analytics, machine learning, and AI-based interaction in a single application.",
    problem: "Retail businesses generate large amounts of sales data, but converting that data into meaningful insights can require significant manual analysis. RetailIQ aims to simplify this process by providing analytical tools, demand forecasting, and an AI-powered interface for interacting with business data.",
    workflow: "Data Input → Data Processing → Analysis & Forecasting → AI Assistant → Business Insights",
    workflowDescription: "The application processes retail data, performs analytical and forecasting operations, and presents the results through an interactive interface. Users can also interact with the AI assistant to obtain insights from the available business data.",
    role: "I worked on the development of the application, including data processing, analytical workflows, AI/ML integration, and the interactive user interface. I focused on connecting the different components into a practical retail analytics solution.",
    outcome: "RetailIQ demonstrates how AI and machine learning can be combined with data analytics to support retail decision-making. The project provides a practical way to transform raw business data into understandable insights and forecasts.",
    learned: ["Working with structured retail data and star-schema concepts", "Building forecasting workflows and validating machine learning models", "Combining SQL, analytics, RAG, and LLM-based tools", "Designing AI features around practical business use cases"],
    github: "https://github.com/sahilkr1512/RetailIQ",
    tags: ["Python", "SQL", "Machine Learning", "RAG", "LLM Agents"],
    features: [
      "Modelled retail data in a star schema with sales, product, store, date and promotion dimensions",
      "Performed EDA on seasonality, promotional lift and price sensitivity",
      "Developed forecasting models using lag, rolling, promotional and calendar features",
      "Validated forecasts with forward-chained validation using MAPE and RMSE",
      "Built a planner-executor agent that selects SQL, forecasting and RAG tools",
      "Returns grounded, source-cited answers from business and policy information",
    ],
  },
  {
    slug: "facial-emotion-detection",
    title: "Facial Emotion Detection Web App",
    category: "Deep Learning",
    color: "#06b6d4",
    summary: "Browser-based facial expression classifier trained on FER2013 to recognize seven emotion categories using a CNN.",
    overview: "Facial Emotion Detection is a deep learning application that identifies facial emotions from images or camera input. The project uses a convolutional neural network approach to classify facial expressions and provides an interactive interface for real-time emotion detection.",
    problem: "Understanding facial expressions can be useful in applications involving human-computer interaction and user behavior analysis. The project explores how deep learning and computer vision can be used to automatically recognize emotions from facial images.",
    workflow: "Camera/Image Input → Face Detection → Image Preprocessing → CNN Model → Emotion Prediction",
    workflowDescription: "The input image or camera frame is processed to identify the facial region. The processed image is then passed to the trained deep learning model, which predicts the corresponding emotion.",
    dataset: "The project uses the FER2013 facial emotion dataset for training and evaluating the emotion recognition model.",
    role: "I worked on the machine learning pipeline, including data preprocessing, model development, training, and integration with the application. I also worked on connecting the computer vision component with the interactive interface for real-time predictions.",
    outcome: "The project demonstrates the practical application of deep learning and computer vision for facial emotion recognition and provides experience in developing an end-to-end AI application from dataset preparation to user-facing deployment.",
    learned: ["Preparing and preprocessing image data for deep learning", "Building and training CNN-based classification models", "Diagnosing training problems and improving model stability", "Integrating a trained model with a browser-based computer vision application"],
    github: "https://github.com/sahilkr1512/facial-emotion-detection",
    tags: ["Python", "TensorFlow/Keras", "CNN", "TensorFlow.js", "FER2013"],
    features: [
      "Trained a CNN on FER2013 to classify seven emotion categories",
      "Diagnosed model collapse where loss was stuck around ln(7)",
      "Improved training with He-normal initialization, lower learning rate and gradient clipping",
      "Used capped class weights and label smoothing to improve learning stability",
      "Built a browser frontend with HTML, CSS, JavaScript, TensorFlow.js and face-api.js",
      "Runs the model client-side without requiring a backend",
    ],
  },
  {
    slug: "edurag-tutor",
    title: "EduRAG Tutor — AI-Powered Tutoring System",
    category: "AI / NLP",
    color: "#a855f7",
    summary: "AI tutoring system enabling students to query educational materials in natural language and receive context-aware responses.",
    overview: "EduRAG Tutor is an AI tutoring system designed to provide students with answers based on educational content. The project uses Retrieval-Augmented Generation (RAG) to combine document retrieval with a Large Language Model, allowing the system to use relevant information from a knowledge base when generating responses.",
    problem: "Traditional AI assistants may generate answers without directly grounding them in a student's provided learning material. EduRAG Tutor addresses this challenge by retrieving relevant information from educational documents before generating an answer.",
    workflow: "Educational Documents → Text Processing → Embeddings → Semantic Search → Relevant Context → LLM → Answer",
    workflowDescription: "Educational content is processed and converted into searchable representations. When a student asks a question, the system searches for relevant content and provides that context to the language model, which then generates a response based on the retrieved information.",
    role: "I worked on designing and developing the RAG-based tutoring workflow, including document processing, semantic retrieval, and integration with the language model. The project helped me understand how retrieval and generation components can be combined to build more grounded AI applications.",
    outcome: "EduRAG Tutor demonstrates the use of modern NLP and LLM techniques to build a knowledge-based educational assistant. The project provides practical experience with RAG pipelines, semantic search, embeddings, and LLM integration.",
    learned: ["Designing an end-to-end RAG pipeline", "Working with embeddings and semantic search", "Grounding LLM responses in retrieved educational content", "Applying prompt engineering to knowledge-based AI applications"],
    github: "https://github.com/sahilkr1512",
    tags: ["Python", "NLP", "RAG", "LLMs", "Vector Embeddings"],
    features: [
      "Built a full RAG pipeline that retrieves relevant document chunks before generation",
      "Implemented vector-based semantic search across educational resources",
      "Applied prompt engineering to improve response quality and relevance",
      "Designed responses around supplied learning material to reduce hallucination risk",
    ],
  },
  {
    slug: "placement-dashboard",
    title: "College Placement Analytics Dashboard",
    category: "Data / BI",
    color: "#22c55e",
    summary: "Interactive Power BI dashboard for tracking student placement trends, recruitment metrics and department-wise outcomes.",
    overview: "An interactive Power BI dashboard designed to present college placement data through clear KPIs, visualizations, and department-wise analysis.",
    problem: "Placement data can be difficult to interpret when it is spread across tables and reports. The dashboard organizes key placement metrics into an interactive visual format for easier reporting and analysis.",
    workflow: "Placement Data → Data Preparation → KPI & Visual Design → Interactive Dashboard → Analysis",
    workflowDescription: "Placement data is prepared and presented through KPIs, charts, slicers, filters, and department-level views so users can explore recruitment outcomes and trends.",
    role: "I worked on designing the dashboard structure, selecting relevant KPIs, creating visualizations, and organizing the report for clear placement analysis.",
    outcome: "The dashboard provides an interactive way to monitor placement outcomes, compare departments, and communicate recruitment trends through data visualization.",
    learned: ["Designing business-focused Power BI dashboards", "Selecting useful KPIs for reporting", "Creating interactive visualizations and filters", "Presenting structured data as clear business insights"],
    github: "https://github.com/sahilkr1512",
    tags: ["Power BI", "Data Visualization", "Business Intelligence"],
    features: [
      "Designed KPIs for placement rates and average salary packages",
      "Visualized department-wise placement outcomes and recruitment trends",
      "Used slicers, filters, cards and charts for drill-down analysis",
      "Built the dashboard for clear reporting and placement-team analysis",
    ],
  },
];

export const experience = [
  {
    title: "Data Audit & Desktop Assessment Intern — Swachh Survekshan 2025–2026",
    when: "60 Days · Jul 2026 · Skillexpress",
    text: "Contributed to the Swachh Survekshan 2025–2026 initiative through data audit and desktop assessment activities supporting India's national urban sanitation ranking program. Applied analytical aptitude and attention to detail across evaluation and assessment processes. Awarded a Certificate of Excellence in recognition of dedication and valuable contribution (Certificate No. SESSU202674).",
  },
];

export const education = [
  { title: "Master of Computer Applications (MCA) — AI & Machine Learning", where: "Sharda University, Greater Noida, UP", when: "2025 – Present" },
  { title: "Bachelor of Computer Applications (BCA)", where: "Patliputra University, Patna, Bihar", when: "2022 – 2025" },
  { title: "Class XII (Intermediate)", where: "St. Xavier's High School, Patna, Bihar", when: "2020 – 2022" },
];
