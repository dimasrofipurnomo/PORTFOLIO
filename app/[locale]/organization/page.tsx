"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { 
  Users, 
  ClipboardList, 
  X, 
  Maximize2
} from "lucide-react";
import { 
  organizations, 
  leadershipSkills, 
  eventGallery 
} from "@/data/organizations";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { AnimateIn } from "@/components/ui/AnimateIn";
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

export default function OrganizationPage() {
  const t = useTranslations("Organization");
  const tDb = useTranslations("Database");
  const locale = useLocale();

  // Lightbox overlay modal state
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Active language code based on locale
  const activeLang = locale === "id" ? "id" : "en";

  // Leadership skill category keys for mapping
  const skillCatKeys = ["pr", "lead", "pm", "team"];

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

  return (
    <div className="space-y-16 md:space-y-24 py-12 md:py-16 relative">
      
      {/* 1. Header Section */}
      <AnimateIn>
        <section className="flex flex-col items-center justify-center text-center gap-6 px-4">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
              {t("title")}
            </h1>
            <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </section>
      </AnimateIn>

      {/* 2. Timeline Section */}
      <section className="px-4 space-y-12 relative max-w-5xl mx-auto">
        
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
      </section>

      {/* 3. Event Gallery Section */}
      <section className="px-4 space-y-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-foreground inline-block border-b-4 border-foreground pb-2 leading-none">
            {t("gallery.title")}
          </h2>
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
      </section>

      {/* 4. What I Learned Section */}
      <section className="px-4 space-y-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-foreground inline-block border-b-4 border-foreground pb-2 leading-none">
            {t("learned.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipSkills.map((skill, idx) => {
            const catKey = skillCatKeys[idx];
            return (
              <AnimateIn key={skill.category} delay={idx * 0.1} className="h-full">
                <Card variant={skill.color} className="flex flex-col h-full shadow-[6px_6px_0px_var(--neo-black)]">
                  <CardHeader className="border-b border-black/10 dark:border-white/10 pb-2 mb-3">
                    <CardTitle className="text-sm font-black uppercase tracking-wider leading-none">
                      {t("categories." + catKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-xs font-semibold leading-relaxed">
                      {skill.points.map((point, pIdx) => {
                        const translationKey = `skills.${catKey}.p${pIdx + 1}`;
                        const pointText = t.has(translationKey) ? t(translationKey) : point;
                        return (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-foreground/50 select-none">•</span>
                            <span>{pointText}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      {/* 5. Image Lightbox overlay modal */}
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
