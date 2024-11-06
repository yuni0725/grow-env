import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import "./fonts/font.css";
import About from "./routes/about";
import One from "./routes/one";
import Two from "./routes/two";
import Padlet from "./routes/padlet";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/one",
    element: <One></One>,
  },
  {
    path: "/two",
    element: <Two></Two>,
  },
  {
    path: "/padlet",
    element: <Padlet></Padlet>,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing : border-box;
    
  }

  body {
    font-family : 'Pretendard', 'Open Sans', 'Helvetica Neue', sans-serif
  }

  *::-webkit-scrollbar {
  display: none;
  }
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles></GlobalStyles>
      {isLoading ? (
        <div></div>
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </>
  );
}

export default App;
