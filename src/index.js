import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import App from './pages/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://posts-graphql.azurewebsites.net/api/posts',
    fetch,
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
