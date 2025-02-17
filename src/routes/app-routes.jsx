import { createBrowserRouter } from "react-router-dom";
import Browse from "../components/browse";
import Login from "../auth/login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default appRouter;
