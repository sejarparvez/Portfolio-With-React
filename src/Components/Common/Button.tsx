export default function Button({ Name }: { Name: string }) {
  return (
    <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 px-8 py-2 rounded-full">
      {Name}
    </button>
  );
}
