export interface ProjectById {
  slug: string;
  title: string;
  coverImagePath: string;
  htmlContentDescription: string;
  tags: string[];
  podcasts: Podcast[];
  activities: Activity[];
  shortDescription: string;
}

export interface Podcast {
  podcastSlug: string;
  title: string;
  coverImagePath: string;
  tags: string[];
  shortDescription: string;
}

export interface Activity {
  activitySlug: string;
  title: string;
  coverImagePath: string;
  tags: string[];
  shortDescription: string;
}
