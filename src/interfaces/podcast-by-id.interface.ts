export interface PodcastById {
  slug: string;
  project: {
    projectSlug: string;
    name: string;
  };
  title: string;
  videoUrl: string;
  coverImagePath: string;
  htmlContentDescription: string;
  tags: string[];
  recordedAt: string;
}
