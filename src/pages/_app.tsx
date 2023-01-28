import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Header from "../components/layout/Header";

import { api } from "../utils/api";

import "../styles/globals.css";
import Footer from "../components/layout/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="flex min-h-screen flex-col bg-slate-50">
        <div className="bg-slate-800 text-slate-50">
          <div className="mx-auto max-w-screen-2xl">
            <Header />
          </div>
        </div>
        <div className="flex-grow">
          <div className="mx-auto max-w-screen-2xl text-slate-900">
            <Component {...pageProps} />
          </div>
        </div>
        <div className="bg-slate-700 text-slate-50">
          <div className="mx-auto max-w-screen-2xl">
            <Footer />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
