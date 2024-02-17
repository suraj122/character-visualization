import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
// import SingleCharacter from "./components/SingleCharacter";
import Errorpage from "./components/Errorpage";
import { Suspense, lazy } from "react";
import SingleCharShimmer from "./components/SingleCharShimmer";

const SingleCharacter = lazy(() => import("./components/SingleCharacter"));

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Errorpage />,
    },
    {
      path: "/character/:id",
      element: (
        <Suspense fallback={<SingleCharShimmer />}>
          <SingleCharacter />
        </Suspense>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
