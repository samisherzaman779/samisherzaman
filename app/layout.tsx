// # app/layout.tsx
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ChatBot } from "@/components/layout/ChatBot";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { rootMetadata } from "@/lib/site-metadata";

export const metadata = rootMetadata;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary">
        <SiteJsonLd />
        <Providers>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ChatBot />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
