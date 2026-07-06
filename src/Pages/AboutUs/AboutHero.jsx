import bannerBg from '../../assets/About_hero_banner.png';
const AboutHero = () => {
    return (
        <div
            className="hero min-h-[35vh] md:min-h-[50vh]"
            style={{
                backgroundImage:
                    `url(${bannerBg})`,
            }}
        >
            <div className="hero-overlay bg-black/70"></div>

            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold text-[#bd5602]">আমরা আসলে কে?</h1>

                    <p className="mb-5 text-sm md:text-lg">
                        "সেবক (SEBOK) একটি স্বেচ্ছাসেবী সামাজিক সংগঠন, যেখানে আমরা একসাথে কাজ করি সমাজের অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানোর জন্য। মানবিক মূল্যবোধ, সহানুভূতি এবং দায়িত্ববোধকে ধারণ করে আমরা শিক্ষা, স্বাস্থ্যসেবা ও সামাজিক উন্নয়নে নিরলসভাবে কাজ করে যাচ্ছি।"
                    </p>

                </div>
            </div>
        </div>
    );
};

export default AboutHero;