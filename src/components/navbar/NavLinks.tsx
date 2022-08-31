import Link from "next/link";
import { useRouter } from "next/router";

export const NavLink = ({ href, Text }: { href: string; Text: string }) => {
    const route: string = useRouter().pathname;
    return (
      <div
        onClick={() => {
  
        }}
        className={
          (route === href ? "text-black/900 font-bold" : "text-lightGray/70") +
          " font-medium sm:font-semibold ml-6 text-base lg:text-sm"
        }
      >
        <Link href={href}>{Text}</Link>
      </div>
    );
  };
  