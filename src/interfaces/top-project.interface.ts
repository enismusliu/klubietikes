export interface TopProject {
  slug: string;
  title: string;
  coverImagePath: string;
  tags: string[];
  podcasts: {
    podcastSlug: string;
    title: string;
    coverImagePath: string;
    tags: string[];
  }[];
  activities: {
    activitySlugs: string;
    title: string;
    coverImagePath: string;
    tags: string[];
  }[];
}
