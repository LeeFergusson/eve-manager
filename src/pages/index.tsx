import { type NextPage } from "next";
import Head from "next/head";
import { signIn } from "next-auth/react";

import HeroSection from "../components/ui/HeroSection";
import NewsFeed from "../components/NewsFeed";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Base</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-2 p-4">
        <article className="mx-auto">
          <h2 className="hidden">Home</h2>

          <div className="flex gap-2">
            <HeroSection>
              <h3 className="text-xl font-semibold">
                Welcome to the application!
              </h3>
              <p className="max-w-[35em] p-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                voluptas nulla incidunt, laudantium ullam aperiam iure quasi ea
                quas dignissimos praesentium, consectetur, accusantium
                cupiditate explicabo. Voluptates veniam quasi possimus
                distinctio!
              </p>
              <button
                className="m-1 rounded-md bg-gray-400 p-2 shadow-md"
                onClick={() => void signIn()}
              >
                Sign-In
              </button>
            </HeroSection>
            <NewsFeed />
          </div>
        </article>
      </main>
    </>
  );
};

// interface HeroSectionProps {
//   children?: ReactElement | ReactElement[] | string;
// }

// const HeroSection = (props: HeroSectionProps) => {
//   return (
//     <section className="flex-shrink rounded-sm border-l-4 border-blue-500 bg-white p-6 shadow-md">
//       {props.children}
//     </section>
//   );
// };

export default Home;
