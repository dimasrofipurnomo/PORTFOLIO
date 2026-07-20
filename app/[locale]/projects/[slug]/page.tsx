"use client";

import React, { useState, use } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2,
  AlertCircle,
  Target,
  Sparkles,
  GitBranch,
  User,
  TrendingUp,
  Wrench,
  HelpCircle
} from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

type TranslationFn = ReturnType<typeof useTranslations>;

interface CaseStudySection {
  heading: string;
  paragraphs: string[];
}

const parseOverview = (text: string): CaseStudySection[] => {
  const normalized = text.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n").map((l) => l.trim());
  const sections: CaseStudySection[] = [];
  let currentSection: CaseStudySection | null = null;

  const headingKeywords = [
    "problem", "goal", "solution", "development process", "my contributions", "impact", "technologies & tools",
    "masalah", "permasalahan", "tujuan", "solusi", "proses pengembangan", "kontribusi saya", "dampak", "teknologi & alat", "teknologi & perangkat", "teknologi dan alat", "teknologi & tools"
  ];

  for (const line of lines) {
    if (!line) continue;

    if (headingKeywords.includes(line.toLowerCase())) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = { heading: line, paragraphs: [] };
    } else {
      if (currentSection) {
        currentSection.paragraphs.push(line);
      } else {
        currentSection = { heading: "", paragraphs: [line] };
      }
    }
  }
  if (currentSection) {
    sections.push(currentSection);
  }
  return sections;
};

const getSectionConfig = (heading: string) => {
  const h = heading.toLowerCase();
  if (h.includes("problem") || h.includes("masalah")) {
    return {
      icon: AlertCircle,
      iconColor: "text-red-500",
      bgColor: "bg-red-500/10 dark:bg-red-500/20",
      borderColor: "border-red-500",
      accentBg: "bg-red-500",
    };
  }
  if (h.includes("goal") || h.includes("tujuan")) {
    return {
      icon: Target,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
      borderColor: "border-blue-500",
      accentBg: "bg-blue-500",
    };
  }
  if (h.includes("solution") || h.includes("solusi")) {
    return {
      icon: Sparkles,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
      borderColor: "border-amber-500",
      accentBg: "bg-neo-yellow",
    };
  }
  if (h.includes("process") || h.includes("proses")) {
    return {
      icon: GitBranch,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
      borderColor: "border-purple-500",
      accentBg: "bg-purple-500",
    };
  }
  if (h.includes("contribution") || h.includes("kontribusi")) {
    return {
      icon: User,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
      borderColor: "border-emerald-500",
      accentBg: "bg-emerald-500",
    };
  }
  if (h.includes("impact") || h.includes("dampak")) {
    return {
      icon: TrendingUp,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
      borderColor: "border-pink-500",
      accentBg: "bg-neo-pink",
    };
  }
  if (h.includes("tech") || h.includes("tools") || h.includes("teknologi") || h.includes("alat") || h.includes("perangkat") || h.includes("perkakas")) {
    return {
      icon: Wrench,
      iconColor: "text-sky-500",
      bgColor: "bg-sky-500/10 dark:bg-sky-500/20",
      borderColor: "border-sky-500",
      accentBg: "bg-neo-blue",
    };
  }
  return {
    icon: HelpCircle,
    iconColor: "text-zinc-500",
    bgColor: "bg-zinc-500/10 dark:bg-zinc-500/20",
    borderColor: "border-zinc-500",
    accentBg: "bg-zinc-500",
  };
};

const renderSectionContent = (
  section: CaseStudySection,
  project: Project,
  tDb: TranslationFn
) => {
  const isTech = section.heading.toLowerCase().includes("tech") || 
                 section.heading.toLowerCase().includes("tools") || 
                 section.heading.toLowerCase().includes("teknologi") || 
                 section.heading.toLowerCase().includes("alat") || 
                 section.heading.toLowerCase().includes("perangkat") || 
                 section.heading.toLowerCase().includes("perkakas");

  if (isTech) {
    const techs = section.paragraphs[0]
      ? section.paragraphs[0].split(",").map(t => t.trim()).filter(Boolean)
      : [];
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2.5">
          {techs.map((tech) => (
            <span 
              key={tech} 
              className="px-3.5 py-1.5 bg-neo-yellow dark:bg-zinc-800 text-black dark:text-white font-black uppercase text-xs md:text-sm border-2 border-foreground rounded-[4px] shadow-[2px_2px_0px_var(--neo-black)]"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {project.techStackDetailed && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t-2 border-foreground/15">
            {project.techStackDetailed.map((stack) => (
              <div 
                key={stack.category} 
                className="space-y-3 bg-white/50 dark:bg-zinc-900/50 border-2 border-foreground rounded-[6px] p-4 shadow-[2px_2px_0px_var(--neo-black)]"
              >
                <h5 className="text-xs font-black uppercase tracking-wider text-foreground border-b-2 border-foreground/10 pb-1 flex items-center justify-between">
                  <span>{stack.category}</span>
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                </h5>
                <div className="space-y-2 pt-1">
                  {stack.tags.map((tag: string) => {
                    const dashIndex = tag.indexOf(" — ");
                    if (dashIndex !== -1) {
                      const name = tag.substring(0, dashIndex);
                      const desc = tag.substring(dashIndex + 3);
                      const translationKey = `techStack.${name.replace(/\./g, "-")}`;
                      const descText = tDb.has(translationKey) ? tDb(translationKey) : desc;
                      return (
                        <div 
                          key={tag} 
                          className="flex items-start gap-2 text-foreground/80 text-xs leading-relaxed"
                        >
                          <span className="text-foreground/45 font-black text-sm leading-none select-none mt-[1px]">•</span>
                          <span className="font-semibold text-foreground/80">
                            <strong className="font-black text-foreground">{name}</strong> — {descText}
                          </span>
                        </div>
                      );
                    }
                    return (
                      <div 
                        key={tag} 
                        className="flex items-start gap-2 text-foreground/80 text-xs leading-relaxed"
                      >
                        <span className="text-foreground/45 font-black text-sm leading-none select-none mt-[1px]">•</span>
                        <strong className="font-black text-foreground">{tag}</strong>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  const listItems: string[] = [];
  const paragraphs: string[] = [];

  for (const p of section.paragraphs) {
    const trimmed = p.trim();
    if (trimmed.startsWith("-") || trimmed.startsWith("•") || trimmed.startsWith("*")) {
      listItems.push(trimmed.substring(1).trim());
    } else {
      paragraphs.push(trimmed);
    }
  }

  return (
    <div className="space-y-4">
      {paragraphs.map((p, idx) => (
        <p key={idx} className="text-sm md:text-base font-semibold text-foreground/80 leading-relaxed">
          {p}
        </p>
      ))}
      
      {listItems.length > 0 && (
        <ul className="space-y-2 pt-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base font-semibold text-foreground/80 leading-relaxed">
              <span className="text-neo-blue font-black text-lg leading-none select-none mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  // Resolve params Promise
  const resolvedParams = use(params);
  const { slug, locale } = resolvedParams;

  // Find project details
  const project = projects.find((p) => p.slug === slug);

  // If project not found, redirect to Next.js default 404 page
  if (!project) {
    notFound();
  }

  // Load translations
  const t = useTranslations("Projects.details");
  const tDb = useTranslations("Database.projects." + project.slug);
  const activeLang = locale === "id" ? "id" : "en";

  const overviewText = tDb.has("overview") ? tDb("overview") : project.overview;
  const parsedSections = parseOverview(overviewText);

  // Interactive UI States
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  // Find other projects and sort them so those sharing a category come first
  const allOtherProjects = React.useMemo(() => {
    const related = projects.filter((p) => p.slug !== slug && p.category.some((cat) => project.category.includes(cat)));
    const unrelated = projects.filter((p) => p.slug !== slug && !p.category.some((cat) => project.category.includes(cat)));
    return [...related, ...unrelated];
  }, [slug, project.category]);

  const [otherProjectIndex, setOtherProjectIndex] = useState(0);

  // Get up to 3 projects starting from otherProjectIndex (with wrapping)
  const visibleProjects = React.useMemo(() => {
    if (allOtherProjects.length <= 3) {
      return allOtherProjects;
    }
    const result = [];
    for (let i = 0; i < 3; i++) {
      const idx = (otherProjectIndex + i) % allOtherProjects.length;
      result.push(allOtherProjects[idx]);
    }
    return result;
  }, [allOtherProjects, otherProjectIndex]);

  const nextOtherProjects = () => {
    setOtherProjectIndex((prev) => (prev + 1) % allOtherProjects.length);
  };

  const prevOtherProjects = () => {
    setOtherProjectIndex((prev) => 
      prev === 0 ? allOtherProjects.length - 1 : prev - 1
    );
  };


  // Handlers for Showcase Gallery Carousel
  const nextShowcase = () => {
    if (!project.gallery) return;
    setShowcaseIndex((prev) => (prev + 1) % project.gallery!.length);
  };
  const prevShowcase = () => {
    if (!project.gallery) return;
    setShowcaseIndex((prev) => 
      prev === 0 ? project.gallery!.length - 1 : prev - 1
    );
  };

  return (
    <div className="space-y-16 md:space-y-24 py-12 md:py-16 relative">
      
      {/* 1. Project Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center px-4">
        
        {/* Left Info Panel */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-3">

            
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
              {tDb.has("title") ? tDb("title") : project.title} <br />
              {(tDb.has("subtitle") ? tDb("subtitle") : project.subtitle) && (
                <span className="text-neo-blue text-2xl md:text-3xl font-black normal-case block mt-1">
                  {tDb.has("subtitle") ? tDb("subtitle") : project.subtitle}
                </span>
              )}
            </h1>

            {tDb("subRole") && (
              <p className="text-xs font-black tracking-widest uppercase text-foreground/50">
                {tDb("subRole")}
              </p>
            )}

          </div>

          {/* Team Size Neo Brutalist box */}
          {project.teamSize && (
            <div className="p-4 bg-white dark:bg-zinc-900 neo-border rounded-[8px] shadow-[4px_4px_0px_var(--neo-black)] font-sans max-w-xs">
              <div className="text-[10px] font-black tracking-wider uppercase text-foreground/50">{t("teamSize")}</div>
              <div className="text-sm font-black uppercase text-foreground mt-1">
                {project.teamSize.includes("MEMBERS") 
                  ? (activeLang === "id" ? project.teamSize.replace("MEMBERS", "ANGGOTA") : project.teamSize)
                  : project.teamSize}
              </div>
            </div>
          )}
        </div>

        {/* Right Graphic Banner */}
        <div className="md:col-span-5 flex justify-center py-6">
          <div className="relative w-[300px] h-[220px] md:w-[380px] md:h-[280px]">
            {/* Decors behind the image */}
            <div className="absolute top-[-12px] right-[-12px] w-[80px] h-[80px] bg-neo-blue neo-border rounded-[8px] z-0" />
            <div className="absolute bottom-[-12px] left-[-12px] w-[80px] h-[80px] bg-neo-pink neo-border rounded-[8px] z-0" />

            <div 
              onClick={() => setLightboxImage(project.imageUrl || null)}
              className={cn(
                "absolute inset-0 neo-border rounded-[8px] overflow-hidden shadow-[8px_8px_0px_var(--neo-black)] z-10 cursor-pointer group flex items-center justify-center",
                project.imageBg || "bg-neo-yellow"
              )}
            >
              {project.imageUrl && (
                <Image
                  src={project.imageUrl}
                  alt={tDb("title")}
                  fill
                  className="object-contain p-4 transition-transform duration-200 group-hover:scale-102"
                />
              )}
              {/* Overlay maximize icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <div className="bg-white text-black p-2 rounded-full neo-border shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <Maximize2 className="w-5 h-5 stroke-[2.5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 2. Structured Case Study Layout */}
      <section className="px-4 space-y-12 max-w-4xl mx-auto">
        {parsedSections.map((section) => {
          if (!section.heading) return null;
          const config = getSectionConfig(section.heading);
          const IconComponent = config.icon;

          return (
            <Card 
              key={section.heading} 
              variant="white" 
              className="shadow-[8px_8px_0px_var(--neo-black)] p-6 md:p-8 space-y-4"
            >
              <CardHeader className="border-b-4 border-foreground pb-4 mb-4 flex flex-row items-center gap-3">
                <div className={cn("p-2 rounded-[6px] border-2 border-foreground shadow-[2px_2px_0px_rgba(0,0,0,1)] text-black", config.accentBg)}>
                  <IconComponent className="w-5 h-5 stroke-[2.5px]" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-black uppercase text-foreground">
                  {section.heading}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {renderSectionContent(section, project, tDb)}
              </CardContent>
            </Card>
          );
        })}
      </section>



      {/* 5. System Showcase (Gallery Showcase Carousel) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-4 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-foreground inline-block border-b-4 border-foreground pb-2 leading-none">
              {t("showcase")}
            </h3>
          </div>

          {/* Gallery showcase frame */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 border-4 border-foreground rounded-[8px] p-6 shadow-[6px_6px_0px_var(--neo-black)] relative">
            <div 
              onClick={() => setLightboxImage(project.gallery![showcaseIndex])}
              className={cn(
                "relative w-full aspect-video neo-border rounded-[8px] overflow-hidden cursor-pointer group flex items-center justify-center",
                project.imageBg || "bg-zinc-100 dark:bg-zinc-800"
              )}
            >
              <Image
                src={project.gallery[showcaseIndex]}
                alt={`Showcase ${showcaseIndex + 1}`}
                fill
                className="object-contain p-4 group-hover:scale-102 transition-transform"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white text-black p-2 rounded-full neo-border shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <Maximize2 className="w-5 h-5 stroke-[2.5px]" />
                </div>
              </div>
            </div>

            {/* Navigation row */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-black uppercase tracking-wider text-foreground/60">
                {t("screenshotOf", { current: showcaseIndex + 1, total: project.gallery.length })}
              </span>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevShowcase}
                  className="w-8 h-8 flex items-center justify-center bg-white dark:bg-zinc-800 text-foreground neo-border rounded-[4px] shadow-[2px_2px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextShowcase}
                  className="w-8 h-8 flex items-center justify-center bg-white dark:bg-zinc-800 text-foreground neo-border rounded-[4px] shadow-[2px_2px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}



      {/* 6. Related Projects Section */}
      {visibleProjects.length > 0 && (
        <section className="px-4 space-y-8">
          <div className="border-b-4 border-foreground pb-2 max-w-max">
            <h3 className="text-2xl font-black uppercase text-foreground">{t("other")}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          {allOtherProjects.length > 3 && (
            <div className="flex justify-center items-center gap-4 pt-2">
              <button 
                onClick={prevOtherProjects}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 text-foreground border-4 border-foreground rounded-[8px] shadow-[4px_4px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer"
                aria-label={activeLang === "id" ? "Proyek Sebelumnya" : "Previous Project"}
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5px]" />
              </button>
              
              <span className="text-xs font-black uppercase tracking-widest text-foreground/60 select-none">
                {otherProjectIndex + 1} / {allOtherProjects.length}
              </span>

              <button 
                onClick={nextOtherProjects}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 text-foreground border-4 border-foreground rounded-[8px] shadow-[4px_4px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer"
                aria-label={activeLang === "id" ? "Proyek Selanjutnya" : "Next Project"}
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5px]" />
              </button>
            </div>
          )}
        </section>
      )}

      {/* 7. Sticky Action Buttons for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t-4 border-foreground z-40 flex items-center justify-around gap-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <Link href={project.github || "https://github.com"} target="_blank" className="flex-1">
          <Button variant="yellow" className="w-full justify-center py-2.5 text-xs font-black shadow-[2px_2px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none">
            {t("liveDemo")}
          </Button>
        </Link>
        {project.github && (
          <Link href={project.github} target="_blank" className="flex-1">
            <Button variant="white" className="w-full justify-center py-2.5 text-xs font-black shadow-[2px_2px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              {t("githubRepo")}
            </Button>
          </Link>
        )}
      </div>

      {/* 8. Image Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          {/* Close button */}
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
                alt="Zoomed Visual Schema" 
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
