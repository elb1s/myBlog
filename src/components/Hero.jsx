import React from "react";
import firstImg from "../assets/first.jpg";

const Hero = () => {
  return (
    <div className="md:flex max-w-7xl mx-auto mt-24 items-center ">
      <div className="md:w-1/2 flex flex-col">
        <div>
          <h1 className="font-roboto text-5xl  md:text-7xl leading-tight text-center md:text-left">
            I'm front-end developer and video editor.
          </h1>
          <p className="font-scope text-xl md:text-2xl text-center md:text-justify md:pr-32 mt-6 ">
            Hi, my name is Suleyman. I educated myself in video editing and
            front-end development.
          </p>
        </div>
        <div className="flex gap-3 mt-6 mx-auto md:mx-0">
          <button className="bg-gradient-to-b from-[#3150eb88]  to-[#7826db96] bg-opacity-40 px-6 py-3 text-white rounded-full">
            Hire Me!
          </button>
          <button className="bg-gradient-to-b from-[#7e56f9] to-[#6ed4cbc0] bg-opacity-50 px-6 py-3 text-white rounded-full">
            Contact Me!
          </button>
        </div>
      </div>
      <div className="md:w-1/2 hidden md:flex">
        <img src={firstImg} className="object-cover" alt="heroItem" />
      </div>
    </div>
  );
};

export default Hero;
