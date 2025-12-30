import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://llm-refs.vercel.app'),
  title: {
    default: "LLM-refs - AI Models Universe",
    template: "%s | LLM-refs"
  },
  description: "Comprehensive AI model reference platform. Compare performance, pricing, and capabilities across LLMs, vision, audio, and video models. Created by Daniel Minton.",
  keywords: ["AI models", "LLM", "language models", "vision models", "audio models", "video models", "AI comparison", "model benchmarks", "GPT", "Claude", "Gemini"],
  authors: [{ name: "Daniel Minton", url: "https://danielminton.com" }],
  creator: "Daniel Minton",
  publisher: "Daniel Minton",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://llm-refs.vercel.app",
    title: "LLM-refs - AI Models Universe",
    description: "Comprehensive AI model reference platform. Compare performance, pricing, and capabilities across LLMs, vision, audio, and video models.",
    siteName: "LLM-refs",
    images: [
      {
        url: "/og-image_med.png",
        width: 1200,
        height: 630,
        alt: "LLM-refs - AI Models Universe",
        type: "image/png",
      },
      {
        url: "/og-image_lrg.png",
        width: 2400,
        height: 1260,
        alt: "LLM-refs - AI Models Universe (High-res)",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM-refs - AI Models Universe",
    description: "Comprehensive AI model reference platform. Compare performance, pricing, and capabilities.",
    creator: "@TheModernOpossum",
    images: ["/og-image_lrg.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LLM-refs",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X20VZXZ28P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X20VZXZ28P');
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
