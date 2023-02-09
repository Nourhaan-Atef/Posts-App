import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPostList from "./pages/indexPostList";
import AddPostsPage from "./pages/AddPostsPage";
import EditPage from "./pages/EditPage";
import DetailsPage from "./pages/DetailsPage";
import RootLayout from "./pages/RootLayout";
import { Provider } from "react-redux";
import store from "./store/indexStore";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <IndexPostList /> },
      { path: "post", element: <IndexPostList /> },
      { path: "post/add", element: <AddPostsPage /> },
      {
        path: "post/:id/edit",
        element: <EditPage />,
      },
      {
        path: "post/:id/details",
        element: <DetailsPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
