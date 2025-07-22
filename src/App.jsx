import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";

import Applayout from "./components/Layout/Applayout";
import Errorpage from "./pages/Errorpage";
import {CountryDetails} from "./pages/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement:<Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
