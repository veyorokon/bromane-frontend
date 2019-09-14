// @material-ui/icons

import Home from "views/Home/Home";
import Terms from "views/Terms/Terms";
import Privacy from "views/Privacy/Privacy";

const routes = [
  {
    path: "/terms-of-service",
    name: "Terms",
    rtlName: "Terms",
    icon: null,
    component: Terms,
    layout: "/"
  },
  {
    path: "/privacy-policy",
    name: "Privacy",
    rtlName: "Privacy",
    icon: null,
    component: Privacy,
    layout: "/"
  },
  {
    path: "/",
    name: "Landing",
    rtlName: "Landing",
    icon: null,
    component: Home,
    layout: "/"
  }
];

export default routes;
