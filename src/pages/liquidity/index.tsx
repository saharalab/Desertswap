import React from "react";
import Layout from "@/pages/Layout";
import {
  LiquidityPools,
  ListOfTradingPools,
  WelcomeToLiquidity,
} from "@/components/liquidity";
import Head from "next/head";

export default function Page() {
  return (
    <div className="h-full w-full">
      <Head>
        <title>Liquidity</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
      </Head>
      <WelcomeToLiquidity />
      <LiquidityPools />
      <ListOfTradingPools />
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
