import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t0d0j01",
        "template_diy5zm7",
        form.current,
        "9Btme-W0SMdvj9oni"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-2xl mx-auto mt-40 font-scope items-center flex flex-col  text-gray-300 bg-gradient-to-b from-[#8155fcd6] bg-opacity-80 to-[#453ff6] rounded-xl shadow-xl gap-10 p-10 text-xl "
    >
      <h1 className="text-6xl text-white">Contact Me!</h1>
      <div className="flex gap-2 items-center">
        <label className="">Name:</label>
        <input type="text" name="user_name" className="rounded-xl py-1 px-2" />
      </div>
      <div className="flex gap-2 items-center">
        <label>Email:</label>
        <input
          type="email"
          name="user_email"
          className="rounded-xl py-1 px-2"
        />
      </div>
      <div className="items-center flex gap-2">
        <label>Message:</label>
        <textarea
          className=" resize-none w-96 rounded-xl py-1 px-2"
          name="message"
        />
      </div>
      <button className="  bg-white rounded-full px-4 py-2" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactUs;
