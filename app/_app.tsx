import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: {
    session: any;
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