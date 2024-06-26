import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './assets/styles/index.css';
import Root from './routes/Root.tsx'
import ErrorPage from './pages/error/Error.page.tsx';
import Dashboard from './pages/dashboard/Dashboard.page.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: < ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "invoices",
        element: <Dashboard />
      },
      {
        path: "customers",
        element: <Dashboard />
      },
      {
        path: "profile",
        element: <Dashboard />
      },

      // TODO cambiar dashboard por cada componente
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
