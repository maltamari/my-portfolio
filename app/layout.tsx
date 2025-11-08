import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/global/Container";
import NavBar from "@/components/navBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Home/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ بيانات الميتا المحسّنة للموقع
export const metadata: Metadata = {
  title: "Mohammed Abdallah — Full-Stack Developer",
  description:
    "Portfolio of Mohammed Abdallah, Full-Stack Web Developer specializing in Next.js, React, Supabase, and Prisma.",
  metadataBase: new URL("https://www.mohammed-labs.site"),
  
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
  ],

  authors: [{ name: "Mohammed Abdallah" }],
  creator: "Mohammed Abdallah",
  publisher: "Mohammed Abdallah",

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
        url: "/og-image.png", // ✅ استخدم صورة بحجم 1200x630 بكسل
        width: 1200,
        height: 630,
        alt: "Mohammed Abdallah — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammed Abdallah — Full-Stack Developer",
    description:
      "Portfolio of Mohammed Abdallah, Full-Stack Web Developer specializing in Next.js, React, Supabase, and Prisma.",
    images: ["/og-image.png"],
    creator: "@alt3marii", // ✅ غيّر هذا لحسابك على تويتر
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
        {/* ✅ خطوط Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Favicon & Logo */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Structured Data (JSON-LD) - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammed Abdallah",
              url: "https://www.mohammed-labs.site",
              image: "https://www.mohammed-labs.site/me.jpg",
              sameAs: [
                "https://www.linkedin.com/in/mohammed-abdallah-7b2704277/",
                "https://github.com/maltamari",
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
              ],
              description:
                "Full-Stack Web Developer specialized in building modern web applications using Next.js, React, Supabase, and Prisma.",
            }),
          }}
        ></script>

        {/* ✅ Logo / Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mohammed Abdallah",
              url: "https://www.mohammed-labs.site",
              logo: "https://www.mohammed-labs.site/favicon.ico",
              sameAs: [
                "https://www.linkedin.com/in/mohammed-abdallah-7b2704277/",
                "https://github.com/maltamari",
              ],
            }),
          }}
        ></script>

        {/* ✅ Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mohammed Abdallah Portfolio",
              url: "https://www.mohammed-labs.site",
              description:
                "Portfolio of Mohammed Abdallah, Full-Stack Web Developer specializing in Next.js, React, Supabase, and Prisma.",
              author: {
                "@type": "Person",
                name: "Mohammed Abdallah",
              },
            }),
          }}
        ></script>
      </head>

      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}
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
      </body>
    </html>
  );
}
