import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import { Navbar } from "@/components/navbar";
import { Heart } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@deluxe/ui";
import Github from "@/components/icons/github";
import Discord from "@/components/icons/discord";
import { SubNav } from "@/components/docs/sub-nav";
import { SidebarContextProvider } from "@/components/docs/sidebar-toggle";

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
    "TailwindCSS",
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
      <body className={`${inter.className} relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SidebarContextProvider>
            <div className="relative flex min-h-screen flex-col dark:bg-neutral-950">
              <Navbar />
              <SubNav />
              <main className="container mx-auto flex-1">{children}</main>
              <footer className="border-t dark:border-neutral-800 dark:bg-neutral-950">
                <div className="container py-6 flex md:flex-row flex-col gap-2 dark:bg-neutral-950 items-center justify-between">
                  <p className="flex items-center gap-x-1 text-neutral-500">
                    Built with <Heart className="text-red-500" weight="fill" />{" "}
                    by nohaxito.
                  </p>
                  <div className="flex items-center gap-x-1 text-neutral-500">
                    <Button
                      variant="ghost"
                      className="dark:hover:text-white"
                      size="icon"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="dark:hover:text-white"
                      size="icon"
                    >
                      <Discord className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </footer>
            </div>
          </SidebarContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
