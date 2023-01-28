import React from "react";
import technologies from "../assets/second.jpg";
import css from "../assets/icons/css.svg";
import davinci from "../assets/icons/davinci.svg";
import html from "../assets/icons/html.svg";
import js from "../assets/icons/js.png";
import premier from "../assets/icons/premiere.png";
import react from "../assets/icons/react.png";
import tailwind from "../assets/icons/tailwind.png";
const Technologies = () => {
  return (
    <div className="max-w-7xl mx-auto mt-40 flex flex-col md:flex md:flex-row md:gap-40 font-scope items-center">
      <div className="gap-16  flex flex-col  md:mt-0 p-6">
        <h1 className="text-4xl md:text-6xl">Technologies utilized</h1>
        <div>
          <h1 className="text-2xl md:text-3xl">Front-end Development</h1>
          <div className="flex gap-4 flex-wrap ">
            <img src={js} alt="techItem" className="w-20 " />
            <img src={html} alt="techItem" className="w-20 " />
            <img src={css} alt="techItem" className="w-20 " />
            <img src={tailwind} alt="techItem" className="w-20 " />
            <img src={react} alt="techItem" className="w-20 " />
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl">Video editing</h1>
          <div className="flex gap-4 ">
            <img src={davinci} alt="techItem" className="w-20 " />
            <img src={premier} alt="techItem" className="w-20 " />
          </div>
        </div>
      </div>

      <div className="md:w-[500px] h-[500px] w-[300px]  md:flex  hidden ">
        <img src={technologies} alt="techItem" />
      </div>
    </div>
  );
};

export default Technologies;
