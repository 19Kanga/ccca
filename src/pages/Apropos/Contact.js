import React from 'react'
import imag from '../../assets/15846.jpg'
import Annimated from '../../components/Annimated'

export default function Contact() {
    const data = [
        {
            titre: 'Conseil d\'administration',
            email: 'ca@cc-ca.ca',
            tel: '+1 (438) 388-3606',
            location:'En façe de Express Union Carefour Maçon'
        },
        {
            titre: 'Direction Exécutive',
            email: 'direction-executive@cc-ca.ca',
            tel: '+1 (438) 388-3606',
            location: 'En façe de Express Union Carefour Maçon'
        },
        {
            titre: 'Bureau Afrique',
            email: 'bureau-afrique@cc-ca.ca',
            tel: '+1 (438) 388-3606',
            location: 'En façe de Express Union Carefour Maçon'
        },
        {
            titre: 'Bureau Canada',
            email: 'bureau-canada@cc-ca.ca',
            tel: '+1 (438) 388-3606',
            location: 'En façe de Express Union Carefour Maçon'
        }
    ]
    return (
        <Annimated className='flex flex-col gap-5'>
            <div className='relative w-full h-[175px]'>
                <img className='w-full h-full absolute object-cover object-top' src={imag} alt='#' />
            </div>
            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10 gap-y-4 mt-5'>
            {data?.map((x,index)=>
            <div key={index} className='flex flex-col gap-2 py-3 px-12 border-2 border-gray-600'>
                <h1 className='text-[1.2rem] font-bold '>{x.titre}</h1>
                
                    {/* <div className='text-[1rem]'> Télephone: <span className='text-gray-700 font-bold'>{x.tel}</span></div> */}
                    <div className='text-[1rem]'> Email: <span className='text-primary font-bold'>{x.email}</span></div>
                    {/* <div className='text-[1rem]'> Location: <span className='text-gray-700 font-bold'>{x.location}</span></div> */}
                </div>
            )}
            </div>
        </Annimated>
    )
}
