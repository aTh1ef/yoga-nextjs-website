'use client';

// Components import
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// Icons import
import { BsArrowRight } from 'react-icons/bs';

// Framer import
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const initialState = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialState);
    const [status, setStatus] = useState(''); // empty, loading, success, error, incomplete

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setStatus(''); // Reset status when input changes
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus('incomplete');
            return;
        }

        setStatus('loading');

        const emailParams = {
            to_name: 'Ateef Hussain Sheikh',
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        try {
            await emailjs.send(
                'service_x9a5etr', // Replace with your EmailJS service ID
                'template_d1x4alm', // Replace with your EmailJS template ID
                emailParams,
                'CWK5qhkMCj_SVoC0X' // Replace with your EmailJS public key
            );
            setFormData(initialState);
            setStatus('success');
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
        }
    };

    return (
        <div className='h-full bg-primary/30'>
            {/* Background Circles */}
            <Circles />
            
            <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
                {/* Text & form */}
                <div className='flex flex-col w-full max-w-[700px]'>
                    
                    {/* Text */}
                    <motion.h2 
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center mb-12'>
                        Let&apos;s <span className='text-accent'>connect.</span>
                    </motion.h2>

                    {/* Status messages */}
                    <div className="text-center mb-8">
                        {status === 'loading' && <div className="status-message loading">Sending message...</div>}
                        {status === 'incomplete' && <div className="status-message error">Please fill in all the details.</div>}
                        {status === 'success' && <div className="status-message success">Your message has been sent. Thank You!</div>}
                        {status === 'error' && <div className="status-message error">Server error. Please try again.</div>}
                    </div>
                    
                    {/* Form */}
                    <motion.form 
                        onSubmit={handleSubmit}
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='flex-1 flex flex-col gap-6 w-full mx-auto'>
                        
                        {/* Input group */}
                        <div className='flex gap-x-6 w-full'>
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='Name' 
                                className='input' 
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input 
                                type='email' 
                                name='email' 
                                placeholder='Email' 
                                className='input' 
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <input 
                            type='text' 
                            name='subject' 
                            placeholder='Subject' 
                            className='input' 
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                        />
                        <textarea 
                            name='message' 
                            placeholder='Message' 
                            className='textarea' 
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        
                        {/* Button */}
                        <button 
    type='submit' 
    className='btn rounded-full border border-white/50 max-w-[120px] px-3 py-1 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group -mt-4'>
    <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-sm font-normal'>
        Let&apos;s talk
    </span>
    <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-8 group-hover:opacity-100 transition-all duration-300 absolute text-[16px]' />
</button>


                    </motion.form>
                </div>
            </div>
            
            {/* Bulb Component */}
            <Bulb />
        </div>
    );
};

export default Contact;
