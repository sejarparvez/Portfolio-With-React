import { motion } from "framer-motion";
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from "./Card";
const Services = () => {
  let transition = { duration: 2, type: "spring" };

  return (
    <div
      className=" relative flex flex-col justify-center items-center px-24 lg:flex-row"
      id="Services"
    >
      {/* Left side */}

      <div className="flex flex-col gap-4 lg:basis-80">
        <span className=" text-3xl md:text-5xl font-bold">My Awesome</span>
        <span className="text-3xl md:text-5xl font-bold text-cyan-500">
          Services
        </span>
        <span className="text-gray-800 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil
          officia velit, perspiciatis ab cupiditate quod aliquid odit.
        </span>
      </div>
      {/* right side */}
      <div className=" grid h-[36rem] pl-[4.5rem] md:m-auto md:pr-80 lg:relative lg:[&>*]:absolute">
        <motion.div
          initial={{ left: "26%" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
          className="lg:left-80"
        >
          <Card
            emoji={HeartEmoji}
            heading={"Desing"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "26%" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
          className="lg:left-[18rem] lg:top-80"
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React, MongoDB, Nodejs"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "26%" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="lg:top-40"
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
      </div>
      <div className="pink-blur top-20"></div>
    </div>
  );
};

export default Services;
