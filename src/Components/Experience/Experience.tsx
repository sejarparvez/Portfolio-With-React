import Circle from "./Circle";

const Experience = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center md:gap-28 lg:gap-40 lg:my-20 my-10 gap-0"
      id="Experience"
    >
      <div className=" scale-75 md:scale-100">
        <Circle Number={4} text1="Years Of" text2="Experience" />
      </div>
      <div className=" scale-75 md:scale-100">
        <Circle Number={20} text1="Completed" text2="Projects" />
      </div>
      <div className=" scale-75 md:scale-100">
        <Circle Number={3} text1="Companies" text2="Work With" />
      </div>
    </div>
  );
};

export default Experience;
