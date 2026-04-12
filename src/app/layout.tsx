import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "Yohanan Boy - Portifólio",
  description:
    "Portifólio de Yohanan Boy, aluno do CEFET-RJ/NF. Aprendiz de HTML, CSS, C++, PHP, JavaScript, TypeScript, Tailwind, MySQL e etc",
  icons: [{ rel: "icon", url: "/check2.svg" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.className} scroll-smooth`}>
      <body className="bg-[#0b132b] text-white">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
