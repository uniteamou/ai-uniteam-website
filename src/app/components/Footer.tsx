import { Link } from "react-router";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center group">
              <img src="/logo.svg" alt="Uniteam logo" className="size-8" />
              <span
                className="text-white"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                Uniteam
              </span>
            </Link>
            <p
              className="text-zinc-400 max-w-xs"
              style={{ fontSize: "0.9rem", lineHeight: "1.7" }}
            >
              We build AI assistants and automation systems that replace manual
              work and scale operations.
            </p>
            {/* <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div> */}
          </div>

          {/* Links */}
          <div>
            <p
              className="text-white mb-4"
              style={{
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Case Studies", href: "/case-studies" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="text-white mb-4"
              style={{
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Get in touch
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  to="/contact"
                  className="text-zinc-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.9rem" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-zinc-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.9rem" }}
                >
                  Book a call
                </Link>
              </li>
              <li>
                <a
                  href="mailto:uniteamou@protonmail.com"
                  className="text-zinc-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.9rem" }}
                >
                  uniteamou@protonmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500" style={{ fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} Uniteam. All rights reserved.
          </p>
          <p className="text-zinc-600" style={{ fontSize: "0.85rem" }}>
            AI automation for the modern business
          </p>
        </div>
      </div>
    </footer>
  );
}
