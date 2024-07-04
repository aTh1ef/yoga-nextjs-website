// Components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// Framer Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
    return (
        <div className='h-full bg-primary/38 py-36 flex items-center'>
            {/* Background Circles */}
            <Circles />
            
            {/* Main Container */}
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-x-8'>
                    
                    {/* Text Section */}
                    <div className='text-center xl:w-[30vw] lg:text-left mb-4 xl:mb-0 flex flex-col'>
                        <motion.h2
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className='h2 xl:mt-8'
                        >
                            Extra Services<span className='text-accent'>.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className='mb-4 max-w-[400px] mx-auto lg:mx-0'
                        >
                            This section highlights our additional services, including a yoga chatbot for answering your yoga-related queries, an AI health calculator to assess your health status, and also a link to Tim Senesi&apos;s YouTube channel where you can learn yoga through his videos and guidance.
                        </motion.p>
                    </div>

                    {/* Slider Section */}
                    <motion.div
                        variants={fadeIn('down', 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className='w-full xl:max-w-[65%]'
                    >
                        <ServiceSlider />
                    </motion.div>
                </div>
            </div>
            
            {/* Bulb Component */}
            <Bulb />
        </div>
    );
};

export default Services;
