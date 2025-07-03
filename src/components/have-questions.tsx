import React from "react";
import { buttonVariants } from "./ui/button";
import { MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}
const HaveQuestions = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <div className="bg-primary/5 flex flex-wrap  justify-between gap-5  px-6 flex-col md:flex-row md:px-12 md:items-center  relative rounded-lg  pb-6   pt-14 md:py-14 border border-primary/20">
        <div>
          <h6 className="font-extrabold text-2xl sm:text-3xl mb-2">Pyetje?</h6>
          <p className="text-black/50 text-sm sm:text-base text-balance">
            Jemi këtu për t'ju ndihmuar për çdo pyetje dhe paqartësi.
          </p>
        </div>
        <div className="flex gap-3 justify-end">
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-black/30 text-black/80 hover:bg-black/5 bg-white"
            )}
          >
            Rreth nesh
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ color: "secondary" }))}
          >
            Kontakti
          </Link>
        </div>
        <div className=" absolute -top-[15px] left-6 md:left-12 bg-primary rounded-lg p-3">
          <MessageCircleQuestion className="text-white" size={30} />
        </div>
      </div>
    </div>
  );
};

export default HaveQuestions;
