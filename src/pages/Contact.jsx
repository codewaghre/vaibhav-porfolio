
import React, { useState } from 'react'
import toast from 'react-hot-toast';

import variants from '@/utils/variants';
import { motion } from "framer-motion";
import useScrollDirection from '@/utils/useScrollDirect';

function Contact() {

    const scrollDirection = useScrollDirection();
    const shouldAnimate = scrollDirection === "down";

    const [formValue, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    //Handle the Chnage of form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formValue,
            [name]: value
        });
    };

    // handle the Submit event
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formValue,
            access_key: import.meta.env.VITE_EMAIL_ACCESS_KEY
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Form Submitted Successfully")
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error("Smothing Went Wrong")

            }
        } catch (error) {
            toast.error("Smothing Went Wrong")
        }
    }


    return (
        <>
            <main>
                <div className='heading'>
                    <motion.h1
                        initial="hidden"
                        animate={shouldAnimate ? 'visible' : false}
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                    >LET'S WORK</motion.h1>
                    <motion.h1
                        initial="hidden"
                        animate={shouldAnimate ? 'visible' : false}
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                    >TOGETHER</motion.h1>
                </div>

                <div className='form-container'>

                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <div className='name-email'>
                                <motion.div
                                    className='field'
                                    initial="hidden"
                                    whileInView="visible"
                                    animate={shouldAnimate ? 'visible' : false}
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.3)}
                                >
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        className='bg name'
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Enter your name...'
                                        value={formValue.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    className='field'
                                    initial="hidden"
                                    whileInView="visible"
                                    animate={shouldAnimate ? 'visible' : false}
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.2)}
                                >
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        className='bg email'
                                        type="email"
                                        id="email"
                                        placeholder='Enter your Email...'
                                        name="email"
                                        value={formValue.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                animate={shouldAnimate ? 'visible' : false}
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='field'>
                                <label htmlFor="subject">Subject:</label>
                                <input
                                    className='bg'
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder='Enter subject'
                                    value={formValue.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                animate={shouldAnimate ? 'visible' : false}
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='field'>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    className='bg'
                                    id="message"
                                    name="message"
                                    placeholder='Type your text...'
                                    value={formValue.message}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>
                            {/* submit Button */}
                            <motion.div
                                initial="hidden"
                                animate={shouldAnimate ? 'visible' : false}
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='submit'>
                                <button type="submit">Submit</button>
                            </motion.div>
                        </form>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Contact