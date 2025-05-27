"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-16 px-6 bg-primary sm:py-20 md:py-24 lg:py-32 sm:px-10 md:px-16 lg:px-24"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center text-secondary "
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        نبــذة
      </motion.h2>

      <motion.div
        className="w-16 sm:w-20 md:w-24 h-0.5 bg-secondary rounded-full mb-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl text-center text-secondary "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
      >
        حدث تقني تنافسي يجمع نخبة من المبدعين والمبتكرين في مجالات متعددة بهدف
        تطوير حلول مبتكرة تعزز تجربة مستخدمي تطبيقات القرآن الكريم في قراءة
        وتدبر وتدارس الآيات
      </motion.p>
    </section>
  );
};

export default About;
