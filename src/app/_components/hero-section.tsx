"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { GridBackground } from "@/components/ui/grid-background";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("scroll-to");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <GridBackground className="grid md:grid-cols-2 container items-center justify-center gap-10">
      <div className="flex flex-col h-full justify-center text-center md:text-start">
        <h1 className="text-balance  text-3xl lg:leading-14 font-bold  md:text-4xl lg:text-4xl ">
          {`Ligji na mëson rregullin. Etika na mëson drejtësinë.`
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mt-2 md:mt-4  text-balance text-base md:text-lg  text-black/50 font-light"
        >
          Hapësirë ku idetë marrin formë përmes ndarjes së mendimeve,
          diskutimeve dhe bashkëkuptimit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-8 flex gap-3 justify-center md:justify-start"
        >
          <Link
            onClick={scrollToProjects}
            href="/about"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-black/30 text-black/80 hover:bg-black/5 bg-white"
            )}
          >
            Mëso më shumë
          </Link>
          <Link
            href="/contact"
            onClick={scrollToProjects}
            className={cn(buttonVariants({ color: "secondary" }))}
          >
            Kontakto
          </Link>
        </motion.div>
      </div>
      <img
        src="/images/hero-img.jpg"
        alt=""
        className="h-[300px] md:h-[calc(100dvh-60%)] mx-auto object-cover object-left-top rounded-tl-[150px] w-auto"
      />
    </GridBackground>
  );
};

export default HeroSection;
