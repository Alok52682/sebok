import FounderImg from '../../assets/Founder.png';
import FOSImg from '../../assets/Founding_Organizing_Secretary.png';
import GSImg from '../../assets/General_Secratery.png';

const OrgHero = () => {
    return (
        <section
            className="relative flex flex-col items-center text-white py-10 px-4 mb-10 min-h-[35vh] md:min-h-[50vh]"
            style={{
                background: "linear-gradient(135deg, #457d00, #bd5602)",
            }}
        >
            {/* Small Page Title */}
            <p className="text-lg md:text-xl text-white/80 mb-3 tracking-wide">
                “আমাদের সংগঠন”
            </p>

            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl text-center font-semibold max-w-3xl bg-linear-to-r from-white to-white/70 text-transparent bg-clip-text">
                মানবতার সেবায় সংগঠিত একদল নিবেদিত মানুষের গল্প
            </h1>

            {/* Description */}
            <p className="text-white/80 text-center text-xs md:text-base max-w-2xl mt-5 md:mt-8 leading-relaxed">
                সেবক (SEBOK) একটি সুসংগঠিত স্বেচ্ছাসেবী সংগঠন, যেখানে প্রতিষ্ঠাতা সদস্য,
                কার্যনির্বাহী কমিটি এবং সাধারণ সদস্যদের সম্মিলিত প্রচেষ্টায় সমাজের বিভিন্ন
                উন্নয়নমূলক কার্যক্রম পরিচালিত হয়।
            </p>

            {/* Images */}
            <div className="mt-12 w-full flex justify-center">
                <div className="flex gap-6 overflow-x-auto pb-6">
                    {[
                        FounderImg,
                        FOSImg,
                        GSImg,
                    ].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt=""
                            className="w-40 h-52 rounded-xl object-cover hover:-translate-y-1 transition duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrgHero;