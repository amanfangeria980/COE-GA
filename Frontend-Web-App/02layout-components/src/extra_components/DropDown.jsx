import { useState } from "react";

//  The dropdown opens on hover for desktop users and on click for mobile users.

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(false);
        }
    };

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                onClick={handleClick}
                className="px-4 py-2 text-white bg-blue-500 rounded"
            >
                Menu
            </button>
            {isOpen && (
                <ul className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg">
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Submenu 1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Submenu 2
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
