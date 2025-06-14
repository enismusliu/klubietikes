"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { MicVocal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const navItems = [
    {
      name: "Projektet",
      link: "/projects",
    },
    {
      name: "Aktivitetet",
      link: "/activities",
    },
    {
      name: "Rreth Nesh",
      link: "/about",
    },
    {
      name: "Kontakti",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />

        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          href="/podcast"
          className={cn(buttonVariants(), "z-10")}
        >
          <MicVocal className="text-white" />
          Podcasts
        </Link>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => {
            const isActive = pathname?.startsWith(item.link);
            return (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-zinc-500",
                  isActive && "font-bold text-black"
                )}
              >
                <span className="block">{item.name}</span>
              </Link>
            );
          })}
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            href="/podcast"
            className={cn(
              buttonVariants({ color: "secondary" }),
              "min-w-[150px]"
            )}
          >
            <MicVocal className="text-white " />
            Podcasts
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
