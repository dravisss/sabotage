"use client";
import { ReactNode } from "react";


export default function SectionContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8 w-full">
      {children}
      {/* O formulário de newsletter será inserido manualmente antes da navegação nas páginas de seção. */}
    </div>
  );
}
