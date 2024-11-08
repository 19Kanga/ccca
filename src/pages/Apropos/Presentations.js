import { Pdf02Icon } from 'hugeicons-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fich from '../../assets/apropos/presentation.pdf';
import imag from '../../assets/back2.jpg';
import Annimated from '../../components/Annimated';

export default function Presentations() {
  const { t } = useTranslation();

  return (
    <Annimated className='flex flex-col gap-4'>
      <div className='relative w-full h-[175px]'>
        <img className='w-full h-full absolute object-cover object-top' src={imag} alt='#' />
      </div>
      <p className='text-justify mt-3'>{t('presentationDescription')}</p>
      <NavLink 
        to={fich} 
        className='p-3 w-[40%] mt-6 max-md:w-full rounded-sm font-semibold text-center text-white flex items-center justify-center gap-2 text-[.9rem] bg-secondary' 
        target='_blank'
      >
        {t('downloadPresentation')} <Pdf02Icon size={'1.2rem'}/>
      </NavLink>
    </Annimated>
  );
}
