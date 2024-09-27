import React from "react";
import { Link } from "react-router-dom";

const pages = [
    { id: 1, path: "/component1", title: "Dropdown and Sticky Header" },
    { id: 2, path: "/component2", title: "Responsive Logo" },
    { id: 3, path: "/component3", title: "Accessible Navbar" },
    {
        id: 4,
        path: "/component4",
        title: "Accessible Responsive Hamburger Navbar Page",
    },
    { id: 5, path: "/component5", title: "Multilevel ShadCN Dropdown" },
    {
        id: 6,
        path: "/dashboard",
        title: "Redirect to previous page after login, using UseLocation and useNavigate",
    },
];

const App = () => {
    return (
        <div className="bg-pink-300 h-screen w-screen">
            <div className="relative top-5 grid md:grid-cols-6 grid-cols-1 left-4">
                {pages.map((page) => (
                    <Link
                        key={page.id.toString()}
                        to={page.path}
                        className="bg-black text-white p-2 rounded-lg h-52 w-52 flex items-center justify-center text-center"
                    >
                        {page.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default App;
