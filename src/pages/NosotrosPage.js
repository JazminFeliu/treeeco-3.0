// import components
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Interview from "../components/Interview";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";


export default function NosotrosPage() {
    return (
        <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />
      <About />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
    </div>
    )
}