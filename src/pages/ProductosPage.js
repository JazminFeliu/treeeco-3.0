// import components
import Header from "../components/Header";
import GallerySection from "../components/GallerySection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Pricing from "../components/Pricing";

export default function ProductoPage() {
    return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />
      <GallerySection />     
      <Pricing />     
      <Contact />
      <Footer />
      <Copyright />
    </div>
    )
}