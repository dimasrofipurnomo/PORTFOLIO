"use client";

import React, { useState, use } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { 
  Lightbulb, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2 
} from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  // Resolve params Promise
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // Find project details
  const project = projects.find((p) => p.slug === slug);

  // If project not found, redirect to Next.js default 404 page
  if (!project) {
    notFound();
  }

  // Load translations
  const t = useTranslations("Projects.details");
  const tDb = useTranslations("Database.projects." + project.slug);
  const tNavbar = useTranslations("Navbar");
  const activeLang = tNavbar("home") === "Beranda" ? "id" : "en";

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

      {/* 2. Project Overview Section */}
      <section className="px-4 space-y-6 max-w-4xl mx-auto">
        <Card variant="white" className="shadow-[8px_8px_0px_var(--neo-black)] p-6 md:p-8 space-y-4">
          <CardHeader className="border-b-4 border-foreground pb-2 mb-4 flex flex-row items-center gap-2.5">
            <Lightbulb className="w-6 h-6 stroke-[2.5px] text-foreground" />
            <CardTitle className="text-2xl font-black uppercase text-foreground">
              {t("overview")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {(tDb.has("overview") ? tDb("overview") : project.overview)
              .split("\n\n")
              .filter((p: string) => p.trim() !== "")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-sm md:text-base font-semibold text-foreground/80 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
          </CardContent>
        </Card>
      </section>


      {/* 4. Worked With (Detailed Tech Stack) */}
      {project.techStackDetailed && (
        <section className="px-4 space-y-8 max-w-4xl mx-auto">
          <h4 className="text-sm font-black uppercase tracking-widest text-foreground/60 text-center">{t("forged")}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.techStackDetailed.map((stack) => (
              <div 
                key={stack.category} 
                className="space-y-4 bg-white dark:bg-zinc-900 border-4 border-foreground rounded-[8px] p-5 shadow-[4px_4px_0px_var(--neo-black)]"
              >
                <div className="space-y-3">
                  <h5 className="text-xs font-black uppercase tracking-wider text-foreground border-b-2 border-foreground/20 pb-1.5 flex items-center justify-between">
                    <span>{stack.category}</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground border border-foreground" />
                  </h5>
                  <div className="space-y-2.5 pt-1">
                    {stack.tags.map((tag) => {
                      const dashIndex = tag.indexOf(" — ");
                      if (dashIndex !== -1) {
                        const name = tag.substring(0, dashIndex);
                        const desc = tag.substring(dashIndex + 3);
                        // Lookup translated tag description
                        const translationKey = `techStack.${name.replace(/\./g, "-")}`;
                        const descText = tDb.has(translationKey) ? tDb(translationKey) : desc;
                        return (
                          <div 
                            key={tag} 
                            className="flex items-start gap-2 text-foreground/80 text-xs md:text-sm leading-relaxed"
                          >
                            <span className="text-foreground/40 font-black text-base leading-none select-none mt-[1px]">•</span>
                            <span className="font-semibold text-foreground/80">
                              <strong className="font-black text-foreground">{name}</strong> — {descText}
                            </span>
                          </div>
                        );
                      }
                      return (
                        <div 
                          key={tag} 
                          className="flex items-start gap-2 text-foreground/80 text-xs md:text-sm leading-relaxed"
                        >
                          <span className="text-foreground/40 font-black text-base leading-none select-none mt-[1px]">•</span>
                          <strong className="font-black text-foreground">{tag}</strong>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}



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
