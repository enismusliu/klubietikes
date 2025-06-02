export interface Activity {
  slug: string;
  title: string;
  project: {
    projectSlug: string;
    name: string;
  };
  shortDescription: string;
  tags: string[];
  finishedAt: string;
  coverImagePath: string;
}
