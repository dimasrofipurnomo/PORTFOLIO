import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: LayoutProps) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const tDb = await getTranslations({
    locale,
    namespace: `Database.projects.${slug}`,
  });

  const title = `${tDb("title")} | Dimas Rofi'`;
  const description = tDb("description");

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        en: `/en/projects/${slug}`,
        id: `/id/projects/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://dimasrofi-portfolio.vercel.app/${locale}/projects/${slug}`,
      type: "article",
      images: [
        {
          url: project.imageUrl || "/dimas_profile.png",
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.imageUrl || "/dimas_profile.png"],
    },
  };
}

export default function ProjectDetailLayout({ children }: { children: ReactNode }) {
  return children;
}
