"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const forceScrolled = !isHomePage || isScrolled;

  return (
    <header
      className={`flex items-center w-full py-3 px-4 sm:px-10 ${
        forceScrolled ? "bg-secondary" : "bg-transparent"
      } ${
        isHomePage ? "fixed" : "relative"
      } top-0 z-50 transition-all duration-300 ease-in-out rounded-b-lg`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full gap-4">
        <div className="flex items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={forceScrolled ? "/logo.png" : "/logo-scrolled.png"}
                alt="logo"
                width={80}
                height={80}
                className="w-15 md:w-20"
              />
            </motion.div>
          </Link>
        </div>

        {isHomePage && (
          <nav
            className={`hidden sm:flex items-center gap-6 font-medium ${
              forceScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link href="#about" className="hover:text-primary">
              نبذة
            </Link>
            <Link href="#goals" className="hover:text-primary">
              الأهداف
            </Link>
            <Link href="#tracks" className="hover:text-primary">
              المسارات
            </Link>
            <Link href="#timeline" className="hover:text-primary">
              الخط الزمني
            </Link>
            <Link href="#faq" className="hover:text-primary">
              الأسئلة الشائعة
            </Link>
            <Link href="/terms" className="hover:text-primary">
              الشروط والأحكام
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-4">
            <Link href="https://ayathon.tech/auth/register">
            <motion.button
              className="text-sm md:text-md lg:text-md bg-primary text-white flex items-center transition-all rounded-3xl px-5 py-2.5"
              whileHover={{ scale: 1.1 }}
            >
              التسجيل
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
