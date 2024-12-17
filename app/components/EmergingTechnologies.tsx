"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EmergingTechnologies = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-[#1c5d34] mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    مسارات التقنيات الناشئة
                </motion.h2>

                <p className="text-lg text-gray-700 mb-8">
                    بعد اختيار التحدي يتم العمل على تقديم حلول باستخدام إحدى التقنيات التالية:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/microchip.png"
                                alt="AI Icon"
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                        </div>
                        <p className="text-xl font-medium text-gray-800">
                            الذكاء الاصطناعي
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/virtual-reality.png"
                                alt="Extended Reality Icon"
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                        </div>
                        <p className="text-xl font-medium text-gray-800">
                            تقنيات الواقع الممتد
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/gamification.png"
                                alt="Gamification Icon"
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                        </div>
                        <p className="text-xl font-medium text-gray-800">
                            التحديات (Gamification)
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/ui.png"
                                alt="UX Design Icon"
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                        </div>
                        <p className="text-xl font-medium text-gray-800">
                            تصميم الواجهات وتجربة المستخدم
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EmergingTechnologies;
