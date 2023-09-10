import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth";

interface AppProps {
  Component: React.ComponentType<any>; // Explicitly specify the type
  pageProps: {
    session: Session | null;
    [key: string]: any;
  };
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}