import { ActivityById } from "@/interfaces/activity-by-id.interface";
import { Activity } from "@/interfaces/activity.interface";
import { Dashboard } from "@/interfaces/dashboard.interface";
import { PodcastById } from "@/interfaces/podcast-by-id.interface";
import { Podcast } from "@/interfaces/podcast.interface";
import { ProjectById } from "@/interfaces/project-by-id.interface";
import { Project } from "@/interfaces/project.interface";
import { TopActivity } from "@/interfaces/top-activity.interface";
import { TopPodcast } from "@/interfaces/top-podcast.interface";
import { TopProject } from "@/interfaces/top-project.interface";
import request from "@/lib/request";
import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import { QueryParams } from "@/types";

export const publicRouter = createTRPCRouter({
  getActivities: publicProcedure
    .input((input) => input as QueryParams | undefined)
    .query(async ({ input }) => {
      const response = await request<Activity[]>("public/all-activities", {
        method: "GET",
        next: { tags: ["all-activities"] },
        params: input,
      });
      return response;
    }),
  getTopActivities: publicProcedure
    .input((input) => input as QueryParams | undefined)
    .query(async ({ input }) => {
      const response = await request<TopActivity[]>(
        "public/top-latest-activities",
        {
          method: "GET",
          next: { tags: ["top-latest-activities"] },
          params: input,
        }
      );
      return response;
    }),
  getActivity: publicProcedure
    .input((input) => input as string)
    .query(async ({ input }) => {
      const response = await request<ActivityById>(
        `public/activities/${input}`,
        {
          method: "GET",
          next: { tags: [`activities-${input}`] },
        }
      );
      return response.data;
    }),
  getProjects: publicProcedure
    .input((input) => input as QueryParams | undefined)
    .query(async ({ input }) => {
      const response = await request<Project[]>("public/all-projects", {
        method: "GET",
        next: { tags: ["all-projects"] },
        params: input,
      });
      return response;
    }),
  getTopProjects: publicProcedure
    .input((input) => input as QueryParams | undefined)
    .query(async ({ input }) => {
      const response = await request<TopProject[]>(
        "public/top-latest-projects",
        {
          method: "GET",
          next: { tags: ["top-latest-projects"] },
          params: input,
        }
      );
      return response;
    }),
  getProject: publicProcedure
    .input((input) => input as string)
    .query(async ({ input }) => {
      const response = await request<ProjectById>(`public/projects/${input}`, {
        method: "GET",
        next: { tags: [`projects-${input}`] },
      });
      return response.data;
    }),
  getPodcasts: publicProcedure
    .input((input) => input as QueryParams | undefined)
    .query(async ({ input }) => {
      const response = await request<Podcast[]>("public/all-podcasts", {
        method: "GET",
        next: { tags: ["all-podcasts"] },
        params: input,
      });
      return response;
    }),
  getPodcast: publicProcedure
    .input((input) => input as string)
    .query(async ({ input }) => {
      const response = await request<PodcastById>(`public/podcasts/${input}`, {
        method: "GET",
        next: { tags: [`podcasts-${input}`] },
      });
      return response.data;
    }),
  getTopPodcasts: publicProcedure
    .input((input) => input as QueryParams | undefined)
    .query(async ({ input }) => {
      const response = await request<TopPodcast[]>(
        "public/top-latest-podcasts",
        {
          method: "GET",
          next: { tags: ["top-latest-podcasts"] },
          params: input,
        }
      );
      return response;
    }),
  getDashboard: publicProcedure.query(async () => {
    const response = await request<Dashboard>("dashboard", {
      method: "GET",
      next: { tags: ["dashboard"] },
    });
    return response.data;
  }),
});
