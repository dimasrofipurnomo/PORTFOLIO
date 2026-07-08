"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { 
  Code, 
  Layers, 
  PenTool, 
  Users
} from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { AnimateIn } from "@/components/ui/AnimateIn";

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const tNavbar = useTranslations("Navbar");
  const tAbout = useTranslations("About");


  const [selectedFilter, setSelectedFilter] = useState("All");

  const getLearnedPoints = (categoryKey: string): string[] => {
    try {
      const raw = t.raw(`learned.${categoryKey}`) as Record<string, string>;
      if (raw && typeof raw === "object") {
        return Object.keys(raw)
          .filter((key) => key.startsWith("p"))
          .map((key) => {
            const num = parseInt(key.substring(1), 10);
            return { num, text: raw[key] };
          })
          .sort((a, b) => a.num - b.num)
          .map((item) => item.text);
      }
    } catch {
      // fallback
    }
    return [];
  };

  const filters = ["All", "System Analyst", "UI/UX", "Web", "Mobile"];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    return project.category?.some(
      (cat) => cat.toLowerCase() === selectedFilter.toLowerCase()
    );
  });

  // Localized filter label display helpers
  const getFilterLabel = (filter: string) => {
    if (filter === "All") return tNavbar("home") === "Beranda" ? "Semua" : "All";
    if (filter === "System Analyst") return tAbout("expertise.analysis.title");
    return filter;
  };

  return (
    <div className="space-y-16 md:space-y-24 py-12 md:py-16">
      
      {/* 1. Header & Filters Section */}
      <AnimateIn>
        <section className="space-y-8 px-4">
          <div className="space-y-3 text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
              {t("experience.title")}
            </h1>
            <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto">
              {t("experience.subtitle")}
            </p>
          </div>

          {/* Dynamic Filters Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`neo-border rounded-[8px] px-4 py-2 text-xs font-black tracking-wider uppercase transition-all duration-100 cursor-pointer shadow-[2px_2px_0px_var(--neo-black)] select-none ${
                    isActive
                      ? "bg-neo-yellow text-black"
                      : "bg-white dark:bg-zinc-900 text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  {getFilterLabel(filter)}
                </button>
              );
            })}
          </div>
        </section>
      </AnimateIn>

      {/* 2. Dynamic Projects Grid */}
      <section className="px-4">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <AnimateIn key={project.slug} delay={(idx % 3) * 0.1} className="h-full">
                <ProjectCard project={project} />
              </AnimateIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 neo-border rounded-[8px] bg-card/20 border-dashed">
            <p className="text-foreground/60 font-bold">{t("experience.noProjects")}</p>
          </div>
        )}
      </section>


      {/* 4. What I Learned Section */}
      <section className="px-4 space-y-8">
        <div className="border-l-4 border-neo-blue pl-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground leading-none">
            {t("learned.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <AnimateIn delay={0} className="h-full">
            <Card variant="white" className="flex flex-col h-full shadow-[6px_6px_0px_var(--neo-black)]">
              <CardHeader className="flex flex-row items-center gap-3 border-b-2 border-foreground/10 pb-3 mb-4">
                <div className="p-2 bg-neo-yellow text-black neo-border rounded-[4px] shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  <Layers className="w-5 h-5 stroke-[2.5px]" />
                </div>
                <CardTitle className="text-base font-black uppercase text-foreground">
                  {t("learned.analysis.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-semibold text-xs text-foreground/80">
                  {getLearnedPoints("analysis").map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-foreground shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateIn>

          <AnimateIn delay={0.1} className="h-full">
            <Card variant="white" className="flex flex-col h-full shadow-[6px_6px_0px_var(--neo-black)]">
              <CardHeader className="flex flex-row items-center gap-3 border-b-2 border-foreground/10 pb-3 mb-4">
                <div className="p-2 bg-neo-blue text-white neo-border rounded-[4px] shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  <Code className="w-5 h-5 stroke-[2.5px]" />
                </div>
                <CardTitle className="text-base font-black uppercase text-foreground">
                  {t("learned.development.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-semibold text-xs text-foreground/80">
                  {getLearnedPoints("development").map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateIn>

          <AnimateIn delay={0.2} className="h-full">
            <Card variant="white" className="flex flex-col h-full shadow-[6px_6px_0px_var(--neo-black)]">
              <CardHeader className="flex flex-row items-center gap-3 border-b-2 border-foreground/10 pb-3 mb-4">
                <div className="p-2 bg-neo-pink text-black neo-border rounded-[4px] shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  <PenTool className="w-5 h-5 stroke-[2.5px]" />
                </div>
                <CardTitle className="text-base font-black uppercase text-foreground">
                  {t("learned.uiux.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-semibold text-xs text-foreground/80">
                  {getLearnedPoints("uiux").map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-foreground shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateIn>

          <AnimateIn delay={0.3} className="h-full">
            <Card variant="white" className="flex flex-col h-full shadow-[6px_6px_0px_var(--neo-black)]">
              <CardHeader className="flex flex-row items-center gap-3 border-b-2 border-foreground/10 pb-3 mb-4">
                <div className="p-2 bg-neo-blue text-white neo-border rounded-[4px] shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  <Users className="w-5 h-5 stroke-[2.5px]" />
                </div>
                <CardTitle className="text-base font-black uppercase text-foreground">
                  {t("learned.team.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-semibold text-xs text-foreground/80">
                  {getLearnedPoints("team").map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-foreground shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateIn>

        </div>
      </section>

    </div>
  );
}
