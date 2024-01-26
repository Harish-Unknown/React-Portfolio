import React from 'react';
import portfolioOne from '../assets/portfolio/portfolio-1.png';
import portfolioTwo from '../assets/portfolio/portfolio-2.png';
import portfolioThree from '../assets/portfolio/portfolio-3.png';
import portfolioFour from '../assets/portfolio/portfolio-4.png';


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: portfolioOne,
            href: 'https://github.com/Harish-Unknown/Print-Wear',
            link: 'https://printwear-demo-1.netlify.app/'
        },
        {
            id: 2,
            src: portfolioTwo,
            href: 'https://github.com/Harish-Unknown/CareerPath-Visionaries',
            link: 'https://careerpath-visionaries.netlify.app/'
        },
        {
            id: 3,
            src: portfolioThree,
            href: 'https://github.com/Harish-Unknown/Travel-Site',
            link: 'https://travel-sample-1.netlify.app/'
        },
        {
            id: 4,
            src: portfolioFour,
            href: 'https://github.com/Harish-Unknown/Fyle-Assignment',
            link: 'https://fyle-assignment-git-repository.netlify.app/'
        }
    ]

    return (
        <div name="portfolio" className='py-20 bg-gradient-to-b from-black to-gray-900 w-full text-white h-full pb-[100px]'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-10 text-xl'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-16 px-12 md:px-0'>
                    {
                        portfolios.map(({ id, src, href, link }) => (
                            <div key={id} className='duration-200 hover:scale-105 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] shadow-gray-700 rounded-lg'>
                                <img src={src} alt='' className='rounded-md' />
                                <div className='flex items-center justify-center'>
                                    <a className='w-1/2 px-6 py-6 duration-200 hover:scale-105 text-center' href={link}><button>Demo</button></a>
                                    <a className='w-1/2 px-6 py-6 duration-200 hover:scale-105 text-center' href={href}><button>Code</button></a>
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
