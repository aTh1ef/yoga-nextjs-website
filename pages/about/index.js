import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import starImage from '../about/images/star 2.png';

// Import the fadeIn variant
import { fadeIn } from '../../variants';

const About = () => {
    const [circles, setCircles] = useState([]);
    const [stars, setStars] = useState([]);

    const generateRandomCircles = () => {
        const numCirclesPerSide = 10; // 10 bubbles on each side, 20 total
        const newCircles = [];

        for (let side = 0; side < 2; side++) {
            for (let i = 0; i < numCirclesPerSide; i++) {
                newCircles.push({
                    size: Math.random() * 20 + 10,
                    top: Math.random() * 100 + '%',
                    left: side === 0 ? Math.random() * 50 + '%' : Math.random() * 50 + 50 + '%',
                    delay: Math.random() * 5,
                });
            }
        }
        setCircles(newCircles);
    };

    const setFixedStars = () => {
        const newStars = [
            { size: 20, top: '50%', left: '5%', rotation: 0 },
            { size: 20, top: '50%', right: '5%', rotation: 0 }
        ];
        setStars(newStars);
    };

    useEffect(() => {
        generateRandomCircles();
        setFixedStars();

        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-primary/60 p-8 relative'>
            {/* Background circles (now as pulsating bubbles) */}
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
                ></div>
            ))}

            {/* Stars */}
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
                ></div>
            ))}

            {/* Pendulums */}
            <div className='absolute left-10 bottom-0' style={pendulumStyleLeft}></div>
            <div className='absolute right-10 bottom-0' style={pendulumStyleRight}></div>

            {/* About Us Container */}
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='shadow-lg rounded-lg p-8 max-w-md w-full'
                style={{ 
                    backgroundColor: 'rgba(34, 34, 34, 0.8)',
                    color: 'white',
                    zIndex: 1 
                }}
            >
                <h1 className='text-2xl font-bold mb-6 text-center text-red-400'>
                    About Us
                </h1>

                <p className='mb-4'>
                    This project was developed by <span className='font-bold'>Ateef Hussain Sheikh</span>, <span className='font-bold'>Chaithanya</span>, <span className="font-bold">Disha Hebbar</span>, and <span className="font-bold">Jagannath</span> under the guidance of <span className="font-bold">Dr. Suresha D</span>. The project aims to provide different services related to yoga using new AI techniques and modern technology.
                </p>

                <div className='mb-4'>
                    <h2 className='text-lg font-semibold text-red-400'>
                        <FaPhone className='inline-block mr-2' />
                        Phone:
                    </h2>
                    <p>+1 (987) 654-3210</p>
                </div>

                <div className='mb-4'>
                    <h2 className='text-lg font-semibold text-red-400'>
                        <FaEnvelope className='inline-block mr-2' />
                        Email:
                    </h2>
                    <p>yoga@example.com</p>
                </div>
            </motion.div>
        </div>
    );
};

const pendulumStyleLeft = {
    width: '20px',
    height: '200px',
    backgroundColor: 'red',
    borderRadius: '10px',
    transformOrigin: 'top',
    animation: 'swingLeft 3s infinite ease-in-out',
};

const pendulumStyleRight = {
    width: '20px',
    height: '200px',
    backgroundColor: 'red',
    borderRadius: '10px',
    transformOrigin: 'top',
    animation: 'swingRight 3s infinite ease-in-out',
};

const styles = `
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
    0% {
        transform: scale(1);
        opacity: 0.7;
    }
    100% {
        transform: scale(1.5);
        opacity: 0.3;
    }
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
`;

export default About;
