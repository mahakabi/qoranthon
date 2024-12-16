"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2025-02-20T00:00:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>


            <div className="relative z-10">
                <motion.h1
                    className="text-4xl sm:text-6xl font-bold text-white mb-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    آيــاتثـون
                </motion.h1>
                <motion.p
                    className="text-lg sm:text-xl text-gray-300 mb-8"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    (وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ)
                </motion.p>
                <motion.p
                    className="text-sm text-white mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    الوقت المتبقي على إغلاق التسجيل
                </motion.p>
                <motion.div
                    className="flex gap-4 text-green-800 text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <div className="flex flex-col items-center bg-white rounded-md p-3 shadow-md">
                        <span>{timeLeft.days}</span>
                        <span className="text-sm">يوم</span>
                    </div>
                    <div className="flex flex-col items-center bg-white rounded-md p-3 shadow-md">
                        <span>{timeLeft.hours}</span>
                        <span className="text-sm">ساعة</span>
                    </div>
                    <div className="flex flex-col items-center bg-white rounded-md p-3 shadow-md">
                        <span>{timeLeft.minutes}</span>
                        <span className="text-sm">دقيقة</span>
                    </div>
                    <div className="flex flex-col items-center bg-white rounded-md p-3 shadow-md">
                        <span>{timeLeft.seconds}</span>
                        <span className="text-sm">ثانية</span>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default Hero;
