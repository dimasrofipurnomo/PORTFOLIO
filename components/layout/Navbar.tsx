"use client";

import React, { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
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
    <header className="fixed top-0 left-0 right-0 z-50 hidden md:block border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className="font-bold text-xl tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Dimas Rofi&apos;
        </Link>

        {/* Desktop Links & Actions */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isHomePage 
                ? activeSection === item.id 
                : (item.id === "projects" && pathname.startsWith("/projects"));

              return (
                <Link
                  key={item.id}
                  href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                  onClick={(e) => handleAnchorClick(e, item.id)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors relative",
                    isActive
                      ? "text-primary"
                      : "text-foreground/75 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
                  )}
                >
                  {t(item.id)}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="h-6 w-[1px] bg-border" />

          {/* Theme Toggle, Language Switcher & Contact Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => handleAnchorClick(e, "contact")}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
