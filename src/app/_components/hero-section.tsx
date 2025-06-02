"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import React from "react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("scroll-to");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="relative h-dvh overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-20"
        style={{
          backgroundImage: "url(/images/hero-section-bg.jpg)",
        }}
      />
      <div className="relative z-10 flex flex-col h-full items-center justify-center px-4 py-10 max-w-7xl mx-auto">
        <h1 className="max-w-3xl text-center mx-auto text-balance text-3xl font-bold text-primary md:text-4xl lg:text-6xl ">
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
          className="mt-4 max-w-3xl mx-auto text-center text-balance text-lg font-normal text-white/80 0"
        >
          Hapësirë ku
          <span className="bg-white border border-primary px-3 mx-2 text-primary font-bold rounded-md">
            idetë
          </span>
          marrin formë përmes ndarjes së mendimeve, diskutimeve dhe
          bashkëkuptimit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-8 flex gap-10 flex-wrap justify-center 2xl:flex-nowrap"
        >
          <Button
            onClick={scrollToProjects}
            className="min-w-xs bg-white/10 hover:bg-white/15 font-bold"
            variant="outline"
          >
            Më shumë
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
