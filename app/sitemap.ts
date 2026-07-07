import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dimasrofi-portfolio.vercel.app";
  const locales = ["en", "id"];
  const staticRoutes = ["", "/about", "/projects", "/organization"];
  
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Static Pages
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
      });
    });

    // Dynamic Project Pages
    projects.forEach((project) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}
