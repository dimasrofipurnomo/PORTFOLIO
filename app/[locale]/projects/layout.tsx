import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LayoutProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "Metadata.projects" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        en: "/en/projects",
        id: "/id/projects",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://dimasrofi-portfolio.vercel.app/${locale}/projects`,
      type: "website",
    },
  };
}

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
