import { FaTrophy } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Prizes = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    return (
        <div className="py-12 bg-gray-100 ">
            <div className=" flex flex-col items-center justify-center">
                <h2 className="text-3xl text-center text-primary mb-6">الجوائز</h2>
                <motion.div
                    className="w-16 sm:w-20 md:w-24 h-1 bg-secondary rounded-full mb-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
                <p className="text-md md:text-xl lg:text-xl text-center text-primary mb-10 md:mb-24 px-9 ">
                    إجمالي قيمة الجوائز المقدمة 100 ألف ريال سعودي
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-18">
                    <div
                        className={`bg-white p-12 rounded-2xl shadow-lg text-center transform transition duration-300 ease-in-out ${hovered === 1 ? 'scale-105' : ''}`}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="mb-4">
                            <FaTrophy className="text-secondary text-7xl md:text-8xl mx-auto" />
                        </div>
                        <h3 className="text-base md:text-2xl lg:text-2xl text-gray-800 mb-2">
                            المركز الثاني
                        </h3>
                        <p className="text-sm md:text-xl lg:text-xl text-primary">30 ألف ريال سعودي</p>
                    </div>

                    <div
                        className={`bg-white p-12 rounded-2xl shadow-lg text-center transform md:-translate-y-12 lg:-translate-y-12 transition duration-300 ease-in-out ${hovered === 2 ? 'scale-105' : ''}`}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="mb-4">
                            <FaTrophy className="text-primary text-7xl md:text-8xl  mx-auto" />
                        </div>
                        <h3 className="text-base md:text lg:text-2xl text-gray-800 mb-2">
                            المركز الأول
                        </h3>
                        <p className="text-sm md:text-xl lg:text-xl text-primary">50 ألف ريال سعودي</p>
                    </div>

                    <div
                        className={`bg-white p-12 rounded-2xl shadow-lg text-center transform transition duration-300 ease-in-out ${hovered === 3 ? 'scale-105' : ''}`}
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="mb-4">
                            <FaTrophy className="text-secondary text-7xl md:text-8xl  mx-auto" />
                        </div>
                        <h3 className="text-base md:text-2xl lg:text-2xl text-gray-800 mb-2">
                            المركز الثالث
                        </h3>
                        <p className="text-sm md:text-xl lg:text-xl text-primary">20 ألف ريال سعودي</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prizes;
