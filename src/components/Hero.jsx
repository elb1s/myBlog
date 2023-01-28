import React, { useState } from "react";
import firstImg from "../assets/first.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
    <div id="home" className="md:flex max-w-7xl mx-auto pt-24 items-center ">
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
            className="font-scope text-xl md:text-2xl text-center md:text-justify md:pr-32 mt-6"
          >
            Hi, my name is Suleyman. I educated myself in video editing and
            front-end development.
          </motion.p>
        </motion.div>
        <div className="flex gap-4 mt-6 mx-auto md:mx-0">
          <a
            href="https://www.upwork.com/freelancers/~0121d665cc5bdfb1bb"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              variants={buttonVariant}
              initial="hidden"
              animate="visible"
              className="bg-blue-700 bg-opacity-60 px-4 py-3 hover:bg-black hover:text-white  hover:border-white duration-200 text-white  rounded-full  border-black border-b-2 "
            >
              Hire Me!
            </motion.button>
          </a>
          <motion.button
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            className="bg-blue-700 bg-opacity-60 px-5 py-3 text-white rounded-full hover: hover:text-white hover:bg-black hover:border-white duration-200 border-black border-b-2 "
          >
            <a
              className="cursor-pointer"
              href="https://twitter.com/bum1nk"
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
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
