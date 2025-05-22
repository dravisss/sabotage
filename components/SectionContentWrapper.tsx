"use client";
import { ReactNode } from "react";

export default function SectionContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8 w-full">
      {children}
    </div>
  );
}
