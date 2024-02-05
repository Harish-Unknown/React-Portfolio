import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/harishkumar21/',
            style: 'rounded-tr-md',
        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Harish-Unknown',
        },
        {
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:harishshankar02@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Harish-Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    
    ];

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({id, child, href, style, download})=>(
                    // eslint-disable-next-line
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-3 ml-[-110px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                    <a href={href} download={download} target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-white'>
                        
                        {child}
                        
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks
