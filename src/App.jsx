import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/app-routes";
import { Provider } from "react-redux";
import appStore from "./hooks/app-store";

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
