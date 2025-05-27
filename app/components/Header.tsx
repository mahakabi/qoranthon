"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            className={`flex items-center w-full py-3 px-4 sm:px-10 ${isScrolled ? "bg-secondary" : "bg-transparent"} fixed top-0 z-50 transition-all duration-300 ease-in-out rounded-b-lg`}
        >
            <div className="relative w-full">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center">
                        <Link href="https://ayathon.tech/auth/register">
                            <motion.button
                                className="text-sm md:text-md lg:text-md bg-primary text-white flex items-center transition-all rounded-3xl px-5 py-2.5"
                                whileHover={{ scale: 1.1 }}
                            >
                                التسجيـل
                            </motion.button>
                        </Link>
                    </div>

                    <div className="sm:hidden flex items-center">
                        <button
                            className="text-white text-2xl"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
                        </button>
                    </div>

                    <nav className={`hidden sm:flex items-center gap-6 font-medium ${isScrolled ? "text-gray-800" : "text-white"}`}>
                        <Link href="#about" className="hover:text-primary">نبذة</Link>
                        <Link href="#goals" className="hover:text-primary">الأهداف</Link>
                        <Link href="#tracks" className="hover:text-primary">المسارات</Link>
                        <Link href="#timeline" className="hover:text-primary">الخط الزمني</Link>
                        <Link href="#faq" className="hover:text-primary">الأسئلة الشائعة</Link>
                    </nav>

                    <div className="flex items-center">
                        <Link href="/">
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                                <Image
                                    src={isScrolled ? "/logo.png" : "/logo-scrolled.png"}
                                    alt="logo"
                                    width={80}
                                    height={80}
                                    className="w-15 md:w-20"
                                />
                            </motion.div>
                        </Link>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="sm:hidden flex flex-col items-center mt-4 space-y-4">
                        <Link href="#about" className="text-white hover:text-primary">نبذة</Link>
                        <Link href="#goals" className="text-white hover:text-primary">الأهداف</Link>
                        <Link href="#tracks" className="text-white hover:text-primary">المسارات</Link>
                        <Link href="#timeline" className="text-white hover:text-primary">الخط الزمني</Link>
                        <Link href="#faq" className="text-white hover:text-primary">الأسئلة الشائعة</Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
