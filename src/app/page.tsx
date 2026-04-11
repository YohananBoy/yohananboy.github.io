import Link from "next/link";
import { Projetos } from "./_components/projetos";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandCpp,
  IconBrandPhp,
  IconBrandMysql,
  IconBrandGit,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function HomePage() {
  return (
    <main className="m-10 flex flex-col justify-center gap-10 md:mx-20">
      <section id="inicio" className="scroll-mt-35">
        <h2 className="text-5xl font-bold">
          Bem vindo&#40;a&#41; ao meu portifólio!
        </h2>
        <p className="text-xl">
          Eu sou Yohanan Boy, tenho 18 anos e atualmente estou cursando o 3° ano
          do curso de informática do CEFET/RJ. Aqui você encontrará um pouco
          sobre minhas habilidades e alguns projetos/atividades.
        </p>
      </section>
      <section id="habilidades" className="scroll-mt-35">
        <h2 className="text-5xl font-bold">Habilidades</h2>
        <div className="grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-orange-500">
            <IconBrandHtml5 className="h-35 w-35" />
            <h3 className="text-2xl">HTML</h3>
          </div>
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-blue-500">
            <IconBrandCss3 className="h-35 w-35" />
            <h3 className="text-2xl">CSS</h3>
          </div>
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-blue-400">
            <IconBrandTailwind className="h-35 w-35" />
            <h3 className="text-2xl">Tailwind</h3>
          </div>
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-yellow-500">
            <IconBrandJavascript className="h-35 w-35" />
            <h3 className="text-2xl">JavaScript</h3>
          </div>
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-blue-500">
            <IconBrandTypescript className="h-35 w-35" />
            <h3 className="text-2xl">TypeScript</h3>
          </div>
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-gray-500">
            <IconBrandNextjs className="h-35 w-35" />
            <h3 className="text-2xl">NextJS</h3>
          </div>
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-blue-600">
            <IconBrandCpp className="h-35 w-35" />
            <h3 className="text-2xl">C++</h3>
          </div>
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-indigo-400">
            <IconBrandPhp className="h-35 w-35" />
            <h3 className="text-2xl">PHP</h3>
          </div>
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-blue-700">
            <IconBrandMysql className="h-35 w-35" />
            <h3 className="text-2xl">MySQL</h3>
          </div>
          <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:text-orange-500">
            <IconBrandGit className="h-35 w-35" />
            <h3 className="text-2xl">Git</h3>
          </div>
        </div>
      </section>
      <section id="projetos" className="scroll-mt-35">
        <h2 className="text-5xl font-bold">Projetos/Atividades</h2>
        <Projetos></Projetos>
      </section>
    </main>
  );
}
