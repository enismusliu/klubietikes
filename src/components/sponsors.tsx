import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marque";

export default function Sponsors() {
  const sponsors = [
    {
      name: "KCSF",
      url: "https://kcsfoundation.org/",
      logo: "/images/kcsf.png",
    },
    {
      name: "Zyra e Presidentes së Republikës së Kosovës",
      url: "https://president-ksgov.net/",
      logo: "images/presidenca-logo.png",
    },
    {
      name: "ORCA",
      url: "https://orca-ks.org/",
      logo: "images/orca.png",
    },
    {
      name: "Ministria e kulturës, rinisë dhe sportit",
      url: "https://www.mkrs-ks.org/",
      logo: "images/mkrs.gif",
    },
    {
      name: "Linja e Jetës",
      url: "https://www.facebook.com/Linjaejetes?mibextid=qi2Omg&rdid=XDoRkLsZRQ96eWM3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GJRv54ksZ%2F%3Fmibextid%3Dqi2Omg#",
      logo: "images/linja-e-jetes.jpg",
    },
    {
      name: "HEI’25",
      url: "https://kec-ks.org/en/programet/higher-education-intervention-2025-hei25/",
      logo: "images/hei25.png",
    },
    {
      name: "Mizan Solutions",
      url: "https://www.mizan-solutions.com/",
      logo: "images/mizan-logo.png",
    },
  ];

  return (
    <section className="container">
      <div className=" flex w-full  items-center justify-center ">
        <div className="relative overflow-hidden">
          <Marquee
            pauseOnHover
            className="[--duration:20s] lg:[--duration:40s]"
          >
            <div className="flex  items-center   gap-4">
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-3 rounded-lg py-1.5 transition-transform duration-300 transform hover:scale-101 flex flex-col items-center justify-center"
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    width={56}
                    height={56}
                    className={cn(
                      "mb-2 h-18 w-auto object-contain",
                      sponsor.name === "Mizan Solutions" && "w-64"
                    )}
                  />
                  <p className="font-semibold text-sm">{sponsor.name} </p>
                </a>
              ))}
            </div>
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
