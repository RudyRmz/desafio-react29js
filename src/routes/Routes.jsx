import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home-page/Home";
import PostRelevant from "../components/home-page/posts-section/PostRelevant";
import PostLatest from "../components/home-page/posts-section/PostLatest";
import PostTop from "../components/home-page/posts-section/PostTop";
import CreatePost from "../components/create-post/CreatePost";
import PostDetail from "../components/post-detail/PostDetail";
import EnterLogin from "../components/login/EnterLogin";
import Error404 from "../components/Error404";
import CreateAccount from "../components/create-account/CreateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
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
  {
    path: "/login",
    element: <EnterLogin />,
  },
  {
    path: "/new-user",
    element: <CreateAccount />,
  },
]);

export default function MyRoutes() {
  return <RouterProvider router={router} />;
}
