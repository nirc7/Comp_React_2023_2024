import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Root from "./Root";
import Page1 from "./page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page5 from "./Page5";
import Page7 from "./Page7";
import Page4, { loaderUserId } from "./Page4";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      //loader: rootLoader,
      children: [
        { 
          path: "/",
          element: <Page1 />,
        },
        { 
          path: "/page1",
          element: <Page1 />,
        },
        {
          path: "/page2",
          element: <Page2 />,
        },
      ],
    },
    {
      path: "/page3/:userId",
      element: <Page3 />
    },
    {
      path: "/page4/:userId",
      element: <Page4 />,
      loader: loaderUserId
    },
    {
      path: "/page5",
      element: <Page5 />
    },
    {
      path: "/page7",
      element: <Page7 />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
