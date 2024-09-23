import { Link } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import { LuUtensilsCrossed } from "react-icons/lu";
import { useState } from "react";

const AccessibleResponsiveHamburgerMenuPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = (
        <>
            <li>
                <Link
                    to="#home"
                    onClick={() => setIsOpen(false)}
                    className="text-blue-800"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="#about"
                    onClick={() => setIsOpen(false)}
                    className="text-blue-800"
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    to="#projects"
                    onClick={() => setIsOpen(false)}
                    className="text-blue-800"
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to="#contact"
                    onClick={() => setIsOpen(false)}
                    className="text-blue-800"
                >
                    Contact Us
                </Link>
            </li>
        </>
    );

    return (
        <div className="bg-yellow-200 flex items-center justify-between">
            <div className="h-20 w-1/2 mx-2">
                <Link to="/component4">
                    <img
                        src="/sailboat.svg"
                        alt="Site Logo"
                        className="h-auto p-1 w-20 "
                    />
                </Link>
            </div>

            {isOpen ? (
                <LuUtensilsCrossed
                    className="block md:hidden relative right-4 text-blue-800"
                    size={40}
                    onClick={() => setIsOpen(!isOpen)}
                />
            ) : (
                <GiHamburger
                    className="block md:hidden relative right-4 text-blue-800"
                    size={40}
                    onClick={() => setIsOpen(!isOpen)}
                />
            )}

            <ul className="hidden md:flex md:w-1/2 md:justify-end md:items-center md:gap-12 md:mx-5">
                {menuItems}
            </ul>

            {isOpen && (
                <ul className="absolute top-16 left-0 right-0 bg-yellow-200 flex flex-col items-center space-y-4 py-4 md:hidden z-50">
                    {menuItems}
                </ul>
            )}
        </div>
    );
};

export default AccessibleResponsiveHamburgerMenuPage;
