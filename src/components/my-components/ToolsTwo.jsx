import React from 'react'

import variants from '@/utils/variants';
import { motion } from "framer-motion";

import tool from '../../data/tools.json'

function ToolsTwo({ visibleImages }) {
    const { tools } = tool.tech_tools
    return (
        <>
            <div div className='tools-containter' >
                <div className='tools'>
                    {tools.slice(0, visibleImages).map((tool, index) => (
                        <>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='tools-box' key={index} >
                                <div className='tools-img'>
                                    <img src={tool.logo} />
                                </div>
                                <div className='tools-des'>
                                    <h1>{tool.name}</h1>
                                    <p>{tool.description}</p>
                                </div>
                            </motion.div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ToolsTwo