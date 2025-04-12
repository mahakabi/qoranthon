import React, { useEffect, useState, useRef } from "react";

export default function Timeline() {
    const [activeIndex, setActiveIndex] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const timelineItems = document.querySelectorAll<HTMLElement>(".timeline-item");

        timelineItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
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
        { date: "١ يناير", status: "فتح باب التسجيل" },
        { date: "٥ يناير", status: "اغلاق فترة التسجيل" },
        { date: "١٠ يناير", status: "مراجعة الطلبات والافكار المقدمة من المشاركين" },
        { date: "١٥ يناير", status: "ارسال رسائل القبول وتاكيد الحضور من المشاركين" },
        { date: "٢٠ يناير", status: "ارسال اجندة الهاكاثون" },
        { date: "٢٥ يناير", status: "بداية الهاكاثون" },
        { date: "٣٠ يناير", status: "الحفل الختمامي واعلان النتائج" },
    ];

    return (
        <section>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center text-primary pt-12 '>
                الجدول الزمني
            </h2>
            <div id="timeline" className="timeline" ref={timelineRef}>
                <div
                    className="timeline-progress"
                    style={{ height: `${calculateProgressHeight()}px` }}
                ></div>
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${activeIndex === index ? "active" : ""} px-4`}
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
