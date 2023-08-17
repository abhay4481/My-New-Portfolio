import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  // useEffect(() => {
  // const resizeRatio = () => {
  //   setRatio(window.innerWidth / window.innerHeight);
  // };

  //   window.addEventListener("resize", resizeRatio);

  //   return () => {
  //     window.removeEventListener("resize", resizeRatio);
  //   };
  // });

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
