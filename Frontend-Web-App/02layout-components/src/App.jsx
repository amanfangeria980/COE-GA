import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <div className="bg-pink-300 h-screen w-screen">
            <div className="grid grid-cols-4 p-4">
                <Link
                    to="/component1"
                    className="bg-black text-white p-2 rounded-lg h-52 w-52 flex items-center justify-center text-center"
                >
                    Dropdown and Sticky Header
                </Link>
            </div>
        </div>
    );
};

export default App;
