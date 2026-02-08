// "use client"
// import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
// import { motion } from 'framer-motion'
// import Link from "next/link";

// interface SocialLinkTypes {
//   icon: React.ComponentType<{ className?: string }>;
//   href: string;
//   label: string;
// }

// const socialLinks: SocialLinkTypes[] = [
//   { icon: Github, href: "/", label: "Github" },
//   { icon: Linkedin, href: "/", label: "Linkedin" },
//   { icon: Twitter, href: "/", label: "Twitter" },
//   { icon: Mail, href: "#contact", label: "Email" },
// ];

// const HeroSection = () => {
//   return (
//     <section className="relative h-screen overflow-hidden selection:text-[white] selection:bg-[#F7C62F]">
//       {/* Grid */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
//           backgroundSize: "100px 100px",
//         }}
//       />

//       {/* Blob */}
//       <div className="absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-1/2 w-75 h-75 blur-3xl bg-[#F7C62F]/20 rounded-full -z-20" />
//       <div className="absolute top-1/2 left-3/5 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-3xl bg-[#F7C62F]/15 rounded-full -z-20" />

//       {/* Blob cover */}
//       <div className="absolute inset-0 bg-black/25 h-full w-full -z-10" />
//       <div className="absolute inset-0 bg-white/5 h-full w-full -z-10" />

//       {/* Content */}
//       <div className="relative z-10 flex h-full items-center justify-center flex-col gap-3 py-8">

//         {/* Working tag */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
//           whileHover={{ y: -2 }}
//           className="flex justify-center items-center gap-4 px-4 py-2 bg-black/20 border border-neutral-900/70 rounded-3xl mt-10 md:mt-16 lg:mt-20"
//         >
//           <span className="w-2 h-2 bg-green-500 rounded-full" />
//           <span className="text-sm text-white/70">Available for freelance work</span>
//         </motion.div>

//         {/* Heading hero section */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold py-3 text-center px-4" style={{ fontFamily: 'var(--font-space)' }}>
//           Hi, I&apos;m <span className="text-[#F7C62F]">M Hasan</span>
//         </motion.div>

//         <motion.h3
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
//           className="text-base sm:text-lg md:text-xl text-white/70 font-medium tracking-wide text-center px-4" style={{ fontFamily: 'var(--font-poppins)' }}>
//           Full-Stack Developer & UI/UX Designer
//         </motion.h3>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
//           className="text-center text-xs sm:text-sm text-white/50 max-w-xl py-2 px-4">
//           I craft beautiful, performant web experiences that help businesses grow.
//           Specializing in React, TypeScript, and modern web technologies.
//         </motion.p>

//         {/* Hero buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
//           className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 py-4 px-4">
//           <button className="capitalize w-full sm:w-auto block text-black/90 bg-[#F7C62F] font-medium text-base sm:text-lg px-6 py-2.5 rounded-3xl hover:shadow-[#F7C62F] shadow-lg transition-all">
//             View my work
//           </button>
//           <button className="relative w-full sm:w-auto block bg-black/20 hover:text-black rounded-3xl px-6 py-2.5 text-white font-medium text-base sm:text-lg after:content-[''] after:absolute after:bg-[#F7C62F] after:w-0 hover:bg-transparent hover:after:w-full overflow-hidden after:inset-0 after:-z-10 after:transition-all after:duration-700">
//             <Link href='#contact'>Get In Touch</Link>
//           </button>
//         </motion.div>

//         {/* Social links */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
//           className="flex flex-col justify-center items-center gap-3">
//           <ul className="flex justify-center items-center gap-3 py-4">
//             {socialLinks.map((link) => {
//               const Icon = link.icon;
//               return (
//                 <li key={link.label}>
//                   <Link
//                     className="px-3 py-3 rounded-full text-white bg-black/70 block hover:text-black hover:-translate-y-1 transition-all relative after:content-[''] after:absolute after:inset-0 after:bg-[#F7C62F] after:h-0 hover:after:h-full overflow-hidden after:transition-all after:duration-700 after:-z-10 after:bottom-0"
//                     href={link.href}
//                     aria-label={link.label}
//                   >
//                     <Icon className="relative z-10 h-5 w-5" />
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </motion.div>

//         {/* Arrow Down */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
//           className="">
//           <Link href="#about" className="block mt-auto mb-6 hover:text-[#F7C62F] text-white transition-colors py-4">
//             <ArrowDown className="h-7 w-7 animate-bounce" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;











// "use client"
// import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
// import { motion } from 'framer-motion'
// import Link from "next/link";

// interface SocialLinkTypes {
//   icon: React.ComponentType<{ className?: string }>;
//   href: string;
//   label: string;
// }

// const socialLinks: SocialLinkTypes[] = [
//   { icon: Github, href: "/", label: "Github" },
//   { icon: Linkedin, href: "/", label: "Linkedin" },
//   { icon: Twitter, href: "/", label: "Twitter" },
//   { icon: Mail, href: "#contact", label: "Email" },
// ];

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen h-screen overflow-hidden selection:text-[white] selection:bg-[#F7C62F]">
//       {/* Grid */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
//           backgroundSize: "100px 100px",
//         }}
//       />

//       {/* Blob */}
//       <div className="absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-3xl bg-[#F7C62F]/20 rounded-full -z-20" />
//       <div className="absolute top-1/2 left-3/5 -translate-x-1/2 -translate-y-1/2 w-80 h-80 blur-3xl bg-[#F7C62F]/15 rounded-full -z-20" />

//       {/* Blob cover */}
//       <div className="absolute inset-0 bg-black/25 h-full w-full -z-10" />
//       <div className="absolute inset-0 bg-white/5 h-full w-full -z-10" />

//       {/* Content */}
//       <div className="relative z-10 flex h-full min-h-screen items-center justify-center flex-col gap-5 py-12 px-6">

//         {/* Working tag */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
//           whileHover={{ y: -2 }}
//           className="flex justify-center items-center gap-5 px-6 py-3 bg-black/20 border border-neutral-900/70 rounded-3xl mt-12 md:mt-20 lg:mt-24"
//         >
//           <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
//           <span className="text-base text-white/70">Available for freelance work</span>
//         </motion.div>

//         {/* Heading hero section */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//           className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold py-5 text-center" style={{ fontFamily: 'var(--font-space)' }}>
//           Hi, I&apos;m <span className="text-[#F7C62F]">M Hasan</span>
//         </motion.div>

//         <motion.h3
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
//           className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium tracking-wide text-center" style={{ fontFamily: 'var(--font-poppins)' }}>
//           Full-Stack Developer & UI/UX Designer
//         </motion.h3>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
//           className="text-center text-sm sm:text-base text-white/50 max-w-2xl py-4 leading-relaxed">
//           I craft beautiful, performant web experiences that help businesses grow.
//           Specializing in React, TypeScript, and modern web technologies.
//         </motion.p>

//         {/* Hero buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
//           className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 py-6">
//           <button className="capitalize w-full sm:w-auto block text-black/90 bg-[#F7C62F] font-medium text-lg sm:text-xl px-8 py-3.5 rounded-3xl hover:shadow-[#F7C62F] shadow-lg transition-all">
//             View my work
//           </button>
//           <button className="relative w-full sm:w-auto block bg-black/20 hover:text-black rounded-3xl px-8 py-3.5 text-white font-medium text-lg sm:text-xl after:content-[''] after:absolute after:bg-[#F7C62F] after:w-0 hover:bg-transparent hover:after:w-full overflow-hidden after:inset-0 after:-z-10 after:transition-all after:duration-700">
//             <Link href='#contact'>Get In Touch</Link>
//           </button>
//         </motion.div>

//         {/* Social links */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
//           className="flex flex-col justify-center items-center gap-4">
//           <ul className="flex justify-center items-center gap-4 py-6">
//             {socialLinks.map((link) => {
//               const Icon = link.icon;
//               return (
//                 <li key={link.label}>
//                   <Link
//                     className="px-4 py-4 rounded-full text-white bg-black/70 block hover:text-black hover:-translate-y-1 transition-all relative after:content-[''] after:absolute after:inset-0 after:bg-[#F7C62F] after:h-0 hover:after:h-full overflow-hidden after:transition-all after:duration-700 after:-z-10 after:bottom-0"
//                     href={link.href}
//                     aria-label={link.label}
//                   >
//                     <Icon className="relative z-10 h-6 w-6" />
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </motion.div>

//         {/* Arrow Down */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
//           className="">
//           <Link href="#about" className="block mt-auto mb-8 hover:text-[#F7C62F] text-white transition-colors py-6">
//             <ArrowDown className="h-8 w-8 animate-bounce" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;






















"use client"
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { motion } from 'framer-motion'
import Link from "next/link";

interface SocialLinkTypes {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const socialLinks: SocialLinkTypes[] = [
  { icon: Github, href: "/", label: "Github" },
  { icon: Linkedin, href: "/", label: "Linkedin" },
  { icon: Twitter, href: "/", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen h-screen overflow-hidden selection:text-[white] selection:bg-[#F7C62F]">
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Blob */}
      <div className="absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] blur-3xl bg-[#F7C62F]/20 rounded-full -z-20" />
      <div className="absolute top-1/2 left-3/5 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 blur-3xl bg-[#F7C62F]/15 rounded-full -z-20" />

      {/* Blob cover */}
      <div className="absolute inset-0 bg-black/25 h-full w-full -z-10" />
      <div className="absolute inset-0 bg-white/5 h-full w-full -z-10" />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-screen items-center justify-center flex-col gap-3 sm:gap-4 md:gap-5 py-8 sm:py-10 md:py-12 px-4 sm:px-5 md:px-6">

        {/* Working tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          whileHover={{ y: -2 }}
          className="flex justify-center items-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-black/20 border border-neutral-900/70 rounded-3xl mt-4 sm:mt-8 md:mt-12 lg:mt-20"
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full" />
          <span className="text-xs sm:text-sm md:text-base text-white/70">Available for freelance work</span>
        </motion.div>

        {/* Heading hero section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold py-2 sm:py-3 md:py-4 lg:py-5 text-center" style={{ fontFamily: 'var(--font-space)' }}>
          Hi, I&apos;m <span className="text-[#F7C62F]">M Hasan</span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-medium tracking-wide text-center" style={{ fontFamily: 'var(--font-poppins)' }}>
          Full-Stack Developer & UI/UX Designer
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-center text-xs sm:text-sm md:text-base text-white/50 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl py-2 sm:py-3 md:py-4 leading-relaxed">
          I craft beautiful, performant web experiences that help businesses grow.
          Specializing in React, TypeScript, and modern web technologies.
        </motion.p>

        {/* Hero buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 md:gap-6 lg:gap-8 py-3 sm:py-4 md:py-5 lg:py-6 w-full sm:w-auto px-4 sm:px-0">
          <button className="capitalize w-full sm:w-auto block text-black/90 bg-[#F7C62F] font-medium text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-3xl hover:shadow-[#F7C62F] shadow-lg transition-all">
            View my work
          </button>
          <button className="relative w-full sm:w-auto block bg-black/20 hover:text-black rounded-3xl px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl after:content-[''] after:absolute after:bg-[#F7C62F] after:w-0 hover:bg-transparent hover:after:w-full overflow-hidden after:inset-0 after:-z-10 after:transition-all after:duration-700">
            <Link href='#contact'>Get In Touch</Link>
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4">
          <ul className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 py-2 sm:py-4 md:py-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <Link
                    className="px-3 py-3 sm:px-3.5 sm:py-3.5 md:px-4 md:py-4 rounded-full text-white bg-black/70 block hover:text-black hover:-translate-y-1 transition-all relative after:content-[''] after:absolute after:inset-0 after:bg-[#F7C62F] after:h-0 hover:after:h-full overflow-hidden after:transition-all after:duration-700 after:-z-10 after:bottom-0"
                    href={link.href}
                    aria-label={link.label}
                  >
                    <Icon className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Arrow Down */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="">
          <Link href="#about" className="block mt-auto mb-4 sm:mb-6 md:mb-8 hover:text-[#F7C62F] text-white transition-colors py-2 sm:py-4 md:py-6">
            <ArrowDown className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;