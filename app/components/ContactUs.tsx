import React from 'react';

const ContactUs = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">تواصل معانا</h2>
                <p className="text-lg text-gray-600 mb-8">لديك سؤال أو استفسار؟ نحن هنا لمساعدتك! يمكنك الاتصال بنا عبر النموذج التالي.</p>

                <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl">
                    <form action="#" method="POST">
                        <div className="flex mb-4 space-x-4 flex-col md:flex-row">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="أدخل اسمك"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div className="flex-3">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="أدخل بريدك الإلكتروني"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="اكتب رسالتك هنا"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#366f4c] text-white py-2 px-8 rounded-lg"
                            >
                                إرسال
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
