import React, { useState } from 'react'
import useScreenWidth from '@/utils/useScreeWidth';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import variants from '@/utils/variants';
import { motion } from "framer-motion";
import ToolsTwo from '../components/my-components/ToolsTwo';
import ToolOne from '@/components/my-components/ToolOne';
import useScrollDirection from '@/utils/useScrollDirect';


import tools from '../data/tools.json'


function Tools() {


    const { tools_title_one, tools_title_two } = tools.tech_tools
    const [visibleImages, setVisibleImages] = useState(18);

    //  below code :- Show More and Show Les
    // calulate this screen pixel screen (like Phone, Pad )
    const isMobile = useScreenWidth();

    const handleShowMore = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 9);
    };

    const handleShowLess = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages - 9);
    }


    // ScrollDirection and should Animate
    const scrollDirection = useScrollDirection();
    const shouldAnimate = scrollDirection === "down";


    return (
        <main>
            <div className='heading'>
                <motion.h1
                    initial="hidden"
                    animate={shouldAnimate ? 'visible' : false}
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={variants("bottom", 0.2)}
                >{tools_title_one}</motion.h1>
                <motion.h1
                    initial="hidden"
                    animate={shouldAnimate ? 'visible' : false}
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={variants("bottom", 0.2)}
                >{tools_title_two}</motion.h1>
            </div>


            {/* tool two */}
            {/* <ToolsTwo visibleImages={visibleImages} /> */}

            {/* tool One  */}
            <ToolOne visibleImages={visibleImages} />



            {/* Show More Button hide */}

            {/* <div className='show-more'>

                <h1 onClick={handleShowMore}>
                    <FaChevronDown />
                </h1>


                {visibleImages && visibleImages > 9
                    ? (
                        <>
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                                className='up' onClick={handleShowLess}>
                                <FaChevronUp />
                            </motion.h1>
                        </>
                    ) : ""
                }

            </div> */}

        </main >
    )
}

export default Tools




