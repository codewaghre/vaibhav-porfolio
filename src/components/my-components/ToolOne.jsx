
import React from 'react'
import variants from '@/utils/variants';
import { motion } from "framer-motion";
import useScrollDirection from '@/utils/useScrollDirect';

import tool from '../../data/tools.json'



function ToolOne({ visibleImages }) {

    const { tools } = tool.tech_tools


    // ScrollDirection and should Animate
    const scrollDirection = useScrollDirection();
    const shouldAnimate = scrollDirection === "down";


    return (
        <div className='tool-container'>
            <div className='tool'>

                {tools.slice(0, visibleImages).map((tool, i) => (

                    <motion.div
                        key={i}
                        initial="hidden"
                        animate={shouldAnimate ? 'visible' : false}
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants("bottom", 0.2)}
                        className='tool-box'>
                        <div>
                            <img src={tool.logo} />
                        </div>
                        <h1>{tool.name.length > 7 ? tool.name.slice(0, 7).concat("...") : tool.name}</h1>
                    </motion.div >


                ))}
            </div>
        </div >
    )
}

export default ToolOne