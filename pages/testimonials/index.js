// Import TestimonialSlider, Bulb, and Circles components
import TestimonialSlider from '../../components/TestimonialSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// Import Framer Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/38 py-32 text-center relative'>
      {/* Background Circles */}
      <Circles />

      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* Title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0'
        >
          What users <span className='text-accent'>say.</span>
        </motion.h2>

        {/* Slider */}
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

export default Testimonials;
