import Head from "next/head";
import { ExchangeSATOCard, PriceGraphByCurrency } from "../../components";
import Layout from "../Layout";

export default function Page() {
  return (
    <div className="h-max xl:h-full w-full flex-grow bg-supernova">
      <Head>
        <title>Exchange</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
      </Head>
      <div className=" h-max xl:h-full w-full flex flex-col-reverse lg:flex-row pt-10 items-center xl:flex-nowrap flex-wrap-reverse justify-center">
        <div className=" h-full w-full xl:w-4/6 xl:border-solid xl:border-r-2 xl:border-r-black/900">
          <div className=" flex h-full w-full px-2 md:px-10  text-black/900 justify-center  ">
            <PriceGraphByCurrency />
          </div>
        </div>
        <div className=" mt-10 xl:mt-0 xl:w-auto w-full h-full flex md:items-center xl:items-start md:justify-center ">
          <ExchangeSATOCard />
        </div>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
