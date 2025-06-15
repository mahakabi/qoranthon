"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getTimeRemaining = (targetDate: number) => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      setTimeLeft(getTimeRemaining(new Date("2025-06-25T21:00:00Z").getTime()));
    };

    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
        <source src="/background.webm" type="video/webm" />
        متصفحك لا يدعم عرض الفيديو.
      </video>

      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.p
          className="text-white text-xl md:text-2xl lg:text-3xl mb-4 font-quran leading-loose"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          ﴿وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ﴾
        </motion.p>

        <motion.p
          className="text-white text-sm md:text-base mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          العد التنازلي لانطلاق الهاكاثون
        </motion.p>

        <motion.div
          className="grid grid-cols-4 sm:flex gap-1 text-white text-sm md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[
            { label: "يوم", value: timeLeft.days },
            { label: "ساعة", value: timeLeft.hours },
            { label: "دقيقة", value: timeLeft.minutes },
            { label: "ثانية", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white/20 backdrop-blur rounded-md px-2 py-2 shadow-md min-w-[50px]"
            >
              <span className="text-sm md:text-2xl ">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
