import React from "react";
import Layout from "../Layout";

export default function Page() {
  return <div>index</div>;
}

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
