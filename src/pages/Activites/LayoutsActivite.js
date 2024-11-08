import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Annimated from '../../components/Annimated'
import SideResponsive from '../../components/SideResponsive'


export default function LayoutsActivite() {
    const { nameactivite } = useParams()
    const data = [
        'Plateforme d’Échange Commercial',
        'Webinaires et Ateliers de Formation',
        'Missions Commerciales',
        'Foires et Salons Professionnels',
        'Programme de Mentorat',
        'Initiatives d’Innovation et de Durabilité',
        'Forum Annuel des Affaires Canada Afrique',
        'Publications et Ressources Éducatives',
        'Réseaux Sociaux et Communication',
        'Soutien à la Francophonie',
    ]

    return (
        <Annimated>
            <Banner title={nameactivite} />
            <div className='px-[5%] py-14 max-md:py-12 gap-10 max-md:gap-6 flex max-md:flex-col w-full'>
                <div className='w-[30%] max-md:w-full border-y-[1px] max-md:border-[1px] border-primary h-fit'>
                    <SideResponsive data={data} nameservice={nameactivite} page='Activites' />
                    <ul className='flex flex-col  max-md:hidden'>
                        {data?.map((x,inde) =>
                            <li key={inde} className="border-b-[1px] border-gray-300 last-of-type:border-none"><NavLink className='px-5 text-opacity-60 service-side py-4 text-[.95rem] font-medium block' to={`/a/Activites/${x}`}>{x}</NavLink></li>
                        )}
                    </ul>
                </div>
                <div className='w-[70%] max-md:w-full'><Outlet /></div>
            </div>
        </Annimated>
    )
}
