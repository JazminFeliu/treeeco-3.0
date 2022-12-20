// import components
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import GallerySection from "../components/GallerySection";
import Faq from "../components/Faq";
import Skills from "../components/Skills";
import Interview from "../components/Interview";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Pricing from "../components/Pricing";

export default function HomePage() {
    return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Faq />
      <Skills />
      <Testimonial />
      <Pricing />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
    </div>
    )
}