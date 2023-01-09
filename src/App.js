import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Index from './components/Pages/Index';

const App = () => {
  const Router = createBrowserRouter ([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Index></Index>
        },
      ]
    },
  ])
  
  return (
    <div>
      <RouterProvider router={ Router } ></RouterProvider>
    </div>
  );
}

export default App;