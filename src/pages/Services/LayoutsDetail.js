import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Annimated from '../../components/Annimated'
import SideResponsive from '../../components/SideResponsive'


export default function LayoutsDetail() {
  const {nameservice}= useParams()
    const data = [
        'Entrepreneuriat',
        'Francophonie',
        'Repreunariat',
        'Coopération Internationale',
        'Maillage d\'Affaires',
        'Programme de Mentorat',
        'Formations',
        'Incubations',
  ]

    
  return (
    <Annimated>
    <Banner title={nameservice} />
    <div className='px-[5%] py-14 max-md:py-12 gap-10 flex max-md:flex-col w-full'>
        <div className='w-[25%] max-md:w-full h-fit border-y-[1px] max-md:border-[1px] border-primary'>
            <SideResponsive data={data} nameservice={nameservice} page='Services' />       
            <ul className='flex flex-col max-md:hidden'>
                {data?.map((x,index)=>
                  <li key={index} className="border-b-[1px] border-gray-300 last-of-type:border-none"><NavLink className='px-5 service-side text-opacity-60 py-4 hover:bg-gray-400 text-[.95rem] font-medium block' to={`/a/Services/${x}`}>{x}</NavLink></li>
                )}
            </ul>
          </div>
          <div className='w-[75%] max-md:w-full'><Outlet /></div>
    </div>
    </Annimated>
  )
}
