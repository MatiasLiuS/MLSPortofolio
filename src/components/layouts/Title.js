import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className='flex flex-col gap-4 font-titleFont mb-14'>
      <h3 className='text-lg md:text-xl uppercase font-bold font-titleFont text-designColor1 tracking-wide'>        {title}
        </h3>
        <h1 className='text-5xl text-lightText font-bold capitalize'>
        {des}
        </h1>
  </div>
  )
}

export default Title