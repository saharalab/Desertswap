import Head from "next/head";
import { ExchangeSATOCard, PriceGraphByCurrency } from "../../components";
import Layout from "../Layout";

export default function Page() {
  return (
    <div className="h-max lg:h-full w-full flex-grow ">
      <Head>
        <title>Exchange</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
      </Head>
      <div className="h-max md:h-full w-full flex flex-col-reverse lg:flex-row xl:flex-nowrap flex-wrap-reverse md:flex-nowrap justify-center">
        <div className="sm:pl-4 lg:bg-lightEarlyDawn lg:shadow-[0px_-5em_0px_#FFFBEB] !h-inherit !w-full">
          <div className="flex pb-10 xl:h-full h-full w-full px-2 md:px-6  text-black/900 justify-center">
            <PriceGraphByCurrency />
          </div>
        </div>
        <div className="lg:paddingX_4 lg:mt-0 mt-7 md:w-auto w-full h-full flex md:items-center xl:items-start md:justify-center ">
          <ExchangeSATOCard />
        </div>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
