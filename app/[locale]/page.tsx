"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { 
  Briefcase, 
  Building, 
  User
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const t = useTranslations("Home");

  // Filter featured projects from the dynamic data store
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24 py-12 md:py-16">
      
      {/* 1. Hero Section */}
      <AnimateIn>
        <section className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none select-none text-foreground">
            {t("hero.title")} <br />
            <span className="relative inline-block text-neo-blue mt-3 pb-2">
              {t("hero.portfolio")}
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-neo-blue rounded-full" />
            </span>
          </h1>
          <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/projects">
              <Button variant="blue">{t("hero.explore")}</Button>
            </Link>
            <a href="https://drive.google.com/file/d/14PS57CnoJvSwkc-ZeUBM_Qv7FVA3x5xm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="yellow">{t("hero.cv")}</Button>
            </a>
            <Link href="/about#contact">
              <Button variant="white">{t("hero.connect")}</Button>
            </Link>
          </div>
        </section>
      </AnimateIn>

      {/* 2. What You'll Find Here Section */}
      <section className="px-4 space-y-8">
        <SectionTitle 
          title={t("find.title")} 
          highlightedWord={t("find.highlight")} 
          highlightColor="pink" 
          description={t("find.desc")}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimateIn delay={0} className="h-full">
            <Card variant="yellow" interactive className="flex flex-col h-full">
              <CardHeader>
                <Briefcase className="w-8 h-8 mb-2 stroke-[2.5px]" />
                <CardTitle>{t("find.projects.title")}</CardTitle>
                <CardDescription className="text-black/85">{t("find.projects.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-black/90">
                {t("find.projects.text")}
              </CardContent>
              <CardFooter>
                <Link href="/projects" className="text-xs font-black uppercase tracking-wider hover:underline">
                  {t("find.projects.cta")}
                </Link>
              </CardFooter>
            </Card>
          </AnimateIn>

          <AnimateIn delay={0.1} className="h-full">
            <Card variant="blue" interactive className="flex flex-col h-full text-white">
              <CardHeader>
                <Building className="w-8 h-8 mb-2 stroke-[2.5px]" />
                <CardTitle>{t("find.experience.title")}</CardTitle>
                <CardDescription className="text-white/85">{t("find.experience.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-white/90">
                {t("find.experience.text")}
              </CardContent>
              <CardFooter>
                <Link href="/organization" className="text-xs font-black uppercase tracking-wider hover:underline">
                  {t("find.experience.cta")}
                </Link>
              </CardFooter>
            </Card>
          </AnimateIn>

          <AnimateIn delay={0.2} className="h-full">
            <Card variant="pink" interactive className="flex flex-col h-full">
              <CardHeader>
                <User className="w-8 h-8 mb-2 stroke-[2.5px]" />
                <CardTitle>{t("find.about.title")}</CardTitle>
                <CardDescription className="text-black/85">{t("find.about.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-black/90">
                {t("find.about.text")}
              </CardContent>
              <CardFooter>
                <Link href="/about" className="text-xs font-black uppercase tracking-wider hover:underline">
                  {t("find.about.cta")}
                </Link>
              </CardFooter>
            </Card>
          </AnimateIn>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section className="px-4 space-y-8">
        <SectionTitle
          title={t("featured.title")}
          highlightedWord={t("featured.highlight")}
          highlightColor="blue"
          description={t("featured.desc")}
          actionHref="/projects"
          actionLabel={t("featured.all")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <AnimateIn key={project.slug} delay={idx * 0.1} className="h-full">
              <ProjectCard project={project} />
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 4. Contact Banner */}
      <AnimateIn>
        <section className="px-4">
          <div className="bg-black text-white dark:bg-zinc-950 dark:text-zinc-50 border-4 border-foreground rounded-[8px] p-8 md:p-12 text-center space-y-6 shadow-[8px_8px_0px_var(--neo-black)] transition-all">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              {t("banner.title")}
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-zinc-300 font-medium leading-relaxed">
              {t("banner.text")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="/about#contact">
                <Button variant="yellow">{t("banner.cta")}</Button>
              </Link> 
              <a href="https://drive.google.com/file/d/14PS57CnoJvSwkc-ZeUBM_Qv7FVA3x5xm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="white">{t("banner.cv")}</Button>
              </a>
            </div>
          </div>
        </section>
      </AnimateIn>

    </div>
  );
}
