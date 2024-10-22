import Image from 'next/image';
import { motion } from 'framer-motion';

// Components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// Variants
import { fadeIn } from '../variants';

const Home = () => {
    return (
        <div className='bg-primary/60 h-full flex flex-col justify-center'>
            {/* Container for text */}
            <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 flex flex-col justify-center'>
                <div className='text-center flex flex-col justify-start xl:pt-20 xl:text-left h-full container mx-auto px-4 sm:px-6 lg:px-8 content-wrapper'>
                    {/* Title */}
                    <motion.h1
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h1 text-3xl sm:text-4xl lg:text-5xl'
                    >
                        Begin Your Journey <br /> With{' '}
                        <span className='text-accent'>YogaTech AI</span>
                    </motion.h1>
                    {/* Subtitle */}
                    <motion.p
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='max-w-xs sm:max-w-sm lg:max-w-xl mx-auto xl:mx-0 mb-8 sm:mb-10 lg:mb-16 text-sm sm:text-base lg:text-lg'
                    >
                        Yoga Tech AI combines advanced pose detection with personalized guidance for a tailored yoga experience. Whether you&apos;re a beginner or expert, our platform supports your practice and helps you discover the path to wellness. Let this platform be your companion on your yoga journey.
                    </motion.p>
                    {/* Projects button for all screen sizes */}
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='flex justify-center xl:justify-start z-20 relative'
                    >
                        <ProjectsBtn />
                    </motion.div>
                </div>
            </div>

            {/* Image */}
            <div className='w-full xl:w-[1200px] h-full absolute right-0 bottom-0 xl:right-[5%] xl:bottom-[20%]'>
                {/* Background image */}
                <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
            </div>

            {/* Particles container */}
            <ParticlesContainer />

            {/* Avatar */}
            <motion.div
                variants={fadeIn('up', 0.5)}
                initial='hidden'
                animate='show'
                exit='hidden'
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='w-full h-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] max-h-[300px] sm:max-h-[400px] absolute bottom-[20%] sm:bottom-[24%] right-[5%] sm:right-[8%] lg:right-[12%]'
            >
                <Avatar />
            </motion.div>

            <style jsx>{`
                .content-wrapper {
                    padding-top: 15vh;
                }

                @media (min-width: 1280px) {
                    .content-wrapper {
                        padding-top: 20vh;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;