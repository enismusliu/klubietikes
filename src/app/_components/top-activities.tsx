import Card from "@/components/card";
import { buttonVariants } from "@/components/ui/button";
import { getTrpcCaller } from "@/lib/trpc/server";
import Link from "next/link";

const TopActivities = async () => {
  const trpc = await getTrpcCaller();
  const { data: activities } = await trpc.public.getTopActivities({
    topNumber: "2",
  });
  return (
    <div className="container max-w-[1200px]">
      <h3 className="text-primary font-extrabold text-xl md:text-2xl mb-4 pb-4 border-b">
        Aktivitetet tona të fundit
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-min md:gap-16 ">
        {activities.map((activity) => {
          return (
            <Card
              key={activity.slug}
              tags={activity.tags}
              title={activity.title}
              slug={activity.slug}
              module="activities"
              coverImagePath={activity.coverImagePath}
            />
          );
        })}
      </div>
      <div className="flex justify-end mt-5">
        <Link
          href="/activities"
          className={buttonVariants({ size: "sm", variant: "ghost" })}
        >
          Shiko më shumë...
        </Link>
      </div>
    </div>
  );
};

export default TopActivities;
