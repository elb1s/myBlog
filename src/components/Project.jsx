import React from "react";
import second from "../assets/second.jpg";
import first from "../assets/first.jpg";
const Project = ({ project }) => {
  return (
    <div className=" bg-gradient-to-b from-[#8155fcd6] bg-opacity-80 to-[#453ff6]   h-60  flex justify-between rounded-xl shadow-lg overflow-hidden text-white">
      <div className="mx-auto my-5 w-1/2 text-center flex flex-col gap-4">
        <h1 className="md:text-4xl text-3xl  ">{project.name}</h1>
        <p className="text-justify text-gray-200 font-roboto font-thin">
          {project.description}
        </p>
        <div className="flex gap-4 mx-auto text-black">
          <button className="bg-white rounded-full  px-4 py-2">
            <a href={project.code} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </button>
          <button className="bg-white rounded-full px-4 py-2">
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          </button>
          <button className="bg-white rounded-full px-4 py-2">
            <a href={project.video} target="_blank" rel="noreferrer">
              Video
            </a>
          </button>
        </div>
      </div>
      <div className="h-60 w-1/3 hidden md:flex">
        <img src={first} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Project;
