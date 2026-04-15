import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { CaseStudies } from "./pages/CaseStudies";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "case-studies", Component: CaseStudies },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
