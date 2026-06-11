import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/ui";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importa o CSS para o tamanho correto
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Desabilita a injeção automática de CSS padrão

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const background = "bg-[#090E12]";

export const metadata: Metadata = {
  title: "Seu Gestor Financeiro",
  description:
    "Seu Gestor Financeiro é um aplicativo de gerenciamento financeiro pessoal que ajuda você a controlar suas finanças, acompanhar seus gastos e alcançar seus objetivos financeiros. Com uma interface intuitiva e recursos poderosos, o Seu Gestor Financeiro torna o gerenciamento financeiro fácil e acessível para todos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        background
      ) }
    >
      <body className="min-h-full flex">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
