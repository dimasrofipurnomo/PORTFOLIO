"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";


export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tDb = useTranslations("Database.projects." + project.slug);
  const tFeatured = useTranslations("Home.featured");

  return (
    <Card className="flex flex-col h-full p-0 overflow-hidden shadow-[8px_8px_0px_var(--neo-black)]">
      
      {/* 1. Top Neo Brutalist Graphic Header */}
      <div 
        className={cn(
          "relative w-full h-[200px] border-b-4 border-foreground overflow-hidden select-none flex items-center justify-center p-2",
          project.imageBg || "bg-zinc-100 dark:bg-zinc-800"
        )}
      >
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-w-768px) 100vw, 33vw"
            className="object-contain p-2"
          />
        )}
      </div>

      {/* 2. Content Body */}
      <div className="p-6 flex flex-col flex-1 space-y-3">
        {/* Project Title */}
        <h3 className="text-xl font-black uppercase tracking-tight text-foreground leading-snug">
          {project.title}
        </h3>

        {/* Sub-Role / Job tag */}
        {(tDb.has("subRole") ? tDb("subRole") : project.subRole) && (
          <p className="text-[10px] font-black tracking-widest uppercase text-foreground/50 leading-none">
            {tDb.has("subRole") ? tDb("subRole") : project.subRole}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-foreground/75 font-medium leading-relaxed flex-1">
          {tDb.has("description") ? tDb("description") : project.description}
        </p>
      </div>

      {/* 3. Action Row */}
      <div className="p-6 pt-0 mt-auto">
        <Link href={`/projects/${project.slug}`} className="block w-full">
          <Button variant="yellow" className="w-full justify-center text-sm font-black py-2.5">
            {tFeatured("view")}
          </Button>
        </Link>
      </div>

    </Card>
  );
}
