"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  // Verificar se é uma página de autenticação ou a rota not-found
  const isAuthOrNotFoundPage =
    ["/cadastro", "/login", "/not-found"].some((path) =>
      pathname?.startsWith(path)
    ) || pathname === undefined;

  return (
    <html lang="pt-br">
      <body className="flex flex-col h-screen">
        {/* Renderiza Navbar e Sidebar apenas em rotas específicas */}
        {!isAuthOrNotFoundPage && <Navbar />}
        <div className={`${!isAuthOrNotFoundPage ? "flex flex-1 overflow-hidden" : ""}`}>
          {!isAuthOrNotFoundPage && <Sidebar />}
          <main className={`${!isAuthOrNotFoundPage ? "" : "flex flex-col h-screen p-0"}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
