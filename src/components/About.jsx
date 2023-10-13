import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { servicess } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("left", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="black-gradient rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-72 h-72 object-contain"
        />
      </div>
      <h3 className="text-white p-6 text-[16px] font-bold text-center">
        {title}
      </h3>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} id="head">
          My Personal Introduction
        </p>
        <h2 className={styles.sectionHeadText}>My Outline.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" prof-cv mt-4 text-secondary text-[17px] w-[100%]  leading-[30px] gap-14 flex justify-between "
      >
        <div>
          I was born in the city of <span id="head"> Khushab </span> in Pakistan
          in 1998. we shifted to lahore city of pakistan since 2013. i completed
          my graduation from <span id="head"> Lahore Leads University </span> in
          2023.i love <span id="head"> Travelling </span> and exploring
          different kinds of things. I also like making nature{" "}
          <span id="head"> Videos </span> and taking{" "}
          <span id="head"> Pictures </span> of nature Let's catch up to bring
          your ideas to life!
        </div>
        <div className=" img-card  w-[90%]  flex gap-10">
          {servicess.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
