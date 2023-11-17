

import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import TImeLine from "./Components/TImeLine";
import Work from "./Components/Work";
import Services from "./Components/Services";
// import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import {  useState } from "react";
import './styles/app.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

 

  return  (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home  />
      <Work />
      <TImeLine />
      <Services />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) 
  ;
}

export default App;