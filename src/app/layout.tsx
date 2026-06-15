import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/NavBar";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa o CSS para o tamanho correto
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Desabilita a injeção automática de CSS padrão

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
      data-theme="dark"
      suppressHydrationWarning
      className={`
    h-full
    antialiased
    ${geistSans.variable}
    ${geistMono.variable}
    ${inter.variable}
    font-sans
    bg-(--background-primary)
  `}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex" cz-shortcut-listen="true">
        <NavBar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
