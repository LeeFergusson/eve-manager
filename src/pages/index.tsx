import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Base</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col p-2">
        <h2 className="text-xl">Home</h2>
        <p>Welcome to the application!</p>
      </main>
    </>
  );
};

export default Home;
