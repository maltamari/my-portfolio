const Data = [
  {
    image: "/maison.png",
    title: "Maison Élan",
    overview: `Maison Élan is a full-stack luxury e-commerce platform designed for high-end furniture shopping. Built with Next.js, the application combines elegant design and powerful functionality. It includes advanced features like user authentication, product reviews, favorites, and full cart/order management — all presented through a clean, accessible UI using shadcn/ui components.`,
    key: {
      "Modern Authentication": "Secure sign-in and sign-up powered by Clerk, supporting OAuth providers like Gmail and GitHub",
      "Database Layer": "Structured data management using Supabase as the backend and Prisma ORM for querying",
      "UI/UX Design": "Built with shadcn/ui for consistent, accessible, and visually appealing components",
      "Product Reviews": "Users can leave feedback and rate items",
      "Favorites & Cart": "Add items to favorites and manage a real-time shopping cart",
      "Order Management": "End-to-end checkout experience with dynamic order tracking",
      "Fully Responsive": "Designed with Tailwind CSS for mobile-first responsiveness and modern layout",
      "API Routes": "Custom server-side logic using Next.js API routes for handling core operations"
    },
    tools: "Next.js, React, Tailwind CSS, shadcn/ui, Supabase, Prisma ORM, Clerk Authentication",
    link: "https://nextjs-store-production.vercel.app/",
  },
  {
    image: "/n8n-instagram.png",
    title: "Instagram Analytics Automation",
    overview: `An advanced automation workflow built with n8n that connects directly to the Instagram Graph API. It collects post metrics, analyzes engagement trends, and generates automated AI-powered monthly reports for clients.`,
    key: {
      "Automation Platform": "Built using n8n for complete workflow automation and integration",
      "Instagram API": "Fetches post data including likes, comments, shares, saves, and reach",
      "Data Storage": "Automatically stores structured data in Airtable for historical analysis",
      "AI Insights": "Integrates OpenAI to generate monthly performance summaries and recommendations",
      "Top & Least Posts": "Automatically detects top and least performing content by engagement rate",
      "Report Generation": "Creates client-ready reports in Google Slides with visualized metrics",
      "Notifications": "Sends performance summaries to Telegram for instant updates"
    },
    tools: "n8n, Instagram Graph API, Airtable, OpenAI, Google Slides API, Telegram Bot",
    link: "#", // ضع رابط الـ workflow أو الصورة بعد ما ترفعه
  },
  {
    image: "/n8n-facebook.png",
    title: "Facebook Analytics Automation",
    overview: `This workflow automates Facebook Page analytics using n8n and the Meta Graph API. It aggregates daily metrics, calculates engagement KPIs, and generates monthly performance reports enhanced by AI insights.`,
    key: {
      "Facebook API": "Collects data from Facebook Page Insights for posts, reach, impressions, and reactions",
      "Loop & Merge Logic": "Combines daily post-level data into structured summaries using Code nodes",
      "Data Management": "Saves all metrics into Airtable for visualization and tracking",
      "AI-Powered Analysis": "Generates automated insights to identify content trends and audience behavior",
      "Report Delivery": "Exports metrics to Google Slides and Telegram for monthly client reporting",
      "Automation": "Runs on schedule to ensure reports are created and delivered automatically"
    },
    tools: "n8n, Facebook Graph API, Airtable, OpenAI, Google Slides API, Telegram Bot",
    link: "#", // ضع رابط الـ workflow أو الصورة بعد ما ترفعه
  },
];

export default Data;
