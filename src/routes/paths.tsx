// src/routes/paths.ts
import Dashboard from '../pages/dashboard/Dashboard.page';
import Invoices from '../pages/invoices/Invoices.page';

const paths = [
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "invoices",
    element: <Invoices />
  },
  {
    path: "customers",
    element: <Dashboard />
  },
  {
    path: "profile",
    element: <Dashboard />
  },
  {
    path: "calendar",
    element: <Dashboard />
  },
  {
    path: "team",
    element: <Dashboard />
  },
  {
    path: "charts",
    element: <Dashboard />
  },
  // TODO cambiar dashboard por cada componente
];

export default paths;
