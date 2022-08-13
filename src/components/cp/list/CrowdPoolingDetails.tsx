import React from "react";

export function CrowdPoolingDetails() {
  return (
    <div className="mx-12 bg-black rounded-2xl py-8 px-10 space-y-4">
      <div className="flex flex-col md:flex-row space-y-8">
        <div className="md:mx-10 text-sm text-white/80">
          <div className="text-supernova">
            <ProcessingIcon />
            <div className="mt-2">For Developers</div>
          </div>
          <div className="">
            Creating a Crowdpooling campaign can help you create a highly liquid
            trading venue for your project tokens, with an equal opportunity
            community token distribution mechanic that ensures no frontrunning
            and bot interference.
          </div>
        </div>
        <div className="md:mx-10 text-sm text-white/80">
          <div className="text-supernova">
            <SingleTokenIcon />
            <div className="mt-2">Single-Token Market Making</div>
          </div>
          <div className="">
            Creating a Crowdpooling campaign can help you create a highly liquid
            trading venue for your project tokens, with an equal opportunity
            community token distribution mechanic that ensures no frontrunning
            and bot interference.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="font-medium rounded-lg py-3 px-14 bg-supernova text-black text-lg">
          Launch a Crowdpooling Campaign
        </button>
      </div>
    </div>
  );
}

function ProcessingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      className="bi bi-cpu"
      viewBox="0 0 16 16"
    >
      <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
    </svg>
  );
}

function SingleTokenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-signpost-split"
      viewBox="0 0 16 16"
    >
      <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z"></path>
    </svg>
  );
}
