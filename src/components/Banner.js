import React from 'react'

export default function Banner({title}) {
  return (
      <div className='bg-[rgba(6,35,56,.05)] p-5 text-center text-[2rem] h-[160px] flex items-center justify-center capitalize text-primary'>
          <h1 className='text-center font-semiBold text-[2rem] max-md:text-[1.5rem]'>{title}</h1>
      </div>
  )
}
