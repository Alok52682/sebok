import { Helmet } from "react-helmet-async";
import AboutHero from "./AboutHero";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>সেবক | আমাদের সম্পর্কে</title>
            </Helmet>
            <AboutHero />
            <div className="m-8 max-w-7xl md:mx-auto md:my-15 text-xl p-2 md:p-4 rounded md:rounded-3xl bg-gray-50 shadow-lg md:shadow-xl ">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#457d00] underline">সংগঠনের পরিচিতি</h1>
                <p className="mt-8"><span className="font-bold text-[#bd5602]">সেবক (SEBOK)</span> একটি অলাভজনক, অরাজনৈতিক ও অসাম্প্রদায়িক স্বেচ্ছাসেবী সামাজিক সংগঠন, যা মানবকল্যাণে নিবেদিত। এটি গড়ে উঠেছে একদল উদ্যমী, সচেতন ও মানবিক মূল্যবোধে বিশ্বাসী তরুণদের উদ্যোগে, যারা সমাজের উন্নয়নে সক্রিয় ভূমিকা রাখতে আগ্রহী।</p>
                <p className="mt-8">বর্তমান সমাজে অসহায়, সুবিধাবঞ্চিত ও দরিদ্র মানুষের সংখ্যা এখনও উল্লেখযোগ্য। এই বাস্তবতা উপলব্ধি করে সেবক (SEBOK) প্রতিষ্ঠিত হয়েছে এমন একটি প্ল্যাটফর্ম হিসেবে, যেখানে সবাই একসাথে মিলিত হয়ে মানুষের পাশে দাঁড়াতে পারে।</p>
                <p className="mt-8">আমরা বিশ্বাস করি, একটি সুন্দর সমাজ গড়ে তুলতে শুধু সরকারের প্রচেষ্টা যথেষ্ট নয়—এর জন্য প্রয়োজন সাধারণ মানুষের অংশগ্রহণ, সচেতনতা এবং সহমর্মিতা। এই বিশ্বাস থেকেই আমাদের পথচলা।।</p>
                <p className="mt-8">সেবক (SEBOK) শুরু থেকেই বিভিন্ন মানবিক ও সামাজিক কার্যক্রমের মাধ্যমে মানুষের জীবনে ইতিবাচক পরিবর্তন আনার চেষ্টা করে যাচ্ছে এবং ভবিষ্যতেও এই ধারাবাহিকতা বজায় রাখার লক্ষ্যে কাজ করে যাবে।</p>

            </div>

            {/* nature of the org */}
            <div className="m-8 max-w-7xl md:mx-auto md:my-15 text-xl p-4 rounded md:rounded-3xl bg-gray-50 shadow-lg md:shadow-xl ">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#457d00] text-center underline">সংগঠনের প্রকৃতি</h1>
                <p className="mt-8"><span className="font-bold text-[#bd5602]">সেবক (SEBOK)</span> তার কার্যক্রম পরিচালনা করে কিছু মৌলিক নীতির উপর ভিত্তি করে, যা সংগঠনটির স্বচ্ছতা, গ্রহণযোগ্যতা এবং কার্যকারিতা নিশ্চিত করে।</p>
                <div className="md:grid grid-cols-2 gap-10 mask-y-from-100% my-10">
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-[#bd5602]">অলাভজনক (Non-profit)</h2>
                            <p>সেবক (SEBOK) কোনো ধরনের ব্যক্তিগত লাভ বা বাণিজ্যিক উদ্দেশ্যে পরিচালিত হয় না। সংগঠনের সকল কার্যক্রম মানবসেবা, সমাজকল্যাণ এবং উন্নয়নমূলক উদ্যোগের উপর ভিত্তি করে পরিচালিত হয়।</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-[#bd5602]">স্বেচ্ছাসেবী (Voluntary)</h2>
                            <p>এই সংগঠনের মূল শক্তি হলো এর স্বেচ্ছাসেবীরা। দেশের বিভিন্ন স্থান থেকে আগ্রহী ও মানবিক মানুষ স্বতঃস্ফূর্তভাবে এতে যুক্ত হয়ে সমাজসেবামূলক কাজে অংশগ্রহণ করে।</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-[#bd5602]">অরাজনৈতিক (Non-political)</h2>
                            <p>সেবক (SEBOK) সম্পূর্ণভাবে একটি অরাজনৈতিক সংগঠন। এটি কোনো রাজনৈতিক মতাদর্শ বা দলের সাথে সম্পৃক্ত নয় এবং নিরপেক্ষতা বজায় রেখে কাজ করে।</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-[#bd5602]">সমাজকল্যাণমূলক (Social-welfare)</h2>
                            <p>সেবক (SEBOK) একটি সমাজকল্যাণমূলক সংগঠন, যা অসহায় ও সুবিধাবঞ্চিত মানুষের উন্নয়নে বিভিন্ন মানবিক কার্যক্রম পরিচালনা করে।</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* sort history to the org */}
            <div className="m-8 max-w-7xl md:mx-auto md:my-15 text-xl p-2 md:p-4 rounded md:rounded-3xl bg-gray-50 shadow-lg md:shadow-xl ">

                <h1 className="text-4xl md:text-5xl text-center md:text-end font-extrabold text-[#457d00] underline">
                    সংক্ষিপ্ত ইতিহাস
                </h1>

                <p className="mt-8 md:text-end">
                    <span className="font-bold text-[#bd5602]">সেবক (SEBOK)</span>-এর যাত্রা শুরু হয় একটি ছোট উদ্যোগ থেকে,
                    যেখানে কিছু উদ্যমী তরুণ সমাজের অসহায় মানুষের পাশে দাঁড়ানোর লক্ষ্যে একত্রিত হয়।
                </p>

                <p className="mt-8 md:text-end">
                    শুরুর দিকে সীমিত সম্পদ ও সুযোগ থাকা সত্ত্বেও, তাদের আন্তরিকতা ও দৃঢ় মনোবলের মাধ্যমে
                    বিভিন্ন ছোট ছোট উদ্যোগ গ্রহণ করা হয়। ধীরে ধীরে এই উদ্যোগগুলো মানুষের মাঝে সাড়া ফেলে
                    এবং সংগঠনটি একটি সুসংগঠিত রূপ লাভ করে।
                </p>

                <p className="mt-8 md:text-end">
                    সময়ের সাথে সাথে নতুন সদস্য যুক্ত হয়, কার্যক্রমের পরিধি বৃদ্ধি পায় এবং
                    সেবক (SEBOK) একটি বিশ্বস্ত ও মানবিক সংগঠন হিসেবে পরিচিতি লাভ করে।
                </p>

            </div>

            {/* vision  */}

            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-4xl md:text-5xl text-[#457d00] font-bold mb-6 underline">
                    লক্ষ্য ও উদ্দেশ্য
                </h2>

                <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                    সেবক (SEBOK)-এর মূল লক্ষ্য হলো একটি মানবিক, সচেতন এবং সহমর্মী সমাজ গড়ে তোলা,
                    যেখানে সবাই একে অপরের পাশে দাঁড়াবে।
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {[
                        "সমাজের অসহায় ও দরিদ্র মানুষের পাশে দাঁড়ানো",
                        "শিক্ষা সহায়তার মাধ্যমে শিক্ষার প্রসার ঘটানো",
                        "স্বাস্থ্যসেবা ও রক্তদানের মাধ্যমে মানুষের জীবন রক্ষা করা",
                        "দুর্যোগকালীন সময়ে জরুরি সহায়তা প্রদান করা",
                        "পরিবেশ সংরক্ষণ ও সচেতনতা বৃদ্ধি করা",
                        "সামাজিক সচেতনতা বৃদ্ধি এবং মানবিক মূল্যবোধ জাগ্রত করা"
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-md transition"
                        >
                            <div className="flex items-center"><span className="text-green-600 text-lg">🎯</span>
                                <p className="mt-2 text-gray-700">{item}</p></div>
                        </div>
                    ))}

                </div>
                <div>
                    <p className="my-12 text-gray-600 max-w-3xl mx-auto">
                        আমরা বিশ্বাস করি, ছোট ছোট উদ্যোগ একত্রিত হয়ে বড় পরিবর্তন আনতে পারে।
                        সেই বিশ্বাস থেকেই{" "}
                        <span className="font-semibold text-green-600">সেবক (SEBOK)</span> প্রতিনিয়ত
                        কাজ করে যাচ্ছে একটি উন্নত ও সুন্দর সমাজ গড়ার লক্ষ্যে।
                    </p>
                </div>



            </div>


        </>
    );
};

export default AboutUs;