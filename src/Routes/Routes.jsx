import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../Pages/Error/Errorpage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import InstallApps from "../Pages/InstallApps/InstallApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/data.json"),
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "install",
        Component: InstallApps,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
