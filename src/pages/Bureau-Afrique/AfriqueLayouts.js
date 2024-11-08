import React from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Infolettre from '../../components/Infolettre'
import Banner from '../../components/Banner'
import { Mail01Icon } from 'hugeicons-react'
import Annimated from '../../components/Annimated'
import Publicite from '../../components/Publicite'

export default function AfriqueLayouts() {
    const {region}=useParams()
  return (
    <Annimated>
      <Banner title={region} />
      {/* <div className='bg-black p-5 text-center text-[2rem] h-[200px] flex items-center justify-center capitalize text-white'>{region}</div>   */}
      {/* <div className=''> */}
        <div className='w-full px-[5%] flex py-12 max-md:flex-col gap-[2rem]'>
          <div className='w-[70%] max-md:w-full max-md:px-0 flex flex-col gap-10'>
                <Outlet />
          </div>
          <div className='w-[29%] flex flex-col gap-8 max-md:hidden'>
            <div className='bg-primary px-8 flex flex-col gap-2 py-[1rem]'>
                <span className='text-white'>Couriel</span>
                <div className='font-semibold bg-gray-100 lowercase px-4 py-3 rounded-sm flex item-center gap-3 text-[.85rem]'>
                  <Mail01Icon />
                  {region}@cc-ca.ca
                </div>
            </div>
            <Infolettre />
            <Publicite />
          </div>
        </div>
      {/* </div> */}
    </Annimated>
  )
}
