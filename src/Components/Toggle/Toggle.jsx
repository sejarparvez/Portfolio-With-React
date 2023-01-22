import React from "react";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Toggle = () => {
  let theme = useContext(themeContext);
  let darkMode = theme.state.darkMode;
  let handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className=" flex justify-between border-[3px] border-solid border-cyan-500 rounded-[1rem] relative pl-[2px] cursor-pointer [&>*]:w-4 [&>*]:h-4 [&>*]:text-cyan-500" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className=" rounded-full bg-cyan-500 absolute"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
