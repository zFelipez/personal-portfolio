import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { NavBar } from "./_components/NavBar";
import { SiteFooter } from "./_components/SiteFooter";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Portfólio pessoal de um estudante de tecnologia, apresentando projetos, habilidades e experiências relevantes para a área de desenvolvimento de software. Alem de um blog pessoal onde compartilho meus conhecimentos e aprendizados sobre tecnologia, programação e desenvolvimento de software, alem de outros estudos pessoais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${ebGaramond.variable}`}>
      <body>
        <NavBar/>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
