export default function WorkCircle({ img }: { img: string }) {
  return (
    <div className="w-16 h-16 md:h-24 md:w-24 border-[5px] border-solid border-[#ebebeb] rounded-full bg-white dark:bg-slate-300 flex items-center justify-center">
      <img src={img} alt="" className="h-9 w-9 md:h-12 md:w-12" />
    </div>
  );
}
