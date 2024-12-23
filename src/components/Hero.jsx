import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="Home">      
    
    </section>
  );
};

export default Hero;
