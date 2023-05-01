import { useState } from "react";
import { Link } from "react-scroll";
export default function Menu() {
  const [NavOpen, setNavOpen] = useState(false);

  const HandleClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <div
        className={`z-40 flex flex-col gap-1 p-3 duration-300 ${
          NavOpen ? "rotate-[360deg]" : ""
        }`}
        onClick={HandleClick}
      >
        <span
          className={`h-0.5 w-6  duration-300 bg-cyan-500 ${
            NavOpen ? " translate-y-1.5 rotate-45" : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6  duration-300 bg-cyan-500  ${
            NavOpen ? "hidden" : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6  duration-300 bg-cyan-500 ${
            NavOpen ? "-rotate-45 duration-300 ease-in-out" : ""
          } `}
        ></span>
      </div>
      <div
        className={`fixed top-0 right-0 -z-10 h-screen w-full transform  bg-slate-300 dark:bg-slate-700 transition duration-300 ease-in-out ${
          NavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-28 flex flex-col items-center gap-4 text-xl [&>*]:cursor-pointer hover:[&>*]:text-cyan-500">
          <Link spy={true} to="services" smooth={true}>
            <span onClick={HandleClick}>Services</span>
          </Link>

          <Link spy={true} to="work" smooth={true}>
            <span onClick={HandleClick}>Works</span>
          </Link>
          <Link spy={true} to="project" smooth={true}>
            <span onClick={HandleClick}>Project</span>
          </Link>
          <Link spy={true} to="testimonial" smooth={true}>
            <span onClick={HandleClick}>Testimonials</span>
          </Link>
          <Link spy={true} to="contact" smooth={true}>
            <span
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 px-8 py-2 rounded-full"
              onClick={HandleClick}
            >
              Hire Me
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
