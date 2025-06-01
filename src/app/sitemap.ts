import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.klubietikes.com",
      lastModified: new Date("2025-01-29"),
      priority: 1,
    },
    {
      url: "https://www.klubietikes.com/projects",
      lastModified: new Date("2025-01-29"),
      priority: 0.9,
    },
    {
      url: "https://www.klubietikes.com/activities",
      lastModified: new Date("2025-01-29"),
      priority: 0.9,
    },
    {
      url: "https://www.klubietikes.com/podcast",
      lastModified: new Date("2025-01-29"),
      priority: 0.8,
    },
    {
      url: "https://www.klubietikes.com/about",
      lastModified: new Date("2025-01-29"),
      priority: 0.7,
    },
    {
      url: "https://www.klubietikes.com/contact",
      lastModified: new Date("2025-01-29"),
      priority: 0.6,
    },
  ];
}
