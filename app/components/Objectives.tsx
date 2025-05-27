"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Objectives = () => {
  return (
    <section id="goals" className="py-20 bg-white px-6">
      <div className="mx-auto text-center flex flex-col items-center justify-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-primary mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          الأهداف
        </motion.h2>
        <motion.div
          className="w-16 sm:w-20 md:w-24 h-0.5 bg-secondary rounded-full mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
          {[
            {
              img: "/ux-design.png",
              title: "تحسين تجربة المستخدم لتطبيقات القرآن الكريم",
            },
            {
              img: "/group-idea.png",
              title:
                "استكشاف آفاق جديدة لتطوير أفكار مبتكرة في مجال تطبيقات القرآن الكريم",
            },
            {
              img: "/book.png",
              title:
                "تعزيز الوعي بأهمية دمج المعرفة الشرعية مع الخبرات التقنية",
            },
          ].map((goal, index) => (
            <motion.div
              key={index}
              className="bg-primary p-8 rounded-lg shadow-xl border border-tertiary transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <motion.div
                className="flex justify-center mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Image
                  src={goal.img}
                  alt="Goal Icon"
                  className="w-12 h-12"
                  width={48}
                  height={48}
                  priority
                />
              </motion.div>
              <p className="text-sm md:text-xl text-white">{goal.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
