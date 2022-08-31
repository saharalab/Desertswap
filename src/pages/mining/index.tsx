import React from "react";
import Layout from "@/pages/Layout";
import { UpfrontBanner } from "@/components/mining";
import Head from "next/head";

export default function Page() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Mining</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
      </Head>
      <UpfrontBanner />
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
