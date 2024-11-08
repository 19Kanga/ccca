import { Calendar01Icon, Location01Icon } from 'hugeicons-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import $ from "jquery"

export default function BannerEvenement({ datas }) {

  // $(document).ready(function () {
  //   $('#btn-scrol'.on('click', function () {
  //     var page = $(this).attr('href')
  //     var speed = 750
  //     $('html,body').animate({ scrollTop: $(page).offset().top }, speed)
  //     return false
  //   }))
  // })
  
  return (
      <div className='p-[5%] relative flex-col text-centerb h-[calc(100vh-200px)] flex items-center justify-center capitalize'>
        <img src={datas.image} width='1000' height='1000' alt="#" className='absolute object-cover object-top w-full h-full' />
        <div className='absolute w-full h-full bg-primary bg-opacity-65'></div>
        <div className='z-10 flex gap-8 max-md:gap-4 flex-col items-center max-md:items-start w-[85%] max-md:w-full justify-center'>
          <h1 className='text-center max-md:text-start font-bold max-md:text-[1.3rem] text-white text-[3rem]'>{datas.title}</h1>
          <div className='flex max-md:flex-col gap-10 max-md:gap-4 max-md:w-full text-[1.3rem] max-md:text-[1.1rem] items-center max-md:items-start justify-center max-md:justify-start'>
            <div className='flex items-center gap-2 font-semibold text-white'><div className='w-[35px] flex items-center justify-center bg-white rounded-[50px] h-[35px]'><Location01Icon className='text-secondary' /></div>{datas.lieux}</div>
            <div className='flex items-center gap-2 font-semibold text-white'><div className='w-[35px] flex items-center justify-center bg-white rounded-[50px] h-[35px]'><Calendar01Icon className='text-secondary' /></div>{datas.date}</div>
          </div>
        <button id='btn-scrol' target='#offre' className=' bg-secondary outline-0 text-white text-[.85rem] font-semibold w-[40%] py-2 rounded-md px-3'>S'enregistrer</button>
        </div>
      </div>
  )
}
