import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center' data-aos="zoom-out-down" data-aos-duration="2000">
      <div className="mb-8">
        <img className='rounded-2xl' src={item.image} alt="" />
      </div>
      <p style={{color:'var(--red'}} className='capitalize text-accent text-sm mb-3 font-semibold'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3' data-aos="fade-left">{item.name}</h3>
    </div>
  )
}

export default Project