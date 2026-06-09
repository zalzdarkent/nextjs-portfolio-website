import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <AboutSection />
        {/* <EducationSection /> */}
        <ExperienceSection />
        <TechSection />
        <PortfolioSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
