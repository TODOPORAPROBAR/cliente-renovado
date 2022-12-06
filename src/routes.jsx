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
import getUserToken from "./helpers/getUserToken";
import DeleteDaily from "./pages/DeleteDaily";

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
    name: "Login",
    path: "/login",
    element: <InicioSesion />,
    nav: true,
    logged: false
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
    name: "Habitos",
    path: "/habitos",
    element: <MisHabitos />,
    nav: true,
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
];

export default token ? routes : routes.filter(route => !route.logged)
