import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Theme } from './Theme'
import { Header } from './components/Header'
import { ListsContainer } from './containers/Lists'
import { ApolloProvider } from '@apollo/react-hooks'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:4000/'
})

const client = new ApolloClient({
  cache: cache,
  link: link,

  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
})

const AppSt = styled.div`
  background: ${({ theme }) => theme.colors.white};
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: lato, sans-serif;
  }
  main {
    min-height: calc(100% - 100px);     /* native */
  }
`
export const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <AppSt>
        <Header />
        <ListsContainer />
      </AppSt>
    </ApolloProvider>
  </ThemeProvider>
)
