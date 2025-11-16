import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Container from "@/components/global/Container";
import NavBar from "@/components/navBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Home/Footer";
import Script from "next/script";

// ✅ Optimized Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

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

// ✅ Viewport Configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
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
  verification: {
    google: "your-google-verification-code-here",
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
        {/* ✅ Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* ✅ Preload Critical Font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ Canonical + Robots */}
        <link rel="canonical" href="https://www.mohammed-labs.site" />
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/contact" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="application-name" content="Mohammed Abdallah Portfolio" />

        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="author" content="Mohammed Abdallah" />

        {/* ✅ Favicon & Theme */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="alternate" hrefLang="en" href="https://www.mohammed-labs.site" />

        {/* ✅ Structured Data - Person (Enhanced) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.mohammed-labs.site/#person",
              name: "Mohammed Abdallah",
              alternateName: "maltamari",
              url: "https://www.mohammed-labs.site",
              image: {
                "@type": "ImageObject",
                url: "https://www.mohammed-labs.site/me.jpg",
                width: 800,
                height: 800,
              },
              sameAs: [
                "https://www.linkedin.com/in/mohammed-abdallah-7b2704277/",
                "https://github.com/maltamari",
                "https://twitter.com/alt3marii",
              ],
              jobTitle: "Full-Stack Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / BoldPro Marketing Agency",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "Supabase",
                "Prisma",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Full-Stack Development",
                "Web Development",
                "Database Design",
              ],
              description:
                "Full-Stack Web Developer specialized in building modern web applications using Next.js, React, Supabase, and Prisma.",
              nationality: "Jordanian",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Amman",
                addressCountry: "JO",
              },
            }),
          }}
        />

        {/* ✅ Structured Data - Organization (Enhanced) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.mohammed-labs.site/#organization",
              name: "Mohammed Abdallah",
              url: "https://www.mohammed-labs.site",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mohammed-labs.site/logo.png",
              },
              description:
                "Full-Stack Web Developer specialized in Next.js, React, and modern web technologies",
              founder: {
                "@type": "Person",
                name: "Mohammed Abdallah",
              },
              sameAs: [
                "https://www.linkedin.com/in/mohammed-abdallah-7b2704277/",
                "https://github.com/maltamari",
                "https://twitter.com/alt3marii",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "mohammed.abdallah.dev@gmail.com",
                contactType: "customer support",
                availableLanguage: ["English", "Arabic"],
              },
            }),
          }}
        />

        {/* ✅ Structured Data - WebSite (Enhanced) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.mohammed-labs.site/#website",
              name: "Mohammed Abdallah Portfolio",
              url: "https://www.mohammed-labs.site",
              description:
                "Portfolio of Mohammed Abdallah, Full-Stack Web Developer specializing in Next.js, React, Supabase, and Prisma.",
              author: {
                "@type": "Person",
                name: "Mohammed Abdallah",
              },
              inLanguage: "en-US",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.mohammed-labs.site/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ✅ Structured Data - WebPage (Enhanced) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.mohammed-labs.site/#webpage",
              name: "Mohammed Abdallah — Full-Stack Developer",
              url: "https://www.mohammed-labs.site",
              description:
                "Personal portfolio of Mohammed Abdallah, Full-Stack Web Developer specialized in Next.js, React, Supabase, and Prisma.",
              inLanguage: "en-US",
              isPartOf: {
                "@id": "https://www.mohammed-labs.site/#website",
              },
              about: {
                "@id": "https://www.mohammed-labs.site/#person",
              },
            }),
          }}
        />

        {/* ✅ Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.mohammed-labs.site",
                },
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <Container>{children}</Container>
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
