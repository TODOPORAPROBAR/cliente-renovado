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
import MisHabitos from "./pages/MisHabitos";
import Template from "./pages/Template";
import MicroLogin from "./pages/MicroLogin";
import DeleteDaily from "./pages/DeleteDaily";
import Logout from './pages/Logout';

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
    element: <MisHabitos />,
    nav: false,
    logged: true
  },
  {
    icon: DocumentTextIcon,
    name: "Daily",
    path: "/",
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
  {
    icon: DocumentTextIcon,
    name: "DeleteDaily",
    path: "/deletedaily",
    element: <DeleteDaily />,
    nav: true,
    logged: true
  },
  {
    icon: DocumentTextIcon,
    name: "Logout",
    path: "/logout",
    element: <Logout />,
    nav: true,
    logged: true
  },
];

export default routes
