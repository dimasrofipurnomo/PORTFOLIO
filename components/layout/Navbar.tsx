"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hidden md:block border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link 
          href="/" 
          className="font-bold text-xl tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Dimas Rofi&apos;
        </Link>

        {/* Desktop Links & Actions */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors relative",
                    isActive
                      ? "text-primary"
                      : "text-foreground/75 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
                  )}
                >
                  {t(item.label.toLowerCase())}
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
              href="/about#contact"
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
