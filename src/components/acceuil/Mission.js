import React from 'react';
import { useTranslation } from 'react-i18next';
import logos from '../../assets/2725.jpg';

export default function Mission() {
    const { t } = useTranslation();

    return (
        <div className='grid grid-cols-2 bg-tiers max-md:grid-cols-1 w-full gap-16 max-md:gap-2 px-[5%] py-md max-md:py-5'>
            <div className='relative order-2 overflow-hidden rounded-md max-md:hidden grille'>
                <img src={logos} className='absolute object-cover object-center w-full h-full' alt='#' />
            </div>
            <div className='flex flex-col order-1 max-md:pb-4 gap-3'>
                <h1 className='text-primary text-[2.1rem] max-md:text-[2rem] font-semibold'>
                    {t('mission_title')}
                </h1>
                <p className='text-[1.1rem] text-justify max-md:text-[1rem] font-normal'>
                    {t('mission_content')}
                </p>
            </div>
        </div>
    );
}
