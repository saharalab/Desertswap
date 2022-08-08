import React from "react";
import Layout from "@/pages/Layout";
import { LiquidityPools, ListOfTradingPools, WelcomeToLiquidity } from "@/components/liquidity";

export default function Page() {
  return (
    <div className="h-full w-full">
      <WelcomeToLiquidity />
      <LiquidityPools />
      <ListOfTradingPools />
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
