import Head from "next/head";
import { ExchangeSATOCard } from "../../components";
import Layout from "../Layout";

export default function Page() {
  return (
    <div className="h-full flex-grow">
      <Head>
        <title>Exchange</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
      </Head>
      <div className="h-full w-full flex flex-col-reverse lg:flex-row">
        <div className=" h-full w-full lg:w-5/6 lg:border-solid lg:border-r-2 lg:border-r-black/900">
          <div className="flex justify-center items-center h-full w-full px-2 text-black/900 text-center">
            <span className="h-max">Price Chart</span>
          </div>
        </div>
        <div className="mt-10 w-auto h-max flex md:items-center xl:items-start justify-center ">
          <ExchangeSATOCard />
        </div>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
