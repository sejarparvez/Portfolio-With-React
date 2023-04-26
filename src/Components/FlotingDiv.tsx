type userProps = { image: string; txt1: string; txt2: string };
const FlotingDiv = ({ image, txt1, txt2 }: userProps) => {
  return (
    <div className=" place-content-around flex bg-white shadow-xl rounded-[17px] items-center pr-8 h-[4.5rem]">
      <img src={image} className=" scale-[0.4]" alt="images" />
      <span className=" font-sans text-base text-black">
        {txt1} <br /> {txt2}
      </span>
    </div>
  );
};

export default FlotingDiv;
