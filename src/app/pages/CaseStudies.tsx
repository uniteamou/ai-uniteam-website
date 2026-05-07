import { Link } from "react-router";
import { ArrowRight, Clock, TrendingUp, Cpu, ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

const sectionIcon = (heading: string) => {
  if (heading === "Problem") return <Clock className="w-5 h-5 text-zinc-400" />;
  if (heading === "Solution") return <Cpu className="w-5 h-5 text-blue-400" />;
  return <TrendingUp className="w-5 h-5 text-emerald-400" />;
};

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
          {projects.map((cs) => (
            <Link
              key={cs.id}
              to={`#${cs.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:text-white text-zinc-400 transition-all"
              style={{ fontSize: "0.88rem", fontWeight: 500 }}
            >
              {cs.title} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY CARDS ─────────────────────────── */}
      {projects.map((cs, idx) => (
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
                {cs.url && (
                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors"
                    style={{ fontSize: "0.82rem" }}
                  >
                    {cs.url.replace(/^https?:\/\//, "")} <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
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

            {/* Gallery */}
            {(cs.gallery || cs.mobileGif) && (
              <div className="flex flex-wrap gap-4 mb-10 items-center">
                {cs.gallery && cs.gallery[0] && (
                  cs.gallery[0].placeholder ? (
                    <div className="flex-1 min-w-[200px] rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center" style={{ minHeight: "160px" }}>
                      <span className="text-zinc-600" style={{ fontSize: "0.8rem" }}>{cs.gallery[0].alt}</span>
                    </div>
                  ) : cs.gallery[0].src.endsWith(".webm") || cs.gallery[0].src.endsWith(".mp4") ? (
                    <div className="flex-1 min-w-[200px] rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900/50">
                      <video src={cs.gallery[0].src} autoPlay loop muted playsInline className="w-full h-auto block" />
                    </div>
                  ) : (
                    <div className="flex-1 min-w-[200px] rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900/50">
                      <img src={cs.gallery[0].src} alt={cs.gallery[0].alt} className="w-full h-auto block" />
                    </div>
                  )
                )}
                {cs.mobileGif && (
                  <div className="rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900/50 flex-shrink-0" style={{ width: "160px" }}>
                    <img src={cs.mobileGif.src} alt={cs.mobileGif.alt} className="w-full h-auto block" />
                  </div>
                )}
                {cs.gallery && cs.gallery.slice(1).map((item) => (
                  item.placeholder ? (
                    <div key={item.alt} className="flex-1 min-w-[200px] rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center" style={{ minHeight: "160px" }}>
                      <span className="text-zinc-600" style={{ fontSize: "0.8rem" }}>{item.alt}</span>
                    </div>
                  ) : item.src.endsWith(".webm") || item.src.endsWith(".mp4") ? (
                    <div key={item.src} className="flex-1 min-w-[200px] rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900/50">
                      <video src={item.src} autoPlay loop muted playsInline className="w-full h-auto block" />
                    </div>
                  ) : (
                    <div key={item.src} className="flex-1 min-w-[200px] rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900/50">
                      <img src={item.src} alt={item.alt} className="w-full h-auto block" />
                    </div>
                  )
                ))}
              </div>
            )}

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
              {cs.sections.map((sec) => (
                <div
                  key={sec.heading}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6 p-7 rounded-2xl border border-zinc-800 bg-zinc-900/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                      {sectionIcon(sec.heading)}
                    </div>
                    <h3 className="text-white mt-1.5" style={{ fontWeight: 700, fontSize: "1rem" }}>
                      {sec.heading}
                    </h3>
                  </div>
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
