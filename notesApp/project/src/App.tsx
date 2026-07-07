import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import Viewpastes from "./components/Viewpastes";
import Paste from "./components/Paste";
import  "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/paste",
          element: <Paste />,
        },
        {
          path: "/paste/:id",
          element: <Viewpastes />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
