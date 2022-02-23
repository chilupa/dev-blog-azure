import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../../components/Header/Header';
import CreatePost from '../CreatePost/CreatePost';
import ViewPost from '../ViewPost/ViewPost';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/create', element: <CreatePost /> },
  { path: '/view/:postId', element: <ViewPost /> },
];

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
