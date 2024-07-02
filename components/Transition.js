// Import necessary dependencies
import { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

// Define transition variants for the circle transition
const circleTransitionVariants = {
  initial: {
    scale: 10, // Start with a large circle (10 times the normal size)
    opacity: 1, // Fully opaque
  },
  animate: {
    scale: 0, // Shrink to the center
    opacity: 0, // Fade out opacity
  },
  exit: {
    scale: 0, // Continue to shrink
    opacity: 0, // Fade out completely
  },
};

// Transition component
const CircleTransition = () => {
  // State to control the visibility of the transition
  const [showTransition, setShowTransition] = useState(true);

  return (
    <>
      {showTransition && (
        <motion.div
          className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#3b2d71]'
          variants={circleTransitionVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            delay: 0.2,
            duration: 1.0, // Duration for a smooth transition
            ease: 'easeInOut', // Easing function for smooth animation
          }}
          onAnimationComplete={() => {
            // Hide transition screen when animation completes
            setShowTransition(false);
          }}
        >
          {/* Circle element */}
          <motion.div
            className='bg-[#4b3792] rounded-full'
            style={{ width: '100vw', height: '100vh' }} // Full screen circle
            variants={circleTransitionVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              delay: 0.2,
              duration: 1.0,
              ease: 'easeInOut',
            }}
          ></motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CircleTransition;
