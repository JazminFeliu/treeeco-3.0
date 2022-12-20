// import components
import Header from "../components/Header";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function ServiciosPage() {
    return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />      
      <Faq />     
      <Contact />
      <Footer />
      <Copyright />
    </div>
    )
}