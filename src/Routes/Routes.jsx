import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/Layout/RootLayout";
import ErrorPage from "../Pages/Error/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <h2>Homepage</h2>,
      },
      {
        path: "apps",
        element: <h2>Apps</h2>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
