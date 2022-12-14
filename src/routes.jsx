import { Profile } from "@/pages";
import Habitos from "./pages/Habitos";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import InicioSesion from './pages/components/Login/index'
import Registro from './pages/components/Singup/index'
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
import DeleteDaily from "./pages/DeleteDaily/DeleteDaily"
import Logout from './pages/Logout';
import DeleteDailyNow from './pages/DeleteDailyNow';

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
  // {
  //   icon: ArrowRightOnRectangleIcon,
  //   name: "Login",
  //   path: "/login",
  //   element: <InicioSesion />,
  //   nav: true,
  //   logged: false
  // },
  {
    icon: DocumentTextIcon,
    name: "Login",
    path: "/micrologin",
    element: <MicroLogin />,
    nav: true,
    logged: true
  },
  {
    icon: UserPlusIcon,
    name: "Registro",
    path: "/registro",
    element: <Registro />,
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
    name: "Mis-Habitos",
    path: "/habitos",
    element: <MisHabitos />,
    nav: false,
    logged: false
  },
  {
    icon: DocumentTextIcon,
    name: "Daily",
    path: "/",
    element: <Habitos />,
    nav: true,
    logged: false
  },
  {
    icon: DocumentTextIcon,
    name: "Habitos",
    path: "/templates",
    element: <Templates />,
    nav: true,
    logged: false
  },
  {
    icon: DocumentTextIcon,
    name: "Template",
    path: "/template",
    element: <Template />,
    nav: false,
    logged: false
  },
  {
    icon: DocumentTextIcon,
    name: "DeleteDaily",
    path: "/deletedaily",
    element: <DeleteDailyNow />,
    nav: true,
    logged: false
  },
  {
    icon: DocumentTextIcon,
    name: "Logout",
    path: "/logout",
    element: <Logout />,
    nav: true,
    logged: false
  },
];

export default routes
