"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaLightbulb, FaBookOpen } from "react-icons/fa";

const Objectives = () => {
    return (
        <section className="py-20 bg-[#f1f2f2]">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-[#1c5d34] mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    الأهداف
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
                    <motion.div
                        className="bg-[#1c5d34] p-8 rounded-lg shadow-xl border border-[#366f4c]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="flex justify-center mb-4">
                            <FaStar size={40} />
                        </div>
                        <p className="text-xl text-white">
                            تحسين تجربة المستخدم لتطبيقات القرآن الكريم
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-[#1c5d34] p-8 rounded-lg shadow-xl border border-[#366f4c]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="flex justify-center mb-4">
                            <FaLightbulb size={40} />
                        </div>
                        <p className="text-xl text-white">
                            استكشاف آفاق جديدة لتطوير أفكار مبتكرة في مجال تطبيقات القرآن الكريم
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-[#1c5d34] p-8 rounded-lg shadow-xl border border-[#366f4c]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div className="flex justify-center mb-4">
                            <FaBookOpen size={40} />
                        </div>
                        <p className="text-xl text-white">
                            تعزيز الوعي بأهمية دمج المعرفة الشرعية مع الخبرات التقنية
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Objectives;
