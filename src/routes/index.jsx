import { createBrowserRouter } from "react-router";
import { Login, Signup } from "../pages";
import { ProtectedRoute } from "../components";

const routes = [
    {
        path: "./",
        element: (
        <ProtectedRoute>
            <MainLayout/>,
        </ProtectedRoute>),
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
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
];
export const router = createBrowserRouter(routes);