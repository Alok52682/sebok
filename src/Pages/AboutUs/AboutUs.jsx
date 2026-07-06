import { Helmet } from "react-helmet-async";
import AboutHero from "./AboutHero";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>সেবক | আমাদের সম্পর্কে</title>
            </Helmet>
            <AboutHero />
            <section className="py-16 px-6 md:px-12 lg:px-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            আমরা কেন আলাদা?
                        </h2>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            সেবক একটি প্ল্যাটফর্ম যেখানে আমরা মানুষের প্রয়োজন অনুযায়ী
                            দ্রুত এবং নির্ভরযোগ্য সেবা পৌঁছে দেই। আমাদের লক্ষ্য হচ্ছে
                            প্রযুক্তির মাধ্যমে মানুষের জীবন সহজ করা।
                        </p>

                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                দ্রুত সেবা প্রদান
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                বিশ্বস্ত ও নিরাপদ
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                ২৪/৭ সাপোর্ট
                            </li>
                        </ul>

                        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition">
                            আরও জানুন
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src="/about.png"
                            alt="about"
                            className="w-full max-w-md"
                        />
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutUs;