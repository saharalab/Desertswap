import Image from "next/image";

export function ExchangeSATOCard() {
  return (
    // <div className="scale-75 lg:scale-100 xl:scale-95">
    <div className="w-full flex justify-center scale-75 lg:scale-100 xl:scale-95">
      <div className=" mx-auto  lg:my-10 xl:my-0  xl:mt-20 h-max bg-black/900 p-8 w-max max-w-[400px] sm:min-w-[400px] min-w-[350px] md:mx-10 rounded-2xl flex flex-col md:shadow-[0px_0px_40px_8px_#854d0e]">
        <div className="self-end flex ">
          <PriceQuoteAutoRefreshes />
          <InviteYourFriends />
          <TradeSetting />
        </div>
        <PayAndReceiveForm />
      </div>
    </div>
  );
}

function PayAndReceiveForm() {
  return (
    <div className="space-y-6">
      <PayAble />
      <Receiver />
      <button className="bg-yellow-300 py-4 w-full rounded-xl">
        <span className="text-black/900 font-bold ">Connect Wallet</span>
      </button>
    </div>
  );
}

function PayAble() {
  return (
    <div>
      <div className="text-floralWhite font-bold ">Pay</div>
      <div className="flex justify-between items-center my-2 bg-lightGray p-3 rounded-xl border-solid border-[1px] border-supernova">
        <button className="flex justify-center items-center min-w-max mr-3">
          <Image
            src="/assets/icons/sahara_labs_logo-transparent.png"
            height={40}
            width={54}
            className=" object-contain"
            alt="Sahara Token"
          />
          <span className="text-base font-bold text-floralWhite">SATO</span>
        </button>
        <input
          type="text"
          className="text-xl w-32 sm:w-44 mr-2 text-right bg-transparent outline-none font-medium text-white placeholder:text-2xl placeholder:text-white"
          placeholder="0"
        />
      </div>
    </div>
  );
}

function Receiver() {
  return (
    <div>
      <div className="text-floralWhite font-bold ">
        Receive{" "}
        <span className="font-sans font-normal">
          (<span className="font-StyreneAWeb">Estimated</span>)
        </span>
      </div>
      <div className="flex justify-between items-center my-2 bg-lightGray p-3 rounded-xl border-solid border-[1px] border-supernova">
        <button className="flex justify-center items-center min-w-max mr-3">
          <Image
            src="/assets/icons/binance-logo.png"
            height={40}
            width={54}
            className=" object-contain"
            alt="Sahara Token"
          />
          <span className="font-bold text-floralWhite">BNB</span>
        </button>
        <input
          type="text"
          className="text-xl w-32 sm:w-44 mr-2 text-right bg-transparent outline-none font-medium text-white placeholder:text-2xl placeholder:text-white"
          placeholder="0"
        />
      </div>
    </div>
  );
}

function TradeSetting() {
  return (
    <button className="bg-lightGray/50 p-3 rounded-xl scale-75 grid justify-items-center">
      <Image
        src="/assets/icons/settings.png"
        height={33}
        width={33}
        className=" object-contain"
        alt="Trade Settings"
      />
    </button>
  );
}

function InviteYourFriends() {
  return (
    <button className="bg-lightGray/50 p-3 rounded-xl scale-75 grid justify-items-center">
      <Image
        src="/assets/icons/share-icon.png"
        height={33}
        className=" object-contain"
        width={33}
        alt="Trade Settings"
      />
    </button>
  );
}

function PriceQuoteAutoRefreshes() {
  return (
    <button className="bg-lightGray/50 p-3 rounded-xl scale-75 grid justify-items-center">
      <Image
        src="/assets/icons/price refrsh.png"
        className=" object-contain"
        height={33}
        width={33}
        alt="Trade Settings"
      />
    </button>
  );
}
