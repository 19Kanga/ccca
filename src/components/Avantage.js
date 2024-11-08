'use client'
import React from 'react'
import { A11y, Scrollbar,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/entrep.svg'
import image2 from '../assets/main.svg'
import image3 from '../assets/business.svg'
import image4 from '../assets/developpement.svg'

function Avantage() {
    const data=[
        {
            image:image1,
            libelle:'Creation d\'entreprise',
        },
        {
            image:image2,
            libelle:'Reprise d\'entreprise',
        },
        {
            image:image3,
            libelle:'Booster votre bussines',
        },
        {
            image:image4,
            libelle:'Developpement Durable',
        },
    ]

    const SlideItems=({item})=>{
        return(
            <div className="flex flex-col items-center justify-center gap-2 p-4">
                <div className='relative w-[100px] h-[100px]'>
                    <img src={item.image} layout='fill' alt='~#' />
                </div>
                <span className='font-bold'>{item.libelle}</span>
            </div>
        )
    }
  return (
      <div className='w-full px-[4%] py-4'>
        <Swiper
          modules={[Scrollbar,Autoplay, A11y]}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
              }}
              breakpoints={{
                  300: {
                      slidesPerView: 1,
                      spaceBetween: 1
                  },
                  640: {
                      slidesPerView: 1,
                      spaceBetween:1
                  },
                  840: {
                      slidesPerView: 2,
                      spaceBetween: 4
                  },
                  1024: {
                      slidesPerView: 4,
                      spaceBetween:50
                  },
              }}
              className="mySwiper"
        //   effect='scroll'
        //   fadeEffect={{ crossFade: true }}
        //   autoplay={{ waitForTransition: true, stopOnLastSlide: false, delay: 1500, pauseOnMouseEnter: true }}
          scrollbar={{ draggable: true, }}
        >
        {data?.map((x,index)=>
          <SwiperSlide key={index} virtualIndex={index} className=''>
            <SlideItems item={x} />
          </SwiperSlide>
        )}
        </Swiper>
    </div>
  )
}

export default Avantage