"use client";
import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-manrope text-center font-bold text-[#1c5d34] leading-[3.25rem]">
                        الأسئلة الشائعة
                    </h2>
                </div>

                <div className="accordion-group bg-white rounded-xl" data-accordion="default-accordion">
                    {[
                        {
                            question: "ما هو هاكاثون آياتــثون؟",
                            answer:
                                "آياتــثون هو حدث تقني تنافسي يجمع نخبة من المبدعين والمبتكرين لتطوير حلول مبتكرة تعزز تجربة مستخدمي تطبيقات القرآن الكريم في قراءة وتدبر الآيات. يستخدم المشاركون أحدث التقنيات مثل الذكاء الاصطناعي والواقع المعزز لإطلاق ابتكارات تخدم كتاب الله."
                        },
                        {
                            question: "ما هي أهداف الهاكاثون؟",
                            answer:
                                "• تحسين تجربة المستخدم لتطبيقات القرآن الكريم.<br />• ابتكار أفكار تقنية جديدة لخدمة القرآن الكريم.<br />• دمج المعرفة الشرعية مع الخبرات التقنية.<br />• بناء مجتمع متكامل من المطورين والمصممين والباحثين.<br />• تعزيز روح المنافسة في تقديم أفضل الحلول.<br />• اكتشاف ودعم الكفاءات المتميزة في البرمجة، التصميم، والدراسات الشرعية."
                        },
                        {
                            question: "من هم المؤهلون للمشاركة؟",
                            answer:
                                "• الطلاب، الأكاديميون، المبرمجون، المصممون، المطورون، القادة، والمبدعون.<br />• الذكور والإناث بين أعمار 19 و65 عاماً.<br />• فرق العمل المقيمة في المملكة العربية السعودية.<br />• من يمتلك مهارات التفكير النقدي والإبداعي."
                        },
                        {
                            question: "هل يجب أن يكون في الفريق خبير تقني؟",
                            answer:
                                "يُوصى بوجود عضو تقني واحد على الأقل في الفريق، ولكن إذا لم يكن لديكم خبير تقني، سنساعدكم في إضافة أحد التقنيين المتاحين للفريق."
                        },
                        {
                            question: "هل إجادة البرمجة شرط أساسي؟",
                            answer:
                                "لا، ليس من الضروري أن تكون خبيرًا في البرمجة للمشاركة. يمكنك التقديم والمشاركة بفريق متكامل حيث يمكن أن يضم مصممين، مطورين، وأي شخص آخر يمتلك المهارات المطلوبة."
                        }
                    ].map((faq, index) => (
                        <div
                            className="accordion ml-20 mr-20 py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-green-50 accordion-active:bg-green-50 bg-gray-100"
                            key={index}
                        >
                            <button
                                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-green-600 accordion-active:font-medium accordion-active:text-green-600"
                                onClick={() => handleToggle(index)}
                            >
                                <h5>{faq.question}</h5>
                                <svg
                                    className={`text-gray-500 transition duration-500 group-hover:text-green-600 accordion-active:text-green-600 ${activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div className="accordion-content w-full px-0 overflow-hidden">
                                    <p
                                        className="text-base text-gray-900 leading-6"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
