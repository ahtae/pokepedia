import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Navbar, SwitchRouter } from './components';
import './styles/App.scss';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
  });

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <SwitchRouter />
    </ApolloProvider>
  );
};

export default App;
