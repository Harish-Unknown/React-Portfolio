import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-[-20px]'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                As a final-year student and full-stack developer, I am deeply committed to honing my skills in React, Tailwind CSS, HTML, CSS, JavaScript, and Node.js. With a creative flair and a passion for problem-solving, I strive to build intuitive and visually appealing web solutions. Eager to embark on new challenges, I approach each project with enthusiasm and a determination to deliver high-quality results.
                </p>
                <br />
                <p className='text-xl'>
                Driven by a relentless pursuit of excellence, I immerse myself in the latest web development trends and techniques. With a solid foundation in both frontend and backend technologies, I thrive in dynamic environments where I can contribute my expertise to impactful projects. My goal is to continuously expand my knowledge and expertise, pushing the boundaries of what can be achieved in the ever-evolving field of web development.
                </p>
            </div>
        </div>
    )
}

export default About
