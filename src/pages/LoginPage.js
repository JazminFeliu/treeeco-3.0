
// import components
import Header from "../components/Header";
import Login from "../components/Login";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function LoginPage() {
    return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />      
      <Login />     
      <Contact />
      <Footer />
      <Copyright />
    </div>
    )
}