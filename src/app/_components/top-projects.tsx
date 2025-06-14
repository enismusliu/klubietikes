import Card from "@/components/card";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getTrpcCaller } from "@/lib/trpc/server";
import Link from "next/link";

const TopProjects = async () => {
  const trpc = await getTrpcCaller();
  const { data: projects } = await trpc.public.getTopProjects({
    topNumber: "3",
  });
  return (
    <div className="container">
      <h3 className="text-primary font-extrabold text-xl md:text-2xl mb-4 pb-4 ">
        Projektet tona të fundit
      </h3>
      <Carousel className="w-full " opts={{ align: "start" }}>
        <CarouselContent className="py-3">
          {projects.map((project) => (
            <CarouselItem
              key={project.slug}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card
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
          className={buttonVariants({ size: "sm", variant: "ghost" })}
        >
          Shiko më shumë...
        </Link>
      </div>
    </div>
  );
};

export default TopProjects;
