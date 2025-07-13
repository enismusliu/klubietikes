export interface TopPodcast {
  slug: string;
  title: string;
  project: {
    prjectSlug: string;
    name: string;
  };
  coverImagePath: string;
  videoUrl: string;
  tags: string[];
  recordedAt: string;
  shortDescription: string;
}
