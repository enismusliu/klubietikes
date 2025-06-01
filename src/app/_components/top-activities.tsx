import { getTrpcCaller } from "@/lib/trpc/server";
import Link from "next/link";

const TopActivities = async () => {
  const trpc = await getTrpcCaller();
  const { data: activities } = await trpc.public.getTopActivities();
  return (
    <div className="container">
      {activities.map((activity) => {
        return (
          <Link href={`/activities/${activity.slug}`} key={activity.slug}>
            {activity.title}
          </Link>
        );
      })}
    </div>
  );
};

export default TopActivities;
