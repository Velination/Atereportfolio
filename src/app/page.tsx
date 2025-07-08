import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import PortfolioSection from "@/components/PortfolioSection";
import Services from "@/components/ServiceSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <About />
       <PortfolioSection />
       <Services />
       <ContactSection />
       <Footer />
    </main>
  );
}
