import React from 'react'
import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../assets/1x/IMG-20241028-WA0027.jpg'
import img2 from '../assets/1x/IMG-20241028-WA0026.jpg'
import img3 from '../assets/1x/IMG-20241028-WA0028.jpg'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { Cancel01Icon } from 'hugeicons-react';

export default function Publicite() {
    const data=[
        img1,img2,img3
    ]
    const { t } = useTranslation();
    return (
      <div>
        <h5 className='uppercase text-[0.7rem] mb-3 font-light'>Publicité</h5>
        <div className='bg-secondary relative px-8 flex flex-col gap-5 py-[2rem] rounded-md'>
            {/* <div className='bg-white absolute cursor-pointer right-[3%] top-[3%] text-secondary flex flex-col items-center justify-center w-[25px] h-[25px] rounded-[50px]'><Cancel01Icon size={'15px'} fontSize={'800'}/></div> */}
          <span className='text-white font-bold text-[1.3rem]'>Creer votre site internet à moindre coût</span>
          <div className='w-full bg-white h-fit'>
              <Swiper
                  modules={[Scrollbar, A11y, Autoplay]}
                  autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                  }}
                  spaceBetween={15}
                  slidesPerView={1}
              // effect='fade'
              >
                  {data?.map((x) =>
                      <SwiperSlide className='bg-gray-100'>
                          <NavLink className='flex items-center justify-center px-1 py-1 bg-gray-100 rounded-sm' to={'http://franchise-it-tech.com/'}>
                              <img className="object-cover w-full h-[300px] max-md:h-[335px] " src={x} alt='' />
                          </NavLink>
                      </SwiperSlide>
                  )}
              </Swiper>
          </div>
        </div>
    </div>
  )
}
