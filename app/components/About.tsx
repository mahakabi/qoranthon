"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            id="about"
            className="flex flex-col items-center justify-center py-16 px-6 bg-gray-100 text-gray-800 sm:py-20 md:py-24 lg:py-32 sm:px-10 md:px-16 lg:px-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                نبــذة
            </motion.h2>

            <motion.div
                className="w-16 sm:w-20 md:w-24 h-1 bg-[#366f4c] mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
            />

            <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg sm:max-w-2xl md:max-w-3xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                حدث تقني تنافسي يجمع نخبة من المبدعين والمبتكرين في مجالات متعددة بهدف تطوير حلول مبتكرة
                تعزز تجربة مستخدمي تطبيقات القرآن الكريم في قراءة وتدبر وتدارس الآيات. يُعد آياتثون منصة تفاعلية
                تُمكّن المشاركين من توظيف التقنيات الحديثة مثل{" "}
                الذكاء الاصطناعي والواقع المعزز لتقديم ابتكارات تسهم
                في خدمة <span className="text-[#366f4c] font-semibold">كتاب الله</span>.
            </motion.p>
        </motion.section>
    );
};

export default About;
