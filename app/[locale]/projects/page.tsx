import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  redirect(`/${locale}#projects`);
}
