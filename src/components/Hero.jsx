import React from 'react'

import { TypeAnimation } from 'react-type-animation';

import myImage from '../assets/img/jobayed.png'

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left sid */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <p className='text-xl mb-[22px]'>Hey, I'm Md. Jobayed Hossain Rabbi</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight 
                  lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>I am <br />
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer (Learning)', // Types 'One'
                  2000, // Waits 1s
                  'Programmar', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Two Three', // Types 'Three' without deleting 'Two'
                  () => {
                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                  }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{color:'var(--red)'}}
                className='text-fuchsia-500'

              />
            </h1>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end w-full h-full" data-aos="fade-down-left">
            <img src={myImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero