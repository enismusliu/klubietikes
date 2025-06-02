import Card from "@/components/card";
import { buttonVariants } from "@/components/ui/button";
import { getTrpcCaller } from "@/lib/trpc/server";
import Link from "next/link";

const TopProjects = async () => {
  const trpc = await getTrpcCaller();
  const { data: projects } = await trpc.public.getTopProjects({
    topNumber: "2",
  });
  return (
    <div className="container max-w-[1200px]">
      <h3 className="text-primary font-extrabold text-xl md:text-2xl mb-4 pb-4 border-b">
        Projektet tona të fundit
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-min md:gap-16 ">
        {projects.map((project) => {
          return (
            <Card
              key={project.slug}
              tags={project.tags}
              title={project.title}
              slug={project.slug}
              module="projects"
              coverImagePath={project.coverImagePath}
            />
          );
        })}
      </div>
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
