import Circle from "./Circle";

const Experience = () => {
  return (
    <div
      className="flex items-center justify-center gap-40 my-20"
      id="Experience"
    >
      <Circle Number={4} text1="Years Of" text2="Experience" />
      <Circle Number={20} text1="Completed" text2="Projects" />
      <Circle Number={3} text1="Companies" text2="Work With" />
    </div>
  );
};

export default Experience;
