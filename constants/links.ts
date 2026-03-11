
type NavBarPagesProps={
    name:string,
    href:string
}
export  const linksPages:NavBarPagesProps[] = [
     {name: 'Home',href: '/'},
     {name: 'Service',href: '/service'},
     {name: 'Projects',href: '/projects'},
]
export  const linksImages:NavBarPagesProps[] = [
     {name: 'Next JS',href: '/nextjs-svgrepo-com.svg'},
     {name: 'Css',href: 'css-fill-svgrepo-com.svg'},
     {name: 'Node js',href: '/nodejs-1-logo-svgrepo-com.svg'},
    {name: 'React',href: '/react-svgrepo-com.svg'},
    {name: 'Python',href: '/python.svg'},
    {name: 'Tailwind',href: '/tailwind-svgrepo-com.svg'},
    {name: 'Supabase',href: '/supabase-icon.svg'},


]

type ServiceProps = {
  name: string
  description: string
}

export const services: ServiceProps[] = [
  {
    name: 'Custom Web Applications',
    description:
      'I build modern and scalable web apps using React, Next.js, and Node.js — tailored for businesses and individuals.',
  },
  {
    name: 'Full-Stack Development',
    description:
      'From database to user interface — complete web solutions using technologies like Supabase, Prisma, Clerk, and Zod.',
  },
  {
    name: 'E-commerce Platforms',
    description:
      'Complete online store solutions with product listings, shopping cart, order tracking, and admin/user dashboards.',
  },
  {
    name: 'Admin Dashboards',
    description:
      'Custom-built admin panels to manage users, content, and analytics — fast, secure, and user-friendly.',
  },
  {
    name: 'Frontend Development with Tailwind CSS',
    description:
      'Clean, responsive, and fast UIs using Tailwind CSS and reusable component systems.',
  },
  {
    name: 'Website Migration to Next.js',
    description:
      'Convert old static or frontend-only sites to full-stack Next.js applications with improved performance and SEO.',
  },
  {
    name: 'Authentication & Authorization',
    description:
      'Secure login, registration, and role-based access control using modern tools like Clerk and Supabase Auth.',
  },
  {
    name: 'API Development & Integration',
    description:
      'Build and integrate RESTful APIs with backend services and third-party platforms.',
  },
  {
    name: 'Automation Workflows (n8n)',
    description:
      'Design and deploy advanced automation workflows using n8n — integrating APIs like Instagram, Facebook, Telegram, and Google Workspace to automate reports and business operations.',
  },
  {
    name: 'AI-Powered Data Analysis',
    description:
      'Integrate OpenAI and machine learning models to generate marketing insights, performance summaries, and automated decision-making reports.',
  },
  {
    name: 'Social Media Analytics Dashboards',
    description:
      'Build interactive dashboards that track social media metrics, engagement trends, and generate AI-powered monthly reports for clients.',
  },
  {
    name: 'Cloud Integration & Hosting',
    description:
      'Deploy fast, scalable web applications using Vercel, Supabase, and Cloudinary with optimized performance and secure hosting.',
  },
]

