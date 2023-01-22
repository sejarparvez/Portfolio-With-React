import React from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className=" flex justify-between" id="Navbar">
      <div className="flex-1 items-center flex gap-8">
        <div className="text-2xl font-bold">PARVEZ</div>
        <Toggle />
      </div>
      <div className="flex items-center font-light">
        <div className="flex-10 [&>*]:flex [&>*]:gap-8 [&>*]:mr-16 [&>*]:cursor-pointer hidden md:block">
          <ul>
            <Link spy={true} to="Services" smooth={true}>
              <li className="hover:text-cyan-500">Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li className="hover:text-cyan-500">Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li className="hover:text-cyan-500">Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonial" smooth={true}>
              <li className="hover:text-cyan-500">Testimonial</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="contact" smooth={true}>
          <button className="button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
