import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import SearchPage from "../pages/search";
import ViewPage from "../pages/view";
import AppLayout from "../layouts/AppLayout";
import ErrorPage from "../pages/error";
import AuthorPage from "../pages/author";
import ContactLayout from "../layouts/ContactLayout";
import AboutLayout from "../layouts/AboutLayout";

export const routes = [
  { path: "/", element: <HomePage />, layout: "AppLayout" },
  { path: "/about", element: <AboutPage />, layout: "AboutLayout" },
  { path: "/contact", element: <ContactPage />, layout: "ContactLayout" },
  { path: "/search/:slug", element: <SearchPage />, layout: "AppLayout" },
  { path: "/view/:slug", element: <ViewPage />, layout: "AppLayout" },
  { path: "/author/:slug", element: <AuthorPage />, layout: "AppLayout" },
  { path: "*", element: <ErrorPage />, layout: "AppLayout" },
];

routes.map((route) => {
  if (route.layout === "AppLayout") {
    route.element = <AppLayout>{route.element}</AppLayout>;
  } else if (route.layout === "ContactLayout") {
    route.element = <ContactLayout>{route.element}</ContactLayout>;
  } else {
    route.element = <AboutLayout>{route.element}</AboutLayout>;
  }

  return route;
});
