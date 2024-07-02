import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';

// Components import
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

const testimonialData = [
    {
        project: 'Yoga Pose Detection',
        message: 'Advanced ML model for accurate yoga pose detection, enhancing practice effectiveness.',
    },
    {
        project: 'Real-time Pose Detection',
        message: 'Instant yoga pose recognition for improved user experience during practice.',
    },
    {
        project: 'Yoga Chatbot',
        message: 'Gemini API-powered chatbot offering comprehensive yoga guidance and information.',
    },
    {
        project: 'AI Health Calculator',
        message: 'BMI calculator with personalized health tips for wellness improvement.',
    },
    {
        project: 'Website Development',
        message: 'Modern, user-friendly interface using Next.js and Tailwind CSS for seamless navigation.',
    },
];

const pulseVariant = {
    pulse: {
        scale: [1, 1.03, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
};

const TestimonialSlider = () => {
    return (
        <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className='h-[300px] sm:h-[350px] md:h-[400px]'
        >
            {testimonialData.map((project, index) => (
                <SwiperSlide key={index}>
                    <motion.div
                        className='flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16'
                        variants={pulseVariant}
                        animate='pulse'
                        whileHover={{ scale: 1 }}
                    >
                        <div className='flex flex-col items-center justify-center text-center w-full sm:w-[90%] md:w-[80%] p-2 sm:p-3 md:p-4 bg-transparent border border-gray-300 rounded-lg'>
                            <div className='text-base sm:text-lg font-bold underline mb-1 sm:mb-2'>{project.project}</div>
                            <div className='text-sm sm:text-base mb-1 sm:mb-2'>{project.message}</div>
                            <FaQuoteLeft className='text-2xl sm:text-3xl md:text-4xl text-gray-300 mt-1 sm:mt-2' />
                        </div>
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const Work = () => {
    return (
        <div className='h-full bg-primary/38 py-16 sm:py-24 md:py-32 text-center'>
            {/* Background Circles */}
            <Circles />

            <div className='container mx-auto h-full flex flex-col justify-center'>
                <motion.h2
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='h2 mb-4 sm:mb-6 md:mb-8'
                >
                    Our <span className='text-accent'>work.</span>
                </motion.h2>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                >
                    <TestimonialSlider />
                </motion.div>
            </div>

            {/* Bulb Component */}
            <Bulb />
        </div>
    );
};

export default Work;
