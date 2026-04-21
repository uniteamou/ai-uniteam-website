export interface ProjectGalleryItem {
  src: string;
  alt: string;
  placeholder?: boolean;
}

export interface ProjectSection {
  heading: string;
  content: string;
  highlights: string[];
}

export interface Project {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  industry: string;
  duration: string;
  url?: string;
  mobileGif?: ProjectGalleryItem;
  gallery?: ProjectGalleryItem[];
  sections: ProjectSection[];
  metrics: { label: string; value: string }[];
  // used on homepage preview cards
  preview: {
    desc: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: "proxi",
    tag: "AI Agents",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    title: "Proxi — No-Code AI Agent Platform",
    subtitle:
      "A platform where non-technical users create AI agents in seconds and connect them to email, calendars, and internal tools — no code required",
    industry: "SaaS / Automation",
    duration: "12 weeks",
    url: "https://aiproxi.io/",
    gallery: [
      { src: "/agent-creation.gif", alt: "Agent chat interface" },
      { src: "/chatting.gif", alt: "Agent builder interface" },
    ],
    sections: [
      {
        heading: "Problem",
        content:
          "Existing AI automation solutions split into two extremes: simple single-purpose agents (email or calendar assistants) that can't handle complex workflows, or powerful tools like n8n and Zapier that require technical knowledge to configure. Non-technical users were left with no viable option to automate their daily work with AI.",
        highlights: [
          "Simple agents too limited for real workflows",
          "Powerful tools require developer skills to set up",
          "No solution combining ease of use with real automation power",
          "Users spending hours on repetitive tasks with no way out",
        ],
      },
      {
        heading: "Solution",
        content:
          "We built Proxi — a platform where users describe what they want in plain language, and a working AI agent is ready in seconds. Agents connect to real tools: email, calendars, Notion, and internal systems. They handle multi-step tasks with memory and context, react to incoming events, and ask clarifying questions when needed — just like a human assistant would. Under the hood, we connected OpenAI and Anthropic as LLM providers and built the full agent execution layer: tools, memory, and task orchestration.",
        highlights: [
          "Agents created from plain-language instructions — no configuration",
          "Connects to email, calendar, Notion, and internal systems",
          "Multi-step task handling with context and memory",
          "Natural chat interface — talk to your agent instead of configuring pipelines",
          "Human-in-the-loop: agent asks for clarification when unsure",
          "Powered by OpenAI and Anthropic APIs",
        ],
      },
      {
        heading: "Result",
        content:
          "We delivered a flexible AI agent platform that lets non-technical users automate complex workflows without developer help. Setup time dropped from days of configuration to seconds of conversation. The platform handles everything from email triage to multi-step document workflows.",
        highlights: [
          "Agent setup: days of config → seconds of conversation",
          "Non-technical users can automate complex multi-step workflows",
          "Full stack built end-to-end: frontend, backend, LLM integrations, agent logic",
          "Deployed at aiproxi.io",
        ],
      },
    ],
    metrics: [
      { label: "Agent setup time", value: "< 30 sec" },
      { label: "LLM providers", value: "3" },
      { label: "Code required", value: "0" },
    ],
    preview: {
      desc: "No-code AI agent platform where non-technical users create agents that automate email, calendar, and document workflows in seconds.",
      result: "Zero code, full automation",
    },
  },
  {
    id: "surplusmap",
    tag: "AI Analytics",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "SurplusMap — EV Infrastructure Analytics",
    subtitle:
      "AI-powered analysis of EV charging station data with an intelligent assistant that answers infrastructure questions in plain language",
    industry: "Energy / Smart Cities",
    duration: "10 weeks",
    url: "https://www.surplusmap.com/",
    gallery: [
      { src: "/ChargingStations.gif", alt: "EV charging station analytics" },
      { src: "/ServicePoints.gif", alt: "Points of interest layer" },
      { src: "/surplusmap-chat.png", alt: "EV Infrastructure AI Assistant" },
    ],
    sections: [
      {
        heading: "Problem",
        content:
          "EV infrastructure teams had no fast way to understand how their charging network was actually performing. Utilization data, station locations, and road/POI context all lived in separate systems. Getting answers required pulling raw data, writing queries, and building charts manually — a process that took hours and required a data analyst for every question.",
        highlights: [
          "No unified view of station utilization and coverage",
          "Every analysis required manual data extraction and charting",
          "No way to ask ad-hoc questions without writing queries",
          "Road and POI context disconnected from station performance data",
        ],
      },
      {
        heading: "Solution",
        content:
          "We built SurplusMap — a platform that continuously analyzes EV charging station data and surfaces insights as interactive charts and tables. At its core is an AI assistant (powered by Google Gemini) that lets operators ask questions in plain language: utilization by hour or week, nearby service points, road coverage, parking availability. The assistant has direct tool access to station data, Overture Maps, and web search — and returns answers with visuals, not just text.",
        highlights: [
          "AI analysis of charging station utilization — hourly and weekly breakdowns",
          "Data visualized as charts and tables, updated automatically",
          "AI chat assistant with tool access: search stations, get utilization, find roads and POIs",
          "Overture Maps integration — buildings, roads, service points, parking",
          "Web search tool for real-time context on infrastructure trends",
        ],
      },
      {
        heading: "Result",
        content:
          'Analysts went from hours of manual query work to instant answers via the AI assistant. The team can now ask questions like "which stations are underutilized on weekdays?" or "what\'s near this cluster?" and get visual answers in seconds.',
        highlights: [
          "Ad-hoc analysis time: hours → seconds",
          "No data analyst needed for routine infrastructure questions",
          "Full utilization and coverage picture in a single platform",
          "AI assistant handles queries across stations, maps, and web simultaneously",
        ],
      },
    ],
    metrics: [
      { label: "Analysis time", value: "hrs → sec" },
      { label: "Data sources unified", value: "4+" },
      { label: "Manual queries", value: "0" },
    ],
    preview: {
      desc: "AI analysis of EV charging station data with an intelligent assistant that answers infrastructure questions in plain language.",
      result: "Hours → seconds analysis",
    },
  },
  {
    id: "arborist",
    tag: "Automation",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Arborist — Tree Inspection Automation",
    subtitle:
      "Automating data collection, report generation, and AutoCAD drawing exports for urban forestry teams",
    industry: "Government / Urban Planning",
    duration: "8 weeks",
    mobileGif: {
      src: "/create_tree.gif",
      alt: "Creating a tree record on mobile",
    },
    gallery: [
      { src: "/import_siteplan.gif", alt: "Importing a site plan" },
      { src: "/add_trees_table.gif", alt: "Managing trees in table view" },
    ],
    sections: [
      {
        heading: "Problem",
        content:
          "Arborists were collecting tree inspection data manually on paper, then re-entering it into spreadsheets to produce reports and AutoCAD drawings. Each inspection cycle ended with days of tedious data entry, formatting, and CAD work — all done by hand, all prone to errors.",
        highlights: [
          "Inspection data collected on paper and re-entered manually",
          "Report generation took 2–3 days per cycle",
          "AutoCAD drawings produced manually from spreadsheet data",
          "High error rate due to duplicate data entry",
        ],
      },
      {
        heading: "Solution",
        content:
          "We built three automation pipelines into Arborist. Field workers log inspection data directly on mobile — no paper, no re-entry. The platform then automatically generates formatted PDF inspection reports on a schedule. On top of that, we automated the export of full AutoCAD (.dwg) files with all tree drawings and annotations generated from the collected data.",
        highlights: [
          "Mobile data collection — GPS-tagged, no paper forms",
          "Automated scheduled PDF report generation",
          "AutoCAD (.dwg) file export generated automatically from inspection data",
          "Single source of truth — data entered once, used everywhere",
        ],
      },
      {
        heading: "Result",
        content:
          "Report generation dropped from 3 days to under 10 minutes. AutoCAD drawings that previously required a dedicated CAD operator are now produced automatically. The team eliminated duplicate data entry entirely.",
        highlights: [
          "Report generation: 3 days → 10 minutes",
          "AutoCAD exports fully automated — no CAD operator needed",
          "Zero duplicate data entry",
          "70% reduction in admin time for field teams",
        ],
      },
    ],
    metrics: [
      { label: "Report time", value: "3d → 10m" },
      { label: "Admin time saved", value: "70%" },
      { label: "Manual CAD work", value: "0" },
    ],
    preview: {
      desc: "Automated tree inspection data collection, PDF report generation, and AutoCAD drawing exports for urban forestry teams.",
      result: "3 days → 10 min reports",
    },
  },
];
