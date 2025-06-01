import { Metadata } from "next";
import React from "react";
import { ContactUsForm } from "./_components/contact-us-form";

export const metadata: Metadata = {
  title: "Kontakti",
  description:
    "Na kontakto për bashkëpunime, sugjerime apo për t’u bërë pjesë e klubit. Jemi të hapur për çdo ide që promovon etikën dhe veprimin e përgjegjshëm.",
};

const Contact = () => {
  return (
    <div className="container flex items-center justify-center h-full">
      <ContactUsForm />
    </div>
  );
};

export default Contact;
