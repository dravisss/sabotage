"use client";

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { SidebarProvider, SidebarInset, useSidebar } from '@/components/ui/sidebar';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SiteLayoutWithSidebarContext>{children}</SiteLayoutWithSidebarContext>
    </SidebarProvider>
  );
}

function SiteLayoutWithSidebarContext({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const isHome = pathname === '/';

  return (
    <div className={isHome ? "flex min-h-screen flex-col justify-between w-full bg-beige-50" : "flex min-h-screen bg-beige-50 text-zinc-800 flex-col"}>
      {isHome ? (
        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-[800px] mx-auto py-8">
            {children}
          </div>
        </main>
      ) : (
        <div className="flex flex-1">
          <Sidebar />
          <SidebarInset>
            <Header />
            <div className="w-full max-w-[800px] mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-grow">
              {children}
            </div>
          </SidebarInset>
        </div>
      )}
      <footer
        className="py-8 border-t border-zinc-300 bg-beige-100 w-full"
      >
        <div
          className="flex flex-col items-center justify-center gap-2 px-4 max-w-[800px] mx-auto transition-all"
          style={{
            paddingLeft: !isHome && !isCollapsed ? 280 : undefined,
          }}
        >
          <p className="text-center text-xs text-zinc-600 mb-2">Feito com <span role="img" aria-label="coração azul">💙</span> por <a href="https://targetteal.com" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-blue-700">Target Teal</a></p>
          <a href="https://targetteal.com" target="_blank" rel="noopener noreferrer" aria-label="Target Teal" className="block">
            <img
              src="/logo-targetteal.png"
              alt="Target Teal logo"
              style={{ maxWidth: 180, height: 'auto' }}
              className="mx-auto"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
