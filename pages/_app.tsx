import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/apollo';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <Navbar />
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}
