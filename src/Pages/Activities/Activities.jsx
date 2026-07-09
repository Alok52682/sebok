import { Helmet } from "react-helmet-async";
import ActivitiesHero from "./ActivitiesHero";

const Activities = () => {


    return (
        <div className="">
            <Helmet>
                <title>সেবক | কার্যক্রম</title>
            </Helmet>
            <ActivitiesHero />

            <div className="max-w-4xl mx-auto text-center mt-10">

                {/* Main Name */}
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    আমাদের কার্যক্রম সম্পর্কে
                </h2>

                {/* Sub tagline */}
                <p className="text-gray-600 tracking-wide mb-4">
                    মানবতার সেবায় আমাদের ধারাবাহিক উদ্যোগসমূহ
                </p>

                {/* Quote */}
                <p className="text-lg md:text-xl italic text-gray-700 border-l-4 border-green-500 pl-4 inline-block">
                    “সেবক (SEBOK) প্রতিষ্ঠালগ্ন থেকেই সমাজের বিভিন্ন স্তরের মানুষের কল্যাণে কাজ করে যাচ্ছে। আমাদের প্রতিটি কার্যক্রম মানুষের প্রয়োজনকে কেন্দ্র করে পরিকল্পিত এবং বাস্তবায়িত হয়। আমরা বিশ্বাস করি, ছোট ছোট উদ্যোগই বড় পরিবর্তন আনতে পারে।”
                </p>

            </div>
        </div>
    );
};

export default Activities;