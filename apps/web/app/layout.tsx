import "./globals.css";
import "@sihaxito/deluxe-ui/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme";
import { Navbar } from "@/components/navbar";
import { SidebarContextProvider } from "@/components/sidebar-context";
// import { SidebarContextProvider } from "@/components/sidebar-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarContextProvider>
            <div className="relative flex min-h-screen dark:bg-neutral-950 flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
            </div>
          </SidebarContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
