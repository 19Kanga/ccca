import React from 'react'

export default function BannerActivite({data}) {
  return (
      <div className='p-[5%] relative flex-col text-centerb h-[calc(100vh-200px)] flex items-center justify-center capitalize'>
        <img src={data.image} alt="#" className='absolute w-full object-top h-full object-cover' />
        <div className='absolute w-full h-full bg-primary bg-opacity-65'></div>
        <div className='z-10 flex gap-4 flex-col items-center justify-center'>
          <h1 className='text-center font-bold text-white text-[3rem] max-md:text-[1.5rem]'>{data.title}</h1>
          <div className='flex flex-col gap-1 items-center justify-center'>
         
          </div>
        </div>
      </div>
  )
}
