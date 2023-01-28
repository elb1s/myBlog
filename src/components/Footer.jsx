import React from "react";
import github from "../assets/icons/github.png";
import medium from "../assets/icons/medium.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
import linkedIn from "../assets/icons/linkedIn.png";
const Footer = () => {
  const socials = [
    { img: github, link: "https://github.com/elb1s" },
    { img: medium, link: "https://medium.com/@elb1s" },
    { img: twitter, link: "https://twitter.com/bum1nk" },
    {
      img: youtube,
      link: "https://www.youtube.com/channel/UC8xBm-ZO5dbpeLYkW-AIdeg",
    },
    {
      img: linkedIn,
      link: "https://www.linkedin.com/in/s%C3%BCleyman-ekmekci/",
    },
  ];
  return (
    <div className="bg-gradient-to-b  from-[#317beb] bg-opacity-80 to-[#8a73e7] h-32 font-scope mt-40 ">
      <div className="w-80 mx-auto flex items-center justify-center gap-8 pt-10 text-black">
        {socials.map((social, idx) => (
          <a href={social.link} target="_blank" rel="noreferrer">
            <img src={social.img} key={idx} alt="social" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
