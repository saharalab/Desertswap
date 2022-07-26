import { PropsWithChildren } from "react";
import { Navbar } from "../components";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className=" h-full flex flex-col items-center w-full ">
        <Navbar />
        <div className="container h-full">{children}</div>
      </main>
    </>
  );
}
