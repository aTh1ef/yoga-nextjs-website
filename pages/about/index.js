import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import starImage from '../about/images/star 2.png';
import { fadeIn } from '../../variants';

const About = () => {
    const [circles, setCircles] = useState([]);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateRandomCircles();
        setFixedStars();
        injectStyles();
        return () => removeStyles();
    }, []);

    const generateRandomCircles = () => {
        const numCircles = 40;
        const newCircles = Array.from({ length: numCircles }, () => ({
            size: Math.random() * 20 + 10,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
        }));
        setCircles(newCircles);
    };

    const setFixedStars = () => {
        setStars([
            { size: 20, top: '20%', left: '5%', rotation: 0 },
            { size: 20, top: '80%', right: '5%', rotation: 0 }
        ]);
    };

    const injectStyles = () => {
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    };

    const removeStyles = () => {
        const styleSheet = document.querySelector('style[data-about-styles]');
        if (styleSheet) document.head.removeChild(styleSheet);
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-primary/60 p-4 relative overflow-hidden'>
            <BackgroundElements circles={circles} stars={stars} starImage={starImage} />
            
            <motion.h1
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center'
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: '0.05em',
                    color: '#ff0000',  // Setting the text color to red
                    fontWeight: 'bold',  // Making the text bold
                }}
            >
                About Us.
            </motion.h1>
            
            <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='shadow-lg rounded-lg p-6 md:p-8 max-w-sm md:max-w-md lg:max-w-lg w-full'
                style={{ 
                    backgroundColor: 'rgba(34, 34, 34, 0.8)',
                    color: 'white',
                    zIndex: 1,
                    backdropFilter: 'blur(5px)'
                }}
            >
                <p className='mb-6 text-sm md:text-base leading-relaxed'>
                    This project was developed by <span className='font-bold text-red-400'>Ateef Hussain Sheikh</span> and includes features such as a live AI model for yoga assistance using PoseNet, p5.js, ml5.js, an AI health calculator, an AI Chatbot powered by the Gemini API and also a link to Tim Senesi's YouTube channel where you can learn yoga through his videos as part of a secret collaboration with him. The website is built using Next.js and Tailwind CSS.
                </p>

                <ContactInfo />
            </motion.div>
        </div>
    );
};

const BackgroundElements = ({ circles, stars, starImage }) => (
    <>
        {circles.map((circle, index) => (
            <div
                key={index}
                className='absolute rounded-full pulsating-bubble'
                style={{
                    width: `${circle.size}px`,
                    height: `${circle.size}px`,
                    top: circle.top,
                    left: circle.left,
                    animationDelay: `${circle.delay}s`,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    opacity: 0.7,
                }}
            />
        ))}
        {stars.map((star, index) => (
            <div
                key={index}
                className='absolute rotating-star'
                style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    top: star.top,
                    left: star.left,
                    right: star.right,
                    backgroundImage: `url(${starImage})`,
                    backgroundSize: 'cover',
                    transform: `rotate(${star.rotation}deg)`,
                    animation: 'rotateStar 5s infinite linear',
                    zIndex: 0,
                }}
            />
        ))}
        <div className='absolute left-0 md:left-10 bottom-0 md:bottom-10 pendulum-left' />
        <div className='absolute right-0 md:right-10 bottom-0 md:bottom-10 pendulum-right' />
    </>
);

const ContactInfo = () => (
    <div className='space-y-4'>
        <div>
            <h2 className='text-lg md:text-xl font-semibold text-red-400 flex items-center'>
                <FaPhone className='mr-2' />
                Phone:
            </h2>
            <p className='text-sm md:text-base'>+91 9164747590</p>
        </div>
        <div>
            <h2 className='text-lg md:text-xl font-semibold text-red-400 flex items-center'>
                <FaEnvelope className='mr-2' />
                Email:
            </h2>
            <p className='text-sm md:text-base'>ateefksa@gmail.com</p>
        </div>
    </div>
);

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

@keyframes swingLeft {
    0%, 100% { transform: rotate(-30deg); }
    50% { transform: rotate(30deg); }
}

@keyframes swingRight {
    0%, 100% { transform: rotate(30deg); }
    50% { transform: rotate(-30deg); }
}

.pulsating-bubble {
    animation: pulsate 2s infinite alternate ease-in-out, float 5s infinite;
}

@keyframes pulsate {
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(1.5); opacity: 0.3; }
}

@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}

.pulsating-bubble:nth-child(odd) {
    animation-duration: 6s, 6s;
}

.pulsating-bubble:nth-child(even) {
    animation-duration: 7s, 7s;
}

.rotating-star {
    animation: rotateStar 5s infinite linear;
}

@keyframes rotateStar {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.pendulum-left, .pendulum-right {
    width: 20px;
    height: 200px;
    background-color: red;
    border-radius: 10px;
    transform-origin: top;
}

.pendulum-left {
    animation: swingLeft 3s infinite ease-in-out;
}

.pendulum-right {
    animation: swingRight 3s infinite ease-in-out;
}

@media (max-width: 768px) {
    .pendulum-left, .pendulum-right {
        height: 100px;
    }
}
`;

export default About;