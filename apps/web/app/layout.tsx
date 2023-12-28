import "./globals.css";
import "@sihaxito/deluxe-ui/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme";
import { Navbar } from "@/components/navbar";
import { SidebarContextProvider } from "@/components/sidebar-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ui-library-web.vercel.app"),
  title: {
    default: "Deluxe UI",
    template: `%s - Deluxe UI`,
  },
  description: "Beautiful components for React with TailwindCSS",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "React Components",
    "Tailwind Components",
    "Remix",
    "Radix UI",
  ],
  authors: [
    {
      name: "nohaxito",
      url: "https://ui-library-web.vercel.app",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ui-library-web.vercel.app",
    title: "Deluxe UI",
    description: "Beautiful components for React with TailwindCSS",
    siteName: "Deluxe UI",
    images: [
      {
        url: "https://ui-library-web.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "Deluxe UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deluxe UI",
    description: "Beautiful components for React with TailwindCSS",
    images: ["https://ui-library-web.vercel.app/api/og"],
  },
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
            <div className="relative flex min-h-screen flex-col dark:bg-neutral-950">
              <Navbar />
              <main className="flex-1">{children}</main>
            </div>
          </SidebarContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
