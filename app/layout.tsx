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

// ✅ بيانات الميتا العامة للموقع
export const metadata: Metadata = {
  title: "Mohammed Abdallah — Full-Stack Developer",
  description:
    "Portfolio of Mohammed Abdallah, Full-Stack Web Developer specializing in Next.js, React, Supabase, and Prisma.",
  metadataBase: new URL("https://www.mohammed-labs.site"),
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

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Creative and passionate Full-Stack Developer specializing in Next.js, React, Supabase, and Prisma."
        />

        {/* ✅ Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammed Abdallah",
              url: "https://www.mohammed-labs.site",
              image: "https://www.mohammed-labs.site/me.jpg", // غيّرها لرابط صورتك الحقيقي
              sameAs: [
                "https://www.linkedin.com/in/mohammed-abdallah-7b2704277/",
                "https://github.com/maltamari",
              ],
              jobTitle: "Full-Stack Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / BoldPro Marketing Agency",
              },
              description:
                "Full-Stack Web Developer specialized in building modern web applications using Next.js, React, Supabase, and Prisma.",
            }),
          }}
        />
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
