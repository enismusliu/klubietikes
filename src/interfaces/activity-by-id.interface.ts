export interface ActivityById {
  slug: string;
  project: {
    projectSlug: string;
    name: string;
  };
  title: string;
  coverImagePath: string;
  activityImagesPaths: string[];
  htmlContentDescription: string;
  tags: string[];
  finishedAt: string;
}
