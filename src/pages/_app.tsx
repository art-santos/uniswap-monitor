import React from 'react';
import Head from 'next/head';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';
import { ThemeProvider as MaterialUiProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


import theme from '../themes/theme';
import Navigation from '../components/layout/Sidebar/VerticalNav3';

export default function App ({ Component, pageProps }){
    
  const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
    cache: new InMemoryCache(),
  });
  
  return (
      <>
        <Head>
          <title>Transactions</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700"
            as="font"
          />
        </Head>
        <ApolloProvider client={client}>
          <StyledComponentProvider theme={theme}>
            <MaterialUiProvider theme={theme}>
              <StylesProvider injectFirst>
                <CssBaseline />
                <Navigation bucketMain={[<Component {...pageProps} />]} />
              </StylesProvider>
            </MaterialUiProvider>
          </StyledComponentProvider>
        </ApolloProvider>
      </>
    );
}
