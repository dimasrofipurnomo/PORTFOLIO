"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";

// Inline SVG Flag for Indonesia
const IndonesiaFlag = () => (
  <svg className="w-4 h-3 border border-black/10 shrink-0" viewBox="0 0 3 2">
    <rect width="3" height="1" fill="#E21C26" />
    <rect y="1" width="3" height="1" fill="#FFFFFF" />
  </svg>
);

// Inline SVG Flag for United States
const USAFlag = () => (
  <svg className="w-4 h-3 border border-black/10 shrink-0" viewBox="0 0 7410 3900">
    <rect width="7410" height="3900" fill="#B22234" />
    <path d="M0,300H7410M0,900H7410M0,1500H7410M0,2100H7410M0,2700H7410M0,3300H7410" stroke="#FFF" strokeWidth="300" />
    <rect width="2964" height="2100" fill="#3C3B6E" />
    {/* Simplified stars representation */}
    <circle cx="500" cy="500" r="100" fill="#FFF" />
    <circle cx="1000" cy="500" r="100" fill="#FFF" />
    <circle cx="1500" cy="500" r="100" fill="#FFF" />
    <circle cx="2000" cy="500" r="100" fill="#FFF" />
    <circle cx="2500" cy="500" r="100" fill="#FFF" />
    <circle cx="750" cy="1000" r="100" fill="#FFF" />
    <circle cx="1250" cy="1000" r="100" fill="#FFF" />
    <circle cx="1750" cy="1000" r="100" fill="#FFF" />
    <circle cx="2250" cy="1000" r="100" fill="#FFF" />
    <circle cx="500" cy="1500" r="100" fill="#FFF" />
    <circle cx="1000" cy="1500" r="100" fill="#FFF" />
    <circle cx="1500" cy="1500" r="100" fill="#FFF" />
    <circle cx="2000" cy="1500" r="100" fill="#FFF" />
    <circle cx="2500" cy="1500" r="100" fill="#FFF" />
  </svg>
);

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const localesList = [
    { code: "id", label: "ID", flag: <IndonesiaFlag /> },
    { code: "en", label: "EN", flag: <USAFlag /> }
  ] as const;

  const currentObj = localesList.find((l) => l.code === currentLocale) || localesList[0];

  const switchLanguage = (newLocale: "en" | "id") => {
    setIsOpen(false);
    if (newLocale === currentLocale) return;
    router.replace(pathname, { locale: newLocale });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-sans font-black text-xs uppercase border-2 border-foreground rounded-[6px] px-3 py-1.5 bg-white text-black dark:bg-zinc-900 dark:text-white shadow-[2px_2px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer select-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-1.5">
          {currentObj.flag} 
          <span>{currentObj.label}</span>
        </span>
        <ChevronDown className={`w-3.5 h-3.5 stroke-[2.5px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-[6px] bg-white dark:bg-zinc-900 border-2 border-foreground shadow-[4px_4px_0px_var(--neo-black)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="py-1 flex flex-col">
            {localesList.map((loc) => {
              const isActive = loc.code === currentLocale;
              return (
                <button
                  key={loc.code}
                  onClick={() => switchLanguage(loc.code)}
                  className={`flex items-center gap-2 px-3 py-2 text-xs font-black uppercase text-left w-full transition-colors cursor-pointer select-none ${
                    isActive 
                      ? "bg-neo-yellow text-black" 
                      : "text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  {loc.flag}
                  <span>{loc.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
