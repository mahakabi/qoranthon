"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EmergingTechnologies = () => {
    return (
        <section className="py-16 sm:py-20 bg-gray-100 px-6">
            <div className="mx-auto px-4 sm:px-8 lg:px-16 text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c5d34] mb-8 sm:mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                     التقنيات الناشئة
                </motion.h2>

                <p className="text-base sm:text-md md:text-xl text-gray-700 mb-6 sm:mb-8">
                    بعد اختيار التحدي يتم العمل على تقديم حلول باستخدام إحدى التقنيات التالية:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <motion.div
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <Image
                                src="/microchip.png"
                                alt="AI Icon"
                                width={64}
                                height={64}
                                className="w-12 sm:w-16 h-12 sm:h-16"
                            />
                        </div>
                        <p className="text-sm md:text-xl font-medium text-green-900">
                            الذكاء الاصطناعي
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <Image
                                src="/virtual-reality.png"
                                alt="Extended Reality Icon"
                                width={64}
                                height={64}
                                className="w-12 sm:w-16 h-12 sm:h-16"
                            />
                        </div>
                        <p className="text-sm md:text-xl font-medium text-green-900">
                            تقنيات الواقع الممتد
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <Image
                                src="/gamification.png"
                                alt="Gamification Icon"
                                width={64}
                                height={64}
                                className="w-12 sm:w-16 h-12 sm:h-16"
                            />
                        </div>
                        <p className="text-sm md:text-xl font-medium text-green-900">
                            التحديات (Gamification)
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <Image
                                src="/ui.png"
                                alt="UX Design Icon"
                                width={64}
                                height={64}
                                className="w-12 sm:w-16 h-12 sm:h-16"
                            />
                        </div>
                        <p className="text-sm md:text-xl font-medium text-green-900">
                            تصميم الواجهات وتجربة المستخدم
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EmergingTechnologies;
