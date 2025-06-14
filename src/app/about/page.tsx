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
              Klubi i Etikës – Fakulteti Juridik është një grup formal studentor
              që vepron në kuadër të Universitetit të Prishtinës “Hasan
              Prishtina”. Misioni i tij është promovimi i integritetit akademik,
              ngritja e vetëdijes për çështjet etike dhe fuqizimi i studentëve
              përmes përfshirjes aktive në jetën universitare.
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
              Klubi angazhohet në parandalimin e dukurive negative si kopjimi,
              plagjiatura, mashtrimi dhe ngacmimet seksuale, duke organizuar
              trajnime, fushata dhe aktivitete ndërgjegjësuese. <br />
              Përmes bashkëpunimit me strukturat institucionale dhe përfaqësimit
              të studentëve, Klubi synon të krijojë një ambient të drejtë, të
              sigurt dhe profesional, duke kontribuar në ndërtimin e një kulture
              etike brenda Fakultetit Juridik.
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
