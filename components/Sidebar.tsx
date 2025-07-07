"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { manualSections, sectionEmojis } from "@/lib/manual-content";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className={`fixed top-16 left-0 z-40 flex flex-col bg-[#f5f5f0] border-r border-zinc-200 shadow-sm transition-all duration-300 ${collapsed ? "w-20 min-w-[72px]" : "w-56"}`}
      style={{ height: 'calc(100vh - 64px)', overflow: 'visible' }}
      data-collapsed={collapsed}
    >
      <SidebarContent className="flex-1 overflow-y-auto" style={{ overflow: 'visible' }}>
        <SidebarGroup>
          {/* Trigger sempre visível: */}
          {collapsed ? (
            <div className="flex items-center justify-center py-2">
              <SidebarTrigger className="w-10 h-10 flex items-center justify-center text-2xl" />
            </div>
          ) : (
            <div className="flex items-center justify-between px-3 py-2">
              <SidebarGroupLabel className="font-title text-lg text-red-700 p-0 m-0">Seções do Manual</SidebarGroupLabel>
              <SidebarTrigger className="ml-2 w-10 h-10 flex items-center justify-center text-2xl" />
            </div>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Renderiza até o quiz */}
{manualSections.map((section, idx) => {
  if (section.slug === "encerramento") return null;
  return (
    <SidebarMenuItem key={section.slug}>
      <SidebarMenuButton asChild className={`w-full ${collapsed ? "justify-center items-center px-0 h-12" : ""} ${pathname === `/manual/${section.slug}` ? "bg-zinc-200 text-zinc-900 font-bold" : "text-zinc-700 hover:bg-zinc-100"}`} style={{ minHeight: 44, overflow: 'visible' }}>
        <Link href={`/manual/${section.slug}`} tabIndex={0} className={`flex items-center w-full ${collapsed ? "justify-center" : "gap-3"}`} style={{ overflow: 'visible' }}>
          <span className="text-2xl select-none" aria-label="emoji da seção" style={{ overflow: 'visible' }}>
            {sectionEmojis[section.slug] || "📖"}
          </span>
          {!collapsed && (
            <span className="truncate" style={{ whiteSpace: "nowrap" }}>{section.navTitle.replace(/^\d+\.\s*/, "")}</span>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
})}
{/* Insere o link do Matrioska após o quiz */}
<SidebarMenuItem>
  <SidebarMenuButton asChild className={`w-full ${collapsed ? "justify-center items-center px-0 h-12" : ""} ${pathname === "/matrioska" ? "bg-zinc-200 text-zinc-900 font-bold" : "text-zinc-700 hover:bg-zinc-100"}`} style={{ minHeight: 44, overflow: 'visible' }}>
    <Link href="/matrioska" tabIndex={0} className={`flex items-center w-full ${collapsed ? "justify-center" : "gap-3"}`} style={{ overflow: 'visible' }}>
      <span className="text-2xl select-none" aria-label="Jogo Matrioska" style={{ overflow: 'visible' }}>
        🎲
      </span>
      {!collapsed && (
        <span className="truncate" style={{ whiteSpace: "nowrap" }}>Jogo Matrioska</span>
      )}
    </Link>
  </SidebarMenuButton>
</SidebarMenuItem>
{/* Renderiza o encerramento */}
{manualSections.find(s => s.slug === "encerramento") && (
  <SidebarMenuItem key="encerramento">
    <SidebarMenuButton asChild className={`w-full ${collapsed ? "justify-center items-center px-0 h-12" : ""} ${pathname === "/manual/encerramento" ? "bg-zinc-200 text-zinc-900 font-bold" : "text-zinc-700 hover:bg-zinc-100"}`} style={{ minHeight: 44, overflow: 'visible' }}>
      <Link href="/manual/encerramento" tabIndex={0} className={`flex items-center w-full ${collapsed ? "justify-center" : "gap-3"}`} style={{ overflow: 'visible' }}>
        <span className="text-2xl select-none" aria-label="emoji da seção" style={{ overflow: 'visible' }}>
          {sectionEmojis["encerramento"] || "📖"}
        </span>
        {!collapsed && (
          <span className="truncate" style={{ whiteSpace: "nowrap" }}>Encerramento</span>
        )}
      </Link>
    </SidebarMenuButton>
  </SidebarMenuItem>
)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

    </Sidebar>
  );
}
