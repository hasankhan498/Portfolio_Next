import About from "@/components/About"
import CoreSkillsSection from "@/components/CoreSkillsSection"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import ContactSection from "@/components/Mailsection"
import NavBar from "@/components/NavBar"
import Projects from "@/components/Projects"
import SkillsSection from "@/components/SkillsSection"

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <About />
      <SkillsSection />
      <CoreSkillsSection />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page