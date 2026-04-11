import Menu from "./menu";

export default function Header() {
  return (
    <header className="H-35 sticky top-0 z-50 flex flex-row items-center justify-between border-b-5 bg-white px-10 md:px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-black">Yohanan Boy</h1>
        <h2 className="text-4xl font-bold">3° ano Informática</h2>
      </div>
      <Menu></Menu>
    </header>
  );
}
