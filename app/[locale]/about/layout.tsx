import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LayoutProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "Metadata.about" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        id: "/id/about",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://dimasrofi-portfolio.vercel.app/${locale}/about`,
      type: "profile",
    },
  };
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
