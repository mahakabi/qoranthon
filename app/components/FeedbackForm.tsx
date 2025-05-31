"use client";
import React, { useState } from "react";

const FeedbackBox = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const subject = "استفسار أو ملاحظة من المستخدم";
    const body = `${message}`;
    window.location.href = `mailto:ayathon@parmg.sa?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      className="bg-secondary py-10 px-6 md:px-28 flex flex-col sm:flex-row justify-between items-center gap-6"
      dir="rtl"
    >
      <div className="w-full sm:w-1/3 text-primary text-center sm:text-right">
        <p className="text-base md:text-2xl font-bold">نسعد بتواصلكم معنا</p>
        <p className="text-sm md:text-lg mt-2">
          إذا كان لديك أي استفسار أو ملاحظة، لا تتردد في مراسلتنا
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full sm:w-2/3">
        {/* <label className="block mb-2 text-primary font-semibold">رسالتك</label> */}
        <textarea
          className="w-full border border-gray-300 bg-white text-primary rounded-3xl px-4 py-3 focus:outline-none focus:ring-0.5 focus:ring-gray/70 placeholder-gray/70"
          rows={2}
          required
          placeholder="اكتب رسالتك هنا..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="bg-primary text-secondary py-2 px-6 rounded-3xl hover:bg-opacity-90 transition"
          >
            إرسال
          </button>
        </div>
      </form>
    </section>
  );
};

export default FeedbackBox;
