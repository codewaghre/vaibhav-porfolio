import React, { useState } from 'react'
import { Slider } from "6pp";
import {
    FaArrowLeftLong,
    FaArrowRightLong
} from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";
import variants from '@/utils/variants';
import { motion } from "framer-motion";

import projectData from '../data/project.json'

import coverImg from '../assets/img-5.svg'



function ProjectDetails() {

    const { project_data } = projectData.projects
    const { id } = useParams()

    // Find the project data based on the `id`
    const project = project_data.find((data) => data.id === parseInt(id));

    // If no project is found, display a message
    if (!project) {
        return <div>Project not found</div>;
    }

    const { project_name, project_desciption, project_links, tech_tools, banners } = project;


    const [projectInfo, setProjectInfo] = useState(true)
    const [spec, setSpec] = useState(false)
    const [tool, setTool] = useState(true)
    const handleClickOne = () => {
        setProjectInfo(!projectInfo)
    }

    const handleClickTwo = () => {
        setSpec(!spec)
    }

    const handleClickThree = () => {
        setTool(!tool)
    }


    return (
        <>
            <main className='project-details-container'>
                <div className='details-contaier'>

                    <div className='left-info'>
                        <div className='img'>
                            <Slider
                                showThumbnails
                                objectFit="cover"
                                NextIcon={<FaArrowRightLong />}
                                PrevIcon={<FaArrowLeftLong />}
                                autoplay={true}
                                autoplayInterval={500}
                                onClick={() => setCarouselOpen(true)}
                                images={banners || [coverImg, coverImg, coverImg, coverImg]}
                            />
                        </div>
                    </div>

                    <div className='right-info'>
                        <div className='project-info'>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='setArrow'>
                                <span onClick={handleClickOne}> <IoMdArrowDropright /></span>
                                <h1 >  {project_name}   </h1>
                            </motion.div>



                            {projectInfo ? (
                                <>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.1 }}
                                        variants={variants("bottom", 0.2)}
                                        className='info'
                                    >
                                        <p>{project_desciption}</p>

                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ amount: 0.1 }}
                                            variants={variants("bottom", 0.2)}
                                            className='links'
                                        >
                                            {project_links.map((link, index) => (
                                                <div key={index}>
                                                    {link.origin} :-
                                                    <Link className='link' to={link.link || link.live || link.youtube}>
                                                        {link.link || link.live || link.youtube}
                                                    </Link>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                </>
                            ) : "No Data Found !"}


                            {/* <div className='setArrow'>
                                <span onClick={handleClickTwo}> <IoMdArrowDropright /></span>
                                <h1 >  Specifications   </h1>
                            </div>

                            {spec ? (<>
                                <div className='specs'>


                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features</li>
                                    </ul>
                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features,</li>
                                    </ul>
                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features,</li>
                                    </ul>
                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features,</li>
                                    </ul>
                                    <ul>
                                        <li>The minimum requirements necessary for a web app include a user interface, database, security features,</li>
                                    </ul>
                                </div></>) : ""} */}


                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='setArrow'>
                                <span onClick={handleClickThree}> <IoMdArrowDropright /></span>
                                <h1 >  Tech and Tools   </h1>
                            </motion.div>

                            {

                                tool ? (
                                    <>

                                        <div className='tech'>
                                            <div className='tech-box'>
                                                {Object.values(tech_tools).map((tool, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{ amount: 0.1 }}
                                                        variants={variants("bottom", 0.2)}
                                                    >
                                                        {tool}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                    </>
                                ) : " No Data Found !"
                            }


                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default ProjectDetails