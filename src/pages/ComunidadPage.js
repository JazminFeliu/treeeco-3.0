// import components

import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Comunidad from "../components/Comunidad";

export default function ComunidadPage() {
    return (
        <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />      
      <Comunidad />
      <Contact />
      <Footer />
      <Copyright />
    </div>
    )
}