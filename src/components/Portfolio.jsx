import React from 'react';
import portfolioOne from '../assets/portfolio/portfolio-1.png';
import portfolioTwo from '../assets/portfolio/portfolio-2.png';
import portfolioThree from '../assets/portfolio/portfolio-3.png';
import portfolioFour from '../assets/portfolio/portfolio-4.png';


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: portfolioOne
        },
        {
            id: 2,
            src: portfolioTwo
        },
        {
            id: 3,
            src: portfolioThree
        },
        {
            id: 4,
            src: portfolioFour
        }
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-900 w-full text-white h-full pb-[100px]'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-10 text-xl'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-16 px-12 md:px-0'>
                    {
                        portfolios.map(({ id, src }) => (
                            <div key={id} className='duration-200 hover:scale-105 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] shadow-gray-700 rounded-lg'>
                                <img src={src} alt='' className='rounded-md' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio
