import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>সেবক | হোম</title>
            </Helmet>
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
                        🏠 Home Page Coming Soon
                    </h1>

                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                        আমাদের ওয়েবসাইটের হোম পেজ বর্তমানে প্রস্তুত করা হচ্ছে।
                        খুব শীঘ্রই সম্পূর্ণ নতুন ডিজাইনে এটি প্রকাশ করা হবে।
                    </p>

                </div>
            </section>
        </div>
    );
};

export default Home;