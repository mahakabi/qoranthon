import { motion } from "framer-motion";
import React from "react";
// import Image from "next/image";

const Partners = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-6 bg-primary sm:py-20 md:py-24 lg:py-32 sm:px-10 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-secondary mb-6">
        شركاؤنا
      </h2>
      <div className="flex justify-center mt-1">
        <motion.div
          className="w-16 sm:w-20 md:w-24 h-0.5 bg-secondary rounded-full mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-secondary mb-8">
        نرحب بشركاء النجاح المساهمين في تحقيق أهدافنا المشتركة
      </p>

      {/* <div className="flex space-x-8 justify-center items-center">
        <Image
          src="/masar.png"
          alt="شعار الشركة 1"
          width={360}
          height={96}
          objectFit="contain"
          priority={true}
        />
        <Image
          src="/masar.png"
          alt="شعار الشركة 2"
          width={360}
          height={96}
          objectFit="contain"
          priority={true}
        />
      </div> */}
    </section>
  );
};

export default Partners;
