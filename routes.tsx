import { createBrowserRouter } from "react-router";
import { LoginPage } from "./src/pages/login";
import { SignPage } from "./src/pages/signin";
import { ForgetPage } from "./src/pages/forgetPassword";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/forget",
    element: <ForgetPage />,
  },
]);
