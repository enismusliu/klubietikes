/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { XIcon, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroImageGalleryProps {
  animationStyle?: AnimationStyle;
  images: string[];
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
  activityTitle?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export function HeroImageGallery({
  animationStyle = "from-center",
  images,
  thumbnailSrc,
  thumbnailAlt = "Image thumbnail",
  className,
  activityTitle,
}: HeroImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedAnimation = animationVariants[animationStyle];

  const totalImages = images.length;

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center gap-3  lg:max-w-[80%] overflow-x-scroll no-scrollbar lg:flex-wrap">
        {images.map((image, index) => {
          return (
            <div className=" max-w-24  max-h-24" key={index}>
              <img
                src={image}
                className="min-w-24 h-24 object-cover rounded-md shadow-lg"
                alt={`Imazhet e aktivitetit ${activityTitle}`}
                onClick={() => {
                  setIsOpen(true);
                  setCurrentIndex(index);
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Modal / Gallery */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative mx-4 w-full max-w-4xl rounded-2xl md:mx-0 bg-black/70"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 z-20 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
              >
                <XIcon className="size-5" />
              </motion.button>

              {/* Image Container with Swipe */}
              <div className="relative isolate z-[1] w-full max-h-[80%] overflow-hidden rounded-2xl  border-white">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="max-h-[70vh] w-full  object-contain select-none"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 200 }}
                />

                {/* Left Arrow */}
                <button
                  onClick={showPrevious}
                  className="absolute top-1/2 left-2 z-20  -translate-y-1/2 rounded-full bg-neutral-900/50 p-2.5 border border-white/50 text-white backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
                >
                  <ChevronLeft className="size-7" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={showNext}
                  className="absolute top-1/2 right-2 z-20 -translate-y-1/2 border rounded-full bg-neutral-900/50 border-white/50 p-2.5 text-white backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
                >
                  <ChevronRight className="size-7" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
