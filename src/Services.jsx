import React from 'react'
import { services } from './data'

const Services = () => {
  return (
    <div id='services' className='section bg-tertiary'>
        <div className="container mx-auto">
            {/* section title */}
            <div className="flex flex-col items-center text-center " data-aos="fade-up" data-aos-duration="2000">
                <h2 style={{color:"var(--red"}} className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
                    What i do for Clients
                </h2>
                <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis laudantium, omnis accusamus quam ratione reprehenderit quos asperiores, mollitia minus ducimus repellat cum aliquid illo, illum soluta consequatur deleniti provident.</p>
            </div>

            {/* item grid */}
            <div className=" grid lg:grid-cols-4 gap-8" data-aos="zoom-out-down" data-aos-duration="2000">
                {services.map((service , index)=>{
                    const {icon , name , description} = service
                    return <div className='jobayed bg-secondary p-6 rounded-2xl' key={index} data-aos="zoom-in" data-aos-duration="2000">
                        {/* icon */}
                        <div style={{color:'var(--red'}} className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                            {icon}
                        </div>
                        <h4 className='text-2xl font-medium mb-2'>{name}</h4>
                        <p>{description}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Services