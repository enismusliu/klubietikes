export interface Podcast {
  slug: string;
  title: string;
  project: {
    slug: string;
    name: string;
  };
  coverImagePath: string;
  videoUrl: string;
  tags: string[];
  shortDescription: string;
  recordedAt: string;
}
