'use client'

import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const AnimateElement = ({animatecontent}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return animatecontent;
};

export default AnimateElement;
