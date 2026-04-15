import { Link } from "react-router";
import { ArrowRight, Clock, TrendingUp, Cpu, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "report-generator",
    tag: "Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    title: "AI-Powered Report Generator",
    subtitle: "Eliminating 40+ hours of manual data work per week",
    client: "Operations team at a mid-size SaaS company",
    industry: "SaaS / Analytics",
    duration: "3 weeks",
    sections: [
      {
        heading: "Problem",
        icon: <Clock className="w-5 h-5 text-zinc-400" />,
        content:
          "The operations team spent 40+ hours every week manually pulling data from multiple sources, formatting reports, and sending them to stakeholders. The process involved 6 different tools, was error-prone, and left team members doing work that added zero strategic value.",
        highlights: [
          "40+ hours/week of manual reporting work",
          "Data spread across 6 disconnected tools",
          "Reports often delivered late or with errors",
        ],
      },
      {
        heading: "Solution",
        icon: <Cpu className="w-5 h-5 text-blue-400" />,
        content:
          "We built an automated reporting pipeline that connects all data sources, applies AI to interpret and summarize trends, and generates formatted reports on a schedule. The system handles edge cases, flags anomalies, and delivers reports directly to Slack and email.",
        highlights: [
          "Unified data pipeline from 6 sources",
          "AI-powered trend analysis and summaries",
          "Scheduled delivery to Slack + email",
          "Anomaly detection and alerts",
        ],
      },
      {
        heading: "Result",
        icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
        content:
          "The team went from 40 hours of weekly manual work to under 2 hours of oversight. Report quality improved significantly, delivery became consistent, and the team redirected their time to higher-value analysis.",
        highlights: [
          "40h/week → 2h/week of manual work",
          "100% on-time report delivery",
          "Zero data formatting errors",
        ],
      },
    ],
    metrics: [
      { label: "Hours saved/week", value: "38h" },
      { label: "Error rate", value: "0%" },
      { label: "Time to ship", value: "3 weeks" },
    ],
  },
  {
    id: "data-platform",
    tag: "Data Platform",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "Scalable Data Platform & Analytics System",
    subtitle: "Processing millions of records with a maintainable, fast architecture",
    client: "Engineering team at a data-intensive startup",
    industry: "Data / Infrastructure",
    duration: "6 weeks",
    sections: [
      {
        heading: "Problem",
        icon: <Clock className="w-5 h-5 text-zinc-400" />,
        content:
          "The company needed to process and query millions of records in near real-time, but their existing architecture was brittle, slow, and required constant manual maintenance. Queries were timing out, and the engineering team was spending most of their time firefighting instead of building.",
        highlights: [
          "Queries timing out at scale",
          "Brittle data pipelines failing weekly",
          "No observability or monitoring",
        ],
      },
      {
        heading: "Solution",
        icon: <Cpu className="w-5 h-5 text-blue-400" />,
        content:
          "We redesigned the data architecture from the ground up — implementing a robust ETL pipeline, optimizing the database schema, adding proper indexing and caching layers, and deploying a monitoring stack. We also integrated AI-driven anomaly detection to catch data quality issues before they reach users.",
        highlights: [
          "Full ETL pipeline redesign",
          "Database schema optimization + indexing",
          "Redis caching layer for hot queries",
          "Monitoring with alerting (Grafana + PagerDuty)",
        ],
      },
      {
        heading: "Result",
        icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
        content:
          "Query times dropped by 10×. The pipeline now handles 10M+ records daily with zero manual intervention. The team shipped 3 new features in the time they previously spent maintaining the old system.",
        highlights: [
          "10× faster query performance",
          "10M+ records processed daily",
          "Zero downtime in 4 months post-launch",
        ],
      },
    ],
    metrics: [
      { label: "Query speed improvement", value: "10×" },
      { label: "Records/day", value: "10M+" },
      { label: "Downtime since launch", value: "0" },
    ],
  },
  {
    id: "ops-automation",
    tag: "AI Pipelines",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Operations Automation System",
    subtitle: "Reducing manual operations by 80% with AI-driven workflow pipelines",
    client: "Operations director at a growing logistics company",
    industry: "Logistics / Operations",
    duration: "4 weeks",
    sections: [
      {
        heading: "Problem",
        icon: <Clock className="w-5 h-5 text-zinc-400" />,
        content:
          "The ops team was manually processing hundreds of inbound requests daily — classifying them, routing them to the right team, updating their CRM, and sending confirmation emails. This took 5+ people and was still creating backlogs and missed SLAs.",
        highlights: [
          "500+ manual requests processed daily",
          "5 FTE dedicated to routing and data entry",
          "SLA breaches and customer complaints",
        ],
      },
      {
        heading: "Solution",
        icon: <Cpu className="w-5 h-5 text-blue-400" />,
        content:
          "We built an end-to-end AI automation pipeline: inbound requests are automatically parsed, classified by urgency and type, routed to the correct team, logged in the CRM, and confirmed via email — all without human input. Complex or ambiguous cases are flagged for human review.",
        highlights: [
          "AI classification of request type + urgency",
          "Automatic CRM logging and status updates",
          "Templated email confirmations per category",
          "Human-in-the-loop for edge cases",
        ],
      },
      {
        heading: "Result",
        icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
        content:
          "80% of requests are now handled entirely by automation. The team went from 5 people doing manual ops to 1 person overseeing the system. SLA compliance went from 72% to 99%.",
        highlights: [
          "80% of requests fully automated",
          "5 FTE → 1 person oversight",
          "SLA compliance: 72% → 99%",
        ],
      },
    ],
    metrics: [
      { label: "Requests automated", value: "80%" },
      { label: "SLA compliance", value: "99%" },
      { label: "Team size reduction", value: "5→1" },
    ],
  },
];

export function CaseStudies() {
  return (
    <div className="pt-24">
      {/* ── HERO ─────────────────────────── */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(124,58,237,0.1) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
            <span className="text-violet-300" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
              Proven results
            </span>
          </div>
          <h1
            className="text-white mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1 }}
          >
            Selected{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              projects
            </span>
          </h1>
          <p className="text-zinc-400" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            Real problems. Real solutions. Real results.
          </p>
        </div>
      </section>

      {/* ── INDEX ─────────────────────────── */}
      <section className="py-6 px-6 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          {caseStudies.map((cs) => (
            <a
              key={cs.id}
              href={`#${cs.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:text-white text-zinc-400 transition-all"
              style={{ fontSize: "0.88rem", fontWeight: 500 }}
            >
              {cs.title} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY CARDS ─────────────────────────── */}
      {caseStudies.map((cs, idx) => (
        <section
          key={cs.id}
          id={cs.id}
          className={`py-24 px-6 ${idx % 2 === 1 ? "bg-zinc-900/30" : ""}`}
        >
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className={`px-3 py-1 rounded-full border text-sm font-medium ${cs.tagColor}`}
                  style={{ fontSize: "0.78rem", fontWeight: 600 }}
                >
                  {cs.tag}
                </span>
                <span className="text-zinc-600" style={{ fontSize: "0.82rem" }}>
                  {cs.industry} · {cs.duration}
                </span>
              </div>
              <h2
                className="text-white mb-3"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15 }}
              >
                {cs.title}
              </h2>
              <p className="text-zinc-400" style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
                {cs.subtitle}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-14">
              {cs.metrics.map((m) => (
                <div key={m.label} className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-center">
                  <p
                    className="text-white mb-1"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
                  >
                    {m.value}
                  </p>
                  <p className="text-zinc-500" style={{ fontSize: "0.82rem" }}>{m.label}</p>
                </div>
              ))}
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-8">
              {cs.sections.map((sec, si) => (
                <div
                  key={sec.heading}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6 p-7 rounded-2xl border border-zinc-800 bg-zinc-900/40"
                >
                  {/* Heading column */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                      {sec.icon}
                    </div>
                    <h3 className="text-white mt-1.5" style={{ fontWeight: 700, fontSize: "1rem" }}>
                      {sec.heading}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3">
                    <p className="text-zinc-400 mb-4" style={{ fontSize: "0.92rem", lineHeight: 1.75 }}>
                      {sec.content}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {sec.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-zinc-300" style={{ fontSize: "0.87rem" }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0 mt-1.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── BOTTOM CTA ─────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Ready to be our next case study?
          </h2>
          <p className="text-zinc-400 mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            Let's find the automation opportunity in your business and ship something real.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 transition-all"
            style={{ fontWeight: 700, fontSize: "0.95rem" }}
          >
            Book a call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
