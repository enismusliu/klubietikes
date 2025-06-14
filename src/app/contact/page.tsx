// pages/contact.tsx
import { Metadata } from "next";
import React from "react";
import PagesHeroSection from "@/components/pages-hero-section";
import { Mail, MapPinned } from "lucide-react";
import { ContactUsForm } from "./_components/contact-us-form";
import { ContactInfoItem } from "./_components/contact-info-items";

export const metadata: Metadata = {
  title: "Kontakti",
  description:
    "Na kontakto për bashkëpunime, sugjerime apo për t’u bërë pjesë e klubit. Jemi të hapur për çdo ide që promovon etikën dhe veprimin e përgjegjshëm.",
};

const items = [
  {
    icon: Mail,
    label: "Email Adresa",
    href: "mailto:klubiietikes.fakultetijuridik@gmail.com",
    text: "klubiietikes.fakultetijuridik@gmail.com",
  },
  {
    icon: MapPinned,
    label: "Lokacioni",
    href: "https://www.google.com/maps/search/?api=1&query=Rr.+%22Agim+Ramadani%22,+10000+Prishtinë,+Kosovo",
    text: `Rr. “Agim Ramadani”, p.n. 10 000 Prishtinë, Republika e Kosovës`,
  },
];

const Contact = () => (
  <div>
    <PagesHeroSection
      imagePath="/images/contact-bg.jpg"
      pageTitle="Kontakti"
      imageClassName="object-left"
    />

    <div className="container max-w-[1200px] grid lg:grid-cols-2 items-center gap-5 lg:gap-16 py-10 md:py-16">
      <div>
        <h3 className="text-primary font-extrabold text-2xl lg:text-3xl mb-3">
          Na kontaktoni
        </h3>
        <p className="text-black/50 text-balance lg:mb-10">
          Jemi këtu për çdo pyetje, ide apo thjesht për të biseduar. Na kontakto
          dhe do të të përgjigjemi sa më shpejt!
        </p>

        {/* show on md+ */}
        <div className="hidden lg:flex flex-col gap-4">
          {items.map(({ icon, label, href, text }) => (
            <ContactInfoItem key={label} icon={icon} label={label} href={href}>
              {text}
            </ContactInfoItem>
          ))}
        </div>
      </div>

      <ContactUsForm />

      {/* show on < lg */}
      <div className="flex flex-col gap-4 lg:hidden mt-10">
        {items.map(({ icon, label, href, text }) => (
          <ContactInfoItem key={label} icon={icon} label={label} href={href}>
            {text}
          </ContactInfoItem>
        ))}
      </div>
    </div>
  </div>
);

export default Contact;
