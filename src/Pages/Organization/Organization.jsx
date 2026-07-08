import { Helmet } from "react-helmet-async";
import OrgHero from "./OrgHero";
import FounderImg from '../../assets/Founder.png';
import FOSImg from '../../assets/Founding_Organizing_Secretary.png';
import GSImg from '../../assets/General_Secratery.png';
import FounderCard from "./FounderCard";
import { ComingSoonNotice } from "./ComingSoonNotice";

const Organization = () => {

    const founders = [
        {
            id: 1,
            name: "সুমন রাজবংশী",
            designation: "প্রতিষ্ঠাতা সভাপতি",
            img: `${FounderImg}`,
            birth_place: "হাটিপাড়া, মানিকগঞ্জ সদর, মানিকগঞ্জ",
            description: "জীবনের নানা প্রতিকূলতা, সংগ্রাম এবং কঠোর পরিশ্রমের মধ্য দিয়ে নিজেকে প্রতিষ্ঠিত করেছেন। বর্তমানে একটি স্বনামধন্য ম্যানুফ্যাকচারিং প্রতিষ্ঠানের মেকানিক্যাল বিভাগে গুরুত্বপূর্ণ দায়িত্ব পালন করছেন। মানুষের দুঃখ-কষ্ট কাছ থেকে দেখার অভিজ্ঞতা থেকেই সমাজের কল্যাণে কাজ করার স্বপ্ন নিয়ে ‘সেবক (SEBOK)’ প্রতিষ্ঠা করেন এবং প্রতিষ্ঠাতা সভাপতি হিসেবে নেতৃত্ব দিয়ে যাচ্ছেন।"
        },
        {
            id: 2,
            name: "কৃষ্ণ রাজবংশী",
            designation: "প্রতিষ্ঠাতা সাধারণ সম্পাদক",
            img: `${GSImg}`,
            birth_place: "হাটিপাড়া, মানিকগঞ্জ সদর, মানিকগঞ্জ",
            description: "জীবিকার প্রয়োজনে প্রবাস জীবন অতিবাহিত করার পর দেশে ফিরে ব্যবসার মাধ্যমে নিজেকে সফল উদ্যোক্তা হিসেবে প্রতিষ্ঠিত করেন। জীবনের অভিজ্ঞতা তাকে মানুষের বাস্তবতা সম্পর্কে গভীর ধারণা দিয়েছে। মানবসেবা ও সামাজিক উন্নয়নের লক্ষ্য নিয়ে ‘সেবক (SEBOK)’ প্রতিষ্ঠায় গুরুত্বপূর্ণ ভূমিকা পালন করেন এবং সংগঠনের কার্যক্রম পরিচালনায় সক্রিয় রয়েছেন।"
        },
        {
            id: 3,
            name: "শ্রীকৃষ্ণ রাজবংশী",
            designation: "প্রতিষ্ঠাতা সাংগঠনিক সম্পাদক",
            img: `${FOSImg}`,
            birth_place: "হাটিপাড়া, মানিকগঞ্জ সদর, মানিকগঞ্জ",
            education: "ফাইন্যান্স বিষয়ে স্নাতক ও স্নাতকোত্তর, বর্তমানে ICMAB-এ অধ্যয়নরত",
            profession: "সহকারী ব্যবস্থাপক (হিসাব ও অর্থ বিভাগ), একটি আইটি সফটওয়্যার প্রতিষ্ঠান",
            description: "শিক্ষা, পেশাগত দক্ষতা এবং সামাজিক দায়বদ্ধতার সমন্বয়ে ‘সেবক (SEBOK)’ প্রতিষ্ঠায় গুরুত্বপূর্ণ ভূমিকা পালন করেন। প্রতিষ্ঠাতা সাংগঠনিক সম্পাদক হিসেবে সংগঠনের সাংগঠনিক শক্তি বৃদ্ধি এবং কার্যক্রম সম্প্রসারণে কাজ করে যাচ্ছেন।"
        }
    ];
    return (
        <div className="">
            <Helmet>
                <title>সেবক | সংগঠন</title>
            </Helmet>
            <OrgHero />
            <div className="max-w-7xl mx-auto">
                {
                    founders?.map(founder => <FounderCard key={founder.id} founder={founder} />)
                }
            </div>
            <ComingSoonNotice />

        </div>
    );
};

export default Organization;