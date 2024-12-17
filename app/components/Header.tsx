"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`flex items-center w-full py-3 px-4 sm:px-10 ${isScrolled ? "bg-white " : "bg-transparent"
                } fixed top-0 z-50 transition-all duration-300 ease-in-out`}
        >
            <div className="relative w-full">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center">
                        <motion.button
                            className="bg-[#1c5d34] hover:bg-[#366f4c] text-white flex items-center transition-all rounded-3xl px-5 py-2.5"
                            whileHover={{ scale: 1.1 }}
                        >
                            شارك في الهاكاثون
                        </motion.button>
                    </div>

                    <nav className={`flex items-center space-x-6 font-medium ${isScrolled ? "text-gray-800" : "text-white"
                        }`}>
                        <Link href="#about" className="hover:text-[#2c7444] p-4">
                            نبذة
                        </Link>
                        <Link href="#goals" className="hover:text-[#2c7444]">
                            الأهداف
                        </Link>
                        <Link href="#tracks" className="hover:text-[#2c7444]">
                            المسارات
                        </Link>
                        <Link href="#timeline" className="hover:text-[#2c7444]">
                            الخط الزمني
                        </Link>
                        <Link href="#faq" className="hover:text-[#2c7444]">
                            الأسئلة الشائعة
                        </Link>




                    </nav>

                    <div className="flex items-center">
                        <Link href="/">
                            <motion.img
                                src="./logo.png"
                                alt="logo"
                                className="w-20"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
