"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  BrainCircuit,
  Gamepad2,
  MonitorSmartphone,
} from "lucide-react";

const technologies = [
  {
    title: "الذكاء الاصطناعي",
    icon: <BrainCircuit className="w-8 h-8 text-primary mb-4" />,
    delay: 0.2,
  },
  {
    title: "تقنيات الواقع الممتد",
    icon: <Sparkles className="w-8 h-8 text-primary mb-4" />,
    delay: 0.4,
  },
  {
    title: "التحديات (Gamification)",
    icon: <Gamepad2 className="w-8 h-8 text-primary mb-4" />,
    delay: 0.6,
  },
  {
    title: "تصميم الواجهات وتجربة المستخدم",
    icon: <MonitorSmartphone className="w-8 h-8 text-primary mb-4" />,
    delay: 0.8,
  },
];

const EmergingTechnologies = () => {
  return (
    <section className="py-20 px-6 sm:px-10 bg-primary text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-secondary mb-6 sm:mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        التقنيات الناشئة
      </motion.h2>

      {/* <p className="text-md md:text-lg text-secondary max-w-2xl mx-auto mb-12">
                بعد اختيار المسار يتم العمل على تقديم حلول باستخدام إحدى التقنيات التالية
            </p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-secondary rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: tech.delay }}
          >
            <div className="flex flex-col items-center">
              {tech.icon}
              <p className="text-md sm:text-lg font-semibold text-primary">
                {tech.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EmergingTechnologies;
