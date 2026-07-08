
const FounderCard = ({ founder }) => {
    const { img, designation, birth_place, description, name, description_2 } = founder
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 mb-10">

            {/* Image */}
            <div className="md:w-1/3 w-full h-105 md:h-auto">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="md:w-2/3 p-6 flex flex-col justify-center">

                {/* Name */}
                <h2 className="text-2xl font-bold text-[#457d00] mb-1">
                    {name}
                </h2>

                {/* Designation */}
                <p className="text-[#bd5602] font-semibold mb-2">
                    {designation}
                </p>

                {/* Birth Place */}
                <p className="text-sm text-gray-500 mb-3">
                    📍 {birth_place}
                </p>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-5">
                    {description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                    {description_2}
                </p>
            </div>
        </div>
    );
};

export default FounderCard;