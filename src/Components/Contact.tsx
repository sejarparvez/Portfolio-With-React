import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_4ht1iup",
          "template_1gbx2ky",
          formRef.current,
          "Ze-dexfZq0VovnJB-"
        )
        .then(
          () => {
            toast.success(
              "Your mail has been successfully added to our list. We will mail back to you as soon as possible."
            );
          },
          (error: { text: any }) => {
            toast.error(error.text);
          }
        );
    }
  };
  return (
    <div className="py-12 md:py-20 flex flex-col lg:flex-row" id="contact">
      <div className="flex flex-col flex-1 relative lg:mt-10">
        <div className=" flex flex-1 flex-col items-center pb-12 [&>*]:text-4xl md:[&>*]:text-6xl [&>*]:font-bold lg:gap-8">
          <span>Get In Touch</span>

          <span className=" text-cyan-500">Contact Me</span>
        </div>
      </div>
      <div className="flex flex-1 justify-center relative">
        <form
          className="flex flex-col items-center gap-8 md:gap-12"
          ref={formRef}
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
        </form>
      </div>
      <div className="blue-blur"></div>
      <Toaster />
    </div>
  );
};

export default Contact;
