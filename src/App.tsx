import { routes } from "../routes";
import { RouterProvider } from "react-router";

export function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}
