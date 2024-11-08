import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import Annimated from '../../components/Annimated'
import SideResponsive from '../../components/SideResponsive'


export default function LayoutsApropos() {
    const data = [
        'Présentation',
        'Conseil d\'administration',
        'Direction Exécutive',
        'Gallerie',
        'Contacts',
    ]
    const nameApropos = window?.location.pathname.slice(19).replace(/%C3%A9/, 'é').replace(/%20/, ' ')
    return (
        <Annimated>
            <Banner title={'Apropos de nous'} />
            <div className='px-[5%] py-14 max-md:py-12 gap-10 max-md:gap-6 flex max-md:flex-col w-full'>
                <div className='w-[25%] max-md:w-full border-y-[1px] max-md:border-[1px] border-primary h-fit'>
                    <SideResponsive data={data} nameservice={nameApropos} page='Apropos-de-nous' />
                    <ul className='flex flex-col max-md:hidden'>
                        {data?.map((x,index) =>
                            <li key={index} className="border-b-[1px] border-gray-300 last-of-type:border-none"><NavLink className='px-5 service-side text-opacity-60 py-4 text-[.95rem] font-medium block' to={`/a/Apropos-de-nous/${x}`}>{x}</NavLink></li>
                        )}
                    </ul>
                </div>
                <div className='w-[75%] max-md:w-full text-[1.1rem] max-md:text-[1rem]'><Outlet /></div>
            </div>
        </Annimated>
    )
}
