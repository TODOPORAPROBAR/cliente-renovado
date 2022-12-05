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

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: DocumentTextIcon,
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
  {
    icon: DocumentTextIcon,
    name: "Habitos",
    path: "/habitos",
    element: <Habitos />,
  },
  {
    icon: DocumentTextIcon,
    name: "Templates",
    path: "/templates",
    element: <Templates />,
  },
  {
    icon: DocumentTextIcon,
    name: "Template",
    path: "/template",
    element: <Template />,
  },
];

export default routes;
