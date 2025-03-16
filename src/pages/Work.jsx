import CompaniesLogo from '@/components/my-components/CompaniesLogo';
import { WorkflowIcon } from 'lucide-react';
import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from "react-icons/fa";

import variants from '@/utils/variants';
import { motion } from "framer-motion";
import useScrollDirection from '@/utils/useScrollDirect';

import workData from '../data/work.json'


function Work() {
    const { works, work_title_one, work_title_two } = workData.my_work;
    const [isHovered, setIsHovered] = useState(false);

    // ScrollDirection and should Animate
    const scrollDirection = useScrollDirection();
    const shouldAnimate = scrollDirection === "down";

    return (
        <>
            <div>
                <div className='heading'>
                    <motion.h1
                        initial="hidden"
                        animate={shouldAnimate ? 'visible' : false}
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                    >
                        {work_title_one}
                    </motion.h1>
                    <motion.h1
                        initial="hidden"
                        animate={shouldAnimate ? 'visible' : false}
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                    >
                        {work_title_two}
                    </motion.h1>
                </div>

                <div className='work-timeline'>
                    <VerticalTimeline lineColor='#353334'>
                        {works.map((work, i) => (
                            <VerticalTimelineElement
                                key={work.id ? work.id : i}
                                className="vertical-timeline-element--work custom-timeline-element"
                                contentStyle={{
                                    background: '#151312',
                                    color: '#988E8E',
                                    border: '1px solid #988e8e40',
                                    marginBottom: "20px"
                                }}
                                contentArrowStyle={{ borderRight: '7px solid #353334' }}
                                date={<span className={`custom-date ${isHovered ? 'hovered' : ''}`}>{work.experience}</span>}
                                dateClassName="custom-dates"
                                iconStyle={{
                                    background: '#151312',
                                    color: '#988E8E',
                                }}
                                icon={
                                    <FaBriefcase
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    />
                                }
                            >
                                <h1 className="vertical-timeline-element-title hero">{work.position}</h1>
                                <h4 className="vertical-timeline-element-subtitle hero-des">{work.company_name}</h4>
                                <div>
                                    <ul className='ul'>
                                        {work.roles_and_responsibliies.map((role, i) => (
                                            <motion.li
                                                key={i}
                                                initial="hidden"
                                                animate={shouldAnimate ? 'visible' : false}
                                                whileInView="visible"
                                                viewport={{ amount: 0.1 }}
                                                variants={variants("bottom", 0.2)}
                                            >
                                                {role}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}

export default Work;