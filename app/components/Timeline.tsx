import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const timelineItems =
      document.querySelectorAll<HTMLElement>(".timeline-item");

    timelineItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      if (
        rect.top < window.innerHeight / 2 &&
        rect.bottom > window.innerHeight / 2
      ) {
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateProgressHeight = () => {
    if (!timelineRef.current) return 0;

    const items = document.querySelectorAll<HTMLElement>(".timeline-item");
    const firstItem = items[0]?.getBoundingClientRect();
    const activeItem = items[activeIndex]?.getBoundingClientRect();

    if (firstItem && activeItem) {
      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      return activeItem.top - timelineTop + activeItem.height / 6;
    }
    return 0;
  };

  const events = [
    { date: "٣٠ مايو", status: "فتح باب التسجيل" },
    { date: "١٥ يونيو", status: "اغلاق فترة التسجيل" },
    {
      date: "١٧ يونيو",
      status: "مراجعة الطلبات والافكار المقدمة من المشاركين",
    },
    {
      date: "١٧ يونيو",
      status: "ارسال رسائل القبول وتأكيد الحضور من المشاركين",
    },
    { date: "١٩ يونيو", status: "الاجتماع التمهيدي - آياتثون الانطلاقه" },
    { date: "٢٦ يونيو", status: "بداية الهاكاثون" },
    { date: "٢٧ يونيو", status: "الحفل الختامي واعلان النتائج" },
  ];

  return (
    <section className="mb-16 mt-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-primary pt-12 mb-6">
        رحلة المشارك
      </h2>
      <div className="flex justify-center">
        <motion.div
          className="w-16 sm:w-20 md:w-24 h-0.5 bg-secondary rounded-full mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>

      <div id="timeline" className="timeline" ref={timelineRef}>
        <div
          className="timeline-progress"
          style={{ height: `${calculateProgressHeight()}px` }}
        ></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
              activeIndex === index ? "active" : ""
            } px-4`}
          >
            <div className="timeline-indicator"></div>
            <div className="timeline-content">
              <span className="timeline-date">{event.date}</span>
              <h3>{event.status}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
