import Layout from "@/pages/erc20/Layout";
import Head from "next/head";
import { MyTokenList, UpfrontERC20Section } from "@/components/erc20";

export default function Page() {
  return (
    <div className="h-max lg:h-full w-full flex-grow">
      <Head>
        <title>Create a token</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
      </Head>
      <div className="flex flex-col">
        <UpfrontERC20Section />
        <MyTokenList />
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page} </Layout>;
};
