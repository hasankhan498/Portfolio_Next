"use client"
import { Code2, Palette, Server, Database, Cloud, Zap, Globe, } from "lucide-react"
import {motion} from "framer-motion"

interface SkillCardTypes {
  id: number
  icon: React.ComponentType<{ className?: string }>
  title: string
  color: string
  desc: string
  skills: string[]
}

const skillsCard: SkillCardTypes[] = [
  {
    id: 1,
    icon: Code2,
    title: "Frontend Development",
    color: "#F7C62F",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    desc: "Building responsive and interactive user interfaces",
  },
  // {
  //   id: 2,
  //   icon: Server,
  //   title: "Backend Development",
  //   color: "#3B82F6",
  //   skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
  //   desc: "Creating robust server-side applications",
  // },
  // {
  //   id: 3,
  //   icon: Database,
  //   title: "Database Management",
  //   color: "#10B981",
  //   skills: ["MongoDB", "PostgreSQL", "mysql", "Prisma"],
  //   desc: "Designing efficient data structures and queries",
  // },
  // {
  //   id: 4,
  //   icon: Cloud,
  //   title: "Cloud & DevOps",
  //   color: "#8B5CF6",
  //   skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
  //   desc: "Deploying and scaling applications",
  // },
  {
    id: 7,
    icon: Globe,
    title: "Web Technologies",
    color: "#06B6D4",
    skills: ["HTML5", "CSS3", "JavaScript", "WebSockets"],
    desc: "Mastering core web fundamentals",
  },
  {
    id: 5,
    icon: Palette,
    title: "UI/UX Design",
    color: "#EC4899",
    skills: ["Figma", "Responsive Design", "Accessibility", "Animation"],
    desc: "Crafting beautiful user experiences",
  },
  {
    id: 6,
    icon: Zap,
    title: "Performance",
    color: "#F59E0B",
    skills: ["Optimization", "Caching", "Code Splitting", "SEO"],
    desc: "Ensuring fast and efficient applications",
  },
  // {
  //   id: 8,
  //   icon: Shield,
  //   title: "Security",
  //   color: "#EF4444",
  //   skills: ["Authentication", "Encryption", "OWASP", "Best Practices"],
  //   desc: "Building secure applications",
  // },
]

const SkillsSection = () => {
  return (
    <section id="skills" className="relative bg-black py-20">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute inset-0 bg-neutral-700/5" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#F7C62F] font-semibold text-sm uppercase mb-2">
            Skills & Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            What I Do Best
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive toolkit that enables me to build complete,
            production-ready applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10 justify-items-center">
          {skillsCard.map((card) => (
            <motion.div
            initial={{y:40,opacity:0}}
            whileInView={{y:0,opacity:1}}
            viewport={{once:true}}
            transition={{duration:0.3,delay:0.1*card.id}}
              key={card.id}
              className="relative group rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-xs hover:-translate-y-1 hover:border-white/20 transition-all overflow-hidden"
            >
              {/* bg-styling effect */}
              <div
              style={{backgroundColor:`${card.color}`}}
              className="absolute inset-1/2 -translate-1/2 h-28 w-28 rounded-full -z-10 blur-3xl opacity-0 group-hover:opacity-70 transition-all" />
              {/* corner blob */}
              <div 
              style={{backgroundColor:`${card.color}33`}}
              className="absolute right-0 top-0 h-28 w-28 rounded-full -z-20 backdrop-blur-md -translate-y-1/3 translate-x-1/3 opacity-0 group-hover:opacity-70 transition-all blur-md" />
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `${card.color}33`,
                  color: card.color,
                }}
              >
                <card.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {card.title}
              </h3>

              <p className="text-white/70 text-sm mb-4">
                {card.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {card.skills.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
