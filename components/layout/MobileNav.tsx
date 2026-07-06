"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 md:hidden border-b border-border bg-background/85 backdrop-blur-md flex items-center justify-between px-4">
      <Link href="/" className="font-bold text-lg text-foreground">
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

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 z-50 md:hidden border-t border-border bg-background/85 backdrop-blur-md flex items-center justify-around px-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center flex-1 h-full py-1 text-xs font-medium transition-colors",
              isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
            )}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span>{t(item.label.toLowerCase())}</span>
          </Link>
        );
      })}
    </nav>
  );
}
