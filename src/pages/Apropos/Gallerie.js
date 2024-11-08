import React from 'react'
import imag1 from '../../assets/apropos/240619_19H09-58_8265-HRres_10po@300dpi-sRgb.jpg'
import imag2 from '../../assets/apropos/240619_19H57-54_8404-HRres_10po@300dpi-sRgb.jpg'
import imag3 from '../../assets/apropos/240619_20H43-03_8499-HRres_10po@300dpi-sRgb.jpg'
import imag4 from '../../assets/apropos/240619_22H03-40_8569-HRres_10po@300dpi-sRgb.jpg'
import imag5 from '../../assets/apropos/240619_22H04-11_8573-HRres_10po@300dpi-sRgb.jpg'
import imag6 from '../../assets/apropos/240619_22H07-03_8582-HRres_10po@300dpi-sRgb.jpg'
import imag7 from '../../assets/apropos/240619_20H48-49_8508-HRres_10po@300dpi-sRgb.jpg'
import imag8 from '../../assets/apropos/240619_20H49-16_8509-HRres_10po@300dpi-sRgb.jpg'
import imag9 from '../../assets/apropos/240619_20H49-51_8510-HRres_10po@300dpi-sRgb.jpg'
import imag10 from '../../assets/apropos/240619_20H44-49_8502-HRres_10po@300dpi-sRgb.jpg'
import imag11 from '../../assets/apropos/240619_22H38-54_8703-HRres_10po@300dpi-sRgb.jpg'
import imag12 from '../../assets/apropos/240619_20H36-39_8488-HRres_10po@300dpi-sRgb.jpg'
// import Annimated from '../../components/Annimated'
import a from '../../assets/gallerie/IMG-20241015-WA0003.jpg'
import b from '../../assets/gallerie/IMG-20241015-WA0004.jpg'
import c from '../../assets/gallerie/IMG-20241015-WA0005.jpg'
import d from '../../assets/gallerie/IMG-20241015-WA0006.jpg'
import e from '../../assets/gallerie/IMG-20241015-WA0007.jpg'
import f from '../../assets/gallerie/IMG-20241015-WA0008.jpg'
import g from '../../assets/gallerie/IMG-20241015-WA0009.jpg'
// import {SlideshowLightbox} from 'lightbox.js-react'
// import 'lightbox.js-react/dist/index.css'
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Gallerie() {
    const data = [
        imag1,a,g,imag4,imag5,e,f,imag8,imag9,b,c,d
    ]
    return (
        <LightGallery
                speed={200}
                plugins={[lgZoom]}
            elementClassNames='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-1'>
        {data?.map((x,index)=>
        //    <div className='relative cursor-pointer h-[200px] max-md:h-[170px]'>
                <img key={index} className='object-cover cursor-pointer w-full h-[200px] max-md:h-[170px]' src={x} alt='#' />
        //    </div>
        )}
        </LightGallery>
    )
}
