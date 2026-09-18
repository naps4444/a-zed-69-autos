import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesSection />
        <FeaturedVehicles />
        <HowItWorks />        
        <AboutSection />
        <WhyChooseUs />
        <FAQSection />
        <ContactSection />
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}