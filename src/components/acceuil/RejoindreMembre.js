import { Link } from 'react-router-dom';
import React from 'react'


export default function RejoindreMembre() {

  return (
    <div className='w-full py-2xl px-[4%] bg-[#F7F9F9] flex items-center justify-center flex-col gap-7'>
          <span className='text-[1.8rem] max-md:text-[1.2rem] max-md:text-center font-semibold'>Vous recherchez du réseautage ? Rejoignez notre réseau d&apos;affaires ultime..</span>
          <Link href='#' className='font-normal border-[3px] text-primary  text-center border-primary hover:text-secondary px-14 py-2 rounded-[50px]'>Nous Rejoindre</Link>
    </div>
  );
}
