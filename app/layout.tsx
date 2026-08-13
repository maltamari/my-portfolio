import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Home/Footer";
import Script from "next/script";

// ✅ Optimized Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// ✅ Viewport Configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// ✅ Enhanced Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mohammed-labs.site"),
  title: {
    default: "Mohammed Abdallah — Full-Stack Developer",
    template: "%s | Mohammed Abdallah",
  },
  description:
    "Portfolio of Mohammed Abdallah, Full-Stack Web Developer specializing in Next.js, React, Supabase, and Prisma.",
  keywords: [
    "Mohammed Abdallah",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Supabase",
    "Prisma",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "maltamari",
    "Web Developer Jordan",
  ],
  authors: [{ name: "Mohammed Abdallah" }],
  creator: "Mohammed Abdallah",
  publisher: "Mohammed Abdallah",
  category: "technology",
  applicationName: "Mohammed Abdallah Portfolio",
  alternates: {
    canonical: "https://www.mohammed-labs.site",
  },
  openGraph: {
    title: "Mohammed Abdallah — Full-Stack Developer",
    description:
      "Portfolio of Mohammed Abdallah, Full-Stack Web Developer specializing in Next.js, React, Supabase, and Prisma.",
    url: "https://www.mohammed-labs.site",
    siteName: "Mohammed Abdallah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Abdallah — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Mohammed",
    lastName: "Abdallah",
    username: "maltamari",
  },
  twitter: {
    card: "summary_large_image",
    site: "@alt3marii",
    title: "Mohammed Abdallah — Full-Stack Developer",
    description:
      "Portfolio of Mohammed Abdallah, Full-Stack Web Developer specializing in Next.js, React, Supabase, and Prisma.",
    images: ["/og-image.png"],
    creator: "@alt3marii",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Mohammed Abdallah Portfolio" />
        <meta name="author" content="Mohammed Abdallah" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} font-sans min-h-screen flex flex-col antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="flex-grow pt-24 pb-16 px-6 max-w-7xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

        <Toaster position="top-center" />

        {/* ✅ Google Analytics (Production Only) */}
        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `}
              </Script>
            </>
          )}
      </body>
    </html>
  );
}