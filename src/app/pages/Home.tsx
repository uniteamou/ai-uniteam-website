import { Link } from "react-router";
import {
  ArrowRight,
  Clock,
  TrendingDown,
  BarChart2,
  Wrench,
  MessageSquare,
  Zap,
  Code2,
  Users,
  FileText,
  Star,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { WorkflowDiagram } from "../components/WorkflowDiagram";

/* ─────────────── VALUE PROPS ─────────────── */
const valueProps = [
  {
    icon: <Clock className="w-5 h-5 text-violet-400" />,
    title: "Save time",
    desc: "Automate repetitive tasks and save 100+ hours/month across your team.",
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-blue-400" />,
    title: "Reduce costs",
    desc: "Replace expensive manual work with intelligent AI systems that run 24/7.",
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-emerald-400" />,
    title: "Scale operations",
    desc: "Handle more customers and more work without growing your headcount.",
  },
  {
    icon: <Wrench className="w-5 h-5 text-amber-400" />,
    title: "Custom solutions",
    desc: "We build exactly what your business needs — no bloated off-the-shelf tools.",
  },
];

/* ─────────────── WHAT WE BUILD ─────────────── */
const whatWeBuild = [
  {
    id: "ai-assistants",
    icon: <MessageSquare className="w-6 h-6 text-violet-400" />,
    title: "AI Assistants",
    items: [
      "Customer support bots",
      "Internal copilots",
      "AI agents with tools",
    ],
    color: "from-violet-500/10 to-violet-500/0",
    border: "border-violet-500/20",
  },
  {
    id: "ai-automation",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "AI Automation",
    items: ["Email processing", "CRM automation", "Workflow pipelines"],
    color: "from-blue-500/10 to-blue-500/0",
    border: "border-blue-500/20",
  },
  {
    id: "custom-ai",
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    title: "Custom AI Tools",
    items: ["Internal dashboards", "Internal tools", "Data platforms"],
    color: "from-emerald-500/10 to-emerald-500/0",
    border: "border-emerald-500/20",
  },
];

/* ─────────────── USE CASES ─────────────── */
const useCases = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Automate customer support",
    desc: "AI handles tier-1 tickets, answers FAQs, and escalates edge cases.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Automate lead processing",
    desc: "Qualify, enrich, and route leads into your CRM automatically.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Automate reporting",
    desc: "Generate weekly reports, pull metrics, and send summaries on autopilot.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Build internal AI tools",
    desc: "Custom copilots and dashboards your ops team actually wants to use.",
  },
];

/* ─────────────── CASE STUDIES ─────────────── */
const caseStudies = [
  {
    id: "report-generator",
    tag: "Automation",
    title: "AI-powered report generator",
    desc: "Automated data processing and report creation, eliminating 40+ manual hours per week.",
    result: "40h/week saved",
  },
  {
    id: "data-platform",
    tag: "Data Platform",
    title: "Scalable analytics system",
    desc: "Built a high-performance data platform for complex multi-source workflows.",
    result: "10× faster processing",
  },
  {
    id: "ops-automation",
    tag: "AI Pipelines",
    title: "Operations automation",
    desc: "Reduced manual operations by 80% using intelligent AI pipeline orchestration.",
    result: "80% less manual work",
  },
];

/* ─────────────── HOW WE WORK ─────────────── */
const steps = [
  {
    n: "01",
    title: "Audit",
    desc: "We analyze your processes and identify the highest-value automation opportunities.",
  },
  {
    n: "02",
    title: "Prototype",
    desc: "We build a working MVP in 1–2 weeks so you can see results fast.",
  },
  {
    n: "03",
    title: "Scale",
    desc: "We deploy, integrate, and refine the system as your business grows.",
  },
];

/* ─────────────── TECH STACK ─────────────── */
const techStack = [
  "OpenAI / Anthropic",
  "AI Agents",
  "Python Automation",
  "APIs & Integrations",
  "Supabase / PostgreSQL",
  "AWS Cloud",
  "LangChain",
  "n8n",
  "Vertex AI",
  "Cloud Run",
  "FastAPI",
];

export function Home() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span
              className="text-violet-300"
              style={{ fontSize: "0.8rem", fontWeight: 500 }}
            >
              AI-first automation agency
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            We build AI assistants and{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              automation systems
            </span>{" "}
            that replace manual work
          </h1>

          {/* Subheadline */}
          <p
            className="text-zinc-400 max-w-2xl mx-auto mb-10"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1.7 }}
          >
            From customer support bots to internal tools — we design and ship AI
            systems that save time and scale your operations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 transition-all duration-200"
              style={{ fontWeight: 700, fontSize: "0.95rem" }}
            >
              Book a call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all duration-200"
              style={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              Get free AI audit
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">
            {[
              "100+ hours saved/month",
              "Trusted by 15+ clients",
              "1–2 week MVP",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 text-zinc-500"
                style={{ fontSize: "0.85rem" }}
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative max-w-3xl w-full mx-auto mt-16">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span
                className="ml-2 text-zinc-500"
                style={{ fontSize: "0.78rem" }}
              >
                Uniteam — automation pipeline
              </span>
            </div>
            <WorkflowDiagram />
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-violet-400 mb-3"
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Why choose us
            </p>
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              Why companies work with us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center mb-4 transition-all">
                  {v.icon}
                </div>
                <h3
                  className="text-white mb-2"
                  style={{ fontWeight: 700, fontSize: "1rem" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-zinc-400"
                  style={{ fontSize: "0.88rem", lineHeight: 1.65 }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ─────────────────────────────── */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-violet-400 mb-3"
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Our services
            </p>
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              What we build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeBuild.map((item) => (
              <div
                key={item.title}
                className={`p-7 rounded-2xl border ${item.border} bg-gradient-to-b ${item.color} relative overflow-hidden`}
              >
                <div className="mb-5">{item.icon}</div>
                <h3
                  className="text-white mb-4"
                  style={{ fontWeight: 700, fontSize: "1.2rem" }}
                >
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {item.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-zinc-400"
                      style={{ fontSize: "0.9rem" }}
                    >
                      <div className="w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services#${item.id}`}
                  className="inline-flex items-center gap-1 mt-6 text-zinc-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.85rem", fontWeight: 600 }}
                >
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-violet-400 mb-3"
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Applications
            </p>
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              Use cases
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="flex items-start gap-5 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-800 group-hover:bg-violet-500/20 group-hover:text-violet-400 text-zinc-400 flex items-center justify-center flex-shrink-0 transition-all">
                  {u.icon}
                </div>
                <div>
                  <h3
                    className="text-white mb-1.5"
                    style={{ fontWeight: 700, fontSize: "1rem" }}
                  >
                    {u.title}
                  </h3>
                  <p
                    className="text-zinc-400"
                    style={{ fontSize: "0.88rem", lineHeight: 1.6 }}
                  >
                    {u.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────── */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p
                className="text-violet-400 mb-3"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Work
              </p>
              <h2
                className="text-white"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                }}
              >
                Selected projects
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              style={{ fontWeight: 600, fontSize: "0.9rem" }}
            >
              View all cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <Link
                key={c.title}
                to={`/case-studies#${c.id}`}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 group flex flex-col"
              >
                <div className="inline-flex">
                  <span
                    className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 mb-5"
                    style={{ fontSize: "0.75rem", fontWeight: 600 }}
                  >
                    {c.tag}
                  </span>
                </div>
                <h3
                  className="text-white mb-3"
                  style={{ fontWeight: 700, fontSize: "1.05rem" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-zinc-400 flex-1"
                  style={{ fontSize: "0.88rem", lineHeight: 1.65 }}
                >
                  {c.desc}
                </p>
                <div className="mt-5 pt-5 border-t border-zinc-800 flex items-center justify-between">
                  <span
                    className="text-emerald-400"
                    style={{ fontSize: "0.85rem", fontWeight: 700 }}
                  >
                    {c.result}
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-violet-400 mb-3"
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Process
            </p>
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="p-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 relative"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5 text-white"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #7c3aed, #4f46e5)"
                        : i === 1
                          ? "linear-gradient(135deg, #4f46e5, #2563eb)"
                          : "linear-gradient(135deg, #2563eb, #059669)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {step.n}
                </div>
                <h3
                  className="text-white mb-3"
                  style={{ fontWeight: 700, fontSize: "1.15rem" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-zinc-400"
                  style={{ fontSize: "0.88rem", lineHeight: 1.65 }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ─────────────────────────────── */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-violet-400 mb-3"
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Technology
            </p>
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              Tech stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600 hover:text-white hover:bg-zinc-800 transition-all duration-200"
                style={{ fontSize: "0.9rem", fontWeight: 500 }}
              >
                {tech}
              </div>
            ))}
          </div>
          <p
            className="text-center text-zinc-600 mt-6"
            style={{ fontSize: "0.82rem" }}
          >
            We also have deep experience with complex data systems and analytics
            platforms.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-violet-400 mb-3"
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Client feedback
          </p>
          <h2
            className="text-white mb-12"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            What clients say
          </h2>

          <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-900/40">
            <div className="flex justify-center gap-1 mb-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                  />
                ))}
            </div>
            <blockquote
              className="text-zinc-200 mb-8"
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              "Great developer and communicator, two things rarely found
              together in the same person. He has been transparent in the
              development process from start to finish and always overdelivers.
              Highly recommend."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://www.upwork.com/agencies/1794058697432903680/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white"
                  style={{ fontWeight: 700, fontSize: "0.9rem" }}
                >
                  CM
                </div>
                <div className="text-left">
                  <p
                    className="text-white"
                    style={{ fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    Clayton M.
                  </p>
                  <p className="text-zinc-500" style={{ fontSize: "0.8rem" }}>
                    Founder, via Upwork ⭐ 5.0
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-12 text-center"
            style={{
              background:
                "linear-gradient(135deg, #1e1033 0%, #0f172a 50%, #0d1117 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(124,58,237,0.25) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <h2
                className="text-white mb-4"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                }}
              >
                Let's automate your business
              </h2>
              <p
                className="text-zinc-400 mb-10 max-w-xl mx-auto"
                style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
              >
                We'll find automation opportunities in your company and ship
                real systems in weeks — not months.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 transition-all"
                  style={{ fontWeight: 700, fontSize: "0.95rem" }}
                >
                  Book a call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-600 text-zinc-300 hover:text-white hover:border-zinc-400 transition-all"
                  style={{ fontWeight: 600, fontSize: "0.95rem" }}
                >
                  Get free audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
