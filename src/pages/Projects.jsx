
import useScreenWidth from "@/utils/useScreeWidth";

import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import variants from '@/utils/variants';
import useScrollDirection from "@/utils/useScrollDirect";
import { motion } from "framer-motion";

import ProjectSlider from '../components/my-components/ProjectSlider'
import projectData from '../data/project.json'



function Projects() {


    const { project_title_one, project_title_two, project_data } = projectData.projects

    const [visibleImages, setVisibleImages] = useState(9);

    // below code :- Testing Show More and show less
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

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <main>
            <div className='heading'>
                <motion.h1
                    initial="hidden"
                    animate={shouldAnimate ? 'visible' : false}
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={variants("bottom", 0.2)}
                >
                    {project_title_one}
                </motion.h1>
                <motion.h1
                    initial="hidden"
                    animate={shouldAnimate ? 'visible' : false}
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={variants("bottom", 0.2)}
                >
                    {project_title_two}
                </motion.h1>
            </div>



            <div>
                <ProjectSlider data={project_data} />
            </div>


            {/* Tesitng / future need */}
            {/* <div className='show-more'>

                <h1 onClick={handleShowMore}>
                    <FaChevronDown />
                </h1>


                {visibleImages && visibleImages > 9
                    ? (
                        <>
                            <h1 className='up' onClick={handleShowLess}>
                                <FaChevronUp />
                            </h1>
                        </>
                    ) : ""
                }

            </div> */}


        </main>
    )
}

export default Projects