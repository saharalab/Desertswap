import React from "react";
import { SearchByAddress } from "@/components";
import Layout from "@/pages/Layout";

export default function Page() {
  return (
    <div>
      <SearchByAddress />
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
