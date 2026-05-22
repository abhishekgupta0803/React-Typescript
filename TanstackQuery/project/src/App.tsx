import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import FetchOld from "./components/Pages/FetchOld";
import FetchRQ from "./components/Pages/FetchRQ";
import MainLayout from "./components/Layouts/MainLayout";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider as OueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CardSingleDetail from "./components/Pages/CardSingleDetail";
import InfiniteScroll from "./components/Pages/InfiniteScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      //dynamic page reactquery
        {
        path: "/rq/:id",
        element: <CardSingleDetail />,
      },
        {
        path: "/infinite",
        element: <InfiniteScroll />,
      },
    ],
  },
]);
const App = () => {
  const queryClient  = new QueryClient();
  return (
    <>
      <OueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
         <ReactQueryDevtools initialIsOpen={false} />
      </OueryClientProvider>
    </>
  );
};

export default App;
