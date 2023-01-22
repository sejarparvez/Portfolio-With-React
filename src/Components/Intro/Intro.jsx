import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Email from "@iconscout/react-unicons/icons/uil-mailbox";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import Boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import Glassimoji from "../../img/glassesimoji.png";
import Thumbup from "../../img/thumbup.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import FlotingDiv from "../FlotingDiv/FlotingDiv";

const Intro = () => {
  let transition = { duration: 2, type: "spring" };
  let theme = useContext(themeContext);
  let darkMode = theme.state.darkMode;

  return (
    <div className="flex flex-col lg:flex-row  pt-8 h-screen mb-24 lg:mt-12 lg:mb-0">
      <div className="flex relative flex-1 flex-col gap-3 lg:mt-16">
        <div className="flex flex-col gap-2">
          <span 
          className=" text-black font-bold text-3xl md:text-5xl"
          style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span className=" text-cyan-500 font-bold text-3xl md:text-5xl">SEJAR PARVEZ</span>
          <span>
            Frontend Devoloper With High Level Of Experience In Web Desining And
            Development, Producing The Quality Work
          </span>
        </div>
        <Link spy={true} to="contact" smooth={true}>
          <button className="button">Hire Me</button>
        </Link>
        <div className="flex pt-7 cursor-pointer gap-5 justify-center md:justify-start">
          <a href="https://facebook.com/sejarparvez" target='_blank' rel="noreferrer">

         <Facebook color='#06b6d4' size='3rem' />
          </a>
          <a href="https://twitter.com/sejar_parvez" target='_blank' rel="noreferrer">

         <Twitter color='#06b6d4' size='3rem' />
          </a>
          <a href="https://www.linkedin.com/in/sejar-parvez-b99b62146/" target='_blank' rel="noreferrer">

         <Linkdin color='#06b6d4' size='3rem' />
          </a>
          <a href="https://github.com/sejarparvez" target='_blank' rel="noreferrer">
         <Github color='#06b6d4' size='3rem' />

          </a>
          <a href="mailto:sejarparvez@yahoo.com" target='_blank' rel="noreferrer">

         <Email color='#06b6d4' size='3rem' />
          </a>
        </div>
      </div>
      <div className="flex-1 relative mt-32 [&>*]:absolute md:-mt-20 lg:mt-4">
        <img src={Vector1} className='scale-[0.9] md:scale-[0.8] lg:scale-[0.7]' alt="img" />
        <img src={Vector2} className='scale-[0.9] md:scale-[0.8] lg:scale-[0.7]'alt="img" />
        <img src={Boy} className='scale-[0.8] -top-20 left-6 md:scale-[1.5] lg:scale-[1.1] lg:top-14 lg:left-40 md:left-[12rem] md:top-20' alt="boy" />
        <motion.img
          initial={{ left: "26%" }}
          whileInView={{left: '-5rem'} }
          transition={transition}
          src={Glassimoji}
          className='scale-[0.35] -top-40 md:scale-[0.7] lg:scale-50 lg:-top-24'
          alt=""
        />

        <motion.div
          initial={{left: "0%" }}
          whileInView={{ left: "38%" }}
          transition={transition}
          className=" -top-28 left-28 scale-[0.8] md:scale-[1.2] md:left-0 lg:hidden "
        >
          <FlotingDiv image={Crown} txt1="Responsive" txt2="Design" />
        </motion.div>
        {/* lg */}
        <motion.div
          initial={{left: "0%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="hidden lg:block lg:scale-100 lg:-top-12 "
        >
          <FlotingDiv image={Crown} txt1="Responsive" txt2="Design" />
        </motion.div>
      
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "0px" }}
          transition={transition}
          className="top-48 scale-[0.8] -left-10 md:scale-[1.2] md:top-[29rem] lg:scale-100 lg:top-[24rem]"
        >
          <FlotingDiv image={Thumbup} txt1="React" txt2="Developer" />
        </motion.div>
        <div className="blue-blur top-36 md:top-80"></div>
        <div className="pink-blur left-36 -top-36 md:left-80"></div>
      </div>
    </div>
  );
};

export default Intro;
