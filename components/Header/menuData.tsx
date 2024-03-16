import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  // {
  //   id: 2,
  //   title: "Features",
  //   newTab: false,
  //   path: "/#features",
  // },
  {
    id: 2.1,
    title: "Chatbot",
    newTab: false,
    path: "/blog",
  },
  {
    id: 3,
    title: "Features",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Symptom analysis",
        newTab: false,
        path: "/symptoms",
      },
      {
        id: 32,
        title: "Diet planner",
        newTab: false,
        path: "/diet",
      },
      {
        id: 33,
        title: "Consult a doctor",
        newTab: false,
        path: "/docs",
      },
    ],
  },
];

export default menuData;
