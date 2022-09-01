import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="cursor-pointer flex items-center my-2 scale-90 md:scale-100 ">
        {/* <span className="hidden lg:block ">
          <Image
            src="/assets/icons/dswap-logo.png"
            className="object-contain select-none"
            height={50}
            width={140}
            alt="DesertSwap"
          />
        </span> */}
        {/* <span className="lg:hidden grid place-content-center"> */}
        <span className="w-[145px]">
          <Image
            src="/assets/icons/Desertswap Logo.png"
            className=" object-contain select-none rounded-full"
            height={38}
            width={38}
            alt="DesertSwap"
          />
        </span>
        {/* </span> */}
      </div>
    </Link>
  );
};
