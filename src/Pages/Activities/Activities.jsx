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



            <section
                className="relative flex flex-col items-center justify-center text-center px-4 py-20 my-10 rounded-xl overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #457d00, #bd5602)",
                }}
            >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* content */}
                <div className="relative z-10 text-white max-w-xl">

                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                        🚧 Activities Coming Soon
                    </h1>

                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                        আমাদের কার্যক্রম সংক্রান্ত বিস্তারিত তথ্য ও আপডেট খুব শীঘ্রই এখানে প্রকাশ করা হবে।
                        অনুগ্রহ করে কিছু সময় অপেক্ষা করুন।
                    </p>

                </div>
            </section>
        </div>
    );
};

export default Activities;