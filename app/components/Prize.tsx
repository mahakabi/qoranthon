import { FaTrophy } from 'react-icons/fa';
import { useState } from 'react';

const Prizes = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl md:mx-20 lg:mx-20 px-6">
                <h2 className="text-3xl text-center text-gray-800 mb-6">الجوائز</h2>
                <p className="sm:text-sm md:text-xl lg:text-xl text-center text-gray-600 mb-20">
                    إجمالي قيمة الجوائز المقدمة 100 ألف ريال سعودي
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-18">

                    <div
                        className={`bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out ${hovered === 1 ? 'scale-105' : ''}`}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="mb-4">
                            <FaTrophy className="text-gray-400 text-6xl mx-auto" />
                        </div>
                        <h3 className="sm:text-base md:text-2xl lg:text-2xl text-gray-800 mb-4">
                            للمركز الثاني
                        </h3>
                        <p className="sm:text-sm md:text-xl lg:text-xl text-[#366f4c]">30 ألف ريال سعودي</p>
                    </div>

                    <div
                        className={`bg-white p-6 rounded-lg shadow-lg text-center transform md:-translate-y-12 lg:-translate-y-12 transition duration-300 ease-in-out ${hovered === 2 ? 'scale-105' : ''}`}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="mb-4">
                            <FaTrophy className="text-[#366f4c] text-6xl mx-auto" />
                        </div>
                        <h3 className="sm:text-base md:text-2xl lg:text-2xl text-gray-800 mb-4">
                            للمركز الأول
                        </h3>
                        <p className="sm:text-sm md:text-xl lg:text-xl text-[#366f4c]">50 ألف ريال سعودي</p>
                    </div>

                    <div
                        className={`bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out ${hovered === 3 ? 'scale-105' : ''}`}
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="mb-4">
                            <FaTrophy className="text-gray-600 text-6xl mx-auto" />
                        </div>
                        <h3 className="sm:text-base md:text-2xl lg:text-2xl text-gray-800 mb-4">
                            للمركز الثالث
                        </h3>
                        <p className="sm:text-sm md:text-xl lg:text-xl text-[#366f4c]">20 ألف ريال سعودي</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prizes;
