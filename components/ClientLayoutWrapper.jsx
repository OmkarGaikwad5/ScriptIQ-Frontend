"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import MiniNavbar from "@/components/MiniNavbar";
import { ThemeProvider } from "@/components/theme-provider";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const minimalRoutes = ["/landing", "/login", "/register"];
  const isMinimal = minimalRoutes.includes(pathname);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {isMinimal ? <MiniNavbar /> : <Navbar />}
      <main className="pt-16">{children}</main>
    </ThemeProvider>
  );
}
