import { motion } from "framer-motion";
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from "./Card";
const Services = () => {
  let transition = { duration: 2, type: "spring" };

  return (
    <div
      className=" relative flex flex-col gap-10 justify-center items-center lg:px-24 md:flex-row  px-4 mt-80 md:mt-0"
      id="services"
    >
      {/* Left side */}

      <div className="flex flex-col gap-4 md:basis-80">
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
      <div className=" flex flex-col gap-8 md:grid md:h-[36rem] md:pl-[4.5rem] md:m-auto md:pr-80 md:relative md:[&>*]:absolute">
        <motion.div
          initial={{ left: "2%" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          className="lg:hidden md:top-6"
        >
          <Card
            emoji={HeartEmoji}
            heading={"Desing"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "2%" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
          className="md:hidden lg:block"
        >
          <Card
            emoji={HeartEmoji}
            heading={"Desing"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "26%" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
          className="md:top-80 md:hidden lg:block"
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React, MongoDB, Nodejs"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "26%" }}
          whileInView={{ left: "13rem" }}
          transition={transition}
          className="md:top-[17rem] lg:hidden"
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
          className="md:top-40"
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
