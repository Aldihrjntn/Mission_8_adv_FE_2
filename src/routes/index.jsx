import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import ProtectedRoute from "../routes/ProtectedRoute";

export const router = createBrowserRouter([
    {
     path: "/",
     element: (
        <ProtectedRoute>
            <Home />
        </ProtectedRoute>
     )
    },
    
    {
     path: "/login",
     element: <Login />
    },

    {
     path: "/register",
     element: <Register />
    },

    {
        path: "/cart",
        element: <Cart />
    }
])