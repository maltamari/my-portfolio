import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/global/Container";
import NavBar from "@/components/navBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/Home/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// إذا كنت تستخدم app directory
export const metadata = {
  title: "Mohamed Abdallah| Full Stack Developer",
  description: "Creative and passionate full stack developer building modern web applications with Next.js and React.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
         <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
          <meta name="description" content="Creative and passionate full stack developer..." />
      </head>
      <body>
          <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <NavBar/>
       <Container>
         {children}
       </Container>
        <Footer/>
       </ThemeProvider>
       <Toaster  position="top-center" />
      </body>
    </html>
  );
}
