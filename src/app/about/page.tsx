import PagesHeroSection from "@/components/pages-hero-section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rreth Nesh",
  description:
    "Mëso më shumë rreth misionit, vlerave dhe qëllimeve të Klubit të Etikës",
};

const About = () => {
  return (
    <div className="">
      <PagesHeroSection
        imagePath="/images/about-bg.jpg"
        pageTitle="Rreth Nesh"
        imageClassName="object-left"
      />
      <div className="container max-w-[1200px]  py-10 md:py-16">
        <div className="grid gap-10 md:gap-16 md:grid-cols-2 ">
          <div className="self-center ">
            <p className="text-lg md:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              minima repellendus nam consequatur perspiciatis cupiditate
              officiis, libero facere, deserunt reiciendis eum maiores sit.
              Repellendus iure itaque odit neque quidem? Exercitationem fugiat
              necessitatibus beatae, aliquid eaque laboriosam. Similique, natus
              exercitationem! Inventore tenetur tempore beatae dolor distinctio
              provident numquam?
            </p>
          </div>
          <img
            src="/images/about-1.jpg"
            alt="about us image 1"
            width={500}
            height={600}
            className="h-[250px] md:h-[400px] object-cover w-full self-center rounded-2xl border-b-4 border-primary"
          />
        </div>
        <div className="grid gap-10 md:gap-16 md:grid-cols-2 mt-10 md:mt-16">
          <img
            src="/images/about-2.jpg"
            alt="about us image 2"
            width={500}
            height={600}
            className="h-[250px] md:h-[400px] md:block hidden object-cover w-full self-center rounded-2xl border-b-4 border-primary"
          />
          <div className="self-center ">
            <p className="text-lg md:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              minima repellendus nam consequatur perspiciatis cupiditate
              officiis, libero facere, deserunt reiciendis eum maiores sit.
              Repellendus iure itaque odit neque quidem? Exercitationem fugiat
              necessitatibus beatae, aliquid eaque laboriosam. Similique, natus
              exercitationem! Inventore tenetur tempore beatae dolor distinctio
              provident numquam?
            </p>
          </div>
          <img
            src="/images/about-2.jpg"
            alt="about us image 2"
            width={500}
            height={600}
            className="h-[250px] md:h-[400px] block md:hidden object-cover w-full self-center rounded-2xl border-b-4 border-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
