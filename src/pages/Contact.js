import React from 'react'
// import Navbar from '../components/Navbar/index';
// import logo from '../assets/1x/icone.png'
// import logo1 from '../assets/1x/icone.png'
// import { A11y, Autoplay, EffectFade, Scrollbar } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import banner2 from '../assets/background.jpg'
import Contact from '../components/acceuil/Contact';
import Annimated from '../components/Annimated';

export default function Contacts() {
    const Banners = (props) => {
        const { image, descrip } = props
        return (
            <Annimated className='relative h-[400px] max-md:h-[250px] bg-opacity-45 bg-primary'>
                <img src={image} className='object-cover w-full h-full' alt='' />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 max-md:bg-opacity-50'></div>
                <div className='absolute w-[100%] top-[50%] text-start -translate-y-[50%] bg-red z-[200] text-white flex flex-col px-[4%]'>
                    {/* <h1 className='text-deco'>{marque}</h1> */}
                    <div className='flex flex-col w-full max-md:justify-center'>
                        {/* <h1 className='mb-1 mt-1 text-[2rem] font-bold'>{titre}</h1> */}
                        <span className='text-[3.7rem] max-lg:text-[2rem] max-md:text-[1.6rem] text-center font-bold'>{descrip}</span>
                    </div>
                    {/* <Link className='font-medium text-[15px]' href={'#'}>READ MORE</Link> */}
                </div>
            </Annimated>
        )
    }

    return (
        <>
            {/* <main> */}
            {/* <header className='relative'>
                <Swiper
                    modules={[Scrollbar, A11y, Autoplay, EffectFade]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect='fade'
                >
                    <SwiperSlide className=''>
                        <Banners
                            titre="L'expertise au service de votre Cybersécurité"
                            image={banner2}
                            descrip="Nous Contactez"
                        />
                    </SwiperSlide>
                </Swiper>
                <div className='absolute z-[100] top-0 w-full'>
                    <Navbar logo={logo} logos={logo1} />
                </div>
            </header> */}
            <div className="px-[5%] w-full py-md max-md:py-12">
                <Contact />
            </div>
        </>
    )
}
