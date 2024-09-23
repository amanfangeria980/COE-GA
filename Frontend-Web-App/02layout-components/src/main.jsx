import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dropdown_StickyNavPage from "./pages/Dropdown_StickyNavPage.jsx";
import ResponsiveLogoPage from "./pages/ResponsiveLogoPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/component1",
        element: <Dropdown_StickyNavPage />,
    },
    {
        path: "/component2",
        element: <ResponsiveLogoPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </StrictMode>
);
