import { Link } from "react-router";


const Footer = () => {
    return (
        <footer className="bg-neutral-primary-soft">
            <div className="max-w-7xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                    {/* Logo + Description */}
                    <div className="md:col-span-3">
                        <h2 className="text-2xl font-semibold text-heading mb-3">
                            সেবক (SEBOK)
                        </h2>
                        <p className="text-body text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 gap-8">

                        {/* Quick Links */}
                        <div>
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
                        <div>
                            <h2 className="text-lg font-semibold text-heading mb-3">
                                যোগাযোগ তথ্য
                            </h2>
                            <ul className="text-body space-y-2">
                                <li><Link to="/facebook" className="hover:text-heading">
                                    Facebook
                                </Link></li>
                                <li><Link to="/instagram" className="hover:text-heading">
                                    Instagram
                                </Link></li>
                                <li><Link to="/linkedin" className="hover:text-heading">
                                    LinkedIn
                                </Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-default pt-4 text-center text-sm text-body">
                    © ২০২৬ সেবক
                </div>

            </div>
        </footer>

    );
};

export default Footer;
