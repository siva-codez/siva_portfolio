export const projects = [
  {
    id: 1,
    title: "OptiCrop",
    subtitle: "Smart Agricultural Production Optimization Engine",
    description:
      "An AI-powered system that analyzes soil composition, climate patterns, and historical yield data to recommend optimal crop varieties and farming strategies for maximum productivity.",
    problem:
      "Farmers struggle with low yields due to poor crop selection and lack of data-driven insights.",
    solution:
      "Built an ML pipeline that processes multi-dimensional agricultural data and delivers actionable crop recommendations.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "React"],
    category: ["ai-ml"],
    featured: true,
    github: "[GITHUB URL]",
    demo: "[PROJECT DEMO]",
    image: null,
    outcome: "Achieved 91% recommendation accuracy on test dataset with 5-fold cross-validation",
    model: "Random Forest + Gradient Boosting Ensemble",
    dataset: "Agricultural soil and climate dataset",
  },
  {
    id: 2,
    title: "Disease Prediction System",
    subtitle: "Multi-Disease ML Prediction & Risk Assessment",
    description:
      "A machine learning application that predicts the likelihood of multiple diseases based on patient health parameters using ensemble classification models.",
    problem:
      "Early disease detection remains a challenge due to complex symptom patterns and insufficient data analysis tools.",
    solution:
      "Trained and deployed multiple ML classifiers with a React-based UI for real-time health risk assessment.",
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Flask", "React"],
    category: ["ai-ml"],
    featured: true,
    github: "[GITHUB URL]",
    demo: "[PROJECT DEMO]",
    image: null,
    outcome: "85%+ accuracy across diabetes, heart disease, and Parkinson's prediction models",
    model: "SVM, Random Forest, Neural Network",
    dataset: "UCI Machine Learning Repository datasets",
  },
  // {
  //   id: 3,
  //   title: "Sales Analytics Dashboard",
  //   subtitle: "Power BI Business Intelligence Solution",
  //   description:
  //     "An interactive Power BI dashboard providing real-time sales performance metrics, regional trends, and revenue forecasting for business stakeholders.",
  //   problem:
  //     "Manual reporting was time-consuming and lacked real-time insights for business decision-making.",
  //   solution:
  //     "Designed a multi-page Power BI dashboard with DAX measures, drill-through reports, and automated data refresh.",
  //   technologies: ["Power BI", "SQL", "DAX", "Excel", "Python"],
  //   category: ["data-analytics"],
  //   featured: false,
  //   github: "[GITHUB URL]",
  //   demo: "[PROJECT DEMO]",
  //   image: null,
  //   outcome: "Reduced reporting time by 60% and enabled data-driven decision making for leadership",
  // },
  // {
  //   id: 4,
  //   title: "AI Content Generator",
  //   subtitle: "LLM-Powered Automated Content Creation Platform",
  //   description:
  //     "A full-stack web application leveraging large language models and prompt engineering to generate high-quality blog posts, social media content, and marketing copy.",
  //   problem:
  //     "Content teams struggle to produce consistent, high-quality output at scale.",
  //   solution:
  //     "Integrated OpenAI API with a custom prompt engineering framework and a React front-end for seamless content generation.",
  //   technologies: ["React", "Node.js", "Express", "OpenAI API", "MongoDB", "Tailwind CSS"],
  //   category: ["ai-ml", "web"],
  //   featured: false,
  //   github: "[GITHUB URL]",
  //   demo: "[PROJECT DEMO]",
  //   image: null,
  //   outcome: "Generates production-ready content in under 10 seconds with 90%+ user satisfaction",
  // },
  // {
  //   id: 5,
  //   title: "DevConnect",
  //   subtitle: "Full-Stack Developer Collaboration Platform",
  //   description:
  //     "A MERN stack social platform for developers to share projects, collaborate on open-source work, and connect with other engineers in the community.",
  //   problem:
  //     "Developers lack a dedicated platform to showcase work and find collaboration opportunities.",
  //   solution:
  //     "Built a feature-rich platform with real-time messaging, project showcase, and skill-based matching.",
  //   technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
  //   category: ["web"],
  //   featured: false,
  //   github: "[GITHUB URL]",
  //   demo: "[PROJECT DEMO]",
  //   image: null,
  //   outcome: "Supports real-time collaboration with sub-100ms latency WebSocket communication",
  // },
  // {
  //   id: 6,
  //   title: "AI Workflow Automation Agent",
  //   subtitle: "Intelligent n8n-Based Business Process Automation",
  //   description:
  //     "An intelligent automation system using n8n and AI agents to automate repetitive business workflows including email processing, data extraction, and report generation.",
  //   problem:
  //     "Manual business processes consume hours of employee time daily with high error rates.",
  //   solution:
  //     "Designed multi-step AI agent workflows in n8n with LLM integration for intelligent decision-making at each step.",
  //   technologies: ["n8n", "Python", "OpenAI API", "REST APIs", "Webhooks", "JSON"],
  //   category: ["automation"],
  //   featured: false,
  //   github: "[GITHUB URL]",
  //   demo: "[PROJECT DEMO]",
  //   image: null,
  //   outcome: "Automated 15+ business workflows, saving 20+ hours of manual work per week",
  // },
];

export const filterOptions = [
  { id: "all", label: "All Projects" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "data-analytics", label: "Data Analytics" },
  { id: "web", label: "Web Development" },
  { id: "automation", label: "Automation" },
];
