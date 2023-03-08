import React from 'react'

import image from '../assets/img/about4.jpg'
const About = () => {
  return (
    <section id='about' className='section bg-secondary relative'>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24">

            
          {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div> */}
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "12rem",
              left: "-9rem",
            }}
          >
            
          </div>




            <img className=' object-cover h-[450px] w-[666px] md:mx-auto lg:mx-0 rounded-2xl' src={image} alt="" data-aos="zoom-in-left" data-aos-duration="2000"/>
            <div className="flex flex-col items-center text-center lg-items-start lg:text-left">
                <div className="flex flex-col" data-aos="fade-left" data-aos-duration="2000">
                    <h2 style={{color:"var(--red"}} className='text-3xl lg:4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden
                    before:lg:block'>
                        Md. Jobayed Hossain Rabbi
                    </h2>
                    {/* <p  className='mb-4 text-accent'>Web Designing</p> */}
                    <hr className='mb-8 opacity-5'/>
                    <p className='mb-8'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolores autem pariatur delectus placeat ipsa, molestiae, vel hic sint ad, ipsam architecto nesciunt eum! Illum!
                    </p>
                </div>
                <button  style={{background:'var(--red'}} className='btn btn-md bg-accent hover:bg-accent-hover transition-all w-full rounded-lg text-xl mt-10' data-aos="zoom-in-up" data-aos-duration="2600" ><a href="">Contact</a></button>
                    
            </div>
          </div>
        </div>
    </section>
  )
}

export default About