"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet, 
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { MenuIcon, HomeIcon, BookOpenTextIcon } from 'lucide-react';
import { manualSections } from '../lib/manual-content';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Página Inicial', Icon: HomeIcon },
    ...manualSections.map(section => ({
      href: `/manual/${section.slug}`,
      label: section.navTitle,
      Icon: BookOpenTextIcon // Placeholder, can be customized per section later
    }))
  ];

  return (
    <div className="min-h-screen flex flex-col bg-beige-50 text-zinc-800">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-300 bg-beige-100/95 backdrop-blur supports-[backdrop-filter]:bg-beige-100/60">
        <div className="container flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-title text-xl font-bold sm:text-2xl text-red-700 hover:text-red-800 transition-colors">
              Manual de Sabotagem Corporativa
            </span>
          </Link>
          
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-beige-100 hover:bg-beige-200 border-zinc-400">
                <MenuIcon className="h-6 w-6 text-zinc-700" />
                <span className="sr-only">Abrir Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 sm:w-80 bg-beige-50 border-r border-zinc-300 p-0">
              <SheetHeader className="border-b border-zinc-300 p-4">
                <SheetTitle className="font-title text-xl text-red-700">
                  Navegação
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-1 p-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-red-100 hover:text-red-700 ${ 
                          isActive ? 'bg-red-100 text-red-700 font-semibold' : 'text-zinc-700 hover:text-red-600'
                        }`}
                      >
                        <link.Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-red-700' : 'text-zinc-500 group-hover:text-red-600'}`} />
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Sidebar - Always visible */}
          <nav className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 md:left-0 md:border-r md:border-zinc-300 md:bg-beige-50 md:pt-20 md:p-4">
            <p className="mb-4 font-title text-lg text-red-700 px-3">Seções do Manual</p>
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-red-100 hover:text-red-700 ${ 
                      isActive ? 'bg-red-100 text-red-700 font-semibold' : 'text-zinc-700 hover:text-red-600'
                    }`}
                  >
                    <link.Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-red-700' : 'text-zinc-500 group-hover:text-red-600'}`} />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Desktop fixed sidebar spacer - ensures content is not overlapped by the always-visible desktop sidebar */}
        <aside className="hidden md:block md:w-64 md:flex-shrink-0"></aside>
        
        <main className="flex-1 container max-w-3xl py-8 px-4 sm:px-6 lg:px-8 md:ml-0">
          {children}
        </main>
      </div>

      <footer className="py-6 md:py-0 border-t border-zinc-300 bg-beige-100">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:h-20 md:flex-row md:max-w-5xl">
          <p className="text-balance text-center text-xs leading-loose text-zinc-600 md:text-left">
            Construído com <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-red-600">Next.js</a> e <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-red-600">Shadcn/UI</a>.
            Uma obra de ficção cínica.
          </p>
        </div>
      </footer>
    </div>
  );
}
