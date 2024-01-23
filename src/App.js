import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import "./styles/app.scss"
import { useState } from "react";

function App() {


const [menuOpen,setMenuOpen]=useState(false)



  return (<>
  <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Home/>
   <Work/>
   <Timeline/>
   <Testimonial/>
   <Contact/>
   <Services/>
   <Footer/>
   <Toaster/>
   </>
  );
}


export default App;
