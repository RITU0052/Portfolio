export const projectsData = [
  {
    id: "carebridge",
    featured: true,
    name: "CareBridge",
    title: "AI-Powered Healthcare Monitoring & Caregiver Platform",
    tagline: "Unified digital healthcare management for patients & caregivers",
    description: "CareBridge is a modern healthcare management platform designed to bring important patient-care activities into one place. The platform helps patients and caregivers manage medicines, medical reports, doctor appointments, and health tracking seamlessly.",
    longDescription: "CareBridge is engineered to address the complexities of managing long-term patient care. By centralizing daily prescription schedules, diagnostic document archives, and doctor appointment calendars into a single accessible web interface, CareBridge bridges the gap between patients, family caregivers, and healthcare providers.",
    
    features: [
      { name: "Medicine and daily dose management", status: "Implemented" },
      { name: "Medicine timing and dosage tracking", status: "Implemented" },
      { name: "Medical report upload & storage", status: "Implemented" },
      { name: "Doctor appointment management", status: "Implemented" },
      { name: "Patient and caregiver live monitoring", status: "Implemented" },
      { name: "Interactive patient & admin dashboard", status: "Implemented" },
      { name: "Health activity tracking & history", status: "Implemented" },
      { name: "AI-assisted report summarization", status: "Coming Soon" },
    ],

    technologies: ["React", "JavaScript", "Python", "Tailwind CSS", "REST APIs", "AI/ML"],
    role: "Product Design • Development • AI Integration • System Architecture",
    
    problem: "Managing patient medications, diagnostic reports, and caregiver notifications across multiple fragmented channels often leads to missed dosages and delayed medical response.",
    solution: "CareBridge provides an intuitive web-based platform with real-time schedule tracking, automated dose alerts, document storage, and caregiver visibility.",
    challenges: "Designing a seamless data flow that allows caregivers to view patient progress while ensuring straightforward navigation for non-technical users.",
    results: "Created and deployed CareBridge web application with clean state management, visual dose trackers, and modular architecture.",
    
    githubUrl: "https://github.com/RITU0052/health-carer",
    demoUrl: "https://carebridge-website-xi.vercel.app/",
    category: "AI & Healthcare"
  },
  {
    id: "sdiet-assist",
    featured: false,
    name: "SDIET Assist",
    title: "AI-Powered College Assistant",
    tagline: "Conversational AI agent for academic & campus info",
    description: "SDIET Assist is an AI chatbot concept designed to help students access college-related information through a conversational interface.",
    longDescription: "SDIET Assist streamlines campus inquiry handling by allowing students to ask natural language questions regarding syllabus details, examination schedules, campus notices, and department contacts.",
    features: [
      { name: "Conversational AI query interface", status: "Implemented" },
      { name: "Academic syllabus & notice lookup", status: "Implemented" },
      { name: "Interactive Streamlit web frontend", status: "Implemented" },
      { name: "Domain-specific intent recognition", status: "Implemented" }
    ],
    technologies: ["Python", "AI", "NLP", "Streamlit"],
    role: "AI & Full-Stack Developer",
    problem: "Students frequently struggle to find updated academic schedules and campus resources scattered across bulleted notice boards.",
    solution: "Integrated a Natural Language Processing model into a lightweight Streamlit interface for instantaneous Q&A.",
    challenges: "Structuring intent classification to return accurate responses for custom campus queries.",
    results: "Built a functional prototype capable of accurately responding to standard academic inquiries.",
    githubUrl: "https://github.com/RITU0052/sdiet-assist",
    demoUrl: null,
    category: "AI & NLP"
  },
  {
    id: "speech-recognition",
    featured: false,
    name: "Speech Recognition System",
    title: "Converting Speech into Text",
    tagline: "Real-time acoustic signal processing & transcription",
    description: "A speech recognition application designed to convert spoken language into text using speech-processing technologies.",
    longDescription: "This system processes audio streams from microphonic input or pre-recorded audio files, normalizing sound frequencies and converting vocal phrases into structured textual records.",
    features: [
      { name: "Microphone live audio recording", status: "Implemented" },
      { name: "Audio file transcript parsing", status: "Implemented" },
      { name: "Noise filtering & acoustic preprocessing", status: "Implemented" },
      { name: "Export transcript to text format", status: "Implemented" }
    ],
    technologies: ["Python", "Speech Recognition", "NLP"],
    role: "Python Developer",
    problem: "Manual transcription of spoken lectures and meetings is slow and error-prone.",
    solution: "Leveraged Python speech recognition libraries to transcribe audio streams into text format efficiently.",
    challenges: "Handling background acoustic noise and maintaining high accuracy across varied pitch levels.",
    results: "Achieved fast audio-to-text conversion for standard speech clips.",
    githubUrl: "https://github.com/RITU0052/speech-recognition",
    demoUrl: null,
    category: "AI & Speech"
  },
  {
    id: "text-summarizer",
    featured: false,
    name: "Text Summarizer",
    title: "AI-Based Text Summarization",
    tagline: "Extractive & abstractive NLP document condenser",
    description: "An AI-powered application that processes long text and generates concise summaries to make information easier to understand.",
    longDescription: "The Text Summarizer ingests long-form articles, research documents, or essays, parsing paragraph structure to output key takeaways while preserving core semantic meaning.",
    features: [
      { name: "Long document & article parsing", status: "Implemented" },
      { name: "Custom summary length selector", status: "Implemented" },
      { name: "Key takeaway extraction", status: "Implemented" },
      { name: "Streamlit GUI dashboard", status: "Implemented" }
    ],
    technologies: ["Python", "NLP", "AI", "Streamlit"],
    role: "AI Developer",
    problem: "Reading through multi-page reports to extract key facts consumes valuable time.",
    solution: "Implemented NLP algorithms to compute word importance scores and condense text length by up to 70%.",
    challenges: "Preserving sentence context and avoiding fragmented summary outputs.",
    results: "Significantly reduced reading duration while retaining critical factual points.",
    githubUrl: "https://github.com/RITU0052/text-summarizer",
    demoUrl: null,
    category: "AI & NLP"
  },
  {
    id: "student-ai-study-assistant",
    featured: false,
    name: "Student AI Study Assistant",
    title: "AI Assistant for Students",
    tagline: "Interactive study companion for learning retention",
    description: "A student-focused AI application designed to help learners understand, summarize and interact with educational content.",
    longDescription: "Student AI Study Assistant acts as a personalized tutor, generating practice questions, breaking down complex engineering concepts, and providing instant definitions from study materials.",
    features: [
      { name: "Interactive concept breakdown", status: "Implemented" },
      { name: "Automated revision quiz generator", status: "Implemented" },
      { name: "Study notes summarization", status: "Implemented" },
      { name: "Clean student dashboard", status: "Implemented" }
    ],
    technologies: ["Python", "AI", "NLP", "Streamlit"],
    role: "Full Stack Developer",
    problem: "Students often struggle to self-assess their understanding of complex engineering topics.",
    solution: "Created an interactive AI utility that generates tailored quizzes and explanation cards based on input subject notes.",
    challenges: "Formatting response outputs into structured cards for optimal readability.",
    results: "Helps students review key concepts rapidly prior to examinations.",
    githubUrl: "https://github.com/RITU0052/student-ai-study-assistant",
    demoUrl: null,
    category: "EdTech & AI"
  }
];
