export default function Sponsors() {
  const sponsors = [
    {
      name: "Marblism",
      url: "https://marblism.com/?utm_source=Fazier",
      logo: "https://res.cloudinary.com/fazier-development/image/upload/v1748591503/dyc8srakj0zpe5ua3snj.webp",
    },
    {
      name: "Lede",
      url: "https://thelede.ai?ref=Fazier",
      logo: "https://res.cloudinary.com/fazier-development/image/upload/v1748591552/lulugm18rk2vhfp2ncue.png",
    },
    {
      name: "Zero to SaaS",
      url: "https://www.zerotosaascourse.com?ref=Fazier",
      logo: "https://res.cloudinary.com/fazier-development/image/upload/v1748591596/fhd1erqhcww181nsvch3.png",
    },
    {
      name: "Aidbase",
      url: "https://www.aidbase.ai/?utm_source=Fazier&affref=Fazier&affid=4a810c68",
      logo: "https://res.cloudinary.com/fazier-development/image/upload/v1748591632/rpovb0qfyqq8sixygo4c.png",
    },
    {
      name: "Stimpack",
      url: "https://stimpack.io?ref=Fazier",
      logo: "https://res.cloudinary.com/fazier-development/image/upload/v1748591669/z2iedxe5v2ltel4ucypd.png",
    },
  ];

  return (
    <section className="pb-20 pt-20 md:pb-32 md:pt-32 container">
      <div className="text-center space-y-4 pb-8 mx-auto">
        <h2 className="text-3xl font-bold sm:text-5xl tracking-tight">
          Our Sponsors
        </h2>
        <p className="text-xl text-muted-foreground pt-1">
          Startups & Corporations sharing our vision at Fazier
        </p>
      </div>

      <div className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center gap-8">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[160px] h-[160px] bg-slate-900 border border-slate-800 rounded-md transition-transform duration-300 transform hover:scale-105 flex flex-col items-center justify-center"
          >
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} Logo`}
              width={56}
              height={56}
              className="mb-2"
            />
            <p className="text-gray-100 font-semibold text-base">
              {sponsor.name}{" "}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
