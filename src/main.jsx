import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Info from './routes/Info.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/info",
    element: <Info />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
