import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Chart from "../Pages/Chart/Chart";
import Ecommerce from "../Pages/Ecommerce/Ecommerce";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
      {
        path: "/ecommerce",
        element: <Ecommerce />,
      },
    ],
  },
]);
