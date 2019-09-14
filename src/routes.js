// @material-ui/icons

import Home from "views/Home/Home";
import Terms from "views/Terms/Terms";

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
    path: "/",
    name: "Landing",
    rtlName: "Landing",
    icon: null,
    component: Home,
    layout: "/"
  }
];

export default routes;
