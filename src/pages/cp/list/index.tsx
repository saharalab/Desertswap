import React from "react";
import Layout from "@/pages/cp/list/Layout";
import Head from "next/head";
import { CrowdPoolingDetails, MyCrowdPoolingList } from "@/components/cp/list";

export default function Page() {
  return (
    <div className="h-max lg:h-full w-full flex-grow">
      <Head>
        <title>My Crowd pooling campaigns</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
      </Head>
      <div className="flex flex-col space-y-6 mb-20">
        <MyCrowdPoolingList />
        <CrowdPoolingDetails />
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
