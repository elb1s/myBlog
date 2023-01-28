import React, { useEffect } from "react";
import Project from "./Project";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Works = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const titleVariant = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        duration: 1,
      },
    },
  };
  const titleChildVariant = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,

      transition: { duration: 1.5, delay: 0.5 },
    },
  };

  const projects = [
    {
      name: "Boyoz",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      img: "",
      code: "https://github.com/elb1s",
      video: "https://www.youtube.com/results?search_query=ricky",
      demo: "https://google.com",
    },
    {
      name: "Wordle-Clone",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      img: "",
      code: "https://github.com/elb1s",
      video: "https://www.youtube.com/results?search_query=ricky",
      demo: "https://google.com",
    },
    {
      name: "Boyoz",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      img: "",
      code: "https://github.com/elb1s",
      video: "https://www.youtube.com/results?search_query=ricky",
      demo: "https://google.com",
    },
    {
      name: "Khatsapp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      img: "",
      code: "https://github.com/elb1s",
      video: "https://www.youtube.com/results?search_query=ricky",
      demo: "https://google.com",
    },
    {
      name: "Manage App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      img: "",
      code: "https://github.com/elb1s",
      video: "https://www.youtube.com/results?search_query=ricky",
      demo: "https://google.com",
    },
  ];
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="max-w-7xl mx-auto mt-40 font-scope  p-6 md:p-0  ">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={titleVariant}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl">MY WORKS</h1>
        <p className="font-roboto text-indigo-800">
          Since I typically release my applications on free platforms, some of
          their demos may no longer be available. As a result, you may need to
          rely on videos to see demonstrations of certain projects.
        </p>
        <p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="text-lg mt-4"
        >
          You can visit my
          <a
            className="text-purple-500 font-bold px-2"
            href="https://www.youtube.com/channel/UC8xBm-ZO5dbpeLYkW-AIdeg"
            target="_blank"
            rel="noreferrer"
          >
            YouTube channel
          </a>
          for video edits
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={titleChildVariant}
        className=" max-w-4xl items-center mx-auto gap-6 flex flex-col"
      >
        {projects.map((project, idx) => (
          <Project project={project} key={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default Works;
