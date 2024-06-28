import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import './assets/styles/index.css';
import Root from './routes/Root.tsx'
import ErrorPage from './pages/error/Error.page.tsx';
import paths from './routes/paths.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: < ErrorPage />,
    children: paths
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
