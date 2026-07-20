import { Home, Briefcase, Building, User, Code, Mail } from "lucide-react";
import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    icon: User,
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    icon: Briefcase,
  },
  {
    id: "experience",
    label: "Experience",
    href: "/organization",
    icon: Building,
  },
  {
    id: "skills",
    label: "Skills",
    href: "/skills",
    icon: Code,
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];
