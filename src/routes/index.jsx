import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/Home";
import Register from "../pages/Register";
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
    }
])