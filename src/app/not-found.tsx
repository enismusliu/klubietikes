"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  /**
   * @hooks
   */
  const router = useRouter();
  return (
    <div className="relative flex min-h-[calc(100dvh-80px)] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="quisas mb-6 text-[100px] leading-[50px] text-primary sm:mb-10 md:text-[170px] md:leading-[80px]">
          404
        </p>
        <p className="text-center text-[20px] font-semibold text-primary sm:text-[30px]">
          Oops, this link is broken.
        </p>
        <p className="font-medium text-primary">
          Page doesn't exist or some other error occured
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="min-w-[120px]"
            onClick={() => router.back()}
          >
            Go Back
          </Button>
          <Button className="min-w-[120px]" onClick={() => router.push("/")}>
            Home
          </Button>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-secondary/10" />
    </div>
  );
}
