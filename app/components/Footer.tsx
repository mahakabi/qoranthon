import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-[#1c5d34] text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center space-x-4">
                        <img
                            src="./logo.png"
                            alt="Logo"
                            className="w-12"
                        />
                        <span className="text-xl font-bold">Hackathon</span>
                    </div>

                    <nav className="flex space-x-6 font-medium">
                        <Link href="#about" className="hover:text-[#2c7444]">
                            نبذة
                        </Link>
                        <Link href="#timeline" className="hover:text-[#2c7444]">
                            الخط الزمني
                        </Link>
                        <Link href="#contact" className="hover:text-[#2c7444]">
                            تواصل
                        </Link>
                    </nav>
                </div>

                <div className="my-6 border-t border-[#2c7444]"></div>

                <div className="flex flex-wrap justify-center items-center gap-4">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
                    </p>

                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#2c7444]"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#2c7444]"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#2c7444]"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
