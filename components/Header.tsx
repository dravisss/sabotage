"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-300 bg-beige-100/95 backdrop-blur supports-[backdrop-filter]:bg-beige-100/60">
      <div className="max-w-[800px] mx-auto flex h-16 items-center justify-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-title text-xl font-bold sm:text-2xl text-red-700 hover:text-red-800 transition-colors">
            Manual de Sabotagem Corporativa
          </span>
        </Link>
      </div>
    </header>
  );
}
