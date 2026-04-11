import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconBrandGithub,
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
} from "@tabler/icons-react";
import Link from "next/link";

export function Projetos() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <Card className="group relative row-span-2 mx-auto w-full max-w-sm pt-0 transition duration-300 ease-in-out hover:scale-105">
        <Link href="https://yohananboy.github.io/loudnews" target="_blank">
          <img
            src="/images/loud-news.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover object-top grayscale group-hover:grayscale-0 hover:cursor-pointer"
          />
        </Link>
        <CardHeader>
          <CardAction>
            <Link href="https://github.com/YohananBoy/loudnews" target="_blank">
              <Button
                size="icon"
                variant="outline"
                className="hover:cursor-pointer"
              >
                <IconBrandGithub />
              </Button>
            </Link>
          </CardAction>
          <CardTitle>Loud News</CardTitle>
          <CardDescription className="flex flex-row">
            <IconBrandHtml5 />
            <IconBrandCss3 />
            <IconBrandJavascript />
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="group relative row-span-2 mx-auto w-full max-w-sm pt-0 transition duration-300 ease-in-out hover:scale-105">
        <Link href="https://libertas-cefet.vercel.app" target="_blank">
          <img
            src="/images/libertas-cefet.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover object-top grayscale group-hover:grayscale-0 hover:cursor-pointer"
          />
        </Link>
        <CardHeader>
          <CardAction>
            <Link
              href="https://github.com/YohananBoy/libertas-cefet"
              target="_blank"
            >
              <Button
                size="icon"
                variant="outline"
                className="hover:cursor-pointer"
              >
                <IconBrandGithub />
              </Button>
            </Link>
          </CardAction>
          <CardTitle>Libertas Cefet</CardTitle>
          <CardDescription className="flex flex-row">
            <IconBrandHtml5 />
            <IconBrandTailwind />
            <IconBrandTypescript />
            <IconBrandNextjs />
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="group relative row-span-2 mx-auto w-full max-w-sm pt-0 transition duration-300 ease-in-out hover:scale-105">
        <Link href="https://yohananboy.github.io/PC_WEB_2025/" target="_blank">
          <img
            src="/images/atividades-js.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover object-top grayscale group-hover:grayscale-0 hover:cursor-pointer"
          />
        </Link>
        <CardHeader>
          <CardAction>
            <Link
              href="https://github.com/YohananBoy/PC_WEB_2025"
              target="_blank"
            >
              <Button
                size="icon"
                variant="outline"
                className="hover:cursor-pointer"
              >
                <IconBrandGithub />
              </Button>
            </Link>
          </CardAction>
          <CardTitle>Programação Cliente Web</CardTitle>
          <CardDescription className="flex flex-row">
            <IconBrandJavascript />
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="group relative mx-auto w-full max-w-sm pt-2 transition duration-300 ease-in-out hover:scale-105">
        <CardHeader>
          <CardAction>
            <Link
              href="https://github.com/YohananBoy/DEV_WEB_I_2025"
              target="_blank"
            >
              <Button
                size="icon"
                variant="outline"
                className="hover:cursor-pointer"
              >
                <IconBrandGithub />
              </Button>
            </Link>
          </CardAction>
          <CardTitle>Desenvolvimento Web I</CardTitle>
          <CardDescription className="flex flex-row">
            <IconBrandPhp />
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="group relative mx-auto w-full max-w-sm pt-2 transition duration-300 ease-in-out hover:scale-105">
        <CardHeader>
          <CardAction>
            <Link
              href="https://github.com/YohananBoy/Algoritmos-2024"
              target="_blank"
            >
              <Button
                size="icon"
                variant="outline"
                className="hover:cursor-pointer"
              >
                <IconBrandGithub />
              </Button>
            </Link>
          </CardAction>
          <CardTitle>Algoritmos 2024</CardTitle>
          <CardDescription className="flex flex-row">
            <IconBrandPhp />
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
