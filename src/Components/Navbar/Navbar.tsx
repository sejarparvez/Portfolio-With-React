import Button from "../Common/Button";
import Toggle from "./Toggle";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full" id="home">
      <div className="mx-auto flex h-20 items-center justify-between md:px-8 lg:px-16">
        <div className="flex items-center gap-10">
          <div className="font-bold text-2xl">PARVEZ</div>
          <div>
            <Toggle />
          </div>
        </div>
        <div className="hidden  lg:flex gap-12">
          <ul className="flex items-center gap-12 font-bold uppercase hover:[&>*]:text-cyan-500 [&>*]:cursor-pointer">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <Button Name="Hire Me" />
        </div>
        <div className="lg:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
}
