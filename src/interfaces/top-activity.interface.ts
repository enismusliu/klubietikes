export interface TopActivity {
  slug: string;
  title: string;
  project: {
    prjectSlug: string;
    name: string;
  };
  coverImagePath: string;
  tags: string[];
  finishedAt: string;
  shortDescription: string;
}
