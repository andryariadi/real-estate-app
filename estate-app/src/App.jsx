import HomePage from "./routes/HomePage/HomePage";

import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/ListPage/ListPage";
import DetailPage from "./routes/SinglePage/DetailPage";

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
        {
          path: "/:id",
          element: <DetailPage />,
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
