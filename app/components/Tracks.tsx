"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineUser, AiOutlineMenu, AiOutlineCustomerService, AiOutlineBook } from "react-icons/ai";

const tracks = [
    {
        track: "المجال الأول",
        title: "الحفظ",
        description:
            "مسار يُركز على دعم المستخدمين في عملية حفظ القرآن الكريم بأساليب مبتكرة تتوافق مع احتياجاتهم الفردية وتسهم في تعزيز الاستمرارية والمراجعة.",
        icon: <AiOutlineMenu />,
    },
    {
        track: "المجال الثاني",
        title: "التلاوة",
        description:
            "يعنى هذا المسار بتطوير تجربة المستخدم أثناء تلاوة القرآن الكريم من حيث الدقة والجودة، مع التركيز على تحسين أداء القراءة والتجويد.",
        icon: <AiOutlineCustomerService />,
    },
    {
        track: "المجال الثالث",
        title: "التفسير",
        description:
            "يهتم هذا المسار بتقديم معاني وتفسير الآيات بطريقة مُيسّرة تُساعد على فهم النصوص الشرعية وتدبرها.",
        icon: <AiOutlineBook />,
    },
    // {
    //     track: "المجال الرابع",
    //     title: "البحث",
    //     description:
    //         "مسار يُعنى بتسهيل عملية البحث عن الآيات أو المواضيع داخل النص القرآني والتفاسير المرتبطة به بطرق دقيقة وسريعة.",
    //     icon: <AiOutlineSearch />,
    // },
    {
        track: "المجال الرابع",
        title: "المجتمع القرآني",
        description:
            "يهدف هذا المسار إلى تعزيز التواصل بين المستخدمين من خلال إنشاء منصات تفاعلية تُشجّع على تبادل المعرفة القرآنية، وتشكل بيئة مشجعة للتعلم والمشاركة.",
        icon: <AiOutlineUser />,
    },
    // {
    //     track: "المجال السادس",
    //     title: "الأطفال",
    //     description:
    //         "مسار يُخصص لتطوير تجارب تعليمية تتناسب مع احتياجات الأطفال، تُساعدهم على التعرف على القرآن الكريم وتدارسه بطريقة شيّقة.",
    //     icon: <AiOutlineTeam />,
    // },
    // {
    //     track: "المجال السابع",
    //     title: "ذوو الاحتياجات الخاصة",
    //     description:
    //         "يهتم هذا المسار بتطوير تطبيقات أو ميزات تُسهل وصول ذوي الاحتياجات الخاصة إلى القرآن الكريم وتفاعُلهم معه.",
    //     icon: <AiOutlineFullscreenExit />,
    // },
];

const Tracks = () => {
    return (
        <motion.section
            id="tracks"
            className="py-16 px-6 bg-gray-100 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-2xl sm:text-5xl font-extrabold text-center mb-6">
                مسارات الهاكاثون
            </h2>
            <motion.div
                className="flex justify-center"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="w-24 h-1 bg-[#1c5d34]"></div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mx-9">
                {tracks.map((track, index) => (
                    <motion.div
                        key={index}
                        className="relative group bg-white shadow-lg rounded-lg p-6 sm:p-8 overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-center mb-6">
                            <div className="text-[#1c5d34] p-4 rounded-full inline-block text-4xl">
                                {track.icon}
                            </div>
                        </div>
                        <h3 className="text-sm sm:text-base text-[#1c5d34] mb-4 text-center group-hover:text-[#1c5d34] transition-colors duration-300">
                            {track.title}
                        </h3>
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center bg-[#1c5d34] text-white text-center p-6 opacity-0 group-hover:opacity-100 group-hover:rounded-lg transition-opacity duration-300 rounded-lg"
                        >
                            <p className="leading-relaxed text-xs sm:text-sm">{track.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Tracks;
