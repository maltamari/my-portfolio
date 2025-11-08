"use client";

import Head from "next/head";
import Contents from "@/components/Home/Content";
import Introduction from "@/components/Home/Introduction";
import Projects2 from "@/components/Home/projects2";
import Services2 from "@/components/Home/Services2";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      {/* ✅ SEO & Structured Data */}
      <Head>
        <title>Mohammed Abdallah — Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Mohammed Abdallah, a Full-Stack Web Developer specializing in Next.js, React, Supabase, and Prisma."
        />
        <meta
          name="keywords"
          content="Mohammed Abdallah, Full-Stack Developer, Next.js, React, Supabase, Prisma, Portfolio"
        />
        <link rel="canonical" href="https://www.mohammed-labs.site" />

        {/* ✅ Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammed Abdallah",
              url: "https://www.mohammed-labs.site",
              image:
                "https://www.mohammed-labs.site/me.jpg",
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
      </Head>

      {/* ✅ الصفحة الرئيسية */}
      <div>
        <Introduction />

        <Suspense fallback={<p className="text-center">Loading projects...</p>}>
          <Projects2 />
        </Suspense>

        <Suspense fallback={<p className="text-center">Loading services...</p>}>
          <Services2 />
        </Suspense>

        <Contents />
      </div>
    </>
  );
}
