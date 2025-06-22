"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Copyright, Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "/projects", label: "Projektet" },
    { href: "/activities", label: "Aktivitetet" },
    { href: "/about", label: "Rreth Nesh" },
    { href: "/contact", label: "Kontakti" },
    { href: "/podcast", label: "Podcast" },
  ];

  const handleNavigationToTheTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#403A6B] text-sm pb-4 pt-6 text-white ">
      <div className="flex justify-between items-end  gap-10 flex-wrap container ">
        <div className="flex flex-col items-start gap-y-3">
          <img
            src="/images/icon-white.png"
            alt="Klubi i Etikës"
            className="h-8 object-contain"
          />
          <p className="text-white">Etika në veprim, bashkë për ndryshim.</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex  gap-x-5 text-sm flex-wrap">
            {navItems.map((item) => {
              const isActive = pathname?.startsWith(item.href);

              if (isActive) {
                return (
                  <span
                    key={item.href}
                    className="text-secondary py-1  cursor-default"
                  >
                    {item.label}
                  </span>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:underline py-1 border-b border-transparent"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex space-x-4 [&>a]:text-white  md:self-end ">
            <a
              href="https://www.facebook.com/klubiietikes.fakultetijuridik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/klubiietikes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@klubiietikes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/tik-tok.svg" alt="" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-white/20 my-4" />

      <div className="flex items-center justify-between container ">
        <div className="flex text-sm md:items-center justify-center gap-1 font-extralight">
          <Copyright size={14} />
          <p>
            {currentYear} Klubi i Etikës. Të gjitha të drejtat janë të
            rezervuara
          </p>
        </div>
        <Button
          onClick={handleNavigationToTheTop}
          size="icon"
          variant="outline"
          className="h-7 w-7 border-white/30 text-white hover:text-secondary hover:border-secondary"
        >
          <ChevronRight className="-rotate-90" size={20} />
        </Button>
      </div>
    </footer>
  );
}
