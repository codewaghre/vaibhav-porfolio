import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagramSquare, FaLinkedin, } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import socialData from '../../data/home.json'
function Social() {

    const socials = socialData.home.card_details.socials;

    return (
        <>
            <div className='social'>
                {socialData && socials ? socials.map((social, index) => (
                    <Link key={index} to={social.link ? social.link : "/"} target='blank'>
                        {social.name === 'Instagram' && <FaInstagramSquare size={24} />}
                        {social.name === 'Linkedin' && <FaLinkedin size={24} />}
                        {social.name === 'Twitter' && <FaTwitter size={24} />}
                        {social.name === 'Github' && <FaGithub size={24} />}
                    </Link>
                )) : ""}
            </div>
        </>
    )
}

export default Social