import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { MobileHeader, MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/BackToTop";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dimas Rofi' | Portfolio",
  description: "Professional portfolio showcasing projects, ideas, and experiences.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Desktop Fixed Header */}
            <Navbar />

            {/* Mobile Fixed Header */}
            <MobileHeader />

            {/* Page content container with responsive padding to prevent overlap with fixed navbars */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-6 pt-14 pb-16 md:pt-16 md:pb-0">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Mobile Fixed Bottom Navigation */}
            <MobileNav />

            {/* Back to top button */}
            <BackToTop />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
