import React from "react";
import { CrowdPoolingInfoTabs, InfoContent, SearchByAddress } from "@/components";
import Layout from "@/pages/Layout";
import Head from "next/head";

export default function Page() {
  return (
    <div className="xl:container h-full w-full pt-16 px-2 md:px-10 text-center text-lightGray flex flex-col items-center">
      <Head>
        <title>Crowdpooling</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
      </Head>
      <InfoContent />
      <SearchByAddress />
      <CrowdPoolingInfoTabs />
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
