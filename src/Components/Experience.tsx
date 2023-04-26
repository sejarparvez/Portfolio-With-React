import React from "react";


const Experience = () => {
  return (
    <div className="flex items-center justify-center gap-[10%] mt-4 mb-16 lg:-mt-52" id="Experience">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="circle ">4+</div>
        <span className=" font-bold">Years Of</span>
        <span className=" text-cyan-500 font-bold">Experience</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="circle">20+</div>
        <span className=" font-bold">Completed</span>
        <span className=" text-cyan-500 font-bold">Projects</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="circle">3+</div>
        <span className=" font-bold">Companies</span>
        <span className=" text-cyan-500 font-bold">Work</span>
      </div>
    </div>
  );
};

export default Experience;
