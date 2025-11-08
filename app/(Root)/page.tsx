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
      {/* ✅ SEO tags الخاصة بالصفحة الرئيسية فقط */}
      <Head>
        <title>Mohammed Abdallah — Full-Stack Developer</title>
        <meta
          name="description"
          content="Explore the portfolio of Mohammed Abdallah — a Full-Stack Developer passionate about creating modern, scalable web applications using Next.js, React, Supabase, and Prisma."
        />
        <meta
          name="keywords"
          content="Mohammed Abdallah, Full-Stack Developer, Next.js, React, Supabase, Prisma, Portfolio, JavaScript, Web Development"
        />
        <link rel="canonical" href="https://www.mohammed-labs.site" />
      </Head>

      {/* ✅ الصفحة الرئيسية */}
      <main>
        <Introduction />

        <Suspense fallback={<p className="text-center">Loading projects...</p>}>
          <Projects2 />
        </Suspense>

        <Suspense fallback={<p className="text-center">Loading services...</p>}>
          <Services2 />
        </Suspense>

        <Contents />
      </main>
    </>
  );
}
