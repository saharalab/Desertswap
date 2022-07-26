import Head from "next/head";
import { ExchangeSATOCard } from "../../components";
import Layout from "../Layout";

export default function Page() {
  return (
    <div className="h-full">
      <Head>
        <title>Exchange</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
      </Head>
      <div className="h-full w-full flex">
        <div className="h-full w-5/6">
          <div className="h-5 w-5"></div>
        </div>
        <div className="h-full w-4/12 flex border-solid border-l-2 border-l-black/900">
          <ExchangeSATOCard />
        </div>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
