import { Calendar01Icon } from 'hugeicons-react'
import React from 'react'

export default function BannerRepresentPays({datas}) {
  return (
    <div className='h-[calc(100vh-185px)] relative flex items-center w-full'>
    <img src={datas.imagerep} alt='#' className='absolute object-cover object-right w-full h-full z-1' />
    <div className='absolute w-full h-full bg-[linear-gradient(90deg,_#062338FF_38%,_#ffffff0d)] max-md:bg-[linear-gradient(180deg,_rgba(0,0,0,.2)_1%,_#062338FF)] z-2'></div>
    {/* <div className='absolute w-full h-full bg-[linear-gradient(180deg,_#ffffff0d_1%,_#062338FF)] max-md:block min-md:hidden z-2'></div> */}
    <div className='px-[5%] min-[2080px]:w-53% z-10 text-white min-[1360px]:w-[65%] flex flex-col gap-4 max-md:w-full'>
        <h6 className='text-[0.75rem] text-opacity-60 font-bold'>{datas.responsable}</h6>
        <p className='text-[2.8rem] max-md:text-[1.6rem] leading-tight font-bold'>{datas.profile}</p>
        <div className='flex max-md:flex-col items-center max-md:items-start gap-10 my-3 max-md:my-1 max-md:justify-center max-md:gap-3'>

        </div>
      
    </div>
</div>
  )
}
