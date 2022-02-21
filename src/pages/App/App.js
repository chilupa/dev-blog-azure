import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../../components/Header/Header';

const routes = [{ path: '/', element: <Home /> }];

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((props, index) => (
          <Route key={index} {...props} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
