import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import { Navbar } from "@/components/navbar";
import { Heart } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@deluxe/ui";
import Github from "@/components/icons/github";
import Discord from "@/components/icons/discord";

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
          <div className="relative flex min-h-screen flex-col dark:bg-neutral-950">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <footer className="border-t dark:border-neutral-800 dark:bg-neutral-950">
            <div className="container py-4 flex md:flex-row flex-col gap-2 items-center justify-between">
              {/* <div className="text-neutral-500">
                Using{" "}
                <a
                  className="underline text-neutral-700 dark:text-neutral-300"
                  target="_blank"
                  rel="noreferrer noopen"
                  href="https://radix-ui.com"
                >
                  RadixUI
                </a>{" "}
                and{" "}
                <a
                  className="underline text-neutral-700 dark:text-neutral-300"
                  target="_blank"
                  rel="noreferrer noopen"
                  href="https://tailwindcss.com"
                >
                  TailwindCSS
                </a>
              </div> */}
              <p className="flex items-center gap-x-1 text-neutral-500">
                Built with <Heart className="text-red-500" weight="fill" /> by
                nohaxito.
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
        </ThemeProvider>
      </body>
    </html>
  );
}
