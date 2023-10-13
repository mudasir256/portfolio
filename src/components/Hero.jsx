import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typed from "react-typed";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const typedComponent = (
    <Typed
      strings={[
        "Syed Mudasir Bukhari",
        "Web Developer",
        "UI Designer",
        "React.js Developer",
        "Next.js Developer",
        "Photographer",
        "Vloger",
      ]}
      typeSpeed={50}
      backSpeed={40}
      loop
    />
  );

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full  bg-[#146253]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="text-2xl"> Hi, I'm</h1>
          <h1 className={`text-[20px]  text-[#3f9584] sm:text-[50px]  `}>
            {" "}
            {showText && typedComponent}
          </h1>
          <p className={`${styles.heroSubText} mt-6 text-white-100`}>
            I develop 3D <span className={`text-[#146253]`}>visuals,</span> user{" "}
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <div className="computer">
        <ComputersCanvas />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]  border-4 rounded-sm border-[#2f8273] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3  bg-[#2f8273]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
