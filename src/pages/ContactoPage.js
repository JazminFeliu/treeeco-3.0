// import components
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function ContactoPage() {
    return (
        <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />      
      <Contact />
      <Footer />
      <Copyright />
    </div>
    )
}