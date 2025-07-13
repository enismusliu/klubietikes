import { NumberTicker } from "@/components/magicui/number-ticker";
import PagesHeroSection from "@/components/pages-hero-section";
import { getTrpcCaller } from "@/lib/trpc/server";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rreth Nesh",
  description:
    "Mëso më shumë rreth misionit, vlerave dhe qëllimeve të Klubit të Etikës",
};

const About = async () => {
  const trpc = await getTrpcCaller();
  const dashboard = await trpc.public.getDashboard();
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
              Klubi i Etikës – Fakulteti Juridik është një grup formal studentor
              që vepron në kuadër të{" "}
              <a
                href="https://uni-pr.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-red-800 hover:text-red-700"
              >
                Universitetit të Prishtinës “Hasan Prishtina”
              </a>
              . Misioni i tij është promovimi i integritetit akademik, ngritja e
              vetëdijes për çështjet etike dhe fuqizimi i studentëve përmes
              përfshirjes aktive në jetën universitare.
            </p>
          </div>
          <div className="relative w-full h-[250px] lg:h-[400px]  shadow rounded-2xl">
            <img
              src="/images/about-1.jpg"
              alt="about us image 1"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-10 "
            />
          </div>
        </div>
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 mt-10 md:mt-16">
          <div className="relative w-full h-[250px] lg:h-[400px] hidden lg:block shadow rounded-2xl">
            <img
              src="/images/about-2.jpg"
              alt="about us image 2"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-10 "
            />
          </div>
          <div className="self-center ">
            <p className="text-lg md:text-xl">
              Klubi angazhohet në parandalimin e dukurive negative si kopjimi,
              plagjiatura, mashtrimi dhe ngacmimet seksuale, duke organizuar
              trajnime, fushata dhe aktivitete ndërgjegjësuese.
              <br />
              Përmes bashkëpunimit me strukturat institucionale dhe përfaqësimit
              të studentëve, Klubi synon të krijojë një ambient të drejtë, të
              sigurt dhe profesional, duke kontribuar në ndërtimin e një kulture
              etike brenda{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-red-800 hover:text-red-700"
                href="https://juridiku.uni-pr.edu/"
              >
                Fakultetit Juridik.
              </a>
            </p>
          </div>
          <div className="relative h-[250px] lg:h-[400px] lg:hidden shadow">
            <img
              src="/images/about-2.jpg"
              alt="about us image 2"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-10 "
            />
          </div>
        </div>
        <div className="mt-10 md:mt-16">
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl font-light">
              Përmes projekteve inovative, aktiviteteve edukative dhe podkasteve
              inspiruese, Klubi i Etikës forcon integritetin akademik dhe rrit
              ndërgjegjësimin për çështjet etike brenda komunitetit tonë.
            </p>
          </div>

          {/* the three stat cards */}
          <div className="flex justify-between items-center flex-wrap gap-8">
            <div className="bg-primary/5 px-5 py-10 rounded-lg flex-1 min-w-[300px] text-center">
              <div className="flex items-center gap-x-1.5 justify-center text-5xl font-bold text-primary">
                <NumberTicker
                  value={dashboard.numberOfProjcets - 1}
                  className="text-primary"
                />
                <span>+</span>
              </div>
              <p className="mt-2 text-lg">Projekte</p>
            </div>
            <div className="bg-primary/5 px-5 py-10 rounded-lg flex-1 min-w-[300px] text-center">
              <div className="flex items-center gap-x-1.5 justify-center text-5xl font-bold text-primary">
                <NumberTicker
                  value={dashboard.numberOfActivities - 1}
                  className="text-primary"
                />
                <span>+</span>
              </div>
              <p className="mt-2 text-lg">Aktivitete</p>
            </div>
            <div className="bg-primary/5 px-5 py-10 rounded-lg flex-1 min-w-[300px] text-center">
              <div className="flex items-center gap-x-1.5 justify-center text-5xl font-bold text-primary">
                <NumberTicker
                  value={dashboard.numberOfPodcasts - 1}
                  className="text-primary"
                />
                <span>+</span>
              </div>
              <p className="mt-2 text-lg">Podcaste</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
