import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="flex min-h-screen flex-col">
        <div className="border-b-2">
          <div className="mx-auto max-w-screen-2xl">
            <Header />
          </div>
        </div>
        <div className="flex-grow border-b-2">
          <div className="mx-auto max-w-screen-2xl">
            <Component {...pageProps} />
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-screen-2xl">
            <Footer />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
