import Image from 'next/image';
import { motion } from 'framer-motion';

const Avatar = () => {
    return (
        <motion.div
            className='hidden xl:flex xl:max-w-none'
            animate={{
                scale: [1, 1.05, 1], // Pulsating effect with smaller pulses
            }}
            transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 4, // Slower duration for a calmer effect
            }}
        >
            <Image
                src='/ava5.png'
                width={737}
                height={678}
                alt=''
                className='translate-z-0 w-full h-full'
            />
        </motion.div>
    );
};

export default Avatar;
