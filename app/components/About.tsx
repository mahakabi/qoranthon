"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            className="flex flex-col items-center justify-center py-16 px-6 bg-gray-100 text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            
        >
            <motion.h2
                className="text-4xl sm:text-5xl font-extrabold mb-2 text-center"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                نبــذة
            </motion.h2>
            {/* <motion.p
                className="text-lg sm:text-xl text-[#366f4c] mb-1"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                (وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ)
            </motion.p> */}
            <motion.div
                className="w-24 h-1 bg-[#366f4c] mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
            />

            <motion.p
                className="text-lg sm:text-xl leading-relaxed max-w-3xl text-center"
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
