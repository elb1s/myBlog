import React from "react";
import whoami from "../assets/whoami.webp";
const Whoami = () => {
  return (
    <div className="max-w-7xl mx-auto mt-40 flex flex-col md:flex md:flex-row md:gap-40 font-scope">
      <div className="md:w-[1300px] w-[300px]  flex mx-auto ">
        <img src={whoami} className="rounded-full" alt="desItem" />
      </div>
      <div className="gap-16 items-center flex flex-col mt-5 md:mt-0 p-6">
        <h1 className="text-4xl md:text-6xl ">WHOAMI</h1>
        <p className="text-xl font-light">
          I met YouTube when I was 10 years old. Since then, I have consumed
          thousands of pieces of content that can be used for both entertainment
          and self-development. I also learned how to edit these contents. I
          spent the last 6 months concentrating on web development. 
        </p>
      </div>
    </div>
  );
};

export default Whoami;
