import { Profile, SignIn, SignUp } from "@/pages";
import Habitos from "./pages/Habitos";
import Home from "./pages/Home";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import MisHabitos from "./pages/MisHabitos";

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
    name: "Daily",
    path: "/daily",
    element: <Habitos />,
  },
  {
    icon: DocumentTextIcon,
    name: "Habitos",
    path: "/habitos",
    element: <MisHabitos />,
  },
];

export default routes;
