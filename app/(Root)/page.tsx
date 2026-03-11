import { Metadata } from "next";
import Contents from "@/components/Home/Content";
import Introduction from "@/components/Home/Introduction";
import Projects2 from "@/components/Home/projects2";
import Services2 from "@/components/Home/Services2";
import { Suspense } from "react";

// ✅ Metadata للصفحة الرئيسية فقط
export const metadata: Metadata = {
  title: "Mohammed Abdallah — Full-Stack Developer | Portfolio",
  description:
    "Explore the portfolio of Mohammed Abdallah — a Full-Stack Developer passionate about creating modern, scalable web applications using Next.js, React, Supabase, and Prisma.",
  keywords: [
    "Mohammed Abdallah",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Supabase",
    "Prisma",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Web Developer Jordan",
    "maltamari",
  ],
  openGraph: {
    title: "Mohammed Abdallah — Full-Stack Developer | Portfolio",
    description:
      "Explore the portfolio of Mohammed Abdallah — a Full-Stack Developer passionate about creating modern, scalable web applications.",
    url: "https://www.mohammed-labs.site",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Abdallah Portfolio - Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Abdallah — Full-Stack Developer",
    description:
      "Full-Stack Developer passionate about creating modern web applications using Next.js, React, Supabase, and Prisma.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.mohammed-labs.site",
  },
};

// ✅ Loading Skeletons - Better UX
function ProjectsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-8 mx-auto animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-8 mx-auto animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-4 p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Server Component (Default) - No "use client" needed
export default function Home() {
  return (
    <>
      {/* ✅ Structured Data - ProfilePage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            dateCreated: new Date().toISOString().split('T')[0],
            dateModified: new Date().toISOString().split('T')[0],
            mainEntity: {
              "@type": "Person",
              "@id": "https://www.mohammed-labs.site/#person",
              name: "Mohammed Abdallah",
              alternateName: "maltamari",
              jobTitle: "Full-Stack Web Developer",
              description:
                "Full-Stack Web Developer specialized in building modern web applications using Next.js, React, Supabase, and Prisma",
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
              knowsAbout: [
                {
                  "@type": "Thing",
                  name: "Next.js",
                  description: "React Framework for Production",
                },
                {
                  "@type": "Thing",
                  name: "React",
                  description: "JavaScript Library for User Interfaces",
                },
                {
                  "@type": "Thing",
                  name: "TypeScript",
                  description: "Typed JavaScript",
                },
                {
                  "@type": "Thing",
                  name: "Supabase",
                  description: "Open Source Firebase Alternative",
                },
                {
                  "@type": "Thing",
                  name: "Prisma",
                  description: "Next-generation ORM",
                },
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Full-Stack Web Developer",
                occupationLocation: {
                  "@type": "City",
                  name: "Amman",
                },
                skills: [
                  "Next.js",
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "Node.js",
                  "Supabase",
                  "Prisma",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "REST API",
                  "GraphQL",
                ],
              },
            },
          }),
        }}
      />

      {/* ✅ Main Content */}
      <main className="min-h-screen">
        {/* Hero/Introduction Section - Loads immediately */}
        <section aria-label="Introduction" className="min-h-screen">
          <Introduction />
        </section>

        {/* Projects Section - Loads with Suspense */}
        <section 
          aria-label="Featured Projects" 
          className="py-16 bg-gray-50 dark:bg-gray-900/50"
        >
          <Suspense fallback={<ProjectsSkeleton />}>
            <Projects2 />
          </Suspense>
        </section>

        {/* Services Section - Loads with Suspense */}
        <section aria-label="Services" className="py-16">
          <Suspense fallback={<ServicesSkeleton />}>
            <Services2 />
          </Suspense>
        </section>

        {/* Contents/CTA Section */}
        <section 
          aria-label="Contact Information" 
          className="py-16 bg-gray-50 dark:bg-gray-900/50"
        >
          <Contents />
        </section>
      </main>
    </>
  );
}

// ✅ Revalidation - Update every 24 hours
export const revalidate = 86400; // 24 hours

// ✅ Optional: Runtime configuration
// export const runtime = 'edge'; // Use Edge Runtime for faster responses
// export const dynamic = 'force-static'; // Force static generation