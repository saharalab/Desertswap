import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className=" flex items-center my-2 scale-90 md:scale-100 ">
        <span className="hidden lg:block ">
          <Image
            src="/assets/icons/dswap-logo.png"
            className="object-contain select-none"
            height={50}
            width={140}
            alt="DesertSwap"
          />
        </span>
        <span className="lg:hidden rounded-full border-2 border-solid border-black/900 grid place-content-center">
          <Image
            src="/assets/icons/Desertswap Icon Logo.png"
            className=" object-contain select-none rounded-full"
            height={50}
            width={50}
            alt="DesertSwap"
          />
        </span>
      </div>
    </Link>
  );
};
