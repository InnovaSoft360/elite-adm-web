import { createBrowserRouter } from "react-router";
import { LoginPage } from "./src/pages/login";
import { SignPage } from "./src/pages/signin";
import { ForgetPage } from "./src/pages/forgetPassword";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signin",
    element: <SignPage />,
  },
  {
    path: "/forget",
    element: <ForgetPage />,
  },
]);
