import { IconBrandGithub } from "@tabler/icons-react";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between border-t border-t-slate-800 bg-gray-950 p-10 md:px-20">
      <div>
        <p>&copy; 2026 - Yohanan Boy</p>
        <p>Todos os direitos reservados.</p>
      </div>
      <Link href="https://github.com/yohananboy" target="_blank">
        <Button className="rounded-full hover:cursor-pointer">
          Github
          <IconBrandGithub />
        </Button>
      </Link>
    </footer>
  );
}
