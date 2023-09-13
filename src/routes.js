import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Resume from "./pages/Resume.vue";
import Portfolio from "./pages/Portfolio.vue";
import Contact from "./pages/Contact.vue";

import CodeBoard from "./pages/projects/CodeBoard.vue";
import KrishT from "./pages/projects/KrishT.vue";
import Kanban from "./pages/projects/Kanban.vue";
import Tisa from "./pages/projects/Tisa.vue";
import CV from "./pages/projects/CV.vue";
import Accounting from "./pages/projects/Accounting.vue";
import Continental from "./pages/projects/Continental.vue";
import PM from "./pages/projects/PM.vue";
import Kritish from "./pages/projects/Kritish.vue";
import Astrology from "./pages/projects/Astrology.vue";
import Hashtag from "./pages/projects/Hashtag.vue";
import Semantic from "./pages/projects/Semantic.vue";
import HAS from "./pages/projects/HAS.vue";
import Youtube from "./pages/projects/Youtube.vue";
import Charon from "./pages/projects/Charon.vue";
import SQLElectron from "./pages/projects/SQLElectron.vue";
import DynamoDBDashboard from "./pages/projects/DynamoDBDashbooard.vue";

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
  //
  {
    path: "/codeboard",
    component: CodeBoard
  },
  {
    path: "/krisht",
    component: KrishT
  },
  {
    path: "/kanban",
    component: Kanban
  },
  {
    path: "/cvmaker",
    component: CV
  },
  {
    path: "/accounting",
    component: Accounting
  },
  {
    path: "/tisacafe",
    component: Tisa
  },
  {
    path: "/continentalhrd",
    component: Continental
  },
  {
    path: "/pmconstructioneng",
    component: PM
  },
  {
    path: "/myportfolio",
    component: Kritish
  },
  {
    path: "/tantrajyotish",
    component: Astrology
  },
  {
    path: "/hashtag",
    component: Hashtag
  },
  {
    path: "/semantic",
    component: Semantic
  },
  {
    path: "/homeautomation",
    component: HAS
  },
  {
    path: "/youtube",
    component: Youtube
  },
  {
    path: "/charon",
    component: Charon
  },
  {
    path: "/sqlelectron",
    component: SQLElectron
  },
  {
    path: "/dynamodb-dashboard",
    component: DynamoDBDashboard
  }
];
