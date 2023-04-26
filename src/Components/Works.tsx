import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Amazon from "../img/amazon.png";
import Facebook from "../img/Facebook.png";
import Fiver from "../img/fiverr.png";
import Shopify from "../img/Shopify.png";
import Upwork from "../img/Upwork.png";
const Works = () => {
  return (
    <div className="flex flex-col md:pt-20 px-20 lg:flex-row lg:-mt-16">
      <div className="flex flex-col gap-2 lg:basis-[30rem] lg:mt-32">
        <span className=" text-3xl md:text-5xl font-bold">
          Works For All These
        </span>
        <span className=" text-3xl md:text-5xl text-cyan-500 font-bold">
          Brands & Clients
        </span>
        <span className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil
          officia velit, perspiciatis ab cupiditate quod Qui, nihil officia
          velit, perspiciatis ab cupidi tate quod Qui, nihil officia velit,
          perspiciatis ab cupiditate quod aliquid odit.
        </span>
        <Link spy={true} to="contact" smooth={true}>
          <button className="button">Hire Me</button>
        </Link>
      </div>

      {/* Rihght Side */}

      <div className="relative">
        <div className=" h-48 w-48 md:h-80 md:w-80 bg-cyan-500 rounded-full absolute top-12 left-28 md:left-[17rem] lg:left-[23rem] "></div>
        <div className=" h-48 w-48 md:h-80 md:w-80 bg-blue-500 rounded-full absolute top-28 left-28 md:left-[17rem] lg:left-[23rem] "></div>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 3.5, type: "spring" }}
          className="main-circle "
        >
          <div className="sec-circle -top-8 left-24 md:left-36">
            <img src={Upwork} alt="upwork" />
          </div>
          <div className="sec-circle top-20 -left-8 md:top-36">
            <img src={Fiver} alt="fiver" />
          </div>
          <div className="sec-circle top-20 left-24 md:left-36 md:top-36">
            <img src={Amazon} alt="amazon" />
          </div>
          <div className="sec-circle top-20 left-52 md:top-36 md:left-[21rem]">
            <img src={Shopify} alt="shopify" />
          </div>
          <div className="sec-circle top-48 left-24 md:left-36 md:top-[21rem]">
            <img src={Facebook} alt="facebook" />
          </div>
        </motion.div>
      </div>
      <div className="blue-blur right-0 "></div>
    </div>
  );
};

export default Works;
