import React from "react";
import { RiAlarmWarningLine } from "react-icons/ri";

export function InfoContent() {
  return (
    <div className="mt-14 flex flex-col items-center">
      <div className="text-2xl font-medium font-Montserrat">
        Easy project fundraising options and equal access for users to
        participate in token launches.
      </div>
      <div className="text-[.79em] my-10 space-x-2 inline">
        <span className="space-x-2 pb-1">
          <span className="xl:no-underline underline underline-offset-8 leading-8 decoration-2 decoration-red-400 inline-flex xl:border-solid xl:border-b-2 border-b-red-400">
            <span className="">
              <RiAlarmWarningLine className="text-2xl " />
            </span>
            Please always double check the Crowdpooling pool address and token
            address, and beware of the risk of counterfeit tokens.
          </span>
        </span>
        <a className="pb-1 text-lightGray/75 font-medium" href="">
          <div className="min-w-max">Click to learn more</div>
        </a>
      </div>
    </div>
  );
}
