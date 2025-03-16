import React from 'react'
import { Link } from "react-router-dom";


import img1 from '../../src/assets/img-3.svg'
import img2 from '../../src/assets/img-2.svg'

import profileBanner from '../../screenshots/projects/profile_banner.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

import { Button } from '@/components/ui/button';
import Social from '@/components/my-components/Social';

import useScrollDirection from '@/utils/useScrollDirect';
import variants from '@/utils/variants';
import { motion } from "framer-motion";

import homeData from "../../src/data/home.json"
import { downloadFile } from '@/utils/useDownloadFile';


function Home() {

    const { img, name, description } = homeData.home.card_details



    const { pagetitleone, pagetitletwo, about, years_of_expirence, completed_project, Worldwide_client } = homeData.home

    const handleDownload = () => {
        // const fileUrl = "https://github.com/codewaghre/myresume/raw/main/Abhishek%20Waghre%20v1.pdf";
        const fileUrl = `${import.meta.env.VITE_DOWNLOAD_LINK}`;
        const fileName = 'Abhishek Resume.pdf';
        downloadFile(fileUrl, fileName);
    };

    // ScrollDirection and should Animate
    const scrollDirection = useScrollDirection();
    const shouldAnimate = scrollDirection === "down";

    return (

        <>
            <main className='main-home'>
                {/* Banner */}
                <section className='main-banner'>

                    {/* Main Banner */}
                    <div className='banner'>
                        <div className='left'>
                            <div className='card'>

                                <img className='style-icon-2' src={img2} />
                                <div className='profile'>
                                    <img src={img ? img : profileBanner} alt='profle pic' />
                                </div>

                                <div className='profile-name'>
                                    <h1>{name ? name : "Vaibhav Waghre"}</h1>
                                </div>

                                <img className='style-icon-1' src={img1} />

                                <Button onClick={handleDownload} className='resume'>
                                    Resume <FaFileAlt />
                                </Button>

                                <p>
                                    {description ? description : "Resume A Software Engineer who has developed countless innovative solutions."}
                                </p>

                                {/* Social Links */}
                                <Social />

                            </div>

                        </div>

                        {/* Right Card */}
                        <div className='right'>
                            <div className='right-card'>

                                <motion.h1
                                    initial="hidden"
                                    animate={shouldAnimate ? 'visible' : false}
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.1)}
                                >
                                    {pagetitleone ? pagetitleone : "SOFTWARE"}
                                </motion.h1>

                                <motion.h1
                                    initial="hidden"
                                    animate={shouldAnimate ? 'visible' : false}
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.1)}
                                >
                                    {pagetitletwo ? pagetitletwo : "DEVELOPER"}
                                </motion.h1>

                                <motion.p
                                    initial="hidden"
                                    animate={shouldAnimate ? 'visible' : false}
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={variants("bottom", 0.1)}
                                >{about ? about : "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."}</motion.p>


                                {/* Achiement Info */}
                                <div className='achivements'>
                                    <motion.div
                                        className='achivements-card'

                                        initial="hidden"
                                        animate={shouldAnimate ? 'visible' : false}
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <h1>{'\u002B'} {years_of_expirence}</h1>
                                        <p>YEARS OF EXPERIENCE</p>
                                    </motion.div>

                                    <motion.div
                                        className='achivements-card'

                                        initial="hidden"
                                        animate={shouldAnimate ? 'visible' : false}
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <h1>{'\u002B'} {completed_project}</h1>
                                        <p>PROJECTS COMPLETED</p>
                                    </motion.div>

                                    <motion.div
                                        className='achivements-card'

                                        initial="hidden"
                                        animate={shouldAnimate ? 'visible' : false}
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <h1>{'\u002B'} {Worldwide_client}</h1>
                                        <p>WORLDWIDE CLIENTS</p>
                                    </motion.div>
                                </div>

                                {/* Work Info */}
                                <div className='info'>
                                    <motion.button
                                        initial="hidden"
                                        animate={shouldAnimate ? 'visible' : false}
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.1)}
                                    >
                                        <Link to="/contact">
                                            <p style={{ color: 'white' }}>lets Talk</p></Link>
                                    </motion.button>

                                    <motion.div
                                        className='work-info'

                                        initial="hidden"
                                        animate={shouldAnimate ? 'visible' : false}
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0)}
                                    >
                                        <Link to="/projects" style={{ color: "white" }}>
                                            <h1> My Work</h1>
                                        </Link>
                                        <h1><FaArrowRightLong /></h1>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>

    )
}

export default Home


