// Testimonial data
export const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'This platform has been incredibly helpful in getting me started with yoga.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane',
    position: 'Customer',
    message:
      'I completed all 6 levels of yoga, and the chatbot helped solve many of my questions along the way.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      "It's surprising how this platform uses AI and machine learning to make yoga so enjoyable. Honestly, it's really impressive!",
  },
];

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination } from 'swiper';

// Import icons
import { FaQuoteLeft } from 'react-icons/fa'; // Quote icon

// Import Next.js Image component
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            {/* Avatar, name, position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/* Avatar */}
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt='' />
                </div>
                {/* Name */}
                <div className='text-lg'>{person.name}</div>
                {/* Position */}
                <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
              </div>
            </div>

            {/* Vertical line divider */}
            <div className='w-[1px] bg-gray-300 h-[100px] mx-4'></div>

            {/* Quote and message */}
            <div className='flex-1 flex flex-col justify-center relative xl:pl-20'>
              {/* Quote icon */}
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
              </div>
              {/* Message */}
              <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
