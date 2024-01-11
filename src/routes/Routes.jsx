import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home-page/Home";
import PostRelevant from "../components/home-page/posts-section/PostRelevant";
import PostLatest from "../components/home-page/posts-section/PostLatest";
import PostTop from "../components/home-page/posts-section/PostTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <PostRelevant />,
      },
      {
        path: "/latest",
        element: <PostLatest />,
      },
      {
        path: "/top",
        element: <PostTop />,
      },
    ],
  },
]);

export default function MyRoutes() {
  return <RouterProvider router={router} />;
}
