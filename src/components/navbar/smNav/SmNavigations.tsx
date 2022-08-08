import { NavLink } from "../NavLinks";
import { PopOverBridgeItems, PopOverEarnItems, PopOverGovernanceItems, PopOverItems, PopOverNFTItems, PopOverToolsItems } from "../Utility";
import { SmSubNavDisclosure } from "./SmSubNavDisclosure";

export function SmNavigations() {
    return (
      <div className="pt-4 h-[34em] top-10 bottom-0 flex flex-col md:flex-row space-y-5 overflow-x-hidden relative items-start text-sm">
        <NavLink key={0} Text="Exchange" href="/exchange" />
        <SmSubNavDisclosure
          key={7}
          popOverName={"Earn"}
          popOverItems={PopOverEarnItems}
          href="/earn"
        />
        <NavLink key={2} Text="Crowdpooling" href="/cp/join" />
        <SmSubNavDisclosure
          key={8}
          popOverName={"Tools"}
          popOverItems={PopOverToolsItems}
          href="/tools"
        />
        <SmSubNavDisclosure
          key={9}
          popOverName={"NFT"}
          popOverItems={PopOverNFTItems}
          href="/nft"
        />
        <SmSubNavDisclosure
          key={10}
          popOverName={"Governance"}
          popOverItems={PopOverGovernanceItems}
          href="/governance"
        />
        <SmSubNavDisclosure
          key={11}
          popOverName={"Bridge"}
          popOverItems={PopOverBridgeItems}
          href="/bridge"
        />
      </div>
    );
  }