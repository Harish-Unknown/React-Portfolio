import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen py-20 w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center pt-20 h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center item-center h-full'>
                <h2 className='text-4xl sm:text-6xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 2 years of experience designing and building software.
                    Currently, I love to work on web application using technologies like ReactJs, Tailwind, Html, Css, Javascript, Bootstrap, NodeJS.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight className='ml-1' size={22}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-1/2 md:w-3/4'/>
            </div>
        </div>
    </div>
  )
}

export default Home
