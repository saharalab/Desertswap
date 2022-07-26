import type { NextPage } from "next";
import Head from "next/head";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Exchange</title>
        <meta name="description" content="Dswap Defi Exchange Application" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className=" px-auto flex flex-col items-center justify-center w-full h-screen p-4 bg-supernova">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-lightGray">
          Dswap App
        </h1>
        <p className="text-2xl text-black/900">This stack uses:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
          <TechnologyCard
            name="Nextjs"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <TechnologyCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
        </div>
      </main>
    </>
  );
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-lightGray rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-black/900">{name}</h2>
      <p className="text-sm text-lightGray">{description}</p>
      <a
        className="mt-3 text-sm underline text-black/900 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};

export default Home;
