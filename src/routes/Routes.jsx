import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home-page/Home";
import PostRelevant from "../components/home-page/posts-section/PostRelevant";
import PostLatest from "../components/home-page/posts-section/PostLatest";
import PostTop from "../components/home-page/posts-section/PostTop";
import CreatePost from "../components/create-post/CreatePost";
import PostDetail from "../components/post-detail/PostDetail";

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
  {
    path: "/new",
    element: <CreatePost />,
  },
  {
    path: "/post-detail/:postId",
    element: <PostDetail />,
  },
]);

export default function MyRoutes() {
  return <RouterProvider router={router} />;
}
