import React from "react";
import Project from "./Project";

const Works = () => {
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

  return (
    <div className="max-w-7xl mx-auto mt-40 font-scope  p-6 md:p-0  ">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl">MY WORKS</h1>
        <p className="font-roboto text-indigo-800">
          Since I typically release my applications on free platforms, some of
          their demos may no longer be available. As a result, you may need to
          rely on videos to see demonstrations of certain projects.
        </p>
      </div>
      <div className=" max-w-4xl items-center mx-auto gap-6 flex flex-col">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
