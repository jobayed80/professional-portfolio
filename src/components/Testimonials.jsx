import React from 'react'
import { testimonials } from '../data'
import TestimonialsSlider from './TestimonialsSlider'

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary '>
    <div className="container mx-auto" data-aos="fade-up" data-aos-duration="2000">
        <div className="flex flex-col items-center text-center">
            <h2 style={{color:"var(--red"}} className='section-title   before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                What other people say
            </h2>
            <p className='subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab porro exercitationem totam quisquam nulla dignissimos asperiores labore, inventore, perferendis at placeat eaque voluptate, neque distinctio suscipit accusamus repellat aut!  </p>
        </div>
        <TestimonialsSlider></TestimonialsSlider>
       
    </div>
</section>
  )
}

export default Testimonials