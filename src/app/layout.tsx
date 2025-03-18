import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kensuuu | Software Engineer Portfolio",
  description: "Showcasing my work, skills, and projects as a software engineer specializing in web and mobile development.",
  keywords: ["Software Engineer", "Web Developer", "Mobile Developer", "Portfolio", "Kensuuu"],
  authors: [{ name: "Kensuuu", url: "https://kensuuu.github.io/" }],
  robots: "index, follow",
  openGraph: {
    title: "Kensuuu | Software Engineer Portfolio",
    description: "A portfolio website showcasing my work, skills, and projects.",
    url: "https://kensuuu.github.io/",
    siteName: "Kensuuu Portfolio",
    images: [
      {
        url: "https://kensuuu.github.io/avatar.png/",
        width: 1200,
        height: 630,
        alt: "Kensuuu's Portfolio"
      }
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-4 right-4">
            <ThemeToggle />
          </div>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="container mx-auto px-4 py-8 border-t">
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} kensuuu. All rights reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
