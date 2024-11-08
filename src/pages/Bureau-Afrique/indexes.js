import React from 'react'
import { ArrowRight02Icon } from 'hugeicons-react'
import canad from '../../assets/canada.jpg'
import { Link } from 'react-router-dom'
import Annimated from '../../components/Annimated'

export default function indexes() {
  const data = [
    {
      pays: 'Afrique',
      image:canad,
      descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
    },
    {
      pays: 'Canada',
      image:canad,
      descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
    }
  ]
  return (
    <Annimated className=''>
      <div className='bg-black p-5 text-center text-[2rem] h-[200px] flex items-center justify-center capitalize text-white'>
        <h1 className='text-center font-bold text-[1.6rem]'>Nous mettons en relation l'afrique avec le canada, pour une bonne coopération</h1>
      </div>
      <div className='py-16 px-[5%] flex flex-col items-center'>
        <p className='text-center text-[1.4rem] w-2/3'>Pour cela nous avions mis sur pied des representants dans chaque contentinant à savoir le Canada et l'afrique. </p>
        <div className='grid w-full px-[14%] grid-cols-2 gap-14 mt-16'>
          {data?.map((x)=>
          <div className='shadow-md rounded-sm overflow-hidden'>
            <img src={x.image} className='h-[150px] w-full' alt='#' />
            <div className='p-8 flex flex-col items-center'>
              <h2 className='text-center text-[1.5rem] text-secondary'>{x.pays}</h2>
              <span className='text-justify'>{x.descrip}</span>
                <Link to={`/a/Bureau/${x.pays}`} className='flex items-center gap-2 mt-3 text-primary cursor-pointer'>Explorer <ArrowRight02Icon /></Link>
            </div>
           </div>
          )}
        </div>
      </div>
    </Annimated>
  )
}
