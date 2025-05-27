"use client";
import React from "react";
import Header from "@/app/components/Header";

const TermsPage = () => {
    return (
        <>
            <Header title="الشروط والأحكام" description="يرجى قراءة الشروط والأحكام بعناية قبل المشاركة في الهاكثون." />
            <main className="py-16 px-6 sm:px-12 bg-gray-50 text-gray-800 min-h-screen mt-12">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-10 text-center">الشروط والأحكام</h1>

                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-primary mb-4">1. الالتزام العام</h2>
                        <ul className="list-disc list-inside space-y-2 leading-loose">
                            <li>الالتزام بجميع مواعيد وجداول الهاكثون المعلنة.</li>
                            <li>الحضور الفعلي في مقر الهاكثون طوال فترة الفعالية، بما في ذلك الجلسات التقييمية والأنشطة المصاحبة.</li>
                            <li>الالتزام بارتداء الملابس المناسبة أثناء التواجد في مقر الهاكثون.</li>
                            <li>الالتزام بالتعليمات والقرارات الصادرة من الجهة المنظمة.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-primary mb-4">2. الأفكار والمشاريع المقدمة</h2>
                        <ul className="list-disc list-inside space-y-2 leading-loose">
                            <li>يجب أن تكون أصلية وغير مقتبسة بالكامل من مشاريع سابقة.</li>
                            <li>تُقدَّم ضمن مسار واحد محدد، مع استخدام تقنية أو أكثر من التقنيات المتاحة.</li>
                            <li>تُسلَّم في الوقت المحدد وبالشكل المطلوب حسب معايير لجنة التحكيم.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-primary mb-4">3. الملكية الفكرية</h2>
                        <ul className="list-disc list-inside space-y-2 leading-loose">
                            <li>الأفكار والمشاريع المقدمة هي ملك للفرق المشاركة وللجهة المنظمة على حد سواء.</li>
                            <li>تحتفظ الجهة المنظمة بحق استخدام أو تطوير هذه المشاريع بما يخدم أهدافها العامة.</li>
                            <li>يجب أن تكون الأكواد، التصاميم، والمحتويات خالية من أي انتهاك لحقوق الملكية الفكرية.</li>
                            <li>عند استخدام برمجيات مفتوحة المصدر، يجب توفر تراخيص تسمح بالاستخدام التجاري.</li>
                            <li>يحق للجهة المنظمة استخدام أسماء وصور المشاركين في المواد التسويقية والإعلامية المرتبطة بالهاكثون.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-primary mb-4">4. التقييم والتحكيم</h2>
                        <ul className="list-disc list-inside space-y-2 leading-loose">
                            <li>تُقيَّم المشاريع وفق معايير محددة تعلنها الجهة المنظمة.</li>
                            <li>قرارات لجنة التحكيم وإدارة الهاكثون نهائية وغير قابلة للطعن أو التظلم.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-primary mb-4">5. الأخلاقيات</h2>
                        <ul className="list-disc list-inside space-y-2 leading-loose">
                            <li>يُمنع استخدام أي محتوى يخالف القيم الإسلامية أو الأعراف المجتمعية.</li>
                            <li>يُتوقع من جميع الفرق التعاون بروح الفريق واحترام جميع المشاركين.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-primary mb-4">6. التعديلات والإقصاء</h2>
                        <ul className="list-disc list-inside space-y-2 leading-loose">
                            <li>تحتفظ الجهة المنظمة بحق تعديل الجدول الزمني أو الشروط العامة مع إشعار مسبق.</li>
                            <li>يحق لها إلغاء مشاركة أي فريق يُخالف الشروط أو يخل بالضوابط التنظيمية أو الأخلاقية.</li>
                        </ul>
                    </section>
                </div>
            </main>
        </>
    );
};

export default TermsPage;
