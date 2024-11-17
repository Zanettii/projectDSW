'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import  Navbar  from "@/components/Navbar";
import { ReactNode } from "react";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const isAuthPage = pathname?.includes('/cadastro') || pathname?.includes('/login')|| pathname?.includes('/not-found');
  return (
    <html lang="pt-br">
      <body className='flex flex-col h-screen'>
      {!isAuthPage && <Navbar />}
        <div className={` ${!isAuthPage ? 'flex flex-1 overflow-hidden' : ''}`}>
        {!isAuthPage && <Sidebar />}
          <main className={` ${!isAuthPage ? '' : 'flex flex-col h-screen p-0'}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
