import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import GovernmentProjects from "@/components/GovernmentProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedBy />
      <GovernmentProjects />
      <WhyChooseUs />
      <Services />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
