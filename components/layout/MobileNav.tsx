"use client";

import React, { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById("home");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#home");
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 md:hidden border-b border-border bg-background/85 backdrop-blur-md flex items-center justify-between px-4">
      <Link 
        href="/" 
        onClick={handleLogoClick}
        className="font-bold text-lg text-foreground"
      >
        Dimas Rofi&apos;
      </Link>
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

  // Track active section using window scroll event for high reliability
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Check top 1/3 of the screen
      let currentSection = "home";

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = item.id;
          }
        }
      }

      // Force contact to be active if scrolled to the absolute bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        currentSection = "contact";
      }

      setActiveSection((prev) => (prev !== currentSection ? currentSection : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once initially to capture initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 z-50 md:hidden border-t border-border bg-background/85 backdrop-blur-md flex items-center justify-around px-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = isHomePage 
          ? activeSection === item.id 
          : (item.id === "projects" && pathname.startsWith("/projects"));

        return (
          <Link
            key={item.id}
            href={isHomePage ? `#${item.id}` : `/#${item.id}`}
            onClick={(e) => handleAnchorClick(e, item.id)}
            className={cn(
              "flex flex-col items-center justify-center flex-1 h-full py-1 text-[10px] font-medium transition-colors",
              isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
            )}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span>{t(item.id)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
