import React, { useState } from "react";
import firstImg from "../assets/first.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  const [isSkew, setIsSkew] = useState(true);
  const variants = {
    normal: { rotate: 0 },
    rotY: { rotate: 10 },
  };
  const titleVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { delay: 0.2, when: "beforeChildren", staggerChildren: 0.7 },
    },
  };

  const titleChildVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const buttonVariant = {
    hidden: {
      scale: 0,
      opacity: 1,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 2, duration: 0.3 },
    },
  };

  return (
    <div id="home" className="md:flex max-w-7xl mx-auto mt-24 items-center ">
      <div className="md:w-1/2 flex flex-col">
        <motion.div variants={titleVariant} initial="hidden" animate="visible">
          <motion.h1
            variants={titleChildVariant}
            className="font-roboto text-5xl  md:text-7xl leading-tight text-center md:text-left"
          >
            I'm front-end developer and video editor.
          </motion.h1>
          <motion.p
            variants={titleChildVariant}
            className="font-scope text-xl md:text-2xl text-center md:text-justify md:pr-32 mt-6 "
          >
            Hi, my name is Suleyman. I educated myself in video editing and
            front-end development.
          </motion.p>
        </motion.div>
        <div className="flex gap-3 mt-6 mx-auto md:mx-0">
          <motion.button
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-b from-[#3150eb88]  to-[#7826db96] bg-opacity-40 px-6 py-3 text-white rounded-full"
          >
            Hire Me!
          </motion.button>
          <motion.button
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-b from-[#7e56f9] to-[#6ed4cbc0] bg-opacity-50 px-6 py-3 text-white rounded-full"
          >
            Contact Me!
          </motion.button>
        </div>
      </div>
      <motion.div
        animate={isSkew ? "rotY" : "normal"}
        variants={variants}
        onClick={() => {
          setIsSkew(!isSkew);
        }}
        className="md:w-1/2 hidden md:flex flex-col text-center gap-2 font-scope"
      >
        <img
          src={firstImg}
          className="object-cover cursor-pointer"
          alt="heroItem"
        />
        <p className="text-sm">if you have obsession click the image!</p>
      </motion.div>
    </div>
  );
};

export default Hero;
