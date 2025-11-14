// Chatbot Configuration and Personal Information
const CHATBOT_CONFIG = {
    apiKey: 'AIzaSyAT25VfiDX1-3GAFgZscazMBrQgQi2Tp2Q',
    model: 'gemini-2.5-flash',
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',

    // Personal Information Context
    personalInfo: {
        name: "Yash",
        title: "Machine Learning Engineer",
        location: "Gurugram, Haryana",
        phone: "+91 8630036135",
        email: "yashpal86300@gmail.com",
        education: "Bachelor of Computer Applications (Computer Science, Applied Statistics) - Bharat Institute of Technology, Meerut (2019–2022)",
        experience: "Software Development Engineer with expertise in ML, Backend, and Cloud Automation",
        kaggleStatus: "Kaggle Code Expert",
        languages: ["English (Fluent)", "Hindi (Fluent)"],

        bio: `I'm Yash, a Software Development Engineer specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and backend automation. At Onemind Services, I’ve worked on Azure Entra SSO integration, NetBox automation, Aruba Central provisioning, DigitalOcean DiffSync, CI/CD pipelines, and ML-powered log analytics using Elasticsearch and Scikit-Learn. I enjoy building intelligent, scalable systems that solve real engineering problems and deliver meaningful impact.`,

        skills: {
            programmingAndData: [
                "Python (Advanced)",
                "SQL (Advanced)",
                "C / C++",
                "Core Java",
                "PostgreSQL",
                "MongoDB",
                "Django & Django REST Framework",
                "HTML5 & CSS3"
            ],

            modelingAndML: [
                "Scikit-Learn",
                "TensorFlow",
                "PyTorch",
                "XGBoost",
                "CNN / RNN / GANs",
                "NLP",
                "Computer Vision",
                "Statistics",
                "Time Series Analysis"
            ],

            mlopsAndDeployment: [
                "Docker",
                "CI/CD (GitHub Actions)",
                "Elasticsearch",
                "NetBox Automation",
                "DigitalOcean API (DiffSync)"
            ],

            tools: [
                "Git",
                "GitHub",
                "VSCode",
                "PyCharm",
                "Redis",
                "Jupyter Notebook"
            ],

            nlpAndEmbeddings: [
                "spaCy",
                "NLTK",
                "Transformers (Gemma, BERT-like models)",
                "Text Classification",
                "Tokenization & Vectorization"
            ]
        },


        projects: [
            {
                name: "Image Classification from Scratch (CNN)",
                github: "GitHub link available",
                technologies: ["TensorFlow", "CNN", "Python", "Deep Learning", "Data Augmentation"],
                description: "Designed and trained CNN models from scratch without pretrained weights. Achieved 91% accuracy using techniques like batch normalization, dropout, learning rate scheduling, and feature map visualization for interpretability."
            },
            {
                name: "Reddit Comment Violation Classifier",
                github: "GitHub link available",
                technologies: ["Transformers", "Gemma 3", "NLP", "Python", "Deep Learning"],
                description: "Built a transformer-based NLP model to classify rule violations such as hate speech, harassment, and spam. Implemented automated preprocessing, optimized inference pipeline, and significantly improved moderation accuracy."
            },
            {
                name: "Azure Entra SSO Integration",
                github: "GitHub link available",
                technologies: ["Django", "Microsoft Graph API", "Azure Entra ID", "SSO", "REST APIs"],
                description: "Integrated Azure Entra SSO with Django REST Framework. Retrieved user identity and group details using Microsoft Graph API and implemented secure role-based authorization with automated access management."
            },
            {
                name: "NetBox Scheduler Plugin",
                github: "GitHub link available",
                technologies: ["NetBox", "Django", "Python", "Plugin Development"],
                description: "Developed a custom Scheduler Plugin for NetBox with repeat bookings, time-based constraints, reservation length, and buffer times. Built validation logic and API support for dynamic reservation workflows."
            },
            {
                name: "NetBox ↔ Aruba Central Automation",
                github: "GitHub link available",
                technologies: ["NetBox", "Aruba Central API", "Redis", "Python", "Automation"],
                description: "Automated synchronization between NetBox and Aruba Central using batched API calls and Redis caching. Reduced provisioning time by 40% and enabled automated site and device updates."
            },
            {
                name: "DigitalOcean Droplet Sync (DiffSync)",
                github: "GitHub link available",
                technologies: ["DiffSync", "DigitalOcean API", "Python", "NetBox"],
                description: "Implemented a DiffSync-based system to keep DigitalOcean droplet inventory synchronized with NetBox. Ensured reliable state modeling, idempotent updates, and reduced manual ops workload."
            },
            {
                name: "ML-powered Log Analytics",
                github: "GitHub link available",
                technologies: ["Elasticsearch", "Scikit-Learn", "Python", "ML Pipelines"],
                description: "Built machine-learning powered log anomaly detection and error classification pipeline using Elasticsearch and Scikit-Learn. Implemented automated monitoring templates, dashboards, and alerts, reducing manual troubleshooting by 45%."
            },
            {
                name: "NetBox Open-Source Contributions",
                github: "GitHub link available",
                technologies: ["Python", "Django", "NetBox", "Open Source"],
                description: "Contributed features, bug fixes, and performance improvements to the NetBox open-source ecosystem, including API optimizations, module enhancements, and code review contributions."
            }
        ],


        socialMedia: {
            linkedin: "https://www.linkedin.com/in/yashpal1",
            github: "https://github.com/yash-pal1",
            kaggle: "https://www.kaggle.com/yashdev01",
            twitter: "https://x.com/yashsaysno",
        },

        workExperience: [
            {
                title: "Software Development Engineer",
                company: "Onemind Services LLC",
                period: "August 2023 — Present",
                responsibilities: [
                    "Implemented ML-powered log analytics with Elasticsearch and Scikit-Learn for anomaly detection and error classification.",
                    "Containerized ML and backend systems using Docker and built CI/CD workflows with GitHub Actions.",
                    "Integrated Azure Entra SSO with Django REST Framework and automated user/group retrieval using Microsoft Graph API for secure role-based access.",
                    "Developed a Scheduler Plugin in NetBox with repeat bookings, time-based constraints, buffer times, and custom reservation logic.",
                    "Automated provisioning between NetBox and Aruba Central using batched API calls and Redis caching, improving data transfer and reducing provisioning time.",
                    "Synced DigitalOcean droplet data into NetBox using DiffSync, ensuring automated and consistent state management.",
                    "Contributed to NetBox open-source development by fixing bugs, improving API performance, and adding module enhancements."
                ],
                achievements: [
                    "Improved troubleshooting efficiency by 45% using ML-based Elasticsearch anomaly detection.",
                    "Reduced provisioning time by 40% through automated NetBox ↔ Aruba Central workflows.",
                    "Enhanced security and access automation with Azure Entra SSO + Microsoft Graph API integration."
                ],
                technologies: [
                    "Python", "Django", "Django REST Framework", "Elasticsearch", "Scikit-Learn",
                    "TensorFlow", "PyTorch", "Redis", "Docker", "GitHub Actions", "NetBox",
                    "DiffSync", "DigitalOcean API", "Microsoft Graph API", "Azure Entra ID"
                ]
            }
        ],


        certifications: [
            {
                name: "Machine Learning",
                organization: "Stanford University (Coursera)",
                date: "Issued Jun 2025",
                credentialId: "DZ25BE2L2WBF",
                link: "https://www.coursera.org/account/accomplishments/specialization/DZ25BE2L2WBF"
            },
            {
                name: "Supervised Machine Learning: Regression and Classification",
                organization: "Stanford University (Coursera)",
                date: "Issued Apr 2025",
                credentialId: "V0K0QNPAZ3KT",
                link: "https://www.coursera.org/account/accomplishments/certificate/V0K0QNPAZ3KT"
            },
            {
                name: "Advanced Learning Algorithms",
                organization: "Stanford University (Coursera)",
                date: "Issued May 2025",
                credentialId: "Q1QCPTPRQJ4N",
                link: "https://www.coursera.org/account/accomplishments/verify/Q1QCPTPRQJ4N"
            },
            {
                name: "Unsupervised Learning, Recommenders, and Reinforcement Learning",
                organization: "Stanford University (Coursera)",
                date: "Issued Jun 2025",
                credentialId: "R7YPWJD44CDK",
                link: "https://www.coursera.org/account/accomplishments/verify/R7YPWJD44CDK"
            },
            {
                name: "Certified ScrumMaster (CSM)",
                organization: "Scrum Alliance",
                date: "Issued Jun 2024 · Expires Jun 2026",
                credentialId: "001657528",
                link: "https://bcert.me/bc/html/show-badge.html?b=fudkblps"
            },
            {
                name: "Fundamentals of Network Engineering",
                organization: "Udemy",
                date: "Issued May 2024",
                credentialId: "UC-c7be52ee-7504-4e8c-9ba9-d654927ab6b2",
                link: "https://www.udemy.com/certificate/UC-c7be52ee-7504-4e8c-9ba9-d654927ab6b2/"
            },
            {
                name: "Unit Testing and Test-Driven Development in Python",
                organization: "Udemy",
                date: "Issued Feb 2024",
                credentialId: "UC-781e2608-5bc2-4400-9574-4df04676f16a",
                link: "https://www.udemy.com/certificate/UC-781e2608-5bc2-4400-9574-4df04676f16a/"
            },
            {
                name: "Python PCEP: Entry-Level Python Programmer Certification",
                organization: "Udemy",
                date: "Issued Dec 2023",
                credentialId: "UC-9a5c4bcf-3dcb-40eb-9153-bb8afd936d79",
                link: "https://www.udemy.com/certificate/UC-9a5c4bcf-3dcb-40eb-9153-bb8afd936d79/"
            },
            {
                name: "The Git & GitHub Bootcamp",
                organization: "Udemy",
                date: "Issued — (Date Not Specified)",
                credentialId: "UC-6bafd2c7-ea1d-4d2d-8560-1f66c5847b3c",
                link: "https://www.udemy.com/certificate/UC-6bafd2c7-ea1d-4d2d-8560-1f66c5847b3c/"
            }
        ],


        achievements: [
            "Kaggle Code Expert – recognized for high-quality ML notebooks and contributions",
            "Reduced troubleshooting effort by 45% through ML-powered log analytics",
            "Improved provisioning efficiency by 40% with automated NetBox ↔ Aruba Central integrations",
            "Implemented secure Azure Entra SSO + Microsoft Graph API for automated identity & access management",
            "Contributed to NetBox open-source development through features, fixes, and performance improvements",
            "Led backend design, sprint planning, and task management as team lead under Scrum methodology"
        ],


        currentActivities: [
            "Working on end-to-end ML pipelines and production deployments",
            "Building practical ML systems with Docker and FastAPI",
            "Competing in Kaggle data science competitions",
            "Creating open-source ML tools and datasets",
            "Writing technical blogs and educational content"
        ],

        coursework: [
            "Linear Algebra",
            "Calculus",
            "Probability & Statistics",
            "Data Structures & Algorithms",
            "Programming Languages",
            "Operating Systems",
            "Computer Architecture",
            "Database Systems"
        ],

        interests: [
            "Machine Learning Pipeline Development",
            "MLOps and Model Deployment",
            "Recommendation Systems",
            "Natural Language Processing",
            "Computer Vision",
            "Data Science",
            "Open Source Development",
            "AI-powered Productivity Tools"
        ],

        resumePath: "Resume/Yash_Resume_2y.pdf",
        website: "https://yashpal.co"
    },

    // System Prompt for Gemini
    systemPrompt: `You are Yash’s personal AI assistant on his portfolio website. Your role is to help visitors learn about Yash, his work, skills, projects, and experience.

**About Yash:**
- Name: Yash Pal
- Title: Software Development Engineer (AI/ML + Data Science + Backend + Cloud Automation)
- Location: Gurugram, Haryana
- Phone: +91 8630036135
- Email: yashpal86300@gmail.com
- Education: BCA — Bharat Institute of Technology, Meerut (2019–2022)
- Experience: Software Development Engineer with strong expertise in Machine Learning, Data Science, Deep Learning, NLP, Computer Vision, Backend Engineering, and Automation
- Kaggle Status: Kaggle Code Expert
- Languages: English (Fluent), Hindi (Fluent)

**Professional Summary:**
Yash is a Software Development Engineer who works at the intersection of Machine Learning, Data Science, Backend Engineering, and Cloud Automation. He has built production-ready systems including Azure Entra SSO integrations, NetBox automation workflows, Aruba Central provisioning pipelines, ML-powered log analytics, CI/CD workflows, and DiffSync-based cloud synchronization. He enjoys building intelligent, scalable systems that solve real engineering problems and deliver measurable impact.

**SKILLS:**

*Programming & Data:*
- Python (Advanced)
- SQL (Advanced)
- C / C++
- Core Java
- PostgreSQL
- MongoDB
- Django & Django REST Framework
- HTML5 & CSS3

*Machine Learning & Deep Learning:*
- Scikit-Learn
- TensorFlow
- PyTorch
- XGBoost
- CNN / RNN / GANs
- NLP (spaCy, NLTK)
- Computer Vision
- Statistics
- Time Series Analysis

*MLOps, DevOps & Cloud:*
- Docker
- CI/CD (GitHub Actions)
- Elasticsearch (ML pipelines)
- NetBox Automation
- DigitalOcean API (DiffSync)
- Microsoft Graph API
- Azure Entra SSO

*Tools:*
- Git
- GitHub
- VSCode
- PyCharm
- Redis
- Jupyter Notebook

*NLP & Transformers:*
- spaCy
- NLTK
- Transformers (Gemma, BERT-like models)
- Text Classification
- Embeddings & Vectorization

**PROJECTS (REAL):**

1. **Image Classification from Scratch (CNN)** | TensorFlow, Deep Learning  
   - Built CNNs from scratch without pretrained weights  
   - Achieved 91% accuracy with augmentation, BN, dropout, LR scheduling  
   - Visualized feature maps to optimize architecture

2. **Reddit Comment Violation Classifier** | Transformers, Gemma 3, NLP  
   - Developed transformer-based model for hate speech, harassment, spam  
   - Automated preprocessing and optimized inference pipeline

3. **Azure Entra SSO Integration** | Django, Microsoft Graph API  
   - Implemented SSO + group-based authorization  
   - Automated identity sync using Graph API

4. **NetBox Scheduler Plugin** | Django, NetBox  
   - Added time-based constraints, repeat bookings, buffers, and custom reservation logic

5. **NetBox ↔ Aruba Central Automation** | Redis, Aruba Central API  
   - Automated synchronization of sites/devices  
   - Reduced provisioning time by 40%

6. **DigitalOcean Droplet Sync (DiffSync)** | DigitalOcean API, NetBox  
   - Implemented DiffSync patterns for stable two-way inventory sync

7. **ML-powered Log Analytics** | Scikit-Learn, Elasticsearch  
   - Built anomaly detection & error classification pipeline  
   - Reduced troubleshooting time by 45%

8. **NetBox Open-Source Contributions** | Python, Django  
   - Added features, fixed bugs, improved API performance

**TECHNICAL EXPERIENCE:**

*Software Development Engineer — Onemind Services LLC (Aug 2023 — Present)*  
- ML-powered log analytics pipelines (45% fewer manual investigations) 
- Dockerized ML systems & CI/CD pipelines  
- Azure Entra SSO integration (Django + Graph API)  
- NetBox automation modules and custom plugins  
- Aruba Central provisioning automation (40% faster)   
- DigitalOcean synchronization via DiffSync  
- Open-source contributions to NetBox

**EDUCATION:**
BCA (Computer Science, Applied Statistics) — Bharat Institute of Technology, Meerut  
2019 — 2022

**CERTIFICATIONS:**
- Supervised Machine Learning: Regression & Classification — Stanford University
- Advanced Learning Algorithms — Stanford University
- Unsupervised Learning, Recommenders & RL — Stanford University
- Machine Learning — Stanford University
- Certified ScrumMaster (CSM) — Scrum Alliance
- Fundamentals of Network Engineering — Udemy
- Unit Testing & TDD in Python — Udemy
- Python PCEP Certification — Udemy
- Git & GitHub Bootcamp — Udemy

**ACHIEVEMENTS:**
- Kaggle Code Expert  
- Reduced troubleshooting effort by 45% via ML-driven analytics  
- Improved provisioning efficiency by 40% through API automation  
- Built secure SSO + automated identity management using Azure Entra  
- Contributed to NetBox open-source development  
- Led backend design and sprint planning as team lead under Scrum

**Social & Online Presence:**
- LinkedIn: https://www.linkedin.com/in/yashpal1/
- GitHub: https://github.com/yash-pal1
- Kaggle: https://www.kaggle.com/yashdev01
- Website: https://yashpal.co

**Resume:**
Available for download at: Resume/Yash_Resume_2y.pdf

**Instructions:**
1. Be friendly, professional, and helpful.
2. Always provide accurate information from the above details.
3. If asked about skills, experience, or projects, rely on this data.
4. When asked for contact, include:
   - Email: yashpal86300@gmail.com
   - Phone: +91 8630036135
   - LinkedIn: https://www.linkedin.com/in/yashpal1/
   - GitHub: https://github.com/yash-pal1
   - Kaggle: https://www.kaggle.com/yashdev01
   - Twitter: https://x.com/yashsaysno
   - Website: https://yashpal.co
   - Location: Gurugram, Haryana
5. If asked about the resume, say it’s downloadable on the website.
6. Keep responses concise but informative.
7. Use a conversational yet professional tone.
8. If unsure about something, advise the visitor to contact Yash directly.
9. Help users navigate his portfolio sections.
10. Always share links as plain URLs (no markdown formatting).

Remember: You represent Yash professionally. Always respond with accuracy, clarity, and enthusiasm.`
};


// Chatbot Class
class YashChatbot {
    constructor() {
        this.messages = [];
        this.isMinimized = false;
        this.isTyping = false;
        this.conversationHistory = [];
        this.hasBeenOpened = false;

        this.init();
    }

    init() {
        this.createChatbotUI();
        this.attachEventListeners();
        // Don't load welcome message on init - only when user first opens chatbot
    }

    createChatbotUI() {
        // Check if chatbot already exists
        if (document.getElementById('chatbot-container')) {
            return;
        }

        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container hidden" role="dialog" aria-label="Yash's AI Assistant" aria-live="polite" aria-modal="false">
                <div class="chatbot-header" id="chatbot-header">
                    <div class="chatbot-header-left">
                        <img src="image/yash_shortcut_icon.jpeg" alt="Yash" class="chatbot-avatar">
                        <div class="chatbot-title-container">
                            <h3>Yash's AI Assistant</h3>
                            <div class="chatbot-status">
                                <span class="status-dot"></span>
                                <span>Online</span>
                            </div>
                        </div>
                    </div>
                    <div class="chatbot-controls">
                        <button class="chatbot-control-btn" id="chatbot-minimize" title="Minimize" aria-label="Minimize chat">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button class="chatbot-control-btn" id="chatbot-close" title="Close" aria-label="Close chat">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                
                <div class="chatbot-body" id="chatbot-body">
                    <!-- Messages will be inserted here -->
                </div>
                
                <div class="quick-actions" id="quick-actions">
                    <button class="quick-action-btn" data-message="Tell me about Yash's technical skills"> Skills</button>
                    <button class="quick-action-btn" data-message="What projects has Yash worked on?"> Projects</button>
                    <button class="quick-action-btn" data-message="Tell me about Yash's work experience"> Experience</button>
                    <button class="quick-action-btn" data-message="How can I contact Yash?"> Contact</button>
                    <button class="quick-action-btn" data-message="Show me Yash's certifications"> Certifications</button>
                    <button class="quick-action-btn" data-message="What are Yash's achievements?"> Achievements</button>
                </div>
                
                <div class="chatbot-footer">
                    <input 
                        type="text" 
                        class="chatbot-input" 
                        id="chatbot-input" 
                        placeholder="Ask me anything about Yash..."
                        autocomplete="off"
                        aria-label="Message input"
                    >
                    <button class="chatbot-send-btn" id="chatbot-send" aria-label="Send message">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            
            <button class="chatbot-toggle-btn active" id="chatbot-toggle" aria-label="Open chat assistant" aria-controls="chatbot-container" aria-expanded="false">
                <svg class="cbt-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M5.5 4.5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-4.5 3.5v-3.5h-1.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"/>
                    <circle cx="9" cy="10" r="1.5"/>
                    <circle cx="12.5" cy="10" r="1.5"/>
                    <circle cx="16" cy="10" r="1.5"/>
                </svg>
            </button>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const closeBtn = document.getElementById('chatbot-close');
        const toggleBtn = document.getElementById('chatbot-toggle');
        const header = document.getElementById('chatbot-header');
        const quickActions = document.querySelectorAll('.quick-action-btn');

        // Send message
        sendBtn?.addEventListener('click', () => this.handleSendMessage());
        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });

        // Quick actions
        quickActions.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.dataset.message;
                this.sendMessage(message);
            });
        });

        // Minimize
        minimizeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMinimize();
        });

        // Close
        closeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeChatbot();
        });

        // Toggle
        toggleBtn?.addEventListener('click', () => {
            this.openChatbot();
        });
        toggleBtn?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.openChatbot();
            }
        });

        // Header click to toggle minimize
        header?.addEventListener('click', () => {
            if (this.isMinimized) {
                this.toggleMinimize();
            }
        });
    }

    loadWelcomeMessage() {
        const welcomeMsg = `Hi! I'm Yash's AI assistant.

I can help you explore:
• **Technical Skills** – Python, Machine Learning, Deep Learning, NLP, Backend Engineering, Docker, CI/CD  
• **Projects** – CNN Image Classifier, Reddit Comment Violation Classifier, NetBox Automation, Azure Entra SSO, DiffSync Sync Engine  
• **Experience** – Software Development Engineer at Onemind Services (AI/ML + Data Science + Backend + Cloud Automation)  
• **Certifications** – Stanford Machine Learning Specialization, ScrumMaster (CSM), Networking, TDD, Python PCEP  
• **Contact Info** – Email, LinkedIn, GitHub, Kaggle, and more

Use the quick action buttons below or ask me anything! 
 `;
        this.addMessage('bot', welcomeMsg);
    }

    handleSendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();

        if (!message) return;

        this.sendMessage(message);
        input.value = '';
    }

    async sendMessage(message) {
        // Add user message
        this.addMessage('user', message);

        // Show typing indicator
        this.showTypingIndicator();

        try {
            // Get response from Gemini
            const response = await this.getGeminiResponse(message);

            // Remove typing indicator
            this.hideTypingIndicator();

            // Add bot response
            this.addMessage('bot', response);

        } catch (error) {
            console.error('Error getting response:', error);
            this.hideTypingIndicator();

            // Try to answer from local knowledge base first
            const localResponse = this.getLocalResponse(message);

            if (localResponse) {
                // If we can answer from local knowledge, provide that
                this.addMessage('bot', localResponse);
            } else {
                // Otherwise, show error message with contact info
                const errorMessage = this.handleAPIError(error);
                this.addMessage('bot', errorMessage);
            }
        }
    }

    getLocalResponse(message) {
        const lowerMessage = message.toLowerCase();
        const info = CHATBOT_CONFIG.personalInfo;

        // Helper: classify intent to avoid mixing types
        const isCertQuery = /\b(certifications?|certificates?)\b/.test(lowerMessage) && !/\b(projects?|portfolio|built|created|developed)\b/.test(lowerMessage);

        // Contact information queries
        if (lowerMessage.match(/contact|reach|email|phone|call|connect|get in touch|communicate/i)) {
            return `You can contact Yash through:\n\n📧 **Email:** ${info.email}\n📱 **Phone:** ${info.phone}\n🔗 **LinkedIn:** ${info.socialMedia.linkedin}\n🐙 **GitHub:** ${info.socialMedia.github}\n🏆 **Kaggle:** ${info.socialMedia.kaggle}\n🐦 **Twitter/X:** ${info.socialMedia.twitter}\n📝 **Website:** https://yashpal.co\n\n📍 **Location:** ${info.location}`;
        }

        // Skills queries
        if (lowerMessage.match(/skill|technical|technology|programming|what (can|do) (you|yash)|expertise|proficient|languages/i)) {
            let skillsText = `Yash has expertise in:\n\n`
            skillsText += `**Programming & Backend:**\n${info.skills.programmingAndData.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**Machine Learning & Deep Learning:**\n${info.skills.modelingAndML.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**MLOps, DevOps & Cloud:**\n${info.skills.mlopsAndDeployment.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**NLP & Transformers:**\n${info.skills.nlpAndEmbeddings.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**Tools & Ecosystem:**\n${info.skills.tools.map(s => `• ${s}`).join('\n')}`;
            return skillsText;
        }


        // Certifications (strict match to avoid mixing with projects/education)
        if (isCertQuery) {
            let text = `Here are Yash's certifications:`;
            info.certifications.forEach((c) => {
                const line = `\n• ${c.name} — ${c.organization} — Date: ${c.date}` + (c.link ? ` — Verification: ${c.link}` : '');
                text += line;
            });
            return text;
        }

        // Projects queries
        if (lowerMessage.match(/project|portfolio|work|built|created|developed|show me/i)) {
            let projectsText = `Here are Yash's key projects:\n\n`;
            info.projects.forEach((project, index) => {
                projectsText += `**${index + 1}. ${project.name}**\n`;
                projectsText += `Technologies: ${project.technologies.join(', ')}\n`;
                projectsText += `${project.description}\n\n`;
            });
            projectsText += `You can view all projects on GitHub: ${info.socialMedia.github}`;
            return projectsText;
        }

        // Experience queries (structured and validated)
        if (/\b(experience|work|employment|position|role|career)\b/i.test(lowerMessage) && !/\b(projects?|portfolio)\b/i.test(lowerMessage)) {
            let expText = `Here is Yash's complete work experience:`;
            info.workExperience.forEach(exp => {
                expText += `\n\n**${exp.title}** — ${exp.company}`;
                expText += `\nDuration: ${exp.period}`;
                if (exp.responsibilities && exp.responsibilities.length) {
                    expText += `\nKey Responsibilities:`;
                    exp.responsibilities.forEach(item => {
                        expText += `\n- ${item}`;
                    });
                }
                if (exp.achievements && exp.achievements.length) {
                    expText += `\nMajor Achievements:`;
                    exp.achievements.forEach(item => {
                        expText += `\n- ${item}`;
                    });
                }
                if (exp.technologies && exp.technologies.length) {
                    expText += `\nTechnologies/Skills Utilized:`;
                    exp.technologies.forEach(tech => {
                        expText += `\n- ${tech}`;
                    });
                }
            });
            return expText;
        }

        // Education or courses (kept separate from certifications)
        if (lowerMessage.match(/\b(education|degree|study|coursework|courses)\b/i)) {
            let eduText = `**Education:**\n${info.education}\n\n`;
            eduText += `**Relevant Coursework:**\n${info.coursework.map(c => `• ${c}`).join('\n')}`;
            return eduText;
        }

        // Achievements queries
        if (lowerMessage.match(/achievement|accomplish|award|recognition|kaggle|rank|competition/i)) {
            let achieveText = `**Yash's Achievements:**\n\n`;
            achieveText += info.achievements.map(a => `✨ ${a}`).join('\n\n');
            achieveText += `\n\n**Current Activities:**\n`;
            achieveText += info.currentActivities.map(a => `🚀 ${a}`).join('\n\n');
            return achieveText;
        }

        // About/Bio queries
        if (lowerMessage.match(/about|who (is|are)|tell me (about|more)|introduce|background|bio/i)) {
            return `${info.bio}\n\n**Title:** ${info.title}\n**Location:** ${info.location}\n**Languages:** ${info.languages.join(', ')}\n\n${info.experience}\n${info.kaggleStatus}\n\nFor more details, ask me about skills, projects, experience, or certifications!`;
        }

        // Location queries
        if (lowerMessage.match(/where|location|live|based|from/i)) {
            return `Yash is based in **${info.location}**.\n\n${info.bio}`;
        }

        // Interests queries
        if (lowerMessage.match(/interest|passion|hobby|like|enjoy|focus/i)) {
            let interestText = `**Yash's Interests & Focus Areas:**\n\n`;
            interestText += info.interests.map(i => `💡 ${i}`).join('\n\n');
            return interestText;
        }

        // Resume/CV queries
        if (lowerMessage.match(/resume|cv|download|document/i)) {
            return `You can download Yash's resume from the website at:\n📄 **Resume/Yash_Resume_2y.pdf**\n\nIt's available in the website header or contact section.\n\nWould you like to know about his skills, projects, or experience?`;
        }

        // Social media queries
        if (lowerMessage.match(/social|linkedin|github|kaggle|twitter|medium|blog/i)) {
            return `Connect with Yash on:\n\n🔗 **LinkedIn:** ${info.socialMedia.linkedin}\n🐙 **GitHub:** ${info.socialMedia.github}\n🏆 **Kaggle:** ${info.socialMedia.kaggle}\n🐦 **Twitter/X:** ${info.socialMedia.twitter}\n📝 **Website:** https://yashpal.co`;
        }

        // No match found
        return null;
    }

    handleAPIError(error) {
        // Check for quota/cost exhaustion errors
        if (error.message && (
            error.message.includes('429') ||
            error.message.includes('quota') ||
            error.message.includes('RESOURCE_EXHAUSTED') ||
            error.message.includes('insufficient') ||
            error.statusCode === 429
        )) {
            return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact Yash directly through the contact section below.\n\n📧 Email: yashpal86300@gmail.com\n📱 Phone: +91 8630036135\n🔗 LinkedIn: https://www.linkedin.com/in/yashpal1";
        }

        // Check for rate limit errors
        if (error.message && error.message.includes('rate limit')) {
            return "I'm processing too many requests right now. Please wait a moment and try again, or reach out to Yash directly through the contact section.";
        }

        // Check for network/connectivity errors
        if (error.message && (
            error.message.includes('network') ||
            error.message.includes('fetch') ||
            error.message.includes('Failed to fetch')
        )) {
            return "I'm having network connectivity issues. Please check your internet connection and try again, or contact Yash directly through the contact section.";
        }

        // Generic fallback for all other errors
        return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact Yash directly through the contact section.\n\n📧 Email: yashpal86300@gmail.com\n🔗 LinkedIn: https://www.linkedin.com/in/yashpal1";
    }

    async getGeminiResponse(userMessage) {
        // Build conversation history
        const contents = [
            {
                role: "user",
                parts: [{text: CHATBOT_CONFIG.systemPrompt}]
            },
            {
                role: "model",
                parts: [{text: "I understand. I'm Yash's personal AI assistant. I'll help visitors learn about Yash, his work, skills, and experiences in a friendly and professional manner."}]
            }
        ];

        // Add conversation history
        this.conversationHistory.forEach(msg => {
            contents.push({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{text: msg.content}]
            });
        });

        // Add current message
        contents.push({
            role: "user",
            parts: [{text: userMessage}]
        });

        const requestBody = {
            contents: contents,
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
        };

        try {
            const response = await fetch(`${CHATBOT_CONFIG.apiEndpoint}?key=${CHATBOT_CONFIG.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            // Handle HTTP errors with specific status codes
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = new Error(`API request failed: ${response.status}`);
                error.statusCode = response.status;
                error.errorData = errorData;

                // Check for specific error messages in the response
                if (errorData.error) {
                    if (errorData.error.message) {
                        error.message = errorData.error.message;
                    }
                    if (errorData.error.status) {
                        error.errorStatus = errorData.error.status;
                    }
                }

                throw error;
            }

            const data = await response.json();

            // Validate response structure
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid API response structure');
            }

            const botResponse = data.candidates[0].content.parts[0].text;

            // Update conversation history
            this.conversationHistory.push({role: 'user', content: userMessage});
            this.conversationHistory.push({role: 'bot', content: botResponse});

            // Keep only last 10 messages to manage token usage
            if (this.conversationHistory.length > 20) {
                this.conversationHistory = this.conversationHistory.slice(-20);
            }

            return botResponse;

        } catch (error) {
            // Enhance error with more context if it's a fetch error
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                error.message = 'Failed to fetch - network error';
            }
            throw error;
        }
    }

    addMessage(sender, text) {
        const chatBody = document.getElementById('chatbot-body');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;

        const time = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });

        const avatarHTML = sender === 'bot' ?
            `<img src="image/yash_shortcut_icon.jpeg" alt="Avatar" class="message-avatar">` : '';

        messageDiv.innerHTML = `
            ${avatarHTML}
            <div>
                <div class="message-content">${this.formatMessage(text)}</div>
                <div class="message-time">${time}</div>
            </div>
        `;

        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        this.messages.push({sender, text, time});
    }

    formatMessage(text) {
        // First, convert markdown-style links [text](url) to clean URLs
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
            // If the link text is the same as the URL or starts with http, just use the URL
            if (linkText === url || linkText.startsWith('http')) {
                return url;
            }
            // Otherwise keep the markdown format for now, will be converted to HTML later
            return `[${linkText}](${url})`;
        });

        // Convert plain URLs to clickable links
        const urlRegex = /(https?:\/\/[^\s\]]+)/g;
        text = text.replace(urlRegex, (url) => {
            // Don't convert if it's part of a markdown link (already has closing parenthesis)
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${url}</a>`;
        });

        // Convert remaining markdown links [text](url) to HTML
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${linkText}</a>`;
        });

        // Convert markdown-style bold to HTML
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Convert markdown-style italic to HTML
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Convert markdown-style code to HTML
        text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Convert bullet points to proper lists
        if (text.includes('\n•') || text.includes('\n-')) {
            text = text.replace(/\n([•\-])\s(.+)/g, (match, bullet, content) => {
                return `<li>${content}</li>`;
            });
            // Wrap in ul if li tags exist
            if (text.includes('<li>')) {
                text = text.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
            }
        }

        // Convert numbered lists
        text = text.replace(/\n(\d+)\.\s(.+)/g, '<li>$2</li>');
        if (text.includes('<li>') && !text.includes('<ul>')) {
            text = text.replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>');
        }

        // Convert line breaks to paragraphs for better spacing
        const paragraphs = text.split(/\n\n+/);
        if (paragraphs.length > 1) {
            text = paragraphs.map(p => {
                if (p.trim() && !p.includes('<ul>') && !p.includes('<ol>') && !p.includes('<li>')) {
                    return `<p>${p.trim()}</p>`;
                }
                return p;
            }).join('');
        } else {
            // Single line breaks to <br>
            text = text.replace(/\n/g, '<br>');
        }

        return text;
    }

    showTypingIndicator() {
        const chatBody = document.getElementById('chatbot-body');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.id = 'typing-indicator';

        typingDiv.innerHTML = `
            <img src="image/yash_shortcut_icon.jpeg" alt="Avatar" class="message-avatar">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;

        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        this.isTyping = true;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        this.isTyping = false;
    }

    toggleMinimize() {
        const container = document.getElementById('chatbot-container');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const icon = minimizeBtn.querySelector('i');

        this.isMinimized = !this.isMinimized;
        container.classList.toggle('minimized');

        if (this.isMinimized) {
            icon.className = 'fas fa-plus';
            minimizeBtn.title = 'Expand';
        } else {
            icon.className = 'fas fa-minus';
            minimizeBtn.title = 'Minimize';
        }
    }

    closeChatbot() {
        const container = document.getElementById('chatbot-container');
        const toggleBtn = document.getElementById('chatbot-toggle');

        container.classList.add('hidden');
        toggleBtn.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
    }

    openChatbot() {
        const container = document.getElementById('chatbot-container');
        const toggleBtn = document.getElementById('chatbot-toggle');

        container.classList.remove('hidden');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'true');

        // Load welcome message only on first open
        if (!this.hasBeenOpened) {
            this.loadWelcomeMessage();
            this.hasBeenOpened = true;
        }

        if (this.isMinimized) {
            this.toggleMinimize();
        }
    }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.YashChatbot = new YashChatbot();
    });
} else {
    window.YashChatbot = new YashChatbot();
}
