import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div>Hero</div>
  )
}

export default Hero