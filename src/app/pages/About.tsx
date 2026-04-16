import { Link } from "react-router";
import {
  ArrowRight,
  Zap,
  Code2,
  Users,
  Heart,
  Target,
  Lightbulb,
  Star,
} from "lucide-react";

const team = [
  {
    initials: "AA",
    name: "Almas Akchabayev",
    role: "CEO / Project Manager",
    bio: "Dedicated to understanding client needs and delivering tailored solutions that exceed expectations.",
    avatar: "./almas.png",
    linkedinUrl: "https://www.linkedin.com/in/almas-akchabayev/",
  },
  {
    initials: "AK",
    name: "Adilkhan Kenzhetayev",
    role: "CTO / AI Expert",
    bio: "Expert in spatial data analysis and visualization for impactful decision-making.",
    avatar: "./adilkhan.png",
    linkedinUrl: "https://www.linkedin.com/in/adilkhan-kenzhetaev-8212aa13b/",
  },
  {
    initials: "MT",
    name: "Maksim Timinskii",
    role: "Designer and Frontend Developer",
    bio: "Transforms complex ideas into intuitive interfaces that engage users.",
    avatar: "./maksim.png",
    linkedinUrl: "https://www.linkedin.com/in/maksim-timinskii/",
  },
];

const values = [
  {
    icon: <Zap className="w-5 h-5 text-violet-400" />,
    title: "Speed without shortcuts",
    desc: "We ship MVPs in 1–2 weeks. We move fast — but we never cut corners on reliability.",
  },
  {
    icon: <Target className="w-5 h-5 text-blue-400" />,
    title: "Outcomes over outputs",
    desc: "We don't count deliverables. We care about real business impact — time saved, revenue unlocked.",
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
    title: "Pragmatic AI",
    desc: "We use AI where it actually helps — not everywhere it theoretically could.",
  },
  {
    icon: <Heart className="w-5 h-5 text-rose-400" />,
    title: "Long-term partnership",
    desc: "We don't disappear after launch. We stay to iterate, improve, and scale with you.",
  },
];

const stats = [
  { value: "15+", label: "clients served" },
  { value: "100h+", label: "saved per client/month" },
  { value: "3 wks", label: "average time to MVP" },
  { value: "⭐ 5.0", label: "Upwork rating" },
];

export function About() {
  return (
    <div className="pt-24">
      {/* ── HERO ─────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top left, rgba(124,58,237,0.12) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
            <span className="text-violet-300" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
              Who we are
            </span>
          </div>
          <h1
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1 }}
          >
            We build systems that make{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              businesses more efficient
            </span>
          </h1>
          <p className="text-zinc-400 max-w-2xl" style={{ fontSize: "1.1rem", lineHeight: 1.75 }}>
            We are a team of engineers and designers focused on building AI-powered systems that replace
            manual work, reduce costs, and scale operations. We previously built complex data platforms —
            and now apply that same engineering rigor to AI automation.
          </p>
        </div>
      </section>

      {/* ── STATS ─────────────────────────── */}
      <section className="py-16 px-6 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-white mb-1"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
                >
                  {s.value}
                </p>
                <p className="text-zinc-500" style={{ fontSize: "0.85rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-violet-400 mb-3" style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Our story
              </p>
              <h2
                className="text-white mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2 }}
              >
                From data platforms to AI automation
              </h2>
              <div className="flex flex-col gap-5 text-zinc-400" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                <p>
                  We started as a GIS and data engineering agency — building complex spatial data platforms
                  and analytics systems for enterprise clients. We got very good at processing large datasets,
                  designing scalable architectures, and shipping production-grade software.
                </p>
                <p>
                  As AI capabilities accelerated, we saw a massive opportunity: businesses everywhere are
                  drowning in manual, repetitive work — and AI is ready to fix that. So we pivoted.
                </p>
                <p>
                  Today, we apply everything we learned building data systems to AI automation. The result is
                  a team that can design intelligent workflows, build production pipelines, and integrate AI
                  into real business operations — fast.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-0 relative pl-8">
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-emerald-500" />
              {[
                { year: "2018", label: "Founded as a data engineering consultancy" },
                { year: "2020", label: "Launched first large-scale GIS platform" },
                { year: "2022", label: "Expanded into analytics & data platforms" },
                { year: "2024", label: "Pivoted to AI automation & intelligent agents" },
                { year: "2025", label: "15+ AI systems shipped, 100h+ saved per client" },
              ].map((item, i) => (
                <div key={item.year} className="relative pb-8 last:pb-0">
                  <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-zinc-950 border-2 border-violet-500" style={{ borderColor: i < 2 ? '#7c3aed' : i < 4 ? '#3b82f6' : '#10b981' }} />
                  <div className="pl-4">
                    <p className="text-violet-400 mb-1" style={{ fontSize: "0.8rem", fontWeight: 700 }}>{item.year}</p>
                    <p className="text-zinc-300" style={{ fontSize: "0.9rem" }}>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────── */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 mb-3" style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              How we operate
            </p>
            <h2
              className="text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              Our values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-5 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-white mb-2" style={{ fontWeight: 700, fontSize: "0.95rem" }}>{v.title}</h3>
                  <p className="text-zinc-400" style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 mb-3" style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              The people
            </p>
            <h2
              className="text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              Meet the team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <a
                key={member.name}
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all text-center group"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-2xl object-cover mx-auto mb-5"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const fallback = el.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 items-center justify-center mx-auto mb-5 text-white hidden"
                  style={{ fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {member.initials}
                </div>
                <h3 className="text-white mb-0.5" style={{ fontWeight: 700, fontSize: "0.95rem" }}>{member.name}</h3>
                <p className="text-violet-400 mb-3" style={{ fontSize: "0.8rem", fontWeight: 500 }}>{member.role}</p>
                <p className="text-zinc-500" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>{member.bio}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────── */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
            ))}
          </div>
          <blockquote
            className="text-zinc-200 mb-8"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", lineHeight: 1.7, fontStyle: "italic" }}
          >
            "Great developer and communicator, two things rarely found together in the same person. He has been transparent in the development process from start to finish and always overdelivers. Highly recommend."
          </blockquote>
          <a
            href="https://www.upwork.com/agencies/1794058697432903680/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white" style={{ fontWeight: 700 }}>
              CM
            </div>
            <div className="text-left">
              <p className="text-white" style={{ fontWeight: 600, fontSize: "0.9rem" }}>Clathon M.</p>
              <p className="text-zinc-500" style={{ fontSize: "0.8rem" }}>Founder · Upwork ⭐ 5.0</p>
            </div>
          </a>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Want to work with us?
          </h2>
          <p className="text-zinc-400 mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            We take on a limited number of clients each quarter. Let's talk about your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 transition-all"
              style={{ fontWeight: 700, fontSize: "0.95rem" }}
            >
              Book a call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all"
              style={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
