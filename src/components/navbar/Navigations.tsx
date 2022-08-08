import { PopOver } from "@/utils";
import { NavLink } from "./NavLinks";
import { PopOverItems } from "./Utility";

export function Navigations() {
    return (
      <div className=" lg:flex flex-col md:flex-row space-x-5 relative items-center text-sm">
        <NavLink key={0} Text="Exchange" href="/exchange" />
        <PopOver
          key={7}
          popOverName={"Earn"}
          popOverItems={PopOverItems}
          popOverItemsStyle={[""]}
        />
        <NavLink key={2} Text="Crowdpooling" href="/cp/join" />
        <PopOver
          key={8}
          popOverName={"Tools"}
          popOverItems={PopOverItems}
          popOverItemsStyle={[""]}
        />
        <PopOver
          key={9}
          popOverName={"NFT"}
          popOverItems={PopOverItems}
          popOverItemsStyle={[""]}
        />
        <PopOver
          key={10}
          popOverName={"Governance"}
          popOverItems={PopOverItems}
          popOverItemsStyle={[""]}
        />
        <PopOver
          key={11}
          popOverName={"Bridge"}
          popOverItems={PopOverItems}
          popOverItemsStyle={[""]}
        />
      </div>
    );
  }
  
  