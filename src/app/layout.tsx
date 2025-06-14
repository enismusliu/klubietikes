import { Merriweather, Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Content from "./_components/content";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  weight: ["300", "400", "500", "600", "800"],
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
      <body
        className={` ${merriweather.variable} ${merriweatherSans.variable} antialiased relative font-merriweather-sans`}
      >
        <Providers user={null}>
          <div className="h-dvh ">
            <Header />
            <Content>{children}</Content>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
