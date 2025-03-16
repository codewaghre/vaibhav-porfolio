import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


import { motion } from "framer-motion";
import variants from "@/utils/variants";
import useScrollDirection from "@/utils/useScrollDirect";

const coverImg = "https://images.unsplash.com/photo-1669864573166-f99a20334f46?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const BlogCarousel = ({ data }) => {


    // ScrollDirection and should Animate

    const scrollDirection = useScrollDirection();
    const shouldAnimate = scrollDirection === "down";






    // setting Object for slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        prevArrow: <PrevArrow />, // Add custom prev button
        nextArrow: <NextArrow />, // Add custom next button

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="project">
            <motion.div
                className="project-cards"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.1)}
                initial="hidden"
                animate={shouldAnimate ? 'visible' : false}
            >
                <Slider {...settings}>
                    {data.map((project, i) => (
                        <Link to={`/project-details/${project.id}`} key={project.id}>
                            <div className="card-box">
                                <div className="img-box">
                                    <img src={project.banners[0] ? project.banners[0] : coverImg} alt="card-img" />
                                </div>
                                <div className="blog-des">
                                    <h1>{project.project_name}</h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </motion.div>
        </div>
    );
};

export default BlogCarousel;






// Custom Previous Button
const PrevArrow = ({ onClick }) => (
    <button className="custom-prev" onClick={onClick}>
        <FaArrowLeft />
    </button>
);

// Custom Next Button
const NextArrow = ({ onClick }) => (
    <button className="custom-next" onClick={onClick}>
        <FaArrowRight />
    </button>
);