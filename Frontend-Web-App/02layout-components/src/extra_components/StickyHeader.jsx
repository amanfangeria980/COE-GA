import React, { useEffect, useState } from "react";
import Dropdown from "./DropDown";

// can also create with position:sticky

const StickyHeader = () => {
    const [isShrunk, setIsShrunk] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > lastScrollY && scrollY > 100) {
            setIsShrunk(true);
        } else if (scrollY < lastScrollY) {
            setIsShrunk(false);
        }
        setLastScrollY(scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 bg-white transition-all duration-300 ${
                isShrunk ? "py-2 shadow-lg" : "py-4"
            } z-50`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Dropdown />
                <h1
                    className={`text-xl ${
                        isShrunk ? "text-lg" : "text-2xl"
                    } transition-all`}
                >
                    My Sticky Header
                </h1>
            </div>
        </header>
    );
};

export default StickyHeader;
