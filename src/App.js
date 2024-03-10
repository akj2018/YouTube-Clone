import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import reduxStore from "./utils/reduxStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import ErrorPage from "./components/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
