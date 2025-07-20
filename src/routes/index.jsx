import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import { ProtectedRoute, PublicRoute } from "./ProtectedRoute";

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
     element:
        <PublicRoute>
            <Login />
        </PublicRoute>
        
    },

    {
     path: "/register",
     element:
        <PublicRoute>
            <Register />
        </PublicRoute>
    },

    {
        path: "/cart",
        element: 
        <ProtectedRoute>
            <Cart />
        </ProtectedRoute>
    },

    {
        path: "/admin",
        element: 
        <ProtectedRoute>
            <Admin />
        </ProtectedRoute>
    }
])