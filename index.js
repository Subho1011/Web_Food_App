import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './src/App';
import About from './src/pages/About'
import Consumerpolicy from './src/pages/Consumerpolicy';
import Help from './src/pages/Help';
import Social from './src/pages/Social';
import Main from './src/components/Main';
import Error from './src/pages/Error';

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    /**By using this children array I am making sure that the Header and Footer component of App.Js always remain intact */
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/consumer",
        element: <Consumerpolicy />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/social",
        element: <Social />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={pageRouter} />);