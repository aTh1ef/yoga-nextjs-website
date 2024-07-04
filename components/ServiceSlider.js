import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { FreeMode, Pagination } from 'swiper';

// Import icons
import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
    RxArrowTopRight,
} from "react-icons/rx";

// Define service data
const serviceData = [
    {
        icon: <RxDesktop />,
        title: 'Yoga Chatbot',
        description: 'Ask your yoga queries here for expert guidance and support.',
        link: 'https://ai-chatbot-pi-virid.vercel.app/', // Add the link to the development section
    },
    {
        icon: <RxReader />,
        title: 'AI Health Calculator',
        description: 'Get sugesstions to improve your health here ',
        link: 'https://ai-calculator-sigma.vercel.app/',
    },
    {
        icon: <RxCrop />,
        title: 'Learn Yoga',
        description: 'Learn yoga for a healthier, more balanced life.',
        link: 'http://127.0.0.1:5504/learn.html',
    },
];

const ServiceSlider = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            }}
            freeMode
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className='h-[240px] sm:h-[340px]'
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <a href={item.link || '#'} target="_blank" rel="noopener noreferrer">
                        <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                            {/* Icon */}
                            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                            
                            {/* Title and description */}
                            <div className='mb-8'>
                                <div className='mb-2 text-lg'>{item.title}</div>
                                <p className='max-w-[350px] leading-normal'>{item.description}</p>
                            </div>
                            
                            {/* Arrow icon */}
                            <div className='text-3xl'>
                                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ServiceSlider;
