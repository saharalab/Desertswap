import { PopOver } from "@/utils";
import { NavLink } from "./NavLinks";
import {  PopOverBridgeItems, PopOverEarnItems, PopOverGovernanceItems, PopOverItems, PopOverNFTItems, PopOverToolsItems } from "./Utility";

export function Navigations() {
    return (
      <div className=" lg:flex flex-col md:flex-row space-x-5 relative items-center text-sm">
        <NavLink key={0} Text="Exchange" href="/exchange" />
        <PopOver
          key={7}
          popOverName={"Earn"}
          popOverItems={PopOverEarnItems}
          popOverItemsStyle={[""]}
        />
        <NavLink key={2} Text="Crowdpooling" href="/cp/join" />
        <PopOver
          key={8}
          popOverName={"Tools"}
          popOverItems={PopOverToolsItems}
          popOverItemsStyle={[""]}
        />
        <PopOver
          key={9}
          popOverName={"NFT"}
          popOverItems={PopOverNFTItems}
          popOverItemsStyle={[""]}
        />
        <PopOver
          key={10}
          popOverName={"Governance"}
          popOverItems={PopOverGovernanceItems}
          popOverItemsStyle={[""]}
        />
        <PopOver
          key={11}
          popOverName={"Bridge"}
          popOverItems={PopOverBridgeItems}
          popOverItemsStyle={[""]}
        />
      </div>
    );
  }
  
  