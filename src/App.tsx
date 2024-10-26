import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <></>,
  },
  {
    path: "/about",
    element: <></>,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing : border-box;
    
  }

  body {
    font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
