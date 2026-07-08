"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { 
  Briefcase, 
  Lightbulb, 
  MessageSquare, 
  ClipboardList, 
  Users, 
  Brain, 
  Calendar, 
  GraduationCap,
  Github,
  Linkedin,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { getTechIconUrl } from "@/lib/techIcons";

interface ExpertiseItem {
  title: string;
  variant: "yellow" | "blue" | "pink" | "white";
  points: string[];
}

export default function AboutPage() {
  const t = useTranslations("About");

  // Dynamically load hard skills (expertise) with safe fallback
  let expertise: ExpertiseItem[] = [];
  try {
    const expertiseRaw = t.raw("expertise") as Record<string, unknown>;
    if (expertiseRaw && typeof expertiseRaw === "object") {
      const expertiseKeys = Object.keys(expertiseRaw).filter(
        (key) => typeof expertiseRaw[key] === "object" && expertiseRaw[key] !== null
      );
      expertise = expertiseKeys.map((catKey) => {
        const catObj = expertiseRaw[catKey] as Record<string, string>;
        const title = catObj.title || "";
        
        const pointKeys = Object.keys(catObj).filter((k) => k.startsWith("p"));
        const sortedPoints = pointKeys
          .map((k) => {
            const num = parseInt(k.substring(1), 10);
            return { num, text: catObj[k] };
          })
          .sort((a, b) => a.num - b.num)
          .map((item) => item.text);

        const colorMapping: Record<string, "yellow" | "blue" | "pink" | "white"> = {
          analysis: "yellow",
          software: "blue",
          backend: "blue",
          webmobile: "pink",
          uiux: "pink",
        };
        const variant = colorMapping[catKey] || "white";

        return {
          title,
          variant,
          points: sortedPoints,
        };
      });
    }
  } catch (e) {
    console.error("Error loading expertise dynamic messages", e);
  }

  // Dynamically load soft skills with safe fallback
  let softSkills: { name: string; icon: React.ComponentType<{ className?: string }> }[] = [];
  try {
    const softRaw = t.raw("soft") as Record<string, string>;
    if (softRaw && typeof softRaw === "object") {
      const softKeys = Object.keys(softRaw).filter((key) => key.startsWith("s"));
      softSkills = softKeys
        .map((key) => {
          const num = parseInt(key.substring(1), 10);
          return { num, name: softRaw[key] };
        })
        .sort((a, b) => a.num - b.num)
        .map((item, idx) => {
          const icons = [Lightbulb, MessageSquare, ClipboardList, Users, Brain, Calendar];
          const Icon = icons[idx % icons.length];
          return { name: item.name, icon: Icon };
        });
    }
  } catch (e) {
    console.error("Error loading soft dynamic messages", e);
  }

  // Dynamically load relevant coursework with safe fallback
  let coursework: string[] = [];
  try {
    const coursesRaw = t.raw("journey.edu.courses");
    if (Array.isArray(coursesRaw)) {
      coursework = coursesRaw;
    }
  } catch {
    coursework = [
      "System Analysis & Design",
      "UI/UX Design",
      "Software Development",
      "Database Management Systems",
      "Application Programming Interface (API)",
      "Object-Oriented Programming",
      "Web Programming",
      "Mobile Programming",
      "Algorithms & Programming"
    ];
  }

  // Unified, professionally sifted tech stack list
  const techStack = [
    {
      category: t("stack.categories.languages"),
      tags: ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "PYTHON", "GOLANG", "PHP", "CSHARP"],
    },
    {
      category: t("stack.categories.frameworks"),
      tags: ["FLUTTER", "REACT", "NEXT.JS", "LARAVEL", "TAILWIND CSS", "BOOTSTRAP"],
    },
    {
      category: t("stack.categories.databases"),
      tags: ["POSTGRESQL", "MYSQL", "SUPABASE", "FIREBASE"],
    },
    {
      category: t("stack.categories.designDoc"),
      tags: ["DRAW.IO", "FIGMA", "CANVA", "ENTERPRISE ARCHITECTURE"],
    },
    {
      category: t("stack.categories.deployment"),
      tags: ["VERCEL", "RAILWAY"],
    },
    {
      category: t("stack.categories.pm"),
      tags: ["TRELLO", "JIRA", "NOTION"],
    },
    {
      category: t("stack.categories.versionControl"),
      tags: ["GIT", "GITHUB"],
    },
    {
      category: t("stack.categories.testing"),
      tags: ["POSTMAN", "SWAGGER", "MAZE"],
    },
  ];



  return (
    <div className="space-y-16 md:space-y-24 py-12 md:py-16">
      
      {/* Hero Section */}
      <AnimateIn>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center px-4">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
                {t("hero.title")}
              </h1>
              <div className="bg-black text-neo-yellow dark:bg-zinc-950 p-4 neo-border rounded-[8px] inline-block shadow-[4px_4px_0px_var(--neo-black)]">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
                  {t("hero.subtitle1")}
                </h2>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mt-2">
                  {t("hero.subtitle2")}
                </h2>
              </div>
            </div>
            <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-xl">
              {t("hero.text")}
            </p>
            
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link 
                href="https://github.com/dimasrofipurnomo" 
                target="_blank" 
                className="w-12 h-12 flex items-center justify-center neo-border rounded-[8px] bg-white text-black hover:bg-slate-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 shadow-[4px_4px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer"
              >
                <Github className="w-5 h-5 stroke-[2.5px]" />
              </Link>
              <Link 
                href="/projects" 
                className="w-12 h-12 flex items-center justify-center neo-border rounded-[8px] bg-white text-black hover:bg-slate-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 shadow-[4px_4px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer"
              >
                <Briefcase className="w-5 h-5 stroke-[2.5px]" />
              </Link>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dimasrofipurnomo@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center neo-border rounded-[8px] bg-white text-black hover:bg-slate-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 shadow-[4px_4px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer"
              >
                <Mail className="w-5 h-5 stroke-[2.5px]" />
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center py-6">
            <div className="relative w-[300px] h-[360px] md:w-[350px] md:h-[420px] neo-border rounded-[8px] overflow-hidden shadow-[8px_8px_0px_var(--neo-black)] bg-white">
              <Image
                src="/dimas_profile.png"
                alt="Dimas Rofi' Purnomo"
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* Technical Expertise Section */}
      <section className="px-4 space-y-8">
        <SectionTitle
          title={t("expertise.title")}
          highlightedWord={t("expertise.highlight")}
          highlightColor="yellow"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {expertise.map((exp, idx) => (
            <AnimateIn key={exp.title} delay={idx * 0.1} className="h-full">
              <Card variant={exp.variant} interactive className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl uppercase font-black tracking-tight">{exp.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 font-semibold text-sm">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Soft Skills Section */}
      <AnimateIn>
        <section className="px-4 max-w-5xl mx-auto w-full">
          <div className="relative overflow-hidden rounded-[8px] bg-white dark:bg-zinc-900 text-foreground border-4 border-foreground shadow-[6px_6px_0px_var(--neo-black)] p-6 md:p-8 font-sans">
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground border-b-2 border-foreground/10 pb-3 flex items-center justify-between">
                <span>{t("soft.title")}</span>
                <span className="w-2 h-2 rounded-full bg-foreground" />
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <Tag 
                      key={idx} 
                      variant="white" 
                      className="shadow-[1.5px_1.5px_0px_var(--neo-black)] flex items-center gap-1.5 text-xs py-1 px-3 bg-slate-50 dark:bg-zinc-800"
                    >
                      <Icon className="w-4 h-4 text-foreground shrink-0 stroke-[2px]" />
                      <span className="font-bold text-foreground">{skill.name}</span>
                    </Tag>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* Technology Stack Section */}
      <AnimateIn>
        <section className="px-4 space-y-8">
          <SectionTitle
            title={t("stack.title")}
            highlightedWord={t("stack.highlight")}
            highlightColor="blue"
            description={t("stack.desc")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techStack.map((stack) => (
              <div 
                key={stack.category} 
                className="bg-white dark:bg-zinc-900 border-4 border-foreground rounded-[8px] p-5 shadow-[4px_4px_0px_var(--neo-black)] flex flex-col space-y-3"
              >
                <h4 className="text-xs font-black uppercase tracking-widest text-foreground border-b-2 border-foreground/20 pb-1.5 flex items-center justify-between">
                  <span>{stack.category}</span>
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {stack.tags.map((tag) => {
                    const iconUrl = getTechIconUrl(tag);
                    const needsDarkModeInversion = iconUrl && (
                      ["github", "vercel", "next.js", "nextjs", "git", "draw.io", "drawio", "diagramsdotnet", "uml"].includes(tag.toLowerCase()) ||
                      iconUrl === "/ea.png"
                    );
                    return (
                      <Tag key={tag} variant="white" className="shadow-[1.5px_1.5px_0px_var(--neo-black)] flex items-center gap-1.5 text-[11px] py-0.5">
                        {iconUrl && (
                          <img 
                            src={iconUrl} 
                            alt={tag} 
                            className={`w-3.5 h-3.5 object-contain ${needsDarkModeInversion ? "dark:invert" : ""}`}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        )}
                        <span>{tag}</span>
                      </Tag>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>



      {/* Academic Journey Section */}
      <section className="px-4 space-y-8">
        <div className="border-l-4 border-neo-accent pl-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground leading-none">
            {t("journey.title")} <span className="text-neo-accent">{t("journey.highlight")}</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimateIn className="h-full">
            <Card variant="white" className="relative overflow-hidden flex flex-col h-full">
              <GraduationCap className="absolute right-4 top-4 w-28 h-28 text-foreground opacity-5 stroke-[2px] pointer-events-none" />
              
              <CardHeader className="space-y-4 relative z-10">
                <Badge variant="black">{t("journey.edu.badge")}</Badge>
                <CardTitle className="text-2xl font-black uppercase leading-tight text-foreground">
                  {t("journey.edu.degree")}
                </CardTitle>
                <CardDescription className="text-foreground/80 text-sm font-bold">
                  {t("journey.edu.school")}
                </CardDescription>
                <p className="text-xs font-black uppercase tracking-widest text-foreground bg-white dark:bg-zinc-900 inline-block px-2.5 py-1 rounded-[4px] self-start border-2 border-foreground shadow-[2px_2px_0px_var(--neo-black)]">
                  {t("journey.edu.gpa")}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 relative z-10 space-y-4 mt-4">
                <h5 className="text-xs font-black uppercase tracking-wider text-foreground/70 border-b border-foreground/20 pb-1">
                  {t("journey.edu.coursework")}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span 
                      key={course} 
                      className="text-[10px] font-black tracking-wider uppercase bg-zinc-200 dark:bg-zinc-800 text-foreground px-2.5 py-1 rounded-[4px]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimateIn>
        </div>
      </section>

      {/* Let's Connect Section */}
      <AnimateIn>
        <section id="contact" className="px-4 scroll-mt-20">
          <div className="bg-black text-white dark:bg-zinc-950 dark:text-zinc-50 border-4 border-foreground rounded-[8px] p-8 md:p-12 text-center space-y-6 shadow-[8px_8px_0px_var(--neo-black)] transition-all">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              {t("connect.title")} <span className="text-neo-yellow">{t("connect.highlight")}</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-zinc-300 font-medium leading-relaxed">
              {t("connect.text")}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="https://github.com/dimasrofipurnomo" target="_blank" className="block">
                <Button variant="white" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  {t("connect.github")}
                </Button>
              </Link>
              <Link href="http://Linkedin.com/in/dimas-rofi-purnomo-366646330" target="_blank" className="block">
                <Button variant="blue" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  {t("connect.linkedin")}
                </Button>
              </Link>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dimasrofipurnomo@gmail.com" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="yellow" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {t("connect.email")}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </AnimateIn>

    </div>
  );
}
