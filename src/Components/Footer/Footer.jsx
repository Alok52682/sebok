import { Link } from "react-router";
import Logo from "../../assets/sebok_logo.png";

const Footer = () => {
    return (
        <footer className="bg-neutral-primary-soft overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 py-6">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">

                    {/* Logo + Description */}
                    <div className="md:col-span-3 min-w-0">
                        <div className="flex justify-center md:justify-start">
                            <img
                                src={Logo}
                                alt="logo"
                                className="w-28 max-w-full h-auto block"
                            />
                        </div>
                        <p className="text-body text-center md:text-start text-sm mt-3 mx-auto md:mx-0 block wrap-break-word">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-6 min-w-0">

                        {/* Quick Links */}
                        <div className="min-w-0">
                            <h2 className="text-lg font-semibold text-heading mb-3">
                                Quick Links
                            </h2>
                            <ul className="text-body space-y-2">
                                <li>
                                    <Link to="/" className="hover:underline">
                                        হোম
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        সম্পর্কে
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline">
                                        যোগাযোগ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="min-w-0">
                            <h2 className="text-lg font-semibold text-heading mb-3">
                                যোগাযোগ তথ্য
                            </h2>
                            <ul className="text-body space-y-2">
                                <li>
                                    <Link to="/facebook" className="hover:text-heading">
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/instagram" className="hover:text-heading">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/linkedin" className="hover:text-heading">
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-default pt-4 text-center text-sm text-body">
                    © ২০২৬ সেবক
                </div>

            </div>
        </footer >
    );
};

export default Footer;