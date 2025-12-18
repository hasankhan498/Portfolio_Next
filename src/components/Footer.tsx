"use client"
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface QuickLinkType {
  id: number;
  title: string;
  href: string;
}

interface SocialLinkType {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const quickLinks: QuickLinkType[] = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "About", href: "#about" },
  { id: 3, title: "Skills", href: "#skills" },
  { id: 4, title: "Projects", href: "#projects" },
  { id: 5, title: "Contact", href: "#contact" },
];

const socialLinks: SocialLinkType[] = [
  { id: 1, icon: Github, href: "https://github.com", label: "GitHub" },
  { id: 2, icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { id: 3, icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { id: 4, icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:pb-10 lg:pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              MHK<span className="text-[#F7C62F]">Portfolio</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-sm">
              Building digital experiences that make a difference. Let&apos;s create
              something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#F7C62F] duration-300 text-sm sm:text-base inline-block hover:translate-x-2 transform transition-transform"
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#F7C62F]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Container */}
                  <div className="relative bg-white/5 hover:bg-[#F7C62F]/10 border border-white/10 hover:border-[#F7C62F]/50 rounded-xl p-3 sm:p-3.5 transition-all duration-300">
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-[#F7C62F] transition-colors duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50 border-t border-neutral-800/70 pt-6 pb-8">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-center sm:text-left"
            >
              © 2025 MH Khan. Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
              and lots of coffee.
            </motion.p>

            {/* Designer Credit */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center sm:text-right"
            >
              Designed & Built by{" "}
              <span className="text-[#F7C62F] font-semibold hover:underline cursor-pointer">
                M Hasan Khan
              </span>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
