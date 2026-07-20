"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { 
  Briefcase, 
  Building, 
  User, 
  Lightbulb, 
  MessageSquare, 
  ClipboardList, 
  Users, 
  Brain, 
  Calendar, 
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Code,
  Layers,
  PenTool,
  X,
  Maximize2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { getTechIconUrl } from "@/lib/techIcons";
import { 
  organizations, 
  eventGallery 
} from "@/data/organizations";
import { cn } from "@/lib/utils";



interface GalleryCardProps {
  event: typeof eventGallery[0];
  eventTitle: string;
  onZoom: (url: string) => void;
}

function GalleryCard({ event, eventTitle, onZoom }: GalleryCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!event.imageUrls || event.imageUrls.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % event.imageUrls.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [event.imageUrls]);

  return (
    <div 
      onClick={() => onZoom(event.imageUrls[currentIndex])}
      className="bg-white dark:bg-zinc-900 neo-border rounded-[8px] p-4 shadow-[6px_6px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_var(--neo-black)] transition-all duration-150 cursor-pointer group space-y-3"
    >
      <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-[6px] border-2 border-foreground overflow-hidden flex items-center justify-center">
        {event.imageUrls.map((url, idx) => (
          <div
            key={url + idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <Image
              src={url}
              alt={eventTitle}
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-200"
            />
          </div>
        ))}
        
        {/* Hover zoom overlay */}
        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
          <div className="bg-white text-black p-1.5 rounded-full neo-border shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>

        {/* Sliding dots indicator if multiple images */}
        {event.imageUrls.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-30">
            {event.imageUrls.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all border border-foreground/30",
                  idx === currentIndex ? "bg-white scale-125 shadow-[0.5px_0.5px_0px_rgba(0,0,0,0.5)]" : "bg-white/50"
                )}
              />
            ))}
          </div>
        )}
      </div>
      <h4 className="text-xs font-black uppercase text-foreground tracking-wide leading-none text-center">
        {eventTitle}
      </h4>
    </div>
  );
}

export default function Home() {
  const tHome = useTranslations("Home");
  const tAbout = useTranslations("About");
  const tProjects = useTranslations("Projects");
  const tOrganization = useTranslations("Organization");
  const tDb = useTranslations("Database");
  const tNavbar = useTranslations("Navbar");
  const locale = useLocale();

  // Project filtering state
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Experience lightbox state
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Active language code based on locale
  const activeLang = locale === "id" ? "id" : "en";



  // Gallery static titles translation
  const eventTitles = {
    en: [
      "HIMATIF UNEJ", 
      "Information Technology Challenge (ITeC)", 
      "Character of Development", 
      "Coaching GEMASTIK Program", 
      "IT Development Training", 
      "SkripsiTalk",
      "IThings",
      "Makrab HIMATIF UNEJ"
    ],
    id: [
      "HIMATIF UNEJ", 
      "Information Technology Challenge (ITeC)", 
      "Character of Development", 
      "Program Pembinaan GEMASTIK", 
      "IT Development Training", 
      "SkripsiTalk",
      "IThings",
      "Makrab HIMATIF UNEJ"
    ]
  };

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };



  // Dynamically load soft skills with safe fallback
  let softSkills: { name: string; icon: React.ComponentType<{ className?: string }> }[] = [];
  try {
    const softRaw = tAbout.raw("soft") as Record<string, string>;
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
    const coursesRaw = tAbout.raw("journey.edu.courses");
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
      category: tAbout("stack.categories.languages"),
      tags: ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "PYTHON", "GOLANG", "PHP", "CSHARP"],
    },
    {
      category: tAbout("stack.categories.frameworks"),
      tags: ["FLUTTER", "REACT", "NEXT.JS", "LARAVEL", "TAILWIND CSS", "BOOTSTRAP"],
    },
    {
      category: tAbout("stack.categories.databases"),
      tags: ["POSTGRESQL", "MYSQL", "SUPABASE", "FIREBASE"],
    },
    {
      category: tAbout("stack.categories.designDoc"),
      tags: ["DRAW.IO", "FIGMA", "CANVA", "ENTERPRISE ARCHITECTURE"],
    },
    {
      category: tAbout("stack.categories.deployment"),
      tags: ["VERCEL", "RAILWAY"],
    },
    {
      category: tAbout("stack.categories.pm"),
      tags: ["TRELLO", "JIRA", "NOTION"],
    },
    {
      category: tAbout("stack.categories.versionControl"),
      tags: ["GIT", "GITHUB"],
    },
    {
      category: tAbout("stack.categories.testing"),
      tags: ["POSTMAN", "SWAGGER", "MAZE"],
    },
  ];

  // Projects logic
  const getLearnedPoints = (categoryKey: string): string[] => {
    try {
      const raw = tProjects.raw(`learned.${categoryKey}`) as Record<string, string>;
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

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    return project.category?.some(
      (cat) => cat.toLowerCase() === selectedFilter.toLowerCase()
    );
  });

  const getFilterLabel = (filter: string) => {
    if (filter === "All") return locale === "id" ? "Semua" : "All";
    if (filter === "System Analyst") return tAbout("expertise.analysis.title");
    return filter;
  };

  return (
    <div className="space-y-6 md:space-y-8">
      
      {/* 1. Home Section */}
      <section id="home" className="min-h-[50vh] flex flex-col justify-center py-4 md:py-6 scroll-mt-20">
        <div className="px-4 mb-8 select-none flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground">
          <span className="px-2 py-0.5 bg-white dark:bg-zinc-900 border-2 border-foreground rounded-[4px] shadow-[2px_2px_0px_var(--neo-black)] text-[10px]">
            01
          </span>
          <span>{tNavbar("home")}</span>
        </div>
        <div className="space-y-16 md:space-y-24">
          <AnimateIn>
            <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none select-none text-foreground">
                {tHome("hero.title")} <br />
                <span className="relative inline-block text-neo-blue mt-3 pb-2">
                  {tHome("hero.portfolio")}
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-neo-blue rounded-full" />
                </span>
              </h1>
              <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-3xl mx-auto">
                {tHome("hero.subtitle")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link href="#projects" onClick={(e) => handleAnchorClick(e, "projects")}>
                  <Button variant="blue">{tHome("hero.explore")}</Button>
                </Link>
                <Link href="#contact" onClick={(e) => handleAnchorClick(e, "contact")}>
                  <Button variant="white">{tHome("hero.connect")}</Button>
                </Link>
              </div>
            </div>
          </AnimateIn>

          <div className="px-4 space-y-8">
            <SectionTitle 
              title={tHome("find.title")} 
              highlightedWord={tHome("find.highlight")} 
              highlightColor="pink" 
              description={tHome("find.desc")}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimateIn delay={0} className="h-full">
                <Card variant="pink" interactive className="flex flex-col h-full">
                  <CardHeader>
                    <User className="w-8 h-8 mb-2 stroke-[2.5px]" />
                    <CardTitle>{tHome("find.about.title")}</CardTitle>
                    <CardDescription className="text-black/85">{tHome("find.about.subtitle")}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 text-black/90">
                    {tHome("find.about.text")}
                  </CardContent>
                  <CardFooter>
                    <Link href="#about" onClick={(e) => handleAnchorClick(e, "about")} className="text-xs font-black uppercase tracking-wider hover:underline">
                      {tHome("find.about.cta")}
                    </Link>
                  </CardFooter>
                </Card>
              </AnimateIn>

              <AnimateIn delay={0.1} className="h-full">
                <Card variant="yellow" interactive className="flex flex-col h-full">
                  <CardHeader>
                    <Briefcase className="w-8 h-8 mb-2 stroke-[2.5px]" />
                    <CardTitle>{tHome("find.projects.title")}</CardTitle>
                    <CardDescription className="text-black/85">{tHome("find.projects.subtitle")}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 text-black/90">
                    {tHome("find.projects.text")}
                  </CardContent>
                  <CardFooter>
                    <Link href="#projects" onClick={(e) => handleAnchorClick(e, "projects")} className="text-xs font-black uppercase tracking-wider hover:underline">
                      {tHome("find.projects.cta")}
                    </Link>
                  </CardFooter>
                </Card>
              </AnimateIn>

              <AnimateIn delay={0.2} className="h-full">
                <Card variant="blue" interactive className="flex flex-col h-full text-white">
                  <CardHeader>
                    <Building className="w-8 h-8 mb-2 stroke-[2.5px]" />
                    <CardTitle>{tHome("find.experience.title")}</CardTitle>
                    <CardDescription className="text-white/85">{tHome("find.experience.subtitle")}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 text-white/90">
                    {tHome("find.experience.text")}
                  </CardContent>
                  <CardFooter>
                    <Link href="#experience" onClick={(e) => handleAnchorClick(e, "experience")} className="text-xs font-black uppercase tracking-wider hover:underline">
                      {tHome("find.experience.cta")}
                    </Link>
                  </CardFooter>
                </Card>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="flex flex-col justify-center py-4 md:py-6 scroll-mt-20">
        <div className="px-4 mb-8 select-none flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground">
          <span className="px-2 py-0.5 bg-white dark:bg-zinc-900 border-2 border-foreground rounded-[4px] shadow-[2px_2px_0px_var(--neo-black)] text-[10px]">
            02
          </span>
          <span>{tNavbar("about")}</span>
        </div>
        <div className="space-y-16 md:space-y-24">
          {/* About Hero Section */}
          <AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center px-4">
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
                  {tAbout("hero.title")}
                </h2>
                <div className="bg-black text-neo-yellow dark:bg-zinc-950 p-4 neo-border rounded-[8px] inline-block shadow-[4px_4px_0px_var(--neo-black)]">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
                    {tAbout("hero.subtitle1")}
                  </h3>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mt-2">
                    {tAbout("hero.subtitle2")}
                  </h3>
                </div>
              </div>
              <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-xl">
                {tAbout("hero.text")}
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
                  href="#projects" 
                  onClick={(e) => handleAnchorClick(e, "projects")}
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
          </div>
        </AnimateIn>

        {/* Academic Journey Section */}
        <div className="space-y-8">
          <div className="border-l-4 border-neo-accent pl-4">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground leading-none">
              {tAbout("journey.title")} <span className="text-neo-accent">{tAbout("journey.highlight")}</span>
            </h3>
          </div>

          <div className="max-w-2xl mx-auto">
            <AnimateIn className="h-full">
              <Card variant="white" className="relative overflow-hidden flex flex-col h-full">
                <GraduationCap className="absolute right-4 top-4 w-28 h-28 text-foreground opacity-5 stroke-[2px] pointer-events-none" />
                
                <CardHeader className="space-y-4 relative z-10">
                  <Badge variant="black">{tAbout("journey.edu.badge")}</Badge>
                  <CardTitle className="text-2xl font-black uppercase leading-tight text-foreground">
                    {tAbout("journey.edu.degree")}
                  </CardTitle>
                  <CardDescription className="text-foreground/80 text-sm font-bold">
                    {tAbout("journey.edu.school")}
                  </CardDescription>
                  <p className="text-xs font-black uppercase tracking-widest text-foreground bg-white dark:bg-zinc-900 inline-block px-2.5 py-1 rounded-[4px] self-start border-2 border-foreground shadow-[2px_2px_0px_var(--neo-black)]">
                    {tAbout("journey.edu.gpa")}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 relative z-10 space-y-4 mt-4">
                  <h5 className="text-xs font-black uppercase tracking-wider text-foreground/70 border-b border-foreground/20 pb-1">
                    {tAbout("journey.edu.coursework")}
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
        </div>
        </div>
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="flex flex-col justify-center py-4 md:py-6 scroll-mt-20">
        <div className="px-4 mb-8 select-none flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground">
          <span className="px-2 py-0.5 bg-white dark:bg-zinc-900 border-2 border-foreground rounded-[4px] shadow-[2px_2px_0px_var(--neo-black)] text-[10px]">
            03
          </span>
          <span>{tNavbar("projects")}</span>
        </div>
        <div className="space-y-16 md:space-y-24">
          {/* Header & Filters */}
          <AnimateIn>
          <div className="space-y-8 px-4">
            <div className="space-y-3 text-center flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
                {tProjects("experience.title")}
              </h2>
              <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto">
                {tProjects("experience.subtitle")}
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
          </div>
        </AnimateIn>

        {/* Dynamic Projects Grid */}
        <div className="px-4">
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
              <p className="text-foreground/60 font-bold">{tProjects("experience.noProjects")}</p>
            </div>
          )}
        </div>

        {/* What I Learned Section */}
        <div className="px-4 space-y-8">
          <div className="border-l-4 border-neo-blue pl-4">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground leading-none">
              {tProjects("learned.title")}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <AnimateIn delay={0} className="h-full">
              <Card variant="white" className="flex flex-col h-full shadow-[6px_6px_0px_var(--neo-black)]">
                <CardHeader className="flex flex-row items-center gap-3 border-b-2 border-foreground/10 pb-3 mb-4">
                  <div className="p-2 bg-neo-yellow text-black neo-border rounded-[4px] shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                    <Layers className="w-5 h-5 stroke-[2.5px]" />
                  </div>
                  <CardTitle className="text-base font-black uppercase text-foreground">
                    {tProjects("learned.analysis.title")}
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
                    {tProjects("learned.development.title")}
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
                    {tProjects("learned.uiux.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-semibold text-xs text-foreground/80">
                    {getLearnedPoints("uiux").map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateIn>

          </div>
        </div>
        </div>
      </section>

      {/* 4. Experience Section */}
      <section id="experience" className="flex flex-col justify-center py-4 md:py-6 scroll-mt-20 relative">
        <div className="px-4 mb-8 select-none flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground">
          <span className="px-2 py-0.5 bg-white dark:bg-zinc-900 border-2 border-foreground rounded-[4px] shadow-[2px_2px_0px_var(--neo-black)] text-[10px]">
            04
          </span>
          <span>{tNavbar("experience")}</span>
        </div>
        <div className="space-y-16 md:space-y-24 relative w-full">
          {/* Header Section */}
          <AnimateIn>
          <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
                {tOrganization("title")}
              </h2>
              <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed">
                {tOrganization("subtitle")}
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Timeline Section */}
        <div className="px-4 space-y-12 relative max-w-5xl mx-auto w-full">
          {/* Center line axis */}
          <div className="absolute left-[5%] md:left-1/2 top-0 bottom-0 w-1 bg-foreground -translate-x-1/2 z-0" />

          <div className="space-y-12 relative z-10">
            {organizations.map((org, idx) => {
              const isLeft = idx % 2 === 0;
              const orgName = tDb.has(`organizations.${idx}.name`) ? tDb(`organizations.${idx}.name`) : org.name;
              const orgRole = tDb.has(`organizations.${idx}.role`) ? tDb(`organizations.${idx}.role`) : org.role;
              const orgPeriod = tDb.has(`organizations.${idx}.period`) ? tDb(`organizations.${idx}.period`) : org.period;
              const orgDesc = tDb.has(`organizations.${idx}.description`) ? tDb(`organizations.${idx}.description`) : org.description;

              // Define node indicator dot colors
              const markerColors = {
                yellow: "bg-neo-yellow text-black",
                pink: "bg-neo-pink text-black",
                blue: "bg-neo-blue text-white",
                orange: "bg-orange-500 text-white",
                green: "bg-emerald-500 text-white"
              };
              const markerBg = markerColors[org.color as keyof typeof markerColors] || "bg-neo-yellow text-black";

              // Define icons based on the color type
              const OrgIcon = org.color === "yellow" 
                ? Users 
                : org.color === "pink" 
                  ? Users 
                  : ClipboardList;

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Vertical timeline node circle dot */}
                  <div 
                    className={cn(
                      "absolute left-[5%] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full neo-border flex items-center justify-center shadow-[2px_2px_0px_var(--neo-black)] z-20 transition-transform",
                      markerBg
                    )}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-current" />
                  </div>

                  {/* Card Container alternating sides */}
                  <div 
                    className={cn(
                      "w-[90%] md:w-[45%] ml-[10%] md:ml-0",
                      isLeft ? "md:mr-auto md:text-left" : "md:ml-auto"
                    )}
                  >
                    <AnimateIn delay={idx * 0.15}>
                      <Card className="shadow-[6px_6px_0px_var(--neo-black)] overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-3 border-b-2 border-foreground/10 pb-3 mb-3">
                          {/* Logo Frame */}
                          <div className={cn("w-10 h-10 flex items-center justify-center neo-border rounded-[6px] shrink-0", markerBg)}>
                            <OrgIcon className="w-5 h-5 stroke-[2.5px]" />
                          </div>
                          <div>
                            <CardTitle className="text-base font-black uppercase text-foreground leading-tight">
                              {orgRole}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[10px] font-black uppercase tracking-wider text-foreground/50">
                                {orgName}
                              </span>
                              <span className="text-[10px] font-black uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-foreground px-1.5 py-0.5 rounded-[4px] border border-foreground/20">
                                {orgPeriod}
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p className="text-xs text-foreground/80 font-bold leading-relaxed">
                            {orgDesc}
                          </p>
                          
                          {/* Tags */}
                          {org.tags && (
                            <div className="flex flex-wrap gap-1.5">
                              {org.tags.map((tag) => (
                                <span 
                                  key={tag} 
                                  className="text-[9px] font-black uppercase tracking-wider bg-slate-100 dark:bg-zinc-800 text-foreground px-2 py-0.5 border-2 border-foreground rounded-[4px]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </AnimateIn>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Event Gallery Section */}
        <div className="px-4 space-y-8 max-w-5xl mx-auto w-full">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-foreground inline-block border-b-4 border-foreground pb-2 leading-none">
              {tOrganization("gallery.title")}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventGallery.map((event, idx) => (
              <AnimateIn key={idx} delay={(idx % 3) * 0.1}>
                <GalleryCard 
                  event={event} 
                  eventTitle={eventTitles[activeLang][idx] || event.title}
                  onZoom={(url) => setLightboxImage(url)}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* 5. Skills Section */}
      <section id="skills" className="flex flex-col justify-center py-4 md:py-6 scroll-mt-20">
        <div className="px-4 mb-8 select-none flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground">
          <span className="px-2 py-0.5 bg-white dark:bg-zinc-900 border-2 border-foreground rounded-[4px] shadow-[2px_2px_0px_var(--neo-black)] text-[10px]">
            05
          </span>
          <span>{tNavbar("skills")}</span>
        </div>
        <div className="space-y-16 md:space-y-24">
          {/* Section Title */}
          <AnimateIn>
          <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
                {tNavbar("skills")}
              </h2>
            </div>
          </div>
        </AnimateIn>

        {/* Soft Skills Section */}
        <div className="px-4 space-y-8 max-w-5xl mx-auto w-full">
          <div className="border-l-4 border-foreground pl-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground leading-none">
              {tAbout("soft.title")}
            </h3>
          </div>

          <AnimateIn>
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
          </AnimateIn>
        </div>

        {/* Technology Stack Section */}
        <div className="px-4 space-y-8 max-w-5xl mx-auto w-full">
          <div className="border-l-4 border-foreground pl-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground leading-none">
              {tAbout("stack.title")}
            </h3>
            {tAbout("stack.desc") && (
              <p className="text-xs md:text-sm text-foreground/75 font-semibold mt-2">
                {tAbout("stack.desc")}
              </p>
            )}
          </div>

          <AnimateIn>
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
          </AnimateIn>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="flex flex-col justify-center py-4 md:py-6 scroll-mt-20">
        <div className="px-4 mb-8 select-none flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground">
          <span className="px-2 py-0.5 bg-white dark:bg-zinc-900 border-2 border-foreground rounded-[4px] shadow-[2px_2px_0px_var(--neo-black)] text-[10px]">
            06
          </span>
          <span>{tNavbar("contact")}</span>
        </div>
        <AnimateIn>
          <div className="px-4">
            <div className="bg-black text-white dark:bg-zinc-950 dark:text-zinc-50 border-4 border-foreground rounded-[8px] p-8 md:p-12 text-center space-y-6 shadow-[8px_8px_0px_var(--neo-black)] transition-all">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                {tAbout("connect.title")} <span className="text-neo-yellow">{tAbout("connect.highlight")}</span>
              </h2>
              <p className="max-w-2xl mx-auto text-sm md:text-base text-zinc-300 font-medium leading-relaxed">
                {tAbout("connect.text")}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link href="https://github.com/dimasrofipurnomo" target="_blank" className="block">
                  <Button variant="white" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    {tAbout("connect.github")}
                  </Button>
                </Link>
                <Link href="http://Linkedin.com/in/dimas-rofi-purnomo-366646330" target="_blank" className="block">
                  <Button variant="blue" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    {tAbout("connect.linkedin")}
                  </Button>
                </Link>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dimasrofipurnomo@gmail.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="yellow" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {tAbout("connect.email")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Lightbox Modal overlay for Event Photos */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 bg-white text-black p-2 rounded-full neo-border shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer"
            aria-label="Close viewer"
          >
            <X className="w-6 h-6 stroke-[2.5px]" />
          </button>
          
          <div className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center p-1.5">
            <div className="relative w-full h-[75vh]">
              <Image 
                src={lightboxImage} 
                alt="Zoomed Event Photo Certificate" 
                fill
                className="object-contain neo-border shadow-[8px_8px_0px_rgba(255,255,255,1)] bg-zinc-900 rounded-[8px]"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
