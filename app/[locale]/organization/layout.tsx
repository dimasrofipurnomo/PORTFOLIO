import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LayoutProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "Metadata.organization" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/organization`,
      languages: {
        en: "/en/organization",
        id: "/id/organization",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://dimasrofi-portfolio.vercel.app/${locale}/organization`,
      type: "website",
    },
  };
}

export default function OrganizationLayout({ children }: { children: ReactNode }) {
  return children;
}
