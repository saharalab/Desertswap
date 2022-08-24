import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectWalletBtn = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            className="mr-1 sm:mr-3 text-secondary-alfa md:min-w-[11rem]"
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="w-full group translate-y-[2px] px-5 pb-2 pt-2 rounded-lg border-solid border-[1px] border-paleGrey bg-gray-900"
                  >
                    <div className=" font-semibold tracking-wide transform -translate-y-[1px] w-full h-full text-supernova text-[1em]">
                      Connect to a Wallet
                    </div>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    className={`min-w-max hover:bg-tertiary-alfa/60  w-full border border-secondary-alfa px-6 py-2 rounded-full`}
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="w-full group translate-y-[2px] px-5 pb-2 pt-2 rounded-lg border-solid border-[1px] border-paleGrey bg-gray-900"
                  >
                    <div className=" font-semibold tracking-wide transform -translate-y-[1px] w-full h-full text-supernova text-[1em]">
                      {account.displayName}
                    </div>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
