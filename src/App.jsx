import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import SingleCharacter from "./components/SingleCharacter";
import Errorpage from "./components/Errorpage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Errorpage />,
    },
    {
      path: "/character/:id",
      element: <SingleCharacter />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
