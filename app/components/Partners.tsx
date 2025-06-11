import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Partners = () => {
  const partners: { alt: string; src: string }[] = [
    {
      alt: "الهيئة العامة للأوقاف",
      src: "/partners/awqaf.jpg",
    },

    {
      alt: "arts expos",
      src: "/partners/art.png",
    },

    {
      alt: "socialtech",
      src: "/partners/socialtech.jpeg",
    },
    {
      alt: "مسار",
      src: "/partners/masar-color.png",
    },
    {
      alt: "الاعلام",
      src: "/partners/image.png",
    },
  ];
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

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 px-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 lg:w-60 lg:h-24 rounded-lg overflow-hidden"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              className="object-cover"
              // priority={index < 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
