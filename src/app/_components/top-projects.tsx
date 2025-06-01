import { getTrpcCaller } from "@/lib/trpc/server";
import Link from "next/link";

const TopProjects = async () => {
  const trpc = await getTrpcCaller();
  const { data: projects } = await trpc.public.getTopProjects();
  return (
    <div className="container">
      {projects.map((project) => {
        return (
          <Link href={`/projects/${project.slug}`} key={project.title}>
            {project.title}
          </Link>
        );
      })}
    </div>
  );
};

export default TopProjects;
