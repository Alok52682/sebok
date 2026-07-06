import { useState } from "react";
import { NavLink } from "react-router";
import logo from '../../assets/sebok_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (<nav className="bg-neutral-primary w-full border-b border-default"> <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

        <NavLink to="/" className="flex items-center space-x-2">
            <img
                src={logo}
                className="h-9"
                alt="Logo"
            />
            <span className="self-center text-3xl text-heading font-semibold">
                সেবক
            </span>
        </NavLink>

        {/* Toggle Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-base md:hidden hover:bg-neutral-secondary-soft"
        >
            <span className="sr-only">Open menu</span>
            <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d={
                        isOpen
                            ? "M6 18L18 6M6 6l12 12" // close icon
                            : "M4 6h16M4 12h16M4 18h16" // menu icon
                    }
                />
            </svg>
        </button>

        {/* Menu */}
        <div
            className={`${isOpen ? "block" : "hidden"
                } w-full md:block md:w-auto`}
        >
            <ul className="font-medium flex flex-col p-4 mt-4 border rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-primary">

                <li>
                    <NavLink to="/" className="block py-2 px-3">
                        হোম
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about" className="block py-2 px-3">
                        আমাদের সম্পর্কে
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/activities" className="block py-2 px-3">
                        কার্যক্রম
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/organization" className="block py-2 px-3">
                        সংগঠন
                    </NavLink>
                </li>

            </ul>
        </div>

    </div>
    </nav>
    );
};

export default Navbar;
