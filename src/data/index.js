import { getRoutes, getNavigation, getMedia } from "@/data/utils";

export const SITE_PATH = "Project";

const MASTER_ROUTES = [
    {
      path: "/",
      label: "home",
      component: () => import("@/views/home"),
      hidden: false,
    },
{
      path: "/cars",
      label: "cars",
      component: () => import("@/views/cars"),
      hidden: false,
    },
{
      path: "/services",
      label: "services",
      component: () => import("@/views/services"),
      hidden: false,
    },
{
      path: "/faq",
      label: "faq",
      component: () => import("@/views/faq"),
      hidden: false,
    },
{
      path: "/contact",
      label: "contact",
      component: () => import("@/views/contact"),
      hidden: false,
    },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);



