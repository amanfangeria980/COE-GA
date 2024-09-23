import React from "react";
import { Link } from "react-router-dom";
const AccessibleNavbarPage = () => {
    return (
        <div className="bg-yellow-200 flex items-center justify-between">
            <div className="h-20 w-1/2 mx-2">
                <Link to="/component3">
                    <img
                        src="/sailboat.svg"
                        alt="Site Logo"
                        className="h-auto p-1 w-20"
                    />
                </Link>
            </div>
            {/* Link is by default focusable so we don't need to use tabIndex, other than that if we want to remove focus from Logo, we can use tabIndex -1 to the above Link tag*/}
            <ul className="w-1/2 flex justify-end items-center gap-12 mx-5">
                <Link to="#home">Home</Link>
                <Link to="#about">About</Link>
                <Link to="#projects">Projects</Link>
                <Link to="#contact">Contact Us</Link>
            </ul>
        </div>
    );
};

export default AccessibleNavbarPage;
