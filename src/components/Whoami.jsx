import React, { useEffect } from "react";
import whoami from "../assets/whoami.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Whoami = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const titleVariant = {
    hidden: {
      x: 70,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.6 },
    },
  };

  const variants = {
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
      id="whoami"
      className="max-w-7xl mx-auto mt-40 flex flex-col md:flex md:flex-row md:gap-40 font-scope"
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="md:w-[1300px] w-[300px]  flex mx-auto "
      >
        <img src={whoami} className="rounded-full" alt="desItem" />
      </motion.div>
      <motion.div
        animate={controls}
        variants={titleVariant}
        initial="hidden"
        className="gap-16 items-center flex flex-col mt-5 md:mt-0 p-6"
      >
        <h1 className="text-4xl md:text-6xl  ">WHOAMI</h1>
        <p className="text-xl  text-justify ">
          I met YouTube when I was 10 years old. Since then, I have consumed
          tens of thousands of pieces of content suitable for both entertainment
          and education and self-development. I also learned how to edit this
          content. Currently, I'm concentrating on web development.
        </p>
      </motion.div>
    </div>
  );
};

export default Whoami;
