"use client"
import Image from "next/image";
import {  Layout, Laptop , Code, Rocket, LocateFixed, Award } from "lucide-react";
import myImage from "@/assets/imgs/ai4.jpeg";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";


interface AboutListingType {
  id: number;
  time: string;
  title: string;
  company: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface IntroType {
  id: number;
  value: number;
  suffix: string;
  desc: string;
}

interface InfoType {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const aboutList: AboutListingType[] = [
  {
    id: 1,
    time: "2024–Present",
    title: "Senior Frontend Web Developer",
    company: "Self-Driven Projects & Freelance",
    desc: "Creating responsive, high-performance web applications using Next.js, React, TypeScript, and Tailwind CSS. Emphasis on clean UI, smooth animations, and maintainable code.",
    icon: Rocket,
  },
  {
    id: 2,
    time: "2023–2024",
    title: "React & Next.js Developer",
    company: "Portfolio & Freelance Projects",
    desc: "Delivered multiple production-ready web projects, including dashboards and interactive landing pages, integrating tools like EmailJS for dynamic forms.",
    icon: Code,
  },
  {
    id: 3,
    time: "2022–2023",
    title: "Frontend Developer",
    company: "Learning & Practice Phase",
    desc: "Built foundational skills in HTML, CSS, JavaScript, and React by experimenting with component libraries, responsive layouts, and UI patterns.",
    icon: Layout,
  },
  {
    id: 4,
    time: "2021–2022",
    title: "Web Development Enthusiast",
    company: "Self-Study & Online Learning",
    desc: "Started web development journey through hands-on projects, learning Git, basic programming concepts, and experimenting with interactive web elements.",
    icon: Laptop,
  },
];

const Info: InfoType[] = [
  { id: 1, title: 'Lahore, PK', icon: LocateFixed },
  { id: 2, title: '1+ Years Exp.', icon: Award },
];

const Intro: IntroType[] = [
  { id: 1, value: 1, suffix: "+", desc: "Years Exp." },
  { id: 2, value: 5, suffix: "+", desc: "Projects" },
  { id: 3, value: 3, suffix: "+", desc: "Clients" },
  { id: 4, value: 99, suffix: "%", desc: "Satisfaction" },
];

// Super Simple Counter Component
const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span 
      className="text-[#F7C62F] font-bold text-2xl sm:text-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        animate(count, value, { duration: 2 });
      }}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

const About = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[#F7C62F] font-semibold tracking-wide mb-2 text-sm uppercase">
            About Me
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Passionate About Creating
          </h2>
          <p
            className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            I&apos;m a developer who loves turning ideas into reality through
            clean code and beautiful design.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 xl:gap-24">
          {/* Image with Rotating Borders */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center lg:justify-start w-full lg:w-2/5"
          >
            <div className="relative mx-auto">
              {/* Outer Rotating Border */}
              <div className="absolute inset-0 -m-8 sm:-m-10 lg:-m-12">
                <div className="absolute inset-0 rounded-full border-2 border-[#F7C62F]/30 border-t-[#F7C62F] border-r-transparent animate-spin" style={{ animationDuration: "8s" }} />
              </div>

              {/* Inner Rotating Border */}
              <div className="absolute inset-0 -m-5 sm:-m-6 lg:-m-7">
                <div className="absolute inset-0 rounded-full border-2 border-[#F7C62F]/20 border-b-[#F7C62F] border-l-transparent animate-spin" style={{ animationDuration: "6s", animationDirection: "reverse" }} />
              </div>

              {/* Image */}
              <div className="relative z-10">
                <Image
                  src={myImage}
                  alt="Profile picture"
                  className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl"
                  width={384}
                  height={384}
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#F7C62F]/5 to-transparent" />
              </div>
            </div>

            {/* Info & Stats Cards */}
            <div className="flex flex-col justify-center items-center gap-6 mt-16 sm:mt-20 lg:mt-24">
              {/* Info Cards */}
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                {Info.map((tab, idx) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[#F7C62F]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex items-center gap-3 border-2 border-[#F7C62F]/30 bg-linear-to-br from-[#F7C62F]/10 to-black/50 backdrop-blur-sm px-5 py-3 rounded-xl hover:border-[#F7C62F] transition-all duration-300 hover:scale-105 shadow-lg">
                      <div className="p-2 bg-[#F7C62F]/20 rounded-lg group-hover:bg-[#F7C62F]/30 transition-colors duration-300">
                        <tab.icon className="text-[#F7C62F] h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{tab.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl"
              >
                {Intro.map((tab, idx) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Animated border gradient */}
                    <div className="absolute -inset-0.5 bg-linear-to-r from-[#F7C62F] via-yellow-400 to-[#F7C62F] rounded-2xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-300" />
                    
                    <div className="relative flex flex-col justify-center items-center gap-2 px-3 py-4 sm:py-5 rounded-2xl bg-linear-to-br from-black via-neutral-900 to-black border border-[#F7C62F]/20 hover:border-[#F7C62F]/50 transition-all duration-300 hover:scale-105 shadow-xl">
                      <Counter value={tab.value} suffix={tab.suffix} />
                      <span className="text-white/60 text-xs sm:text-sm text-center font-medium group-hover:text-white/80 transition-colors duration-300">
                        {tab.desc}
                      </span>
                      
                      {/* Corner accent */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-[#F7C62F] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="w-full lg:w-3/5">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8 lg:mb-10"
              style={{ fontFamily: "var(--font-space)" }}
            >
              My Journey
            </h3>

            <div className="space-y-6 lg:space-y-8">
              {aboutList.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  key={item.id}
                  className="flex relative group"
                >
                  {/* Timeline Dot & Line */}
                  <div className="flex flex-col items-center mr-4 sm:mr-6">
                    <span className="flex justify-center items-center w-3 h-3 sm:w-4 sm:h-4 bg-[#F7C62F] rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-md shadow-[#F7C62F]/50">
                      <item.icon className="h-3 w-3 text-black" />
                    </span>
                    {idx < aboutList.length - 1 && (
                      <span className="w-0.5 flex-1 bg-white/10 mt-2 group-hover:bg-[#F7C62F]/30 transition-colors duration-300" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="bg-black/40 border border-white/10 hover:border-[#F7C62F]/50 rounded-lg p-4 sm:p-5 lg:p-6 flex-1 transition-all duration-300 hover:shadow-xl hover:shadow-[#F7C62F]/5 hover:-translate-y-1 hover:bg-black/60">
                    <h4 className="text-[#F7C62F] font-semibold text-xs sm:text-sm lg:text-base mb-1 uppercase tracking-wide">
                      {item.time}
                    </h4>
                    <h3
                      className="text-base sm:text-lg lg:text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-space)" }}
                    >
                      {item.title}
                    </h3>
                    <h5
                      className="text-sm lg:text-base text-white/70 font-medium mb-3"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {item.company}
                    </h5>
                    <p
                      className="text-xs sm:text-sm lg:text-base text-white/50 leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;