import { Profile, SignIn, SignUp } from "@/pages";
import Habitos from "./pages/Habitos";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Template from "./pages/Template";
import MicroLogin from "./pages/MicroLogin";
import getUserToken from "./helpers/getUserToken";

const token = getUserToken()

const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
    nav: true,
    logged: false
  },
  // {
  //   icon: UserCircleIcon,
  //   name: "profile",
  //   path: "/profile",
  //   element: <Profile />,
  //   nav: true,
  // },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
    nav: true,
    logged: false
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
    nav: true,
    logged: false
  },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  //   nav: true,
  // },
  {
    icon: DocumentTextIcon,
    name: "Habitos",
    path: "/habitos",
    element: <Habitos />,
    nav: true,
    logged: true
  },
  {
    icon: DocumentTextIcon,
    name: "Templates",
    path: "/templates",
    element: <Templates />,
    nav: true,
    logged: true
  },
  {
    icon: DocumentTextIcon,
    name: "Template",
    path: "/template",
    element: <Template />,
    nav: false,
    logged: true
  },
  {
    icon: DocumentTextIcon,
    name: "MicroLogin",
    path: "/micrologin",
    element: <MicroLogin />,
    nav: true,
    logged: false
  },
];

export default token ? routes : routes.filter(route => !route.logged)
