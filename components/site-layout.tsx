"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const isHome = pathname === '/';
  return (
    <SidebarProvider>
      {isHome ? (
        <main className="flex min-h-screen items-center justify-center w-full bg-beige-50">
          <div className="w-full max-w-[800px] mx-auto py-8">
            {children}
          </div>
        </main>
      ) : (
        <div className="flex min-h-screen bg-beige-50 text-zinc-800">
          <Sidebar />
          <SidebarInset>
            <Header />
            <div className="w-full max-w-[800px] mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-grow">
              {children}
            </div>
            <footer className="mt-auto py-6 md:py-0 border-t border-zinc-300 bg-beige-100">
              <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:h-20 md:flex-row md:max-w-5xl">
                <p className="text-balance text-center text-xs leading-loose text-zinc-600 md:text-left">
                  Construído com <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-red-600">Next.js</a> e <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-red-600">Shadcn/UI</a>.
                  Uma obra de ficção cínica.
                </p>
              </div>
            </footer>
          </SidebarInset>
        </div>
      )}
    </SidebarProvider>
  );
}
