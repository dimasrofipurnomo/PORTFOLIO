import { Home, Briefcase, Building, User } from "lucide-react";
import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: Briefcase,
  },
  {
    label: "Organization",
    href: "/organization",
    icon: Building,
  },
  {
    label: "About",
    href: "/about",
    icon: User,
  },
];
