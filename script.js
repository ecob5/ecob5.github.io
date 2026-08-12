const portfolio = {
  name: "Enzo Cristopher Oliveira Bittencourt",
  shortName: "Enzo Bittencourt",
  role: "Estudante de Engenharia de Software",
  availability: "Disponível para oportunidades de estágio e júnior",
  headline: "Estudante de Engenharia de Software com foco em Python, Dados, Web e Inteligência Artificial",
  intro:
    "Este é o meu portfólio. Aqui você pode conhecer um pouco sobre mim, explorar os projetos que venho construindo e acompanhar minha evolução na área de tecnologia, com foco em desenvolvimento de software e inteligência artificial.",
  focusArea: "Python, web, dados e IA",
  jobTarget: "Júnior ou estágio",
  email: "cristopher@tuta.io",
  alternateEmails: ["ecobittencourt@icloud.com", "enzocristopher2@gmail.com"],
  github: "https://github.com/ecob5",
  linkedin: "https://www.linkedin.com/in/enzo-cristopher-oliveira-bittencourt-4590231bb",
  whatsapp: "https://wa.me/5524981557111",
  contactText:
    "Aberto a oportunidades júnior, estágio e projetos práticos em desenvolvimento web, dados, automação e suporte técnico.",
  facts: [
    {
      value: "26",
      label: "Projetos públicos no GitHub",
      text: "Contagem atualizada automaticamente a partir do meu perfil público.",
      githubRepoCount: true,
    },
    {
      value: "Engenharia de Software",
      label: "Universidade de Vassouras",
      text: "Formação atual e desenvolvimento de aplicações completas, do front-end ao back-end.",
    },
    {
      value: "Inteligência Artificial",
      label: "Trabalho Freelancer",
      text: "Experiência profissional com avaliação de modelos e projetos próprios com LLMs, RAG e visão computacional.",
    },
    {
      value: "Stack Principal",
      label: "Tecnologias e Integrações",
      text: "Foco em back-end, IA aplicada, dados e automação, trabalhando principalmente com Python, APIs, bancos de dados, LLMs e integração de sistemas.",
    },
    {
      value: "Experiência Internacional",
      label: "Formação e experiência em Luxemburgo",
      text: "Formação técnica e experiência profissional em Luxemburgo, com vivência em ambientes multiculturais.",
    },
    {
      value: "Perfil Multidisciplinar",
      label: "",
      text: "Experiência prática em diferentes frentes da tecnologia, conectando desenvolvimento de software, inteligência artificial, dados e automação conforme as necessidades de cada projeto.",
    },
  ],
  projects: [
    {
      title: "Local Coding Agent",
      type: "AI Agent",
      description:
        "Agente de programação executado pelo terminal, capaz de interagir com um LLM e utilizar ferramentas para ler arquivos, modificar código e executar comandos no projeto através de tool calling.",
      highlights: [
        "Integração com modelos compatíveis com a API da OpenAI via OpenRouter.",
        "Leitura e edição de arquivos limitadas ao diretório do projeto.",
        "Execução iterativa de comandos Bash por meio de tool calling.",
      ],
      tags: ["Python", "LLMs", "OpenAI SDK", "OpenRouter", "Tool Calling", "Bash"],
      links: [{ label: "Ver no GitHub", href: "https://github.com/ecob5/local-coding-agent" }],
      image: "",
      imageAlt: "",
      featured: true,
    },
    {
      title: "RAG Document Assistant",
      type: "RAG API",
      description:
        "API de perguntas e respostas sobre documentos com RAG. Processa arquivos PDF e TXT, gera embeddings, realiza busca vetorial por similaridade e retorna as fontes utilizadas pelo LLM.",
      highlights: [
        "Processamento de documentos PDF e TXT com divisão em chunks.",
        "Geração de embeddings e recuperação de contexto por busca vetorial.",
        "Respostas acompanhadas das fontes utilizadas pelo modelo.",
      ],
      tags: ["TypeScript", "Node.js", "Express", "RAG", "OpenAI SDK", "Embeddings", "Vector Search", "Zod", "Vitest"],
      links: [{ label: "Ver no GitHub", href: "https://github.com/ecob5/RAG_document_assistant" }],
      image: "",
      imageAlt: "",
      featured: true,
    },
    {
      title: "Sistema Inteligente de Presença Facial",
      type: "Projeto extensionista",
      description:
        "Sistema web para controle automático de presença em sala de aula utilizando reconhecimento facial. Inclui cadastro de alunos, captura de rosto, reconhecimento em tempo real, dashboard, relatórios e exportação de dados.",
      tags: ["Python", "Flask", "OpenCV", "NumPy", "SQLite", "Computer Vision", "HTML/CSS"],
      links: [],
      image: "assets/projeto1.png",
      imageAlt: "Tela do Sistema Inteligente de Presença Facial.",
      featured: true,
    },
    {
      title: "API Copa 2026",
      type: "REST API",
      description:
        "API REST para gerenciamento de seleções e jogadores da Copa do Mundo de 2026, com modelagem de dados, endpoints CRUD, persistência, testes de API e execução em ambiente conteinerizado.",
      tags: ["Python", "Django REST Framework", "REST API", "SQL", "Docker", "Postman"],
      links: [{ label: "Ver no GitHub", href: "https://github.com/ecob5/copa2026" }],
      image: "",
      imageAlt: "",
    },
    {
      title: "GameShelf",
      type: "Back-end",
      description:
        "Aplicação back-end para organização de uma biblioteca pessoal de jogos, permitindo cadastrar nome, desenvolvedora, gênero e status, além de consultar e filtrar registros através de endpoints da API.",
      tags: ["Python", "Django", "Django REST Framework", "SQLite", "REST API", "Django ORM"],
      links: [{ label: "Ver no GitHub", href: "https://github.com/ecob5/GameSheft" }],
      image: "",
      imageAlt: "",
    },
    {
      title: "Outros projetos",
      type: "GitHub",
      description:
        "Acesse meu perfil no GitHub para conhecer outros projetos, estudos práticos e experimentos desenvolvidos durante minha formação em software e inteligência artificial.",
      tags: ["Python", "IA", "Back-end", "Front-end"],
      links: [{ label: "Ver outros projetos", href: "https://github.com/ecob5" }],
      image: "",
      imageAlt: "",
    },
  ],
  skillGroups: [
    {
      title: "Linguagens",
      items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "HTML", "CSS", "YAML"],
    },
    {
      title: "IA, LLMs e RAG",
      items: ["LLMs", "RAG", "OpenAI SDK", "OpenRouter", "Tool Calling", "Embeddings", "Vector Search", "Prompt Evaluation", "Code Evaluation", "AI Safety"],
    },
    {
      title: "Backend e APIs",
      items: ["Flask", "Django", "Django REST Framework", "Node.js", "Express", "APIs REST", "Zod"],
    },
    {
      title: "Dados e bancos de dados",
      items: ["SQL", "SQLite", "MySQL", "NumPy", "Excel", "Power BI", "Dados relacionais"],
    },
    {
      title: "Ferramentas de IA",
      items: ["LM Studio", "ChatGPT Codex", "Claude Code", "Gemini", "Qwen", "Gemma", "Modelos locais"],
    },
    {
      title: "Desenvolvimento e qualidade",
      items: ["Git", "GitHub", "GitLab", "Docker", "Postman", "Vitest", "Visual Studio Code"],
    },
    {
      title: "Automação, IoT e visão computacional",
      items: ["n8n", "OpenCV", "Computer Vision", "Arduino", "Wokwi", "Tinkercad", "Sensores DHT", "Servomotor"],
    },
    {
      title: "Suporte, sistemas e segurança",
      items: ["Troubleshooting", "Manutenção de hardware", "Diagnóstico de computadores", "Windows", "Linux", "Redes", "TryHackMe", "Fundamentos de cibersegurança"],
    },
    {
      title: "Idiomas",
      items: ["Português - Nativo", "Francês - Avançado", "Inglês - Intermediário", "Espanhol - Básico"],
    },
  ],
  experiences: [
    {
      role: "Generalist AI Trainer",
      company: "Outlier",
      period: "2026 - Atual",
      location: "",
      bullets: [
        "Avaliação de modelos de Inteligência Artificial por meio de testes estruturados.",
        "Análise da qualidade, correção e relevância das respostas geradas.",
        "Verificação do cumprimento de diretrizes e critérios específicos de avaliação.",
        "Comparação do comportamento dos modelos em tarefas envolvendo texto, código e segurança.",
        "Identificação de erros, riscos e problemas de segurança nas respostas geradas pelos modelos.",
        "Registro dos resultados para apoiar melhorias na qualidade e confiabilidade dos modelos.",
      ],
    },
    {
      role: "Estagiário Técnico de Engenharia",
      company: "GK Engineering SA",
      period: "2019",
      location: "Luxemburgo",
      bullets: [
        "Apoio às atividades técnicas de um escritório de engenharia.",
        "Organização e revisão de documentos e projetos técnicos.",
        "Realização de verificações, identificação de inconsistências e suporte às demandas da equipe.",
        "Análise técnica, resolução de problemas e cumprimento de procedimentos.",
      ],
    },
    {
      role: "Suporte técnico",
      company: "Visual Online",
      period: "2017 - 2018",
      location: "Contern, Luxemburgo",
      bullets: [
        "Atendimento, suporte técnico e orientação básica a usuários.",
        "Diagnóstico inicial de problemas relacionados à conectividade, dispositivos e equipamentos.",
        "Apoio na resolução de falhas de rede, internet e funcionamento de computadores.",
        "Manutenção preventiva, troubleshooting e encaminhamento de demandas técnicas quando necessário.",
      ],
    },
  ],
};

const englishTranslations = Object.freeze({
  "Pular para o conteúdo": "Skip to content",
  "Sobre": "About",
  "Experiência": "Experience",
  "Projetos": "Projects",
  "Habilidades": "Skills",
  "Contato": "Contact",
  "Disponível para oportunidades de estágio e júnior": "Open to internship and junior opportunities",
  "Olá, eu sou Enzo Cristopher Oliveira Bittencourt.": "Hi, I'm Enzo Cristopher Oliveira Bittencourt.",
  "Olá, eu sou": "Hi, I'm",
  "Estudante de Engenharia de Software com foco em Python, Dados, Web e Inteligência Artificial": "Software Engineering student focused on Python, Data, Web Development and Artificial Intelligence",
  "Sou estudante de Engenharia de Software com formação técnica e experiência internacional em Luxemburgo. Desenvolvo projetos acadêmicos em web, APIs, visão computacional e bancos de dados, com interesse em Python, dados e IA aplicada.": "I am a Software Engineering student with a technical background and international experience in Luxembourg. I build projects involving web development, APIs, computer vision and databases, with a focus on Python, data and applied AI.",
  "Este é o meu portfólio. Aqui você pode conhecer um pouco sobre mim, explorar os projetos que venho construindo e acompanhar minha evolução na área de tecnologia, com foco em desenvolvimento de software e inteligência artificial.": "This is my portfolio. Here you can learn a little about me, explore the projects I have been building, and follow my growth in technology, with a focus on software development and artificial intelligence.",
  "Por onde você quer começar?": "Where would you like to start?",
  "Navegação inicial": "Introductory navigation",
  "Explorar projetos": "Explore projects",
  "Copiar e-mail": "Copy email",
  "FOCO ATUAL": "CURRENT FOCUS",
  "OBJETIVO": "GOAL",
  "Foco atual": "Current focus",
  "Objetivo": "Goal",
  "Python, web, dados e IA": "Python, web, data and AI",
  "Júnior ou estágio": "Junior role or internship",
  "Sobre mim": "About me",
  "Sou estudante de Engenharia de Software e atuo com avaliação e treinamento de modelos de Inteligência Artificial, com interesse em desenvolver soluções que conectem software e IA aplicada. Minha trajetória inclui formação técnica, experiência internacional em Luxemburgo e projetos acadêmicos e pessoais em diferentes áreas da tecnologia, sempre buscando evoluir como desenvolvedor e enfrentar problemas cada vez mais complexos.": "I am a Software Engineering student working with the evaluation and training of Artificial Intelligence models, with an interest in developing solutions that connect software and applied AI. My background includes technical education, international experience in Luxembourg, and academic and personal projects across different areas of technology, always seeking to grow as a developer and take on increasingly complex problems.",
  "Sou estudante de Engenharia de Software e gosto de entender como as coisas funcionam para transformar ideias em projetos reais. Minha formação técnica e as experiências que vivi no Brasil e em Luxemburgo fortaleceram meu interesse por tecnologia e resolução de problemas. Hoje, desenvolvo projetos de front-end, back-end, dados e inteligência artificial, sempre com vontade de aprender e evoluir a cada desafio.": "I am a Software Engineering student who enjoys understanding how things work and turning ideas into real projects. My technical background and the experiences I had in Brazil and Luxembourg strengthened my interest in technology and problem-solving. Today, I build front-end, back-end, data and artificial intelligence projects, always looking to learn and grow with every challenge.",
  "Combino formação em Engenharia de Software, base técnica e experiência prática no Brasil e em Luxemburgo. Desenvolvo soluções de ponta a ponta — de interfaces e APIs à análise de dados e aplicações com inteligência artificial — sempre buscando compreender o problema antes de escolher a tecnologia.": "I combine a Software Engineering education, a technical background and hands-on experience in Brazil and Luxembourg. I develop end-to-end solutions — from interfaces and APIs to data analysis and artificial intelligence applications — always seeking to understand the problem before choosing the technology.",
  "Projetos públicos no GitHub": "Public GitHub projects",
  "Contagem atualizada automaticamente a partir do meu perfil público.": "Count updated automatically from my public profile.",
  "Engenharia de Software": "Software Engineering",
  "Universidade de Vassouras": "University of Vassouras",
  "Formação atual e desenvolvimento de aplicações completas, do front-end ao back-end.": "Current academic focus and development of complete applications, from front-end to back-end.",
  "Inteligência Artificial": "Artificial Intelligence",
  "Trabalho Freelancer": "Freelance Work",
  "Experiência profissional com avaliação de modelos e projetos próprios com LLMs, RAG e visão computacional.": "Professional experience evaluating models and building personal projects with LLMs, RAG and computer vision.",
  "Stack Principal": "Core Stack",
  "Tecnologias e Integrações": "Technologies and Integrations",
  "Foco em back-end, IA aplicada, dados e automação, trabalhando principalmente com Python, APIs, bancos de dados, LLMs e integração de sistemas.": "Focused on back-end, applied AI, data and automation, working primarily with Python, APIs, databases, LLMs and system integration.",
  "Experiência Internacional": "International Experience",
  "Formação e experiência em Luxemburgo": "Education and Experience in Luxembourg",
  "Formação técnica e experiência profissional em Luxemburgo, com vivência em ambientes multiculturais.": "Technical education and professional experience in Luxembourg, with experience in multicultural environments.",
  "Perfil Multidisciplinar": "Multidisciplinary Profile",
  "Experiência prática em diferentes frentes da tecnologia, conectando desenvolvimento de software, inteligência artificial, dados e automação conforme as necessidades de cada projeto.": "Hands-on experience across different areas of technology, connecting software development, artificial intelligence, data and automation according to each project's needs.",
  "Minha trajetória combina desenvolvimento de software, suporte técnico e experiências práticas no Brasil e em Luxemburgo. Gosto de compreender o problema antes de escolher a tecnologia.": "My background combines software development, technical support and hands-on experience in Brazil and Luxembourg. I like to understand the problem before choosing the technology.",
  "Hoje, direciono meus estudos para aplicações web, APIs, dados, automação e inteligência artificial aplicada.": "Today, I focus my studies on web applications, APIs, data, automation and applied artificial intelligence.",
  "Projetos em web, API REST, visão computacional, dados e automação com Arduino.": "Projects involving web development, REST APIs, computer vision, data and Arduino automation.",
  "Base técnica principal": "Core technical foundation",
  "Desenvolvimento de projetos com Flask, Django REST Framework, OpenCV, NumPy e automações.": "Project development with Flask, Django REST Framework, OpenCV, NumPy and automation.",
  "Banco de dados e organização de dados": "Databases and data organization",
  "Criação de consultas, estruturação de registros e uso em projetos com SQLite/MySQL.": "Query creation, record structuring and use of SQLite/MySQL in projects.",
  "Web e APIs": "Web and APIs",
  "Desenvolvimento de aplicações web": "Web application development",
  "Projetos com HTML, CSS, JavaScript, Flask, Django REST Framework e integração com APIs.": "Projects with HTML, CSS, JavaScript, Flask, Django REST Framework and API integration.",
  "Ambiente e versionamento": "Environment and version control",
  "Uso de Docker para padronização de ambiente e Git/GitHub para controle de versão dos projetos.": "Docker for consistent environments and Git/GitHub for project version control.",
  "IA aplicada": "Applied AI",
  "Interesse e apoio ao desenvolvimento": "Development focus and support",
  "Uso de ferramentas de IA para prototipação, organização de ideias, revisão de código e documentação.": "Use of AI tools for prototyping, organizing ideas, code review and documentation.",
  "2026 - Atual": "2026 - Present",
  "Avaliação de modelos de Inteligência Artificial por meio de testes estruturados.": "Evaluation of Artificial Intelligence models through structured testing.",
  "Análise da qualidade, correção e relevância das respostas geradas.": "Analysis of the quality, correctness and relevance of generated responses.",
  "Verificação do cumprimento de diretrizes e critérios específicos de avaliação.": "Verification of compliance with guidelines and specific evaluation criteria.",
  "Comparação do comportamento dos modelos em tarefas envolvendo texto, código e segurança.": "Comparison of model behavior in tasks involving text, code and safety.",
  "Identificação de erros, riscos e problemas de segurança nas respostas geradas pelos modelos.": "Identification of errors, risks and safety issues in model-generated responses.",
  "Registro dos resultados para apoiar melhorias na qualidade e confiabilidade dos modelos.": "Documentation of results to support improvements in model quality and reliability.",
  "Estagiário Técnico de Engenharia": "Technical Engineering Intern",
  "Agosto de 2019": "August 2019",
  "Luxemburgo": "Luxembourg",
  "Apoio às atividades técnicas de um escritório de engenharia.": "Support for the technical activities of an engineering office.",
  "Organização e revisão de documentos e projetos técnicos.": "Organization and review of technical documents and projects.",
  "Realização de verificações, identificação de inconsistências e suporte às demandas da equipe.": "Technical checks, identification of inconsistencies and support for team requests.",
  "Análise técnica, resolução de problemas e cumprimento de procedimentos.": "Technical analysis, problem solving and compliance with procedures.",
  "Suporte técnico": "Technical Support",
  "Contern, Luxemburgo": "Contern, Luxembourg",
  "Atendimento, suporte técnico e orientação básica a usuários.": "User assistance, technical support and basic guidance.",
  "Diagnóstico inicial de problemas relacionados à conectividade, dispositivos e equipamentos.": "Initial diagnosis of connectivity, device and equipment issues.",
  "Apoio na resolução de falhas de rede, internet e funcionamento de computadores.": "Support in resolving network, internet and computer operation issues.",
  "Manutenção preventiva, troubleshooting e encaminhamento de demandas técnicas quando necessário.": "Preventive maintenance, troubleshooting and escalation of technical requests when necessary.",
  "Ver no GitHub": "View on GitHub",
  "Agente de programação executado pelo terminal, capaz de interagir com um LLM e utilizar ferramentas para ler arquivos, modificar código e executar comandos no projeto através de tool calling.": "Terminal-based coding agent that interacts with an LLM and uses tools to read files, modify code and execute project commands through tool calling.",
  "Integração com modelos compatíveis com a API da OpenAI via OpenRouter.": "Integration with OpenAI API-compatible models through OpenRouter.",
  "Leitura e edição de arquivos limitadas ao diretório do projeto.": "File reading and editing restricted to the project directory.",
  "Execução iterativa de comandos Bash por meio de tool calling.": "Iterative Bash command execution through tool calling.",
  "API de perguntas e respostas sobre documentos com RAG. Processa arquivos PDF e TXT, gera embeddings, realiza busca vetorial por similaridade e retorna as fontes utilizadas pelo LLM.": "Document question-answering API using RAG. It processes PDF and TXT files, generates embeddings, performs vector similarity search and returns the sources used by the LLM.",
  "Processamento de documentos PDF e TXT com divisão em chunks.": "PDF and TXT processing with content chunking.",
  "Geração de embeddings e recuperação de contexto por busca vetorial.": "Embedding generation and context retrieval through vector search.",
  "Respostas acompanhadas das fontes utilizadas pelo modelo.": "Responses include the sources used by the model.",
  "PROJETO EXTENSIONISTA": "EXTENSION PROJECT",
  "Sistema Inteligente de Presença Facial": "Intelligent Facial Attendance System",
  "Projeto extensionista": "University Extension Project",
  "Sistema web para controle automático de presença em sala de aula utilizando reconhecimento facial. Inclui cadastro de alunos, captura de rosto, reconhecimento em tempo real, dashboard, relatórios e exportação de dados.": "Web system for automated classroom attendance using facial recognition. It includes student registration, face capture, real-time recognition, a dashboard, reports and data export.",
  "API REST para gerenciamento de seleções e jogadores da Copa do Mundo de 2026, com modelagem de dados, endpoints CRUD, persistência, testes de API e execução em ambiente conteinerizado.": "REST API for managing 2026 World Cup national teams and players, with data modeling, CRUD endpoints, persistence, API testing and containerized execution.",
  "Aplicação back-end para organização de uma biblioteca pessoal de jogos, permitindo cadastrar nome, desenvolvedora, gênero e status, além de consultar e filtrar registros através de endpoints da API.": "Back-end application for organizing a personal game library, allowing users to register names, developers, genres and statuses, and query or filter records through API endpoints.",
  "Ver outros projetos": "View other projects",
  "Outros projetos": "Other projects",
  "Acesse meu perfil no GitHub para conhecer outros projetos, estudos práticos e experimentos desenvolvidos durante minha formação em software e inteligência artificial.": "Visit my GitHub profile to explore other projects, practical studies and experiments developed throughout my software and artificial intelligence training.",
  "IA": "AI",
  "Linguagens": "Languages",
  "IA, LLMs e RAG": "AI, LLMs and RAG",
  "Backend e APIs": "Backend and APIs",
  "Dados e bancos de dados": "Data and databases",
  "Dados relacionais": "Relational data",
  "Ferramentas de IA": "AI tools",
  "Modelos locais": "Local models",
  "Desenvolvimento e qualidade": "Development and quality",
  "Automação, IoT e visão computacional": "Automation, IoT and computer vision",
  "Sensores DHT": "DHT sensors",
  "Servomotor": "Servo motor",
  "Suporte, sistemas e segurança": "Support, systems and security",
  "Manutenção de hardware": "Hardware maintenance",
  "Diagnóstico de computadores": "Computer diagnostics",
  "Redes": "Networking",
  "Fundamentos de cibersegurança": "Cybersecurity fundamentals",
  "Idiomas": "Languages",
  "Português - Nativo": "Portuguese - Native",
  "Francês - Avançado": "French - Advanced",
  "Inglês - Intermediário": "English - Intermediate",
  "Espanhol - Básico": "Spanish - Basic",
  "Vamos construir algo juntos?": "Let's build something together?",
  "Aberto a oportunidades júnior, estágio e projetos práticos em desenvolvimento web, dados, automação e suporte técnico.": "Open to junior roles, internships and hands-on projects in web development, data, automation and technical support.",
  "Principal": "Primary",
  "Alternativo": "Alternative",
  "Projetado e desenvolvido por Enzo Cristopher Oliveira Bittencourt.": "Designed and developed by Enzo Cristopher Oliveira Bittencourt.",
  "Projetado e desenvolvido por": "Designed and developed by",
  "Imagem do projeto": "Project image",
  "Fechar imagem ampliada": "Close enlarged image",
  "Ampliar imagem": "Zoom image",
  "Mudar o idioma do site para inglês": "Switch site language to English",
  "Mudar para inglês": "Switch to English",
  "Navegação principal": "Main navigation",
  "Voltar ao início": "Back to top",
  "Abrir menu": "Open menu",
  "Fechar menu": "Close menu",
  "Links profissionais": "Professional links",
  "Ações principais": "Main actions",
  "Resumo rápido": "Quick summary",
  "E-mails de contato": "Contact emails",
  "Retrato de Enzo Cristopher Oliveira Bittencourt": "Portrait of Enzo Cristopher Oliveira Bittencourt",
  "Tela do Sistema Inteligente de Presença Facial.": "Screenshot of the Intelligent Facial Attendance System."
});

let currentLanguage = "pt";
let translationTextNodes = [];
let translationAttributes = [];
let translationRequestId = 0;
const automaticTranslationCache = new Map();
const visitorStorageKeys = Object.freeze({
  name: "portfolio-visitor-name",
  introSeen: "portfolio-visitor-intro-seen",
});
let visitorName = "";
let visitorIntroSeen = false;
let visitorIsReturning = false;
let visitorIntroEditMode = false;
let visitorPreviousFocus = null;
let visitorIntroTimer = 0;

const $ = (selector) => document.querySelector(selector);

function setText(selector, text) {
  const element = $(selector);
  if (element) element.textContent = text;
}

function translateValue(value) {
  if (englishTranslations[value]) return englishTranslations[value];

  if (value.startsWith("Ampliar imagem do projeto ")) {
    return `Zoom image for ${translateValue(value.replace("Ampliar imagem do projeto ", ""))}`;
  }

  if (value.startsWith("Imagem do projeto ")) {
    return `Image for ${translateValue(value.replace("Imagem do projeto ", ""))}`;
  }

  return value;
}

function localized(portuguese, english) {
  return currentLanguage === "en" ? english : portuguese;
}

function preserveTextSpacing(original, translated) {
  const leading = original.match(/^\s*/)?.[0] || "";
  const trailing = original.match(/\s*$/)?.[0] || "";
  return `${leading}${translated}${trailing}`;
}

function loadVisitorState() {
  try {
    visitorName = sanitizeVisitorName(window.localStorage.getItem(visitorStorageKeys.name) || "");
    visitorIntroSeen = window.localStorage.getItem(visitorStorageKeys.introSeen) === "true";
  } catch (_) {
    visitorName = "";
    visitorIntroSeen = false;
  }

  visitorIsReturning = Boolean(visitorName && visitorIntroSeen);
}

function sanitizeVisitorName(value) {
  return [...String(value || "").trim().replace(/\s+/g, " ")].slice(0, 30).join("");
}

function saveVisitorState() {
  try {
    window.localStorage.setItem(visitorStorageKeys.introSeen, "true");
    if (visitorName) {
      window.localStorage.setItem(visitorStorageKeys.name, visitorName);
    } else {
      window.localStorage.removeItem(visitorStorageKeys.name);
    }
  } catch (_) {
    // A personalização continua funcionando durante a visita atual.
  }
}

function setPersonalizedText(element, text, highlightedVisitorName = "") {
  if (!element) return;
  const visitorNameIndex = highlightedVisitorName ? text.indexOf(highlightedVisitorName) : -1;
  if (visitorNameIndex >= 0) {
    const visitorNameHighlight = document.createElement("span");
    visitorNameHighlight.className = "visitor-name-accent";
    visitorNameHighlight.textContent = highlightedVisitorName;
    element.replaceChildren(
      document.createTextNode(text.slice(0, visitorNameIndex)),
      visitorNameHighlight,
      document.createTextNode(text.slice(visitorNameIndex + highlightedVisitorName.length))
    );
  } else {
    element.textContent = text;
  }
}

function setHeroPresentation(welcomeText, isEnglish, highlightedVisitorName = "") {
  const heroGreeting = $("#heroGreeting");
  if (!heroGreeting) return;

  const welcome = document.createElement("span");
  welcome.className = "hero-welcome";
  setPersonalizedText(welcome, welcomeText, highlightedVisitorName);

  const identity = document.createElement("span");
  identity.className = "hero-identity";

  const identityFirstLine = document.createElement("span");
  identityFirstLine.className = "hero-identity-line";

  const identitySecondLine = document.createElement("span");
  identitySecondLine.className = "hero-identity-line";

  const fullName = document.createElement("strong");
  fullName.className = "hero-full-name";
  ["Enzo", "Cristopher", "Oliveira", "Bittencourt"].forEach((namePart, index) => {
    if (index) fullName.append(document.createTextNode(" "));
    const initial = document.createElement("span");
    initial.className = "hero-name-initial";
    initial.textContent = namePart[0];
    fullName.append(initial, document.createTextNode(namePart.slice(1)));
  });

  const alias = document.createElement("span");
  alias.className = "hero-alias";
  alias.textContent = "ECOB";

  identityFirstLine.append(
    document.createTextNode(isEnglish ? "My name is " : "Meu nome é "),
    fullName,
    document.createTextNode(",")
  );

  identitySecondLine.append(
    document.createTextNode(isEnglish ? "but you can also call me " : "mas você também pode me chamar de "),
    alias,
    document.createTextNode(".")
  );

  identity.append(identityFirstLine, identitySecondLine);

  heroGreeting.replaceChildren(welcome, identity);
}

function updatePersonalizedCopy() {
  const aboutIntro = $("#aboutPersonalIntro");
  const experienceIntro = $("#experiencePersonalIntro");
  const projectsIntro = $("#projectsPersonalIntro");
  const skillsIntro = $("#skillsPersonalIntro");
  const contactTitle = $("#contact-title");
  const farewell = $("#visitorFarewell");
  const settings = $("#visitorSettings");
  const isEnglish = currentLanguage === "en";

  if (visitorName) {
    const welcomeText = isEnglish
      ? visitorIsReturning
        ? `Welcome back, ${visitorName}.`
        : `Hello, welcome, ${visitorName}.`
      : visitorIsReturning
        ? `Que bom ter você de volta, ${visitorName}.`
        : `Olá, seja bem-vindo, ${visitorName}.`;

    setHeroPresentation(welcomeText, isEnglish, visitorName);
    setPersonalizedText(
      aboutIntro,
      isEnglish
        ? `So, ${visitorName}, to start, I would like to tell you a little about my path in Software Engineering and artificial intelligence.`
        : `Então, ${visitorName}, para começar, quero contar um pouco sobre minha trajetória em Engenharia de Software e inteligência artificial.`,
      visitorName
    );
    setPersonalizedText(
      experienceIntro,
      isEnglish
        ? `${visitorName}, throughout my journey, I have built experience across technology, engineering and artificial intelligence.`
        : `${visitorName}, ao longo da minha trajetória, reuni experiências em tecnologia, engenharia e inteligência artificial.`,
      visitorName
    );
    setPersonalizedText(
      projectsIntro,
      isEnglish
        ? `Here are some projects I built throughout my studies. If you would like, ${visitorName}, you can open the GitHub links to explore the details.`
        : `Aqui estão alguns projetos que construí durante minha formação. Se quiser, ${visitorName}, você pode acessar os links do GitHub para conhecer os detalhes.`,
      visitorName
    );
    setPersonalizedText(
      skillsIntro,
      isEnglish
        ? `${visitorName}, these are the technical skills and languages I have been developing.`
        : `${visitorName}, estas são as habilidades técnicas e os idiomas que venho desenvolvendo.`,
      visitorName
    );
    setPersonalizedText(
      contactTitle,
      isEnglish ? `Shall we build something together, ${visitorName}?` : `Vamos construir algo juntos, ${visitorName}?`,
      visitorName
    );
    setPersonalizedText(
      farewell,
      isEnglish ? `Thanks for visiting, ${visitorName}.` : `Obrigado pela visita, ${visitorName}.`,
      visitorName
    );
    settings.textContent = isEnglish ? "Change name" : "Alterar nome";
    return;
  }

  setHeroPresentation(isEnglish ? "Hello." : "Olá.", isEnglish);
  setPersonalizedText(
    aboutIntro,
    isEnglish
      ? "To start, I would like to tell you a little about my path in Software Engineering and artificial intelligence."
      : "Para começar, quero contar um pouco sobre minha trajetória em Engenharia de Software e inteligência artificial."
  );
  setPersonalizedText(
    experienceIntro,
    isEnglish
      ? "Throughout my journey, I have built experience across technology, engineering and artificial intelligence."
      : "Ao longo da minha trajetória, reuni experiências em tecnologia, engenharia e inteligência artificial."
  );
  setPersonalizedText(
    projectsIntro,
    isEnglish
      ? "Here are some projects I built throughout my studies. You can open the GitHub links to explore the details."
      : "Aqui estão alguns projetos que construí durante minha formação. Você pode acessar os links do GitHub para conhecer os detalhes."
  );
  setPersonalizedText(
    skillsIntro,
    isEnglish
      ? "These are the technical skills and languages I have been developing."
      : "Estas são as habilidades técnicas e os idiomas que venho desenvolvendo."
  );
  setPersonalizedText(contactTitle, isEnglish ? "Shall we build something together?" : "Vamos construir algo juntos?");
  setPersonalizedText(farewell, isEnglish ? "Thanks for visiting." : "Obrigado pela visita.");
  settings.textContent = isEnglish ? "Personalize visit" : "Personalizar visita";
}

function updateVisitorIntroLanguage() {
  const intro = $("#visitorIntro");
  if (!intro) return;

  const isEnglish = currentLanguage === "en";
  const text = isEnglish
    ? {
        kicker: "// a quick introduction",
        title: visitorIntroEditMode ? "What should I call you?" : "Before we begin, what should I call you?",
        description: visitorIntroEditMode
          ? "You can update the name used during your visit. It stays only in this browser."
          : "This simply makes your visit a little more personal. Your name stays only in this browser.",
        label: "Enter your name",
        placeholder: "Enter your name",
        submit: visitorIntroEditMode ? "Save" : "Enter",
        hint: "Up to 30 characters.",
        skip: visitorIntroEditMode ? "Close" : "Continue without sharing your name",
        remove: "Remove saved name",
        language: "Choose language",
      }
    : {
        kicker: "// uma pequena apresentação",
        title: visitorIntroEditMode ? "Como posso te chamar?" : "Antes de começar, como posso te chamar?",
        description: visitorIntroEditMode
          ? "Você pode atualizar o nome usado durante a visita. Ele continua somente neste navegador."
          : "É só para deixar sua visita um pouco mais pessoal. Seu nome fica somente neste navegador.",
        label: "Digite seu nome",
        placeholder: "Digite seu nome",
        submit: visitorIntroEditMode ? "Salvar" : "Entrar",
        hint: "No máximo 30 caracteres.",
        skip: visitorIntroEditMode ? "Fechar" : "Continuar sem informar o nome",
        remove: "Remover nome salvo",
        language: "Escolha o idioma",
      };

  setText("#visitorIntroKicker", text.kicker);
  setText("#visitorIntroTitle", text.title);
  setText("#visitorIntroDescription", text.description);
  setText("#visitorNameLabel", text.label);
  setText("#visitorSubmit", text.submit);
  setText("#visitorNameHint", text.hint);
  setText("#visitorSkip", text.skip);
  setText("#visitorRemoveName", text.remove);
  $("#visitorSkip").classList.toggle("is-decline", !visitorIntroEditMode);
  $("#visitorNameInput").placeholder = text.placeholder;
  $("#introLanguageChoice").setAttribute("aria-label", text.language);

  intro.querySelectorAll("[data-intro-language]").forEach((button) => {
    const isActive = button.dataset.introLanguage === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function visitorAnimationDelay(milliseconds) {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 30 : milliseconds;
}

function clearVisitorError() {
  const input = $("#visitorNameInput");
  input.removeAttribute("aria-invalid");
  setText("#visitorNameError", "");
}

function openVisitorIntro(editMode = false) {
  const intro = $("#visitorIntro");
  const input = $("#visitorNameInput");
  const content = $("#visitorIntroContent");
  const welcome = $("#visitorIntroWelcome");

  window.clearTimeout(visitorIntroTimer);
  visitorIntroEditMode = editMode;
  visitorPreviousFocus = document.activeElement;
  input.value = editMode ? visitorName : "";
  clearVisitorError();
  content.hidden = false;
  content.classList.remove("is-confirming");
  welcome.hidden = true;
  $("#visitorRemoveName").hidden = !(editMode && visitorName);
  updateVisitorIntroLanguage();

  intro.hidden = false;
  intro.classList.remove("is-closing");
  document.body.classList.add("visitor-intro-open");
  window.requestAnimationFrame(() => {
    intro.classList.add("is-visible");
    window.setTimeout(() => input.focus(), visitorAnimationDelay(120));
  });
}

function closeVisitorIntro() {
  const intro = $("#visitorIntro");
  if (intro.hidden) return;

  intro.classList.add("is-closing");
  intro.classList.remove("is-visible");
  document.body.classList.remove("visitor-intro-open");

  visitorIntroTimer = window.setTimeout(() => {
    intro.hidden = true;
    intro.classList.remove("is-closing");
    $("#visitorIntroContent").hidden = false;
    $("#visitorIntroContent").classList.remove("is-confirming");
    $("#visitorIntroWelcome").hidden = true;
    if (visitorIntroEditMode && visitorPreviousFocus?.focus) visitorPreviousFocus.focus();
    visitorIntroEditMode = false;
  }, visitorAnimationDelay(280));
}

function continueWithoutVisitorName() {
  if (visitorIntroEditMode) {
    closeVisitorIntro();
    return;
  }

  visitorName = "";
  visitorIntroSeen = true;
  visitorIsReturning = false;
  saveVisitorState();
  updatePersonalizedCopy();
  closeVisitorIntro();
}

function showVisitorWelcome(name) {
  const content = $("#visitorIntroContent");
  const welcome = $("#visitorIntroWelcome");

  visitorName = name;
  visitorIntroSeen = true;
  visitorIsReturning = false;
  saveVisitorState();
  updatePersonalizedCopy();

  content.classList.add("is-confirming");
  setText(
    "#visitorIntroWelcome",
    currentLanguage === "en" ? `Hello, welcome, ${name}.` : `Olá, seja bem-vindo, ${name}.`
  );

  window.setTimeout(() => {
    content.hidden = true;
    welcome.hidden = false;
  }, visitorAnimationDelay(190));

  visitorIntroTimer = window.setTimeout(() => {
    closeVisitorIntro();
  }, visitorAnimationDelay(1000));
}

function submitVisitorName(event) {
  event.preventDefault();
  const input = $("#visitorNameInput");
  const name = sanitizeVisitorName(input.value);
  input.value = name;

  if (!name || !/\p{L}/u.test(name)) {
    input.setAttribute("aria-invalid", "true");
    setText(
      "#visitorNameError",
      currentLanguage === "en" ? "Please enter a valid name." : "Digite um nome válido."
    );
    input.focus();
    return;
  }

  clearVisitorError();
  showVisitorWelcome(name);
}

function removeVisitorName() {
  visitorName = "";
  visitorIntroSeen = true;
  visitorIsReturning = false;
  saveVisitorState();
  updatePersonalizedCopy();
  closeVisitorIntro();
}

function trapVisitorIntroFocus(event) {
  const intro = $("#visitorIntro");
  if (intro.hidden) return;

  if (event.key === "Escape") {
    event.preventDefault();
    continueWithoutVisitorName();
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = [...intro.querySelectorAll("button:not([hidden]), input:not([disabled])")]
    .filter((element) => element.offsetParent !== null);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function setupVisitorExperience() {
  $("#visitorNameForm").addEventListener("submit", submitVisitorName);
  $("#visitorNameInput").addEventListener("input", clearVisitorError);
  $("#visitorSkip").addEventListener("click", continueWithoutVisitorName);
  $("#visitorRemoveName").addEventListener("click", removeVisitorName);
  $("#visitorSettings").addEventListener("click", () => openVisitorIntro(true));
  $("#visitorIntro").addEventListener("keydown", trapVisitorIntroFocus);

  $("#visitorIntro").querySelectorAll("[data-intro-language]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.introLanguage);
      $("#visitorNameInput").focus();
    });
  });

  if (!visitorIntroSeen) {
    window.setTimeout(() => openVisitorIntro(false), visitorAnimationDelay(90));
  }
}

function shouldTranslateAutomatically(value) {
  if (!value || englishTranslations[value] || /^\d[\d\s./–—-]*$/.test(value)) return false;
  if (/^(?:https?:\/\/|mailto:|[\w.+-]+@[\w.-]+\.)/i.test(value)) return false;

  return /[áàâãéêíóôõúç]/i.test(value)
    || /\b(?:a|as|o|os|de|da|das|do|dos|em|para|por|com|sem|uma?|meu|minha|sou|hoje|projeto|projetos|desenvolvimento|experiência|tecnologia|dados)\b/i.test(value);
}

function splitTranslationText(value, maximumBytes = 450) {
  const chunks = [];
  let current = "";

  value.split(/\s+/).forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (new TextEncoder().encode(candidate).length > maximumBytes && current) {
      chunks.push(current);
      current = word;
    } else {
      current = candidate;
    }
  });

  if (current) chunks.push(current);
  return chunks;
}

function decodeTranslatedText(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

async function requestAutomaticTranslation(value) {
  if (automaticTranslationCache.has(value)) return automaticTranslationCache.get(value);

  const translatedChunks = [];
  for (const chunk of splitTranslationText(value)) {
    const url = new URL("https://api.mymemory.translated.net/get");
    url.searchParams.set("q", chunk);
    url.searchParams.set("langpair", "pt-BR|en");

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Translation API: ${response.status}`);

    const result = await response.json();
    const translated = result?.responseData?.translatedText;
    if (!translated) throw new Error("Translation API returned no text");
    translatedChunks.push(decodeTranslatedText(translated));
  }

  const translation = translatedChunks.join(" ");
  automaticTranslationCache.set(value, translation);
  return translation;
}

async function applyAutomaticTranslations(requestId) {
  const toggle = $("#languageToggle");
  const textEntries = translationTextNodes.filter(({ original }) => shouldTranslateAutomatically(original.trim()));
  const attributeEntries = translationAttributes.filter(({ original }) => shouldTranslateAutomatically(original));

  if (!textEntries.length && !attributeEntries.length) return;
  toggle.setAttribute("aria-busy", "true");

  await Promise.allSettled([
    ...textEntries.map(async ({ node, original }) => {
      const translated = await requestAutomaticTranslation(original.trim());
      if (currentLanguage === "en" && requestId === translationRequestId && node.isConnected) {
        node.nodeValue = preserveTextSpacing(original, translated);
      }
    }),
    ...attributeEntries.map(async ({ element, attribute, original }) => {
      const translated = await requestAutomaticTranslation(original);
      if (currentLanguage === "en" && requestId === translationRequestId && element.isConnected) {
        element.setAttribute(attribute, translated);
      }
    }),
  ]);

  if (currentLanguage === "en" && requestId === translationRequestId) {
    toggle.removeAttribute("aria-busy");
  }
}

function applyLanguage(language, persist = true) {
  currentLanguage = language === "en" ? "en" : "pt";
  const requestId = ++translationRequestId;

  translationTextNodes.forEach(({ node, original }) => {
    const originalText = original.trim();
    const value = currentLanguage === "en" ? translateValue(originalText) : originalText;
    node.nodeValue = preserveTextSpacing(original, value);
  });

  translationAttributes.forEach(({ element, attribute, original }) => {
    element.setAttribute(attribute, currentLanguage === "en" ? translateValue(original) : original);
  });

  document.documentElement.lang = currentLanguage === "en" ? "en" : "pt-BR";
  document.title = currentLanguage === "en"
    ? `${portfolio.name} | Software Engineering Student`
    : `${portfolio.name} | ${portfolio.role}`;

  const toggle = $("#languageToggle");
  toggle.querySelector(".language-flag-pt")?.classList.toggle("is-active", currentLanguage === "pt");
  toggle.querySelector(".language-flag-en")?.classList.toggle("is-active", currentLanguage === "en");
  toggle.setAttribute(
    "aria-label",
    currentLanguage === "en" ? "Mudar o idioma do site para português" : "Mudar o idioma do site para inglês"
  );
  toggle.title = currentLanguage === "en" ? "Mudar para português" : "Mudar para inglês";
  toggle.removeAttribute("aria-busy");
  syncMenuState();
  updatePersonalizedCopy();
  updateVisitorIntroLanguage();

  if (currentLanguage === "en") {
    applyAutomaticTranslations(requestId);
  }

  if (persist) {
    try {
      window.localStorage.setItem("portfolio-language", currentLanguage);
    } catch (_) {
      // The language still works when storage is unavailable.
    }
  }
}

function setupLanguageToggle() {
  const toggle = $("#languageToggle");

  translationTextNodes = [...document.querySelectorAll("body *")]
    .filter((element) => !element.matches("script, style, #languageToggle") && !element.closest("#languageToggle, [data-github-repo-count], #visitorIntro, [data-personalized-text]"))
    .flatMap((element) =>
      [...element.childNodes]
        .filter((node) => node.nodeType === 3 && node.nodeValue.trim())
        .map((node) => ({ node, original: node.nodeValue }))
    );

  translationAttributes = [...document.querySelectorAll("[aria-label], [title], img[alt]")]
    .filter((element) => element !== toggle && !element.closest("#visitorIntro, [data-personalized-text]"))
    .flatMap((element) =>
      ["aria-label", "title", "alt"]
        .filter((attribute) => element.hasAttribute(attribute))
        .map((attribute) => ({ element, attribute, original: element.getAttribute(attribute) }))
    );

  toggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "pt" ? "en" : "pt");
  });

  let savedLanguage = navigator.language?.toLowerCase().startsWith("en") ? "en" : "pt";
  try {
    savedLanguage = window.localStorage.getItem("portfolio-language") || savedLanguage;
  } catch (_) {
    // Mantém o idioma sugerido pelo navegador quando o armazenamento não está disponível.
  }

  applyLanguage(savedLanguage, false);
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function createTag(text) {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = text;
  return tag;
}

function renderFacts() {
  const list = $("#factsList");
  list.innerHTML = "";

  portfolio.facts.forEach((fact) => {
    const card = document.createElement("article");
    card.className = "fact-card";
    card.innerHTML = `
      <strong${fact.githubRepoCount ? ' data-github-repo-count aria-live="polite"' : ""}>${fact.value}</strong>
      ${fact.label ? `<h3>${fact.label}</h3>` : ""}
      <span>${fact.text}</span>
    `;
    list.appendChild(card);
  });
}

async function updateGithubRepoCount() {
  const counter = document.querySelector("[data-github-repo-count]");
  if (!counter) return;

  try {
    const response = await fetch("https://api.github.com/users/ecob5", {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error(`GitHub API: ${response.status}`);

    const profile = await response.json();
    if (Number.isInteger(profile.public_repos)) {
      counter.textContent = String(profile.public_repos);
    }
  } catch {
    // Mantém o valor de segurança exibido no HTML quando a API estiver indisponível.
  }
}

function renderProjects() {
  const grid = $("#projectGrid");
  grid.innerHTML = "";

  portfolio.projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = project.featured ? "project-card project-card-featured" : "project-card";

    const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
    const links = project.links
      .map(
        (link) => `
          <a class="project-github" href="${link.href || link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}: ${project.title}">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.6.1.8-.2.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"/></svg>
            ${link.label} <span aria-hidden="true">↗</span>
          </a>`
      )
      .join("");
    const projectImage = project.image
      ? `
        <figure class="project-media">
          <img src="${project.image}" alt="${project.imageAlt || `Imagem do projeto ${project.title}`}" loading="lazy">
          <button class="project-zoom" type="button" data-project-index="${index}" aria-label="Ampliar imagem do projeto ${project.title}" title="Ampliar imagem"></button>
        </figure>
      `
      : "";
    const highlights = project.highlights?.length
      ? `<ul class="project-highlights">${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : "";

    card.innerHTML = `
      ${projectImage}
      <div class="project-topline">
        <span class="project-type">${project.type}</span>
        <div class="project-actions">
          ${links}
        </div>
      </div>
      <h3>${project.title}</h3>
      ${project.meta ? `<p class="project-meta">${project.meta}</p>` : ""}
      <p>${project.description}</p>
      ${highlights}
      <div class="tag-row">${tags}</div>
    `;

    grid.appendChild(card);
  });
}

function getImageModal() {
  let modal = $("#imageModal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "image-modal";
  modal.id = "imageModal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "imageModalTitle");
  modal.hidden = true;
  modal.innerHTML = `
    <button class="image-modal-backdrop" type="button" aria-label="${localized("Fechar imagem ampliada", "Close enlarged image")}"></button>
    <div class="image-modal-panel">
      <div class="image-modal-header">
        <div>
          <p>${localized("Imagem do projeto", "Project image")}</p>
          <h3 id="imageModalTitle"></h3>
        </div>
        <button class="image-modal-close" type="button" aria-label="${localized("Fechar imagem ampliada", "Close enlarged image")}">X</button>
      </div>
      <img id="imageModalImg" src="" alt="">
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector(".image-modal-backdrop").addEventListener("click", closeImageModal);
  modal.querySelector(".image-modal-close").addEventListener("click", closeImageModal);

  return modal;
}

function openImageModal(project) {
  const modal = getImageModal();
  const image = modal.querySelector("#imageModalImg");

  setText("#imageModalTitle", currentLanguage === "en" ? translateValue(project.title) : project.title);
  image.src = project.image;
  image.alt = currentLanguage === "en"
    ? `Enlarged image for ${translateValue(project.title)}`
    : project.imageAlt || `Imagem ampliada do projeto ${project.title}`;

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".image-modal-close").focus();
}

function closeImageModal() {
  const modal = $("#imageModal");
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function setupProjectZoom() {
  const grid = $("#projectGrid");

  grid.addEventListener("click", (event) => {
    const button = event.target.closest(".project-zoom");
    if (!button) return;

    const project = portfolio.projects[Number(button.dataset.projectIndex)];
    if (project?.image) openImageModal(project);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeImageModal();
  });
}

function renderTags(targetSelector, items) {
  const target = $(targetSelector);
  target.innerHTML = "";
  items.forEach((item) => target.appendChild(createTag(item)));
}

function renderSkillGroups() {
  const grid = $("#skillsGrid");
  grid.innerHTML = "";

  portfolio.skillGroups.forEach((group) => {
    const card = document.createElement("article");
    card.className = "skill-group";

    const tags = document.createElement("div");
    tags.className = "tag-cloud";
    group.items.forEach((item) => tags.appendChild(createTag(item)));

    const title = document.createElement("h3");
    title.textContent = group.title;

    card.appendChild(title);
    card.appendChild(tags);
    grid.appendChild(card);
  });
}

function renderExperiences() {
  const grid = $("#experienceGrid");
  grid.innerHTML = "";

  portfolio.experiences.forEach((experience) => {
    const card = document.createElement("article");
    card.className = "experience-card";

    const bullets = experience.bullets.map((bullet) => `<li>${bullet}</li>`).join("");

    card.innerHTML = `
      <p class="experience-company">${experience.company}</p>
      <h3>${experience.role}</h3>
      <div class="experience-meta">
        ${experience.period ? `<span>${experience.period}</span>` : ""}
        ${experience.location ? `<span>${experience.location}</span>` : ""}
      </div>
      <ul>${bullets}</ul>
    `;

    grid.appendChild(card);
  });
}

function renderContactLinks() {
  const links = $("#contactLinks");
  links.innerHTML = "";

  const contactItems = [
    { label: "Copiar e-mail", action: "copyEmail", primary: true },
    { label: "WhatsApp", href: portfolio.whatsapp },
    { label: "GitHub", href: portfolio.github },
    { label: "LinkedIn", href: portfolio.linkedin },
  ].filter((item) => item.href || item.action);

  contactItems.forEach((item) => {
    if (item.action === "copyEmail") {
      const button = document.createElement("button");
      button.className = item.primary ? "button button-primary" : "button button-secondary";
      button.type = "button";
      button.textContent = item.label;
      button.addEventListener("click", copyPrimaryEmail);
      links.appendChild(button);
      return;
    }

    const link = document.createElement("a");
    link.className = item.primary ? "button button-primary" : "button button-secondary";
    link.href = item.href;
    link.textContent = item.label;

    if (!item.href.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }

    links.appendChild(link);
  });
}

function renderContactEmails() {
  const container = $("#contactEmails");
  if (!container) return;

  const emails = [
    { label: "Principal", value: portfolio.email },
    ...portfolio.alternateEmails.map((email) => ({ label: "Alternativo", value: email })),
  ];

  const listItems = emails
    .map(
      (item) => `
        <span>
          <span class="email-role">${item.label}</span>
          <strong>${item.value}</strong>
        </span>
      `
    )
    .join("");

  container.innerHTML = `
    <span class="contact-emails-label">E-mails</span>
    <div class="contact-email-list">${listItems}</div>
  `;
}

function setContactStatus(message) {
  setText("#contactStatus", message);
}

async function clipboardCopy(text) {
  if (!navigator.clipboard || !window.isSecureContext) return false;

  const writeAttempt = navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);

  const timeout = new Promise((resolve) => {
    window.setTimeout(() => resolve(false), 800);
  });

  return Promise.race([writeAttempt, timeout]);
}

async function copyPrimaryEmail(event) {
  if (event) event.preventDefault();
  const trigger = event?.currentTarget;
  const originalLabel = trigger?.textContent;
  setContactStatus(localized(`Tentando copiar: ${portfolio.email}`, `Trying to copy: ${portfolio.email}`));
  if (trigger) trigger.textContent = localized("Copiando...", "Copying...");

  const copied = await clipboardCopy(portfolio.email);

  if (copied) {
    setContactStatus(localized(`E-mail copiado: ${portfolio.email}`, `Email copied: ${portfolio.email}`));
    if (trigger) {
      trigger.textContent = localized("E-mail copiado", "Email copied");
      window.setTimeout(() => {
        trigger.textContent = originalLabel;
      }, 2200);
    }
    return;
  }

  setContactStatus(
    localized(
      `Não consegui copiar automaticamente. E-mail: ${portfolio.email}`,
      `Automatic copy failed. Email: ${portfolio.email}`
    )
  );
  if (trigger) {
    trigger.textContent = portfolio.email;
    window.setTimeout(() => {
      trigger.textContent = originalLabel;
    }, 3600);
  }
}

function syncMenuState(forceOpen) {
  const toggle = $(".nav-toggle");
  const menu = $("#site-menu");
  if (!toggle || !menu) return;

  const isOpen = typeof forceOpen === "boolean" ? forceOpen : menu.classList.contains("is-open");
  menu.classList.toggle("is-open", isOpen);
  toggle.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute(
    "aria-label",
    localized(isOpen ? "Fechar menu" : "Abrir menu", isOpen ? "Close menu" : "Open menu")
  );
  document.body.classList.toggle("menu-open", isOpen);
}

function setupMenu() {
  const toggle = $(".nav-toggle");
  const menu = $("#site-menu");

  toggle.addEventListener("click", () => {
    syncMenuState(!menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a, #languageToggle").forEach((control) => {
    control.addEventListener("click", () => syncMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      syncMenuState(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720 && menu.classList.contains("is-open")) {
      syncMenuState(false);
    }
  });

  syncMenuState(false);
}

function setupHeroNavigationSwap() {
  const header = $(".site-header");
  const hero = $("#top");
  const menu = $("#site-menu");
  if (!header || !hero || !menu) return;

  let heroIsVisible = null;

  function updateHeaderNavigation() {
    const headerHeight = header.getBoundingClientRect().height;
    const heroRect = hero.getBoundingClientRect();
    const isVisible = heroRect.bottom > headerHeight && heroRect.top < window.innerHeight;

    if (isVisible === heroIsVisible) return;
    heroIsVisible = isVisible;
    header.classList.toggle("hero-in-view", isVisible);
    menu.setAttribute("aria-hidden", String(isVisible));

    if (isVisible && menu.classList.contains("is-open")) {
      syncMenuState(false);
    }
  }

  let scheduled = false;
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      updateHeaderNavigation();
      scheduled = false;
    });
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  updateHeaderNavigation();
}

function setupSectionNavigation() {
  const links = [...document.querySelectorAll('#site-menu a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function setActiveSection(id) {
    links.forEach((link) => {
      const isActive = Boolean(id) && link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);

      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  let scheduled = false;
  let navigationTarget = null;
  let navigationTimer;

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navigationTarget = link.getAttribute("href").slice(1);
      setActiveSection(navigationTarget);
      window.clearTimeout(navigationTimer);
      navigationTimer = window.setTimeout(() => {
        navigationTarget = null;
        updateActiveSection();
      }, 1400);
    });
  });

  function updateActiveSection() {
    if (navigationTarget) {
      setActiveSection(navigationTarget);
      scheduled = false;
      return;
    }

    const marker = window.innerHeight * 0.38;
    let activeSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= marker && rect.bottom > 0) activeSection = section;
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      activeSection = sections.at(-1);
    }

    setActiveSection(activeSection?.id);
    scheduled = false;
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateActiveSection);
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  updateActiveSection();
}

function setupSectionReveal() {
  const sections = [...document.querySelectorAll(".section, .contact")];

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  sections.forEach((section) => section.classList.add("section-reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function renderPortfolio() {
  loadVisitorState();
  document.title = `${portfolio.name} | ${portfolio.role}`;

  setText("#brandName", portfolio.name);
  setText("#availability", portfolio.availability);
  setText("#heroIntro", portfolio.intro);
  setText("#contactText", portfolio.contactText);
  setText("#footerName", portfolio.name);
  setText("#year", new Date().getFullYear());

  renderFacts();
  updateGithubRepoCount();
  renderProjects();
  renderExperiences();
  renderSkillGroups();
  renderContactEmails();
  renderContactLinks();
  setupProjectZoom();
  setupMenu();
  setupHeroNavigationSwap();
  setupSectionNavigation();
  setupSectionReveal();
  setupLanguageToggle();
  setupVisitorExperience();
}

renderPortfolio();
