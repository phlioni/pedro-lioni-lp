import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pedro Lioni – The Survival Architect",
  description:
    "Inovação não pede licença. Pede atitude. Product Manager | Arquitetura de negócios e soluções.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jetbrains.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen font-sans bg-industrial-dark text-zinc-200">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neon-blue focus:text-industrial-dark focus:rounded"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
