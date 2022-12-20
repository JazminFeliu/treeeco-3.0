// import components
import Header from "../components/Header";
import Register from "../components/Register";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function RegisterPage() {
    return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />      
      <Register />     
      <Contact />
      <Footer />
      <Copyright />
    </div>
    )
}