import { Metadata } from "next";
import React from "react";
import { ContactUsForm } from "./_components/contact-us-form";
import PagesHeroSection from "@/components/pages-hero-section";

export const metadata: Metadata = {
  title: "Kontakti",
  description:
    "Na kontakto për bashkëpunime, sugjerime apo për t’u bërë pjesë e klubit. Jemi të hapur për çdo ide që promovon etikën dhe veprimin e përgjegjshëm.",
};

const Contact = () => {
  return (
    <div className="">
      <PagesHeroSection
        imagePath="/images/contact-bg.jpg"
        pageTitle="Kontakti"
        description="Na kontakto për bashkëpunime, sugjerime apo për t’u bërë pjesë e klubit"
        imageClassName="object-left"
      />
      <div className="container max-w-[1200px] grid gap-10 md:gap-16 md:grid-cols-2 py-10 md:py-16">
        <div>
          <h3 className="text-primary font-extrabold text-2xl md:text-3xl mb-3">
            We'd love to hear from you!
          </h3>
          <p className="text-black/50 text-balance mb-5">
            We are continuously looking for improvement, which is why your
            feedback is so valuable to us!
          </p>
          <ContactUsForm />
        </div>
        <img
          src="/images/contact-people.jpg"
          alt="contact us image"
          width={500}
          height={600}
          className="h-[400px] object-cover w-full self-center rounded-2xl border-b-4 border-primary"
        />
      </div>
    </div>
  );
};

export default Contact;
