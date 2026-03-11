import { Code2, Rocket, Zap, Globe, Layers, Sparkles, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const projects = [
    {
      name: "Maison Élan",
      description: "Full e-commerce furniture store with modern design, shopping cart, and admin dashboard",
      tech: "Next.js, Supabase, Tailwind CSS"
    },
    {
      name: "Flixx",
      description: "Movie streaming platform with dynamic content and smooth user experience",
      tech: "React, TypeScript, API Integration"
    },
    {
      name: "AI Expense Tracker",
      description: "Smart expense tracking with AI-powered categorization and insights",
      tech: "Next.js, OpenAI, PostgreSQL"
    },
    {
      name: "Marketing Automation Dashboards",
      description: "Built for BoldPro Agency - automated workflows and analytics tools",
      tech: "n8n, Graph API, React"
    },
    {
      name: "Real-time Chatbot Widgets",
      description: "Interactive chat interfaces with live messaging capabilities",
      tech: "React, Socket.IO, Node.js"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase"] },
    { category: "AI & Automation", items: ["n8n", "LangChain", "OpenAI API", "Graph API"] },
    { category: "Tools & More", items: ["Three.js", "Spline", "Git", "SEO Optimization", "Socket.IO"] }
  ];

  return (
    <div className=" w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <span className="text-blue-400 font-semibold tracking-wider">FULL-STACK DEVELOPER</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Mohamed Abdallah
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            I build fast, beautiful, and intelligent web applications that solve real problems. From Jordan to the world.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center gap-2">
              Let's Talk <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#projects" className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition">
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section className="px-6 py-20 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Hey, I'm Mohamed (or Mohammed Al-Tamari) — a full-stack developer based in Jordan who loves building things that actually work and look great doing it.
            </p>
            <p>
              I got into web development because I wanted to create experiences that feel alive. Not just websites that sit there, but apps that move, respond, and help people get stuff done. Whether it's a full e-commerce platform, an AI-powered tool, or a slick dashboard, I'm all about making it fast, clean, and enjoyable to use.
            </p>
            <p>
              I don't just code — I think about the full picture. How does it perform? Is it SEO-friendly? Will users love it? Does the animation feel smooth? That's the kind of detail I care about.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
          </div>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            I specialize in modern web development with a focus on performance, design, and user experience. Here's what I bring to the table:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
              <p className="text-gray-400">
                Complete web applications from database to UI. I handle everything — backend APIs, database design, frontend interfaces, and deployment.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI & Automation</h3>
              <p className="text-gray-400">
                Building intelligent workflows with n8n, LangChain, and OpenAI. From chatbots to marketing automation, I make AI work for real businesses.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-green-500/50 transition">
              <Sparkles className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">UI/UX & Animations</h3>
              <p className="text-gray-400">
                Crafting interfaces that feel premium. Smooth animations with GSAP and Framer Motion, responsive designs, and attention to every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-20 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-6 h-6 text-green-400" />
            <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          </div>
          <p className="text-lg text-gray-300 mb-12">
            Here are some of the things I've built. Each one taught me something new and pushed my skills forward.
          </p>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.name} className="p-6 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.name}</h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <p className="text-sm text-gray-500 font-mono">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-6 h-6 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Tools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-900 text-gray-300 rounded-full text-sm border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="px-6 py-20 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-pink-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Why Work With Me</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I don't just deliver code — I deliver solutions. When you work with me, you get someone who actually cares about your project succeeding. I ask questions, suggest improvements, and think about the user experience from day one.
            </p>
            <p>
              I'm reliable, communicate clearly, and always meet deadlines. I've worked with agencies like BoldPro, building real tools that businesses depend on every day. I know how to balance speed with quality, and I'm not afraid to go the extra mile to make something great.
            </p>
            <p>
              Plus, I'm always learning. Right now I'm diving deeper into 3D with Three.js and Spline, leveling up my DevOps skills, and constantly improving my English to communicate better. I believe in growing with every project.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold">My Vision</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm building <span className="text-blue-400 font-semibold">Mohammed-Labs</span> — my personal brand focused on creating web apps, AI tools, automation systems, and interactive 3D experiences. It's my playground for innovation and a platform to help others bring their ideas to life.
            </p>
            <p>
              My goal is simple: build products that matter. Whether it's helping a small business automate their workflow, creating a stunning website for a startup, or developing an AI-powered tool that makes people's lives easier — I want to make an impact.
            </p>
            <p>
              I'm ambitious, and I'm just getting started. Let's build something incredible together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Got a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:your.email@example.com" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}