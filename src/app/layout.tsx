import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SocialLinks } from "@/components/social-links";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kensuuu",
  description: "Personal portfolio website showcasing my work and skills",
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
              <SocialLinks />
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
