import { Outlet, ScrollRestoration } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export function Root() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
