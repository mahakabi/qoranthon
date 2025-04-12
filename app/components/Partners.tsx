import React from 'react'
import Image from 'next/image'

const Partners = () => {
    return (
        <section className='flex flex-col items-center justify-center py-16 px-6 bg-primary sm:py-20 md:py-24 lg:py-32 sm:px-10 md:px-16 lg:px-24'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center text-secondary '>
                شركاؤنا
            </h2>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-secondary mb-8'>
                نرحب بشركائنا في النجاح الذين يساهمون في تحقيق أهدافنا المشتركة.
            </p>
            <div className='overflow-hidden relative'>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 animate-scroll gap-2'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className='rounded-lg shadow-lg flex items-center justify-center'>
                            <Image src={`/logo-scrolled.png`} alt={`Partner ${index + 1}`} width={400} height={200} className='w-full h-auto' />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-scroll {
                    display: flex;
                    animation: scroll 20s linear infinite;
                }
            `}</style>
            {/* <div className='mt-12'>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-secondary'>
                    إذا كنت مهتمًا بأن تكون شريكًا لنا، فلا تتردد في التواصل معنا!
                </p>
            </div>
            <div className='mt-8'>
                <button className='bg-primary text-secondary font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-secondary hover:text-primary transition duration-300'>
                    اتصل بنا
                </button>
            </div> */}
        </section>
    )
}

export default Partners;