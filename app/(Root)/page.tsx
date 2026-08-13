import { Metadata } from "next";
import Contents from "@/components/Home/Content";
import Introduction from "@/components/Home/Introduction";
import Projects2 from "@/components/Home/projects2";
import Services2 from "@/components/Home/Services2";

// ✅ Metadata
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

      <div className="flex flex-col w-full">
        <Introduction />
        <Projects2 />
        <Services2 />
        <Contents />
      </div>
    </>
  );
}

// ✅ Revalidation - Update every 24 hours
export const revalidate = 86400;