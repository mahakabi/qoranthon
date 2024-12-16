"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Timer = () => {
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
        <motion.div
            // className="flex flex-col items-center bg-gradient-to-r from-green-200 via-green-300 to-green-400 p-6 rounded-lg shadow-lg"
            className="flex flex-col items-center bg-[#2c7444] p-5 "
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        >
            <motion.p
                className="text-lg text-white mb-4"
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
                <div className="flex flex-col items-center bg-green-50 rounded-md p-3 shadow-md">
                    <span>{timeLeft.days}</span>
                    <span className="text-sm">يوم</span>
                </div>
                <div className="flex flex-col items-center bg-green-50 rounded-md p-3 shadow-md">
                    <span>{timeLeft.hours}</span>
                    <span className="text-sm">ساعة</span>
                </div>
                <div className="flex flex-col items-center bg-green-50 rounded-md p-3 shadow-md">
                    <span>{timeLeft.minutes}</span>
                    <span className="text-sm">دقيقة</span>
                </div>
                <div className="flex flex-col items-center bg-green-50 rounded-md p-3 shadow-md">
                    <span>{timeLeft.seconds}</span>
                    <span className="text-sm">ثانية</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Timer;
