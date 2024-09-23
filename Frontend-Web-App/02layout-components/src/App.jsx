import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <div className="bg-pink-300 h-screen w-screen">
            <div className="relative top-5 grid grid-cols-6 left-4">
                <Link
                    to="/component1"
                    className="bg-black text-white p-2 rounded-lg h-52 w-52 flex items-center justify-center text-center"
                >
                    Dropdown and Sticky Header
                </Link>
                <Link
                    to="/component2"
                    className="bg-black text-white p-2 rounded-lg h-52 w-52 flex items-center justify-center text-center"
                >
                    Responsive Logo
                </Link>
            </div>
        </div>
    );
};

export default App;
