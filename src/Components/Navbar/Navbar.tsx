import { Link } from "react-scroll";
import Button from "../Common/Button";
import Menu from "./Menu";
import Toggle from "./Toggle";

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full" id="home">
      <div className="mx-auto flex h-20 items-center text-center justify-between md:px-8 lg:px-16 px-4">
        <div className="flex items-center gap-10">
          <div className="font-bold text-2xl">PARVEZ</div>
          <div className="hidden md:block">
            <Toggle />
          </div>
        </div>
        <div className="scale-75 md:hidden ">
          <Toggle />
        </div>
        <div className="hidden  lg:flex gap-12">
          <ul className="flex items-center gap-12 font-bold uppercase hover:[&>*]:text-cyan-500 [&>*]:cursor-pointer">
            <Link spy={true} to="home" smooth={true}>
              Home
            </Link>
            <Link spy={true} to="services" smooth={true}>
              Services
            </Link>

            <Link spy={true} to="work" smooth={true}>
              Works
            </Link>
            <Link spy={true} to="project" smooth={true}>
              Project
            </Link>
            <Link spy={true} to="testimonial" smooth={true}>
              Testimonials
            </Link>
          </ul>
          <Link spy={true} to="contact" smooth={true}>
            <Button Name="Hire Me" />
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
}
