import emailjs from "@emailjs/browser";
import React, { useContext, useRef, useState } from "react";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ht1iup",
        "template_xaj423d",
        form.current,
        "Ze-dexfZq0VovnJB-"
      )
      .then(
        (result) => {
          setDone(true);
        },
        (error) => {}
      );
  };
  return (
    <div className="py-12 md:py-20 flex flex-col lg:flex-row" id="contact">
      <div className="flex flex-col flex-1 relative lg:mt-10">
        <div className=" flex flex-1 flex-col items-center pb-12 [&>*]:text-4xl md:[&>*]:text-6xl [&>*]:font-bold lg:gap-8">
          <span style={{ color: darkMode ? "white" : "" }}>Get In Touch</span>

          <span className=" text-cyan-500">Contact Me</span>
        </div>
      </div>
      <div className="flex flex-1 justify-center relative">
        <form
          className="flex flex-col items-center gap-8 md:gap-12"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user_name"
            className="w-[18rem] h-8 p-2 md:w-[25rem] md:h-10 outline-none border-[2px] border-solid border-cyan-500 rounded-md text-md"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="w-[18rem] h-8 p-2 md:w-[25rem] md:h-10 outline-none border-[2px] border-solid border-cyan-500 rounded-md text-md"
            placeholder="Email"
          />
          <textarea
            name="massage"
            className="w-[18rem] h-16 md:h-24 p-2 md:w-[25rem] outline-none border-[2px] border-solid border-cyan-500 rounded-md text-md text-black"
            placeholder="Message"
          />
          <input type="submit" value="Send Message" className="button" />
          <span>
            {done && "Thank You!! Your Message Has Been Successfully Delivered"}
          </span>
        </form>
      </div>
      <div className="blue-blur"></div>
    </div>
  );
};

export default Contact;
