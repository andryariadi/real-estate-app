import HomePage from "./routes/HomePage/HomePage";

import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/ListPage/ListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
