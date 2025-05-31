import { FaTrophy } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";

const Prizes = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="py-12 bg-gray-100 ">
      <div className=" flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-primary mb-6">
          الجوائز
        </h2>
        <motion.div
          className="w-16 sm:w-20 md:w-24 h-0.5 bg-secondary rounded-full mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <p className="text-md md:text-xl lg:text-xl text-center text-primary mb-10 md:mb-24 px-9 ">
          جوائز مقدمة تصل قيمتها إلى ١٠٠٬٠٠٠{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1200"
              fill="currentColor"
              className="inline-block align-middle text-primary w-4 h-6"
            >
              <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
              <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
            </svg>
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-18">
          <div
            className={`order-1 md:order-2 bg-white p-12 rounded-2xl shadow-lg text-center transform md:-translate-y-12 lg:-translate-y-12 transition duration-300 ease-in-out ${
              hovered === 2 ? "scale-105" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-4">
              <FaTrophy className="text-primary text-7xl md:text-8xl  mx-auto" />
            </div>
            <h3 className="text-base md:text lg:text-2xl text-gray-800 mb-2">
              المركز الأول
            </h3>
            <p className="text-sm md:text-xl lg:text-xl text-primary">
              ٥٠٬٠٠٠{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 1200"
                  fill="currentColor"
                  className="inline-block align-middle text-primary w-4 h-6"
                >
                  <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
                  <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
                </svg>
              </span>
            </p>
          </div>

          <div
            className={`order-2 md:order-1 bg-white p-12 rounded-2xl shadow-lg text-center transform transition duration-300 ease-in-out ${
              hovered === 1 ? "scale-105" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-4">
              <FaTrophy className="text-secondary text-7xl md:text-8xl mx-auto" />
            </div>
            <h3 className="text-base md:text-2xl lg:text-2xl text-gray-800 mb-2">
              المركز الثاني
            </h3>
            <p className="text-sm md:text-xl lg:text-xl text-primary">
              ٣٠٬٠٠٠{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 1200"
                  fill="currentColor"
                  className="inline-block align-middle text-primary w-4 h-6"
                >
                  <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
                  <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
                </svg>
              </span>
            </p>
          </div>

          <div
            className={`order-3 md:order-3 bg-white p-12 rounded-2xl shadow-lg text-center transform transition duration-300 ease-in-out ${
              hovered === 3 ? "scale-105" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-4">
              <FaTrophy className="text-tertiary text-7xl md:text-8xl  mx-auto" />
            </div>
            <h3 className="text-base md:text-2xl lg:text-2xl text-gray-800 mb-2">
              المركز الثالث
            </h3>
            <p className="text-sm md:text-xl lg:text-xl text-primary">
              ٢٠٬٠٠٠{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 1200"
                  fill="currentColor"
                  className="inline-block align-middle text-primary w-4 h-6"
                >
                  <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
                  <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
