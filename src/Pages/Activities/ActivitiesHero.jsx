import BGImg from '../../assets/ActivityBanner.png';
const ActivitiesHero = () => {
    return (
        <div className="relative z-10">
            {/* background image + gradient overlay */}
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${BGImg})`,
                }}
            ></div>

            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(135deg, rgba(69,125,0,0.85), rgba(189,86,2,0.85))",
                }}
            ></div>

            {/* content */}
            <section className="relative flex flex-col justify-center items-center text-white px-4 py-16 min-h-[35vh] md:min-h-[50vh] text-center">

                <p className="text-lg md:text-xl text-white/80 mb-3 tracking-wide">
                    “আমাদের কার্যক্রম”
                </p>

                <h1 className="text-3xl md:text-5xl font-semibold max-w-3xl bg-linear-to-r from-white to-white/70 text-transparent bg-clip-text">
                    মানুষের পাশে দাঁড়ানোর অঙ্গীকারে আমরা নিয়মিত বিভিন্ন সামাজিক ও মানবিক কার্যক্রম পরিচালনা করে থাকি।
                </h1>

                <p className="text-white/80 max-w-2xl mt-5 md:mt-8 leading-relaxed">
                    সেবক (SEBOK) প্রতিষ্ঠালগ্ন থেকেই সমাজের বিভিন্ন স্তরের মানুষের কল্যাণে কাজ করে যাচ্ছে। আমাদের কার্যক্রমগুলো মানুষের প্রয়োজন অনুযায়ী পরিকল্পিত এবং বাস্তবায়িত হয়, যাতে করে দ্রুত ও কার্যকর সহায়তা প্রদান করা সম্ভব হয়।
                </p>

            </section>
        </div>
    );
};

export default ActivitiesHero;