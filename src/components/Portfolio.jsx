import React , {useEffect} from 'react'
import Projects from './Projects'
// scrool Animation






const Portfolio = () => {
    return (
        <section id='portfolio' className='section bg-primary min-h-[1400px] relative'>

            <div className="container mx-auto" data-aos="fade-up" data-aos-duration="2000">

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
           

                <div className="flex flex-col items-center text-center">
                    <h2 style={{color:"var(--red"}} className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                        My Lattest Work
                    </h2>
                    <p className='subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet voluptate eos nesciunt iure minus, temporibus earum voluptatum dolores laborum quaerat?</p>
                </div>
                <Projects/>
            </div>
        </section>
    )
    
}

export default Portfolio 