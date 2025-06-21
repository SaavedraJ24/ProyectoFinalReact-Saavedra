import { createBrowserRouter } from "react-router-dom";
import {
  Cart,
  Category,
  Checkout,
  Home,
  Item,
  Login,
  Signup,
} from "../pages";
import { MainLayout } from "../layout/MainLayout";
import { ProtectedRoute } from "../components";

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

export const router = createBrowserRouter(routes, {
  basename: "/ProyectoFinalReact-Saavedra",
});