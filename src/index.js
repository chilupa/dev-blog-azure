import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import App from './pages/App/App';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
