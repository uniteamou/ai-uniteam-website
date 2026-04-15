import { Link } from "react-router";
import {
  MessageSquare,
  Zap,
  Code2,
  ArrowRight,
  Check,
  Bot,
  Workflow,
  LayoutDashboard,
  Cpu,
  Database,
  Globe,
  Mail,
} from "lucide-react";

const services = [
  {
    id: "ai-assistants",
    icon: <MessageSquare className="w-7 h-7 text-violet-400" />,
    tag: "Conversational AI",
    title: "AI Assistants",
    tagline: "Intelligent agents that work for your business around the clock.",
    desc: "We design and build AI assistants that handle real conversations, take actions, and connect to your existing tools. Whether it's a customer-facing support bot or an internal copilot for your ops team — we ship systems that actually work.",
    features: [
      "Customer support bots with human handoff",
      "Internal copilots with company knowledge",
      "AI agents with tool-use (search, APIs, DBs)",
      "Multilingual support",
      "Escalation and ticket routing logic",
      "Slack, Teams, and web embed integrations",
    ],
    integrations: ["Intercom", "HubSpot", "Slack", "Notion", "Zendesk", "WhatsApp"],
    accent: "violet",
    gradient: "from-violet-500/15 to-transparent",
    border: "border-violet-500/25",
    subCards: [
      { icon: <Bot className="w-5 h-5 text-violet-400" />, title: "Customer support bots", desc: "Resolve 70%+ of tickets automatically." },
      { icon: <Cpu className="w-5 h-5 text-violet-400" />, title: "Internal copilots", desc: "Search docs, answer policies, draft content." },
      { icon: <Globe className="w-5 h-5 text-violet-400" />, title: "AI agents with tools", desc: "Agents that query, write, and execute actions." },
    ],
  },
  {
    id: "ai-automation",
    icon: <Zap className="w-7 h-7 text-blue-400" />,
    tag: "Workflow Automation",
    title: "AI Automation",
    tagline: "End-to-end pipelines that process work while you sleep.",
    desc: "We replace manual, repetitive work with intelligent automation pipelines. From email classification to CRM updates, we connect your tools and let AI handle the routing, enrichment, and execution.",
    features: [
      "Inbound email processing and routing",
      "CRM automation and lead enrichment",
      "Workflow orchestration with n8n / Python",
      "Scheduled and event-driven pipelines",
      "Error handling and monitoring dashboards",
      "Webhook and API integration",
    ],
    integrations: ["Salesforce", "HubSpot", "Gmail", "Zapier", "Make.com", "Airtable"],
    accent: "blue",
    gradient: "from-blue-500/15 to-transparent",
    border: "border-blue-500/25",
    subCards: [
      { icon: <Mail className="w-5 h-5 text-blue-400" />, title: "Email processing", desc: "Parse, classify, route, and reply automatically." },
      { icon: <Database className="w-5 h-5 text-blue-400" />, title: "CRM automation", desc: "Keep your CRM clean and up-to-date, automatically." },
      { icon: <Workflow className="w-5 h-5 text-blue-400" />, title: "Workflow pipelines", desc: "Multi-step automation with AI decision making." },
    ],
  },
  {
    id: "custom-ai",
    icon: <Code2 className="w-7 h-7 text-emerald-400" />,
    tag: "Custom Development",
    title: "Custom AI Tools",
    tagline: "Purpose-built platforms your team will actually love using.",
    desc: "Off-the-shelf tools don't always fit. We build custom AI-powered internal tools, dashboards, and data platforms that are tailored to your exact workflows — and fast to iterate on.",
    features: [
      "Internal operations dashboards",
      "AI-powered reporting systems",
      "Custom data pipelines and ETL",
      "Admin tools and back-office platforms",
      "Real-time analytics interfaces",
      "API design and backend development",
    ],
    integrations: ["Supabase", "PostgreSQL", "GCP", "AWS", "OpenAI", "Anthropic"],
    accent: "emerald",
    gradient: "from-emerald-500/15 to-transparent",
    border: "border-emerald-500/25",
    subCards: [
      { icon: <LayoutDashboard className="w-5 h-5 text-emerald-400" />, title: "Internal dashboards", desc: "KPIs, ops metrics, and AI insights in one view." },
      { icon: <Code2 className="w-5 h-5 text-emerald-400" />, title: "Internal tools", desc: "Custom apps your team uses every day." },
      { icon: <Database className="w-5 h-5 text-emerald-400" />, title: "Data platforms", desc: "Scalable pipelines and transformation layers." },
    ],
  },
];

export function Services() {
  return (
    <div className="pt-24">
      {/* ── HERO ─────────────────────────────── */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
            <span className="text-violet-300" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
              What we offer
            </span>
          </div>
          <h1
            className="text-white mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1 }}
          >
            Services built for{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              real impact
            </span>
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            We don't sell subscriptions — we build custom AI systems that solve real problems in your business.
          </p>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ─────────────────────────── */}
      {services.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-24 px-6 ${idx % 2 === 1 ? "bg-zinc-900/30" : ""}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left: description */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 mb-5">
                  <span className="text-zinc-400" style={{ fontSize: "0.78rem", fontWeight: 600 }}>{svc.tag}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  {svc.icon}
                  <h2 className="text-white" style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}>
                    {svc.title}
                  </h2>
                </div>
                <p className="text-zinc-300 mb-4" style={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.5 }}>
                  {svc.tagline}
                </p>
                <p className="text-zinc-400 mb-8" style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>
                  {svc.desc}
                </p>

                {/* Features list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-zinc-300" style={{ fontSize: "0.88rem" }}>
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Integrations */}
                <div>
                  <p className="text-zinc-500 mb-3" style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Integrations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {svc.integrations.map((ig) => (
                      <span
                        key={ig}
                        className="px-3 py-1 rounded-lg border border-zinc-700 text-zinc-400 bg-zinc-800/60"
                        style={{ fontSize: "0.8rem", fontWeight: 500 }}
                      >
                        {ig}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: sub-cards */}
              <div className={`flex flex-col gap-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {svc.subCards.map((card) => (
                  <div
                    key={card.title}
                    className={`p-6 rounded-2xl border ${svc.border} bg-gradient-to-b ${svc.gradient}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-white mb-1" style={{ fontWeight: 700, fontSize: "0.95rem" }}>{card.title}</h3>
                        <p className="text-zinc-400" style={{ fontSize: "0.88rem", lineHeight: 1.6 }}>{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* CTA card */}
                <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex items-center justify-between">
                  <div>
                    <p className="text-white mb-0.5" style={{ fontWeight: 700, fontSize: "0.95rem" }}>Interested in {svc.title}?</p>
                    <p className="text-zinc-500" style={{ fontSize: "0.82rem" }}>Let's scope your project</p>
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 transition-all flex-shrink-0"
                    style={{ fontWeight: 700, fontSize: "0.85rem" }}
                  >
                    Talk to us <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── BOTTOM CTA ─────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Not sure where to start?
          </h2>
          <p className="text-zinc-400 mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            We offer a free 30-minute AI audit — we'll review your processes and show you where automation can have the most impact.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 transition-all"
            style={{ fontWeight: 700, fontSize: "0.95rem" }}
          >
            Get free AI audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
