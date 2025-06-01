import { getTrpcCaller } from "@/lib/trpc/server";
import Link from "next/link";

const TopPodcasts = async () => {
  const trpc = await getTrpcCaller();
  const { data: podcasts } = await trpc.public.getTopPodcasts();
  return (
    <div className="container">
      {podcasts.map((podcast) => {
        return (
          <Link href={`/podcast/${podcast.slug}`} key={podcast.title}>
            {podcast.title}
          </Link>
        );
      })}
    </div>
  );
};

export default TopPodcasts;
