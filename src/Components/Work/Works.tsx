import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";
import Fiver from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Upwork from "../../img/Upwork.png";
import Button from "../Common/Button";
import WorkCircle from "./WorkCircle";
const Works = () => {
  return (
    <div className=" relative flex flex-col md:pt-20 px-20 lg:flex-row lg:-mt-16">
      <div className="flex flex-col gap-2 lg:basis-[30rem] lg:mt-32">
        <span className=" text-3xl md:text-5xl font-bold">
          Works For All These
        </span>
        <span className=" text-3xl md:text-5xl text-cyan-500 font-bold">
          Brands & Clients
        </span>
        <span className="py-4 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil
          officia velit, perspiciatis ab cupiditate quod Qui, nihil officia
          velit, perspiciatis ab cupidi tate quod Qui, nihil officia velit,
          perspiciatis ab cupiditate quod aliquid odit.
        </span>
        <Link spy={true} to="contact" smooth={true}>
          <Button Name="Contact Me" />
        </Link>
      </div>

      {/* Right Side */}

      <div className="relative">
        <div className=" h-48 w-48 md:h-80 md:w-80 bg-cyan-500 rounded-full absolute top-12 left-28 md:left-[17rem] lg:left-[23rem] "></div>
        <div className=" h-48 w-48 md:h-80 md:w-80 bg-blue-500 rounded-full absolute top-28 left-28 md:left-[17rem] lg:left-[23rem] "></div>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 3.5, type: "spring" }}
          className="relative w-60 h-60 md:h-[25rem] md:w-[25rem] top-16 m-auto rounded-full shadow-2xl bg-white dark:bg-slate-400 [&>*]:absolute lg:left-60"
        >
          <div className="-top-8 left-24 md:left-36">
            <WorkCircle img={Upwork} />
          </div>
          <div className="top-20 -left-8 md:top-36">
            <WorkCircle img={Fiver} />
          </div>
          <div className="top-20 left-24 md:left-36 md:top-36">
            <WorkCircle img={Amazon} />
          </div>
          <div className="top-20 left-52 md:top-36 md:left-[21rem]">
            <WorkCircle img={Shopify} />
          </div>
          <div className="top-48 left-24 md:left-36 md:top-[21rem]">
            <WorkCircle img={Facebook} />
          </div>
        </motion.div>
      </div>
      <div className="blue-blur right-0 "></div>
      <div className="pink-blur right-60 top-40 "></div>
    </div>
  );
};

export default Works;
