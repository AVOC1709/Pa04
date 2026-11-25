import { createBrowserRouter, Navigate } from "react-router"
import { RootLayout } from "./layouts/RootLayout"
import { Galeria } from "./pages/Galeria"
import { Tienda } from "./pages/Tienda"
import { Pagina404 } from "./pages/Pagina404"

export const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <Navigate to="/galeria" replace /> },
        { path: "galeria", element: <Galeria /> },
        { path: "tienda", element: <Tienda /> },
        { path: "*", element: <Pagina404 /> },
    ]
}])
