import Menu from "./menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-40 flex-col items-center justify-between border-b border-slate-800 bg-slate-950/80 px-10 py-4 backdrop-blur-md md:h-35 md:flex-row md:px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="truncate bg-linear-to-b from-indigo-200 to-indigo-400 bg-clip-text text-5xl font-black text-transparent">
          Yohanan Boy
        </h1>
        <h2 className="text-xl font-semibold text-indigo-200">
          3° ano Informática
        </h2>
      </div>
      <Menu></Menu>
    </header>
  );
}
