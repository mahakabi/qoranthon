"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Objectives = () => {
    return (
        <section className="py-20 bg-white">
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
                        // transition={{ duration: 1, delay: 0.2 }}
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: 0.2
                            },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.1,
                                delay: 0.1,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <Image
                                src="/ux-design.png"
                                alt="Star Icon"
                                className="w-12 h-12"
                                width={48}
                                height={48}
                            />
                        </motion.div>
                        <p className="text-lg text-white">
                            تحسين تجربة المستخدم لتطبيقات القرآن الكريم
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-[#1c5d34] p-8 rounded-lg shadow-xl border border-[#366f4c]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 1, delay: 0.4 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <Image
                                src="/group-idea.png"
                                alt="Lightbulb Icon"
                                className="w-12 h-12"
                                width={48}
                                height={48}
                            />
                        </motion.div>
                        <p className="text-lg text-white">
                            استكشاف آفاق جديدة لتطوير أفكار مبتكرة في مجال تطبيقات القرآن الكريم
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-[#1c5d34] p-8 rounded-lg shadow-xl border border-[#366f4c]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 1, delay: 0.6 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.7,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <Image
                                src="/book.png"
                                alt="Book Icon"
                                className="w-12 h-12"
                                width={48}
                                height={48}
                            />
                        </motion.div>
                        <p className="text-lg text-white">
                            تعزيز الوعي بأهمية دمج المعرفة الشرعية مع الخبرات التقنية
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Objectives;
