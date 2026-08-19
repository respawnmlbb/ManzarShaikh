export const LINKS = {
  whatsapp:
    "https://wa.me/917020647636?text=Hi%20Manzar,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20an%20automation%20or%20web%20building%20project.",
  whatsappDisplay: "+91 7020 647636",
  email: "manzarshk@gmail.com",
  linkedin: "https://in.linkedin.com/in/manzarshaikh",
  linkedinDisplay: "/in/manzarshaikh",
  location: "Pune, India · Remote",
};

export type Project = {
  id: string;
  index: string;
  name: string;
  url: string;
  host: string;
  description: string;
  tags: string[];
  locked?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "rlt",
    index: "01",
    name: "Ranked Leagues Tracker",
    url: "https://ranked-leagues-tracker.pages.dev/",
    host: "ranked-leagues-tracker.pages.dev",
    description: "Performance tracker built on live game APIs and Supabase.",
    tags: ["GAME_APIS", "SUPABASE", "AI-DIRECTED"],
  },
  {
    id: "dca",
    index: "02",
    name: "DC Archives",
    url: "https://dcarchives.pages.dev/",
    host: "dcarchives.pages.dev",
    description: "Event schedule tracker for a gaming community.",
    tags: ["HTML", "AI-DIRECTED"],
  },
  {
    id: "r3b",
    index: "03",
    name: "CoC Base Gallery",
    url: "https://r3bases.pages.dev/",
    host: "r3bases.pages.dev",
    description:
      "Community gallery to browse, rate, and download Clash of Clans bases.",
    tags: ["HTML", "AI-DIRECTED"],
  },
  {
    id: "auto",
    index: "04",
    name: "Automation Archive",
    url: "",
    host: "internal / nda-bound",
    description:
      "10+ Make.com workflows, Looker Studio dashboards, ATS pipelines — built for internal teams, not publicly shareable. Ask for a walkthrough.",
    tags: ["MAKE.COM", "LOOKER", "ATS"],
    locked: true,
  },
];

export type Module = {
  id: string;
  name: string;
  status: string;
  version: string;
  skills: { name: string; level: string }[];
};

export const MODULES: Module[] = [
  {
    id: "automation_engine",
    name: "automation_engine",
    status: "10+ workflows live",
    version: "v7.2",
    skills: [
      { name: "Make.com", level: "ADVANCED" },
      { name: "Zapier", level: "PROFICIENT" },
      { name: "REST API integrations", level: "ADVANCED" },
      { name: "Email ops & ATS pipelines", level: "ADVANCED" },
    ],
  },
  {
    id: "ai_directed_dev",
    name: "ai_directed_dev",
    status: "3 apps shipped '26",
    version: "v4.0",
    skills: [
      { name: "Claude", level: "DAILY DRIVER" },
      { name: "ChatGPT", level: "DAILY DRIVER" },
      { name: "Gemini", level: "DAILY DRIVER" },
      { name: "Cursor", level: "VIBE-CODING" },
      { name: "Prompt engineering", level: "ADVANCED" },
    ],
  },
  {
    id: "bi_reporting",
    name: "bi_reporting",
    status: "weekly ops dashboards",
    version: "v3.1",
    skills: [
      { name: "Looker Studio", level: "ADVANCED" },
      { name: "Google Sheets", level: "ADVANCED" },
      { name: "Power BI", level: "FAMILIAR" },
      { name: "Quarterly client reviews", level: "PROFICIENT" },
    ],
  },
  {
    id: "web_infrastructure",
    name: "web_infrastructure",
    status: "5 apps deployed",
    version: "v2.6",
    skills: [
      { name: "HTML / CSS / JS", level: "SHIP-READY" },
      { name: "Cloudflare Pages", level: "DEPLOYED" },
      { name: "AI-directed builds", level: "END-TO-END" },
      { name: "Supabase backends", level: "PROFICIENT" },
    ],
  },
];

export const CREDENTIALS = [
  { name: "Generative AI Mastermind", issuer: "Outskill", year: "2025" },
  { name: "AI Tools Workshop", issuer: "Be10x", year: "2025" },
];

export const METRICS = [
  { value: 7, suffix: "+", label: "YEARS_EXP", note: "ops · email · automation" },
  { value: 10, suffix: "+", label: "WORKFLOWS_BUILT", note: "Make.com production" },
  { value: 300, suffix: "+", label: "HRS_SAVED_WKLY", note: "across client ops" },
  { value: 5, suffix: "", label: "APPS_SHIPPED_26", note: "3 Web Apps + 2 Sites" },
];

export const TICKER_ITEMS = [
  "MAKE.COM",
  "ZAPIER",
  "CLAUDE",
  "CHATGPT",
  "GEMINI",
  "CURSOR",
  "SUPABASE",
  "REST APIS",
  "LOOKER STUDIO",
  "POWER BI",
  "GOOGLE SHEETS",
  "CLOUDFLARE PAGES",
  "PROMPT ENGINEERING",
  "ATS PIPELINES",
];
