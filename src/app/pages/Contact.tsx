import { useState } from "react";
import {
  Mail,
  MessageSquare,
  ArrowRight,
  Check,
  Calendar,
  Clock,
  Zap,
  AlertCircle,
} from "lucide-react";

const reasons = [
  {
    icon: <Zap className="w-4 h-4 text-violet-400" />,
    text: "Free 15-min AI audit",
  },
  {
    icon: <Clock className="w-4 h-4 text-blue-400" />,
    text: "Response within 24h",
  },
  {
    icon: <Check className="w-4 h-4 text-emerald-400" />,
    text: "No commitment required",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    interest: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    const body = new URLSearchParams({
      "entry.155752479": form.name,
      "entry.789650040": form.email,
      "entry.1887420987": form.company,
      "entry.659925973": form.interest,
      "entry.288920513": form.message,
    });

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfae7S9PGUZejY6g-wYn49YLey9L4BayALVc0LcbYxJ2N7eGA/formResponse",
        { method: "POST", body, mode: "no-cors" },
      );
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-24">
      {/* ── HERO ─────────────────────────── */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
            <span
              className="text-violet-300"
              style={{ fontSize: "0.8rem", fontWeight: 500 }}
            >
              Let's talk
            </span>
          </div>
          <h1
            className="text-white mb-5"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
            }}
          >
            Let's automate{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              your business
            </span>
          </h1>
          <p
            className="text-zinc-400"
            style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Tell us what you're working on. We'll identify automation
            opportunities and show you what's possible.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            {reasons.map((r) => (
              <div
                key={r.text}
                className="flex items-center gap-2 text-zinc-400"
                style={{ fontSize: "0.85rem" }}
              >
                {r.icon} {r.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ─────────────────────────── */}
      <section className="py-12 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── CONTACT FORM ─────────────────── */}
          <div>
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50">
              {formState === "error" ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
                    <AlertCircle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3
                    className="text-white mb-3"
                    style={{ fontWeight: 800, fontSize: "1.4rem" }}
                  >
                    Something went wrong
                  </h3>
                  <p
                    className="text-zinc-400 mb-2"
                    style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
                  >
                    We couldn't send your message. Please try again or reach us
                    directly at:
                  </p>
                  <a
                    href="mailto:uniteamou@protonmail.com"
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                    style={{ fontSize: "0.95rem" }}
                  >
                    uniteamou@protonmail.com
                  </a>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-8 px-6 py-2.5 rounded-xl border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
                    style={{ fontSize: "0.9rem", fontWeight: 600 }}
                  >
                    Try again
                  </button>
                </div>
              ) : formState === "success" ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3
                    className="text-white mb-3"
                    style={{ fontWeight: 800, fontSize: "1.4rem" }}
                  >
                    Message sent!
                  </h3>
                  <p
                    className="text-zinc-400"
                    style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
                  >
                    We'll review your project and get back to you within 24
                    hours. Keep an eye on your inbox!
                  </p>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        message: "",
                        interest: "",
                      });
                    }}
                    className="mt-8 px-6 py-2.5 rounded-xl border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
                    style={{ fontSize: "0.9rem", fontWeight: 600 }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <h2
                        className="text-white"
                        style={{ fontWeight: 700, fontSize: "1.1rem" }}
                      >
                        Send us a message
                      </h2>
                      <p
                        className="text-zinc-500"
                        style={{ fontSize: "0.8rem" }}
                      >
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-zinc-400 mb-1.5"
                          style={{ fontSize: "0.82rem", fontWeight: 600 }}
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800/60 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                          style={{ fontSize: "0.9rem" }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-zinc-400 mb-1.5"
                          style={{ fontSize: "0.82rem", fontWeight: 600 }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800/60 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                          style={{ fontSize: "0.9rem" }}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        className="block text-zinc-400 mb-1.5"
                        style={{ fontSize: "0.82rem", fontWeight: 600 }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800/60 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                        style={{ fontSize: "0.9rem" }}
                      />
                    </div>

                    {/* Interest */}
                    <div>
                      <label
                        className="block text-zinc-400 mb-1.5"
                        style={{ fontSize: "0.82rem", fontWeight: 600 }}
                      >
                        I'm interested in
                      </label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800/60 text-zinc-300 focus:outline-none focus:border-violet-500 transition-colors"
                        style={{ fontSize: "0.9rem" }}
                      >
                        <option value="" className="bg-zinc-900">
                          Select a service...
                        </option>
                        <option value="AI Assistants" className="bg-zinc-900">
                          AI Assistants
                        </option>
                        <option value="AI Automation" className="bg-zinc-900">
                          AI Automation
                        </option>
                        <option value="Custom AI Tools" className="bg-zinc-900">
                          Custom AI Tools
                        </option>
                        <option value="Free AI Audit" className="bg-zinc-900">
                          Free AI Audit
                        </option>
                        <option value="Something else" className="bg-zinc-900">
                          Something else
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="block text-zinc-400 mb-1.5"
                        style={{ fontSize: "0.82rem", fontWeight: 600 }}
                      >
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your project or what you'd like to automate..."
                        className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800/60 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                        style={{ fontSize: "0.9rem" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 transition-all disabled:opacity-60"
                      style={{ fontWeight: 700, fontSize: "0.95rem" }}
                    >
                      {formState === "loading" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 mt-8">
              <p
                className="text-zinc-400 mb-4"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Direct contact
              </p>
              <a
                href="mailto:uniteamou@protonmail.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span style={{ fontSize: "0.9rem" }}>
                  uniteamou@protonmail.com
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ─────────────────── */}
          <div className="flex flex-col gap-6">
            {/* Book a call */}
            <div className="rounded-3xl border border-zinc-800 bg-black h-[638px]">
              <div className="flex items-center gap-3 p-8">
                <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h2
                    className="text-white"
                    style={{ fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    Book a call
                  </h2>
                  <p className="text-zinc-500" style={{ fontSize: "0.8rem" }}>
                    15 minutes · Free · No commitment
                  </p>
                </div>
              </div>

              <div className="-mb-[200px] h-4"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "638px",
                  // width: "590px",
                }}
              >
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2AkaCtxQId2ZXgpGddutnF66_xWBugG3cXG7XmXtVnckzni4siSXExzLboPk7aVGgoZvlc-8Oi?gv=true"
                  style={{
                    border: 1,
                    display: "block",
                    filter: "invert(1) hue-rotate(180deg) brightness(0.8) saturate(0.50)",
                    marginTop: "-178px",
                    height: "700px",
                    overflow: "hidden",
                  }}
                  width="100%"
                  title="Book a call"
                />
              </div>
            </div>
            {/* What to expect */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <p
                className="text-zinc-400 mb-4"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                What happens next
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { step: "1", text: "We review your message within 24 hours" },
                  { step: "2", text: "We schedule a 15-min discovery call" },
                  {
                    step: "3",
                    text: "We prepare a tailored automation proposal",
                  },
                  { step: "4", text: "We start building — MVP in 1–2 weeks" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-400"
                      style={{ fontSize: "0.72rem", fontWeight: 700 }}
                    >
                      {item.step}
                    </div>
                    <p
                      className="text-zinc-400"
                      style={{ fontSize: "0.88rem" }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
