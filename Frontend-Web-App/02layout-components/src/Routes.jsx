import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dropdown_StickyNavPage from "./pages/Dropdown_StickyNavPage";
import ResponsiveLogoPage from "./pages/ResponsiveLogoPage";
import AccessibleNavbarPage from "./pages/AccessibleNavbarPage";
import MultilevelDropdownPage from "./pages/MultilevelDropdownPage";
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
    {
        path: "/component3",
        element: <AccessibleNavbarPage />,
    },
    {
        path: "/component4",
        element: <ResponsiveHamburgerMenuPage />,
    },
    {
        path: "/component5",
        element: <MultilevelDropdownPage />,
    },
]);

export const router;