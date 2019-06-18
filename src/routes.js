import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Resume from "./pages/Resume.vue";
import Portfolio from "./pages/Portfolio.vue";
import Project from "./pages/Project.vue";
import Contact from "./pages/Contact.vue";

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
    path: "/blog",
    component: Project
  },
  {
    path: "/contact",
    component: Contact
  }
];
