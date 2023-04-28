export default function Circle({
  Number,
  text1,
  text2,
}: {
  Number: number;
  text1: string;
  text2: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="h-40 w-40 relative">
        <div className="bg-gradient-to-b from-blue-600 to-cyan-600 h-full w-full rounded-full absolute animate-spin"></div>
        <div className="bg-white dark:bg-black h-32 w-32 rounded-full flex items-center justify-center font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {Number} +
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center font-bold text-xl">
        <span>{text1}</span>
        <span className="text-cyan-500">{text2}</span>
      </div>
    </div>
  );
}
