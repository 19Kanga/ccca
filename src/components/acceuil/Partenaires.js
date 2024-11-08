import React from 'react'
// import partenair from '../../assets/partenaire.jpg'
import cteq from '../../assets/1x/cteq.webp'
import quebec from '../../assets/1x/quebec.png'
import pn from '../../assets/1x/pn.svg'
import chambers from '../../assets/1x/chambers.avif'
import fga from '../../assets/1x/fga.svg'
import fit from '../../assets/fit.png'
import hec from '../../assets/hec.svg'
import ifpf from '../../assets/ifpf.png'
import { NavLink } from 'react-router-dom'

function Partenaires() {

    const data = [
        {
            link:'https://ctequebec.com/',
            image: cteq,
        },
        {
            link: 'https://www.quebecinternational.ca/',
            image: quebec,
        },
        {
            link: 'https://www.printempsnumerique.ca/',
            image: pn,
        },
        {
            link: 'https://canadaafrica.ca/',
            image: chambers,
        },
        {
            link: 'https://fedefranco.ca/',
            image: fga,
        },
        {
            link: 'http://franchise-it-tech.com/',
            image: fit,
        },
        {
            link: 'https://www.hec.ca/',
            image: hec,
        },
        {
            link: 'http://franchise-it-tech.com/',
            image: ifpf,
        }
    ]
    return (
        <div className=' bg-red-50 py-md'>
            <div className='px-[5%]'>
                <h1 className='text-primary text-center text-[2.5rem] max-md:text-[1.8rem] mb-10 font-semibold'>Nos Partenaires</h1>
                <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-3'>
                    {data?.map((x,index) =>
                        <NavLink key={index} to={x.link} target='_blank' className='flex shadow items-center justify-center p-2 overflow-hidden transition-all bg-white rounded-md hover:scale-105'>
                            <img src={x.image} className='h-[65px] max-md:h-[65px]' alt='#' />
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Partenaires
