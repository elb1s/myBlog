import React, { useEffect } from "react";
import technologies from "../assets/third.jpg";
import css from "../assets/icons/css.svg";
import davinci from "../assets/icons/davinci.svg";
import html from "../assets/icons/html.svg";
import js from "../assets/icons/js.png";
import premier from "../assets/icons/premiere.png";
import react from "../assets/icons/react.png";
import tailwind from "../assets/icons/tailwind.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Technologies = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const frontEnd = [
    { img: css },
    { img: html },
    { img: react },
    { img: tailwind },
    { img: js },
  ];
  const videoEditing = [{ img: davinci }, { img: premier }];

  const titleVariant = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        duration: 1.8,
      },
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
  const imgVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
      rotate: 0,
    },
    hidden: { opacity: 0, scale: 0.2, rotate: 120 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="techs"
      className="max-w-7xl mx-auto mt-40 flex flex-col md:flex md:flex-row md:gap-40 font-scope items-center"
    >
      <motion.div
        initial="hidden"
        ref={ref}
        variants={titleVariant}
        animate={controls}
        className="gap-16  flex flex-col  md:mt-0 p-6"
      >
        <h1 className="text-4xl md:text-6xl">Technologies utilized</h1>

        <div>
          <h1 className="text-2xl md:text-3xl text-gray-600">
            Front-end Development
          </h1>
          <div className="flex gap-4 flex-wrap">
            {frontEnd.map((tech) => (
              <motion.img
                variants={titleChildVariant}
                src={tech.img}
                className="w-14"
                alt="editTech"
              />
            ))}
          </div>
        </div>
        <motion.div
          initial="hidden"
          ref={ref}
          variants={titleVariant}
          animate={controls}
        >
          <h1 className="text-2xl md:text-3xl text-gray-600">Video editing</h1>
          <div className="flex gap-4 ">
            {videoEditing.map((tech) => (
              <motion.img
                variants={titleChildVariant}
                src={tech.img}
                alt="editTech"
                className="w-14"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="md:w-[500px] h-[500px] w-[300px]  md:flex  hidden ">
        <motion.img
          variants={imgVariant}
          animate={controls}
          initial="hidden"
          ref={ref}
          src={technologies}
          alt="techItem"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Technologies;
