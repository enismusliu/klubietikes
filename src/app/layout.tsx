import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Klubi i Etikës",
    template: `%s | Klubi i Etikës`,
  },
  keywords:
    "etikë, klub etik, universitet, podcast etik, mendim kritik, veprim studentor, ndërgjegjësim etik, edukim etik, vlera morale, diskutime etike, studentë aktivë, debati etik, përgjegjësi shoqërore, etika në universitet, aktivizëm etik",
  description:
    "Klubi i Etikës është një hapësirë studentore në universitet që promovon mendimin kritik, diskutimet etike dhe veprimin me ndërgjegje përmes podcast-eve, aktiviteteve dhe iniciativave që nxisin vlerat morale dhe përgjegjësinë shoqërore.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={` ${plusJakartaSans.variable} antialiased relative`}>
        <Providers user={null}>
          <div className="h-dvh ">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
