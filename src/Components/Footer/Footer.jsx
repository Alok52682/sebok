import { Link } from "react-router";
import Logo from "../../assets/sebok_logo.png";

const Footer = () => {
    return (
        <footer className="bg-neutral-primary-soft overflow-x-hidden bg-gray-50">
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
                            সেবক (SEBOK) একটি অলাভজনক, অরাজনৈতিক ও অসাম্প্রদায়িক স্বেচ্ছাসেবী সামাজিক সংগঠন, <br />
                            মানবকল্যাণ, শিক্ষা, স্বাস্থ্যসেবা ও সমাজের উন্নয়নে নিরলসভাবে কাজ করে যাচ্ছে।
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-6 min-w-0">

                        {/* Quick Links */}
                        <div className="min-w-0">
                            <h2 className="text-lg text-[#457d00] font-semibold text-heading mb-3">
                                গুরুত্বপূর্ণ লিংকসমূহ
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
                                {/* <li>
                                    <Link to="/contact" className="hover:underline">
                                        যোগাযোগ
                                    </Link>
                                </li> */}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="min-w-0">
                            <h2 className="text-lg text-[#457d00] font-semibold text-heading mb-3">
                                যোগাযোগ তথ্য
                            </h2>
                            <ul className="text-body space-y-2">
                                <li>
                                    <a href="https://www.facebook.com/facebook.comsebok" className="hover:text-heading" target="_blank">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <Link to="###" className="hover:text-heading">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@sebokinfo" className="hover:text-heading" target="_blank">
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-[#bd5602] text-[#bd5602] pt-4 text-center text-sm text-body">
                    © ২০২৬ সেবক
                </div>

            </div>
        </footer >
    );
};

export default Footer;