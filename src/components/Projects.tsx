"use client"
import myImage from "@/assets/imgs/ai4.jpeg";
import portfolio_img from "@/assets/imgs/hero-port.png";
import projectImage3 from '@/assets/imgs/project3.png';
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

type TabType = {
    id: number;
    title: string;
    filter: string;
}[]

const tabings: TabType = [
    { id: 1, title: 'All', filter: 'all' },
    { id: 2, title: 'Frontend', filter: 'Frontend' },
    { id: 3, title: 'Full Stack', filter: 'Full Stack' },
    { id: 4, title: 'UI/UX', filter: 'UI/UX' },
]

interface ProjectType {
    id: number
    img: any
    categ: "Frontend" | "Full Stack" | "UI/UX"
    title: string
    tech: string[]
    desc: string
    link: string
}

export const projects: ProjectType[] = [
    // ================= FRONTEND =================
    {
        id: 1,
        img: portfolio_img,
        categ: "Frontend",
        title: "Developer Portfolio",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        desc: "A modern developer portfolio with smooth animations, responsive layout, and clean UI.",
        link: "https://portfolio-nine-theta-61.vercel.app/",
    },
    {
        id: 2,
        img: myImage,
        categ: "Frontend",
        title: "SaaS Landing Page",
        tech: ["React", "Tailwind CSS", "Vite"],
        desc: "High-conversion SaaS landing page with optimized sections and responsive design.",
        link: "https://saaslanding.com",
    },
    

    // ================= FULL STACK =================
    {
        id: 3,
        img: projectImage3,
        categ: "Full Stack",
        title: "ExpenseFlow",
        tech: ["Next.js", "Gen AI", "MongoDB", "TypeScript", "Tailwind"],
        desc: "A smart expense tracker that helps users monitor income and expenses effortlessly, giving clear insight into their spending.",
        link: "https://mystore.com",
    },
    {
        id: 4,
        img: myImage,
        categ: "Full Stack",
        title: "Admin Dashboard",
        tech: ["React", "Express", "PostgreSQL", "Chart.js"],
        desc: "Data-driven admin panel with real-time statistics and role-based access control.",
        link: "https://admindashboard.com",
    },
    

    // ================= UI / UX =================
    {
        id: 5,
        img: myImage,
        categ: "UI/UX",
        title: "Mobile App UI Design",
        tech: ["Figma", "Auto Layout", "Design System"],
        desc: "Clean and modern mobile app UI focusing on usability and consistent design patterns.",
        link: "https://figma.com/file/mobile-ui",
    },
    {
        id: 6,
        img: myImage,
        categ: "UI/UX",
        title: "Website Redesign",
        tech: ["Figma", "Wireframing", "Prototyping"],
        desc: "Complete website redesign with improved UX flow and visual hierarchy.",
        link: "https://figma.com/file/web-redesign",
    },
    
]

const Projects = () => {
    const [activeTab, setActiveTab] = useState(1)

    const activeCategProducts = activeTab === 1 
        ? projects 
        : projects.filter((p) => p.categ === tabings[activeTab - 1].filter)

    return (
        <section className="bg-black min-h-screen" id="projects">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center pt-16 pb-8 sm:pt-20 sm:pb-12">
                    <p className="text-[#F7C62F] font-semibold tracking-wider mb-3 text-xs sm:text-sm uppercase">
                        My Work
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto px-4">
                        A selection of my recent work, showcasing my skills in design and development.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center items-center mb-8 sm:mb-12">
                    <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4">
                        {tabings.map((tab) => (
                            <li 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`cursor-pointer font-medium rounded-full px-4 sm:px-6 py-2 sm:py-2.5 
                                    transition-all duration-300 text-sm sm:text-base
                                    ${activeTab === tab.id 
                                        ? 'bg-[#F7C62F] text-black shadow-lg shadow-[#F7C62F]/30 scale-105' 
                                        : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                                    }`}
                            >
                                {tab.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-16 sm:pb-20 px-4">
                    {activeCategProducts.map((proj) => (
                        <a 
                            key={proj.id}
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-2xl overflow-hidden bg-neutral-900/50 
                                border border-white/10 hover:border-[#F7C62F]/50 
                                transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#F7C62F]/20
                                h-70 sm:h-75"
                        >
                            {/* Image Container - Full Coverage */}
                            <div className="absolute inset-0">
                                <Image 
                                    className="w-full h-full object-cover transition-all duration-500 
                                        group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50"
                                    src={proj.img} 
                                    alt={proj.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Hover Overlay Content - Hidden by default */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/95 to-black/80 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex flex-col justify-between p-5 sm:p-6">
                                
                                <div className="space-y-3">
                                    {/* Category Badge */}
                                    <div className="flex items-center justify-between">
                                        <span className="inline-block px-3 py-1 bg-[#F7C62F] text-black 
                                            text-xs font-bold rounded-full">
                                            {proj.categ}
                                        </span>
                                        <div className="bg-[#F7C62F] text-black p-2 rounded-full">
                                            <ExternalLink className="h-4 w-4" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        {proj.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                                        {proj.desc}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {proj.tech.slice(0, 3).map((skill) => (
                                            <span 
                                                key={skill}
                                                className="px-2.5 py-1 bg-white/10 text-white text-xs 
                                                    rounded-md border border-white/20 backdrop-blur-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {proj.tech.length > 3 && (
                                            <span className="px-2.5 py-1 bg-white/10 text-white/70 text-xs 
                                                rounded-md border border-white/20">
                                                +{proj.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* View Project Link - Bottom */}
                                <div className="flex items-center gap-2 text-[#F7C62F] font-semibold">
                                    <span className="text-sm">View Project</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Minimal Info on Non-Hover - Bottom gradient with title only */}
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent 
                                p-5 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-lg font-bold text-white">
                                    {proj.title}
                                </h3>
                                <p className="text-[#F7C62F] text-sm font-medium">
                                    {proj.categ}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Empty State */}
                {activeCategProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-white/40 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects