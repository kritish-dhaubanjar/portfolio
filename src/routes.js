import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Resume from "./pages/Resume.vue";
import Portfolio from "./pages/Portfolio.vue";
import Contact from "./pages/Contact.vue";

import PM from "./pages/projects/PM.vue";
import Kritish from "./pages/projects/Kritish.vue";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/aboutme",
    component: About
  },
  {
    path: "/resume",
    component: Resume
  },
  {
    path: "/portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/pmconstructioneng",
    component: PM
  },
  {
    path: "/myportfolio",
    component: Kritish
  }
];
