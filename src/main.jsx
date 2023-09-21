import React from 'react'
import ReactDOM from 'react-dom/client'
import routesWeb from './routes/rootRoutes.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/app.css';
import './App.css';

const route = createBrowserRouter(routesWeb);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
