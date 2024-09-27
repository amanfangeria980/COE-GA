import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes.jsx";
import { UserContextProvider } from "./context/useAuth.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UserContextProvider>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </UserContextProvider>
    </StrictMode>
);
