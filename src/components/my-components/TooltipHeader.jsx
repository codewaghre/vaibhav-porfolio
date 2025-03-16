import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { FiHome } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoTools } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { FaRegFolder } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { MdForwardToInbox } from 'react-icons/md';
import variants from '@/utils/variants';
import { motion } from "framer-motion";


function TooltipHeader() {


    return (
        <div className='main-tooltip'>
            <motion.div
                className='tooltip-container'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={variants("top", 0.1)}
            >
                <div className='tooltip'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link to="/" style={{ color: "white" }} >
                                    <div className='icon'>
                                        <FiHome />
                                    </div>

                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={14}>
                                <p className='popup'>Home</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link to="/projects" style={{ color: "white" }} >
                                    <div className='icon'>
                                        <FaRegFolder />
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={14}>
                                <p className='popup'>Projects</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link to="/work" style={{ color: "white" }}>
                                    <div className='icon'>
                                        <FaLaptopCode />
                                    </div>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={14}>
                                <p className='popup'>Work</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link to="/tools" style={{ color: "white" }}>
                                    <div className='icon'>
                                        <GoTools />
                                    </div>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={14}>
                                <p className='popup'>Tools</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>


                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link to="/blog" style={{ color: "white" }} key="blog-link">
                                    <div className='icon'>
                                        <TfiWrite />
                                    </div>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={14}>
                                <p className='popup'>Thoughts</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>


                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link to="/contact" style={{ color: "white" }}>
                                    <div className='icon'>
                                        <MdForwardToInbox />
                                    </div>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={14}>
                                <p className='popup'>Contact Me</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </div>
            </motion.div>
        </div>
    )
}

export default TooltipHeader