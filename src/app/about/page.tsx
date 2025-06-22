import HaveQuestions from "@/components/have-questions";
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
      <div className="container max-w-[1200px]  py-10 md:py-16 font-light">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 ">
          <div className="self-center ">
            <p className="text-lg md:text-xl">
              <span className="font-bold">
                Klubi i Etikës – Fakulteti Juridik
              </span>{" "}
              është një grup formal studentor që vepron në kuadër të{" "}
              <span className="font-bold">
                Universitetit të Prishtinës “Hasan Prishtina”
              </span>
              .{" "}
              <span className="text-primary font-extrabold">Misioni i tij</span>{" "}
              është promovimi i integritetit akademik, ngritja e vetëdijes për
              çështjet etike dhe fuqizimi i studentëve përmes përfshirjes aktive
              në jetën universitare.
            </p>
          </div>
          <div className="relative w-full h-[250px] lg:h-[400px] max-w-[90%]">
            <div className="absolute inset-0 border border-primary rounded-2xl translate-x-4 translate-y-4 bg-secondary" />
            <img
              src="/images/about-1.jpg"
              alt="about us image 1"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-10 border border-primary"
            />
          </div>
        </div>
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 mt-10 md:mt-16">
          <div className="relative w-full h-[250px] lg:h-[400px] hidden lg:block">
            <div className="absolute inset-0 border border-primary rounded-2xl -translate-x-4 translate-y-4 bg-secondary" />
            <img
              src="/images/about-2.jpg"
              alt="about us image 2"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-10 border border-primary"
            />
          </div>
          <div className="self-center ">
            <p className="text-lg md:text-xl">
              <span className="font-bold">Klubi</span> angazhohet në
              parandalimin e dukurive negative si kopjimi, plagjiatura,
              mashtrimi dhe ngacmimet seksuale, duke organizuar trajnime,
              fushata dhe aktivitete ndërgjegjësuese.
              <br />
              Përmes bashkëpunimit me strukturat institucionale dhe përfaqësimit
              të studentëve,
              <span className="text-primary font-bold">
                {" "}
                Klubi synon të krijojë
              </span>{" "}
              një ambient të drejtë, të sigurt dhe profesional, duke kontribuar
              në ndërtimin e një kulture etike brenda{" "}
              <span className="font-bold">Fakultetit Juridik.</span>
            </p>
          </div>
          <div className="relative w-[90%] ml-4 h-[250px] lg:h-[400px] lg:hidden">
            <div className="absolute inset-0 border border-primary rounded-2xl -translate-x-4 translate-y-4 bg-primary" />
            <img
              src="/images/about-2.jpg"
              alt="about us image 2"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-10 border border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
