import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";
const Services = () => {
  let theme = useContext(themeContext);
  let darkMode = theme.state.darkMode;
  let transition = { duration: 2, type: "spring" };

  return (
    <div className="flex flex-col mt-16 mb-8 lg:-mt-0 lg:flex-row lg:mb-0" id="Services">
      {/* Left side */}

      <div className="flex flex-col gap-2 mb-16 lg:mt-40 lg:basis-80">
        <span
          className=" text-3xl md:text-5xl font-bold text-black"
          style={{ color: darkMode ? "white" : "" }}
        >
          My Awesome
        </span>
        <span className="text-3xl md:text-5xl font-bold text-cyan-500">Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil
          officia velit, perspiciatis ab cupiditate quod aliquid odit.
        </span>
      </div>
      {/* right side */}
      <div className=" grid h-[60rem] pl-[4.5rem] md:m-auto md:pr-80 lg:relative lg:[&>*]:absolute">
        <motion.div
        initial={{ left: "26%" }}
        whileInView={{left: '22rem'} }
        transition={transition}
         className="lg:left-80">
          <Card
            emoji={HeartEmoji}
            heading={"Desing"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        <motion.div
        initial={{ left: "26%" }}
          whileInView={{left: '19rem'} }
          transition={transition}
        className="lg:left-[18rem] lg:top-80">
          <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React, MongoDB, Nodejs"}
          />
        </motion.div>

        <motion.div
        initial={{ left: "26%" }}
          whileInView={{left: '0rem'} }
          transition={transition}
        className="lg:top-40">
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
