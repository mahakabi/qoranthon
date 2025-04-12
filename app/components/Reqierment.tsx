import { motion } from 'framer-motion';
import React from 'react'

const Reqierment = () => {
    return (
        <section className='flex flex-col items-center justify-center py-16 px-6 bg-secondary sm:py-20 md:py-24 lg:py-32 sm:px-10 md:px-16 lg:px-24'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center text-white '>
                شروط التسجيل
            </h2>
            <motion.div
                className="w-16 sm:w-20 md:w-24 h-1 bg-white/60 rounded-full mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.6 }}
            />
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-secondary mb-8'>
            </p>
        </section>
    )
}

export default Reqierment;