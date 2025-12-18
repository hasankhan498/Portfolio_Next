"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className={`fixed w-full z-50 flex justify-between items-center transition-all duration-300
      ${scrolled ? "bg-black/10 backdrop-blur-2xl shadow-md px-6 py-3" : "px-20 py-6"}`}>
      
      <h2 className="text-xl text-white font-bold">
        MHK<span className="text-[#F7C62F]">Portfolio</span>
      </h2>

      <div className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <li key={index} className="relative group text-white/70 text-sm font-medium cursor-pointer transition">
              <Link
                href={`#${item.toLowerCase()}`}
                className="after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#F7C62F] after:transition-all group-hover:after:w-full group-hover:text-white"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="bg-[#F7C62F] text-black/80 px-4 py-1.5 rounded-3xl font-semibold text-sm hover:bg-yellow-400 transition"
        >
          Hire me
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
         <HiMenu />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black/90 backdrop-blur-xl transform transition-transform duration-300 md:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button 
        className="block fixed top-6 right-5 text-white text-2xl"
        onClick={()=>setMobileOpen(!mobileOpen)}
        >
            <HiX />
        </button>
        <div className="flex flex-col items-start p-8 gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-white text-lg font-medium hover:text-[#F7C62F] transition"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="bg-[#F7C62F] text-black/80 px-4 py-2 rounded-3xl font-semibold text-sm hover:bg-yellow-400 transition mt-4"
          >
            Hire me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
