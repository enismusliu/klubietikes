import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getTrpcCaller } from "@/lib/trpc/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HomeProjectCard from "./home-project-card";
import { cn } from "@/lib/utils";

const TopProjects = async () => {
  const trpc = await getTrpcCaller();
  const { data: projects } = await trpc.public.getTopProjects({
    topNumber: "6",
  });
  return (
    <div className="container mt-5 xl:mt-10">
      <Carousel className="w-full " opts={{ align: "start" }}>
        <div className="mb-4 pb-4 border-b flex items-center justify-between ">
          <h3 className="font-extrabold text-xl md:text-2xl  ">
            Projektet tona të fundit
          </h3>
          <div className="flex items-center justify-end  gap-3 ">
            <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-8 md:w-15 rounded-lg" />
            <CarouselNext className="static translate-x-0 translate-y-0 h-8 w-8 md:w-15 rounded-lg" />
          </div>
        </div>
        <hr className="mb-3 lg:mb-5 bg-black/50 h-1 rounded-full -mt-4.5 w-20" />

        <CarouselContent className="py-3">
          {projects.map((project) => (
            <CarouselItem key={project.slug} className="md:basis-1/2 ">
              <HomeProjectCard
                key={project.slug}
                tags={project.tags}
                title={project.title}
                slug={project.slug}
                module="projects"
                coverImagePath={project.coverImagePath}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-end mt-5">
        <Link
          href="/projects"
          className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
        >
          Shiko më shumë <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default TopProjects;
