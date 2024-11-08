import React from 'react';
import { useTranslation } from 'react-i18next';
import pre1 from '../../assets/objectif.svg';
import pre2 from '../../assets/objectif2.svg';
import pre3 from '../../assets/objectif3.svg';
import images from '../../assets/256.jpg';

export default function Objectif() {
    const { t } = useTranslation();

    const data = [
        {
            titre: t('emerging_markets_access'),
            descrip: t('emerging_markets_access_desc'),
            btn: t('find_ccca_nearby')
        },
        {
            titre: t('support_programs'),
            descrip: t('support_programs_desc'),
            btn: t('find_ccca_nearby')
        }
    ];

    const datas = [
        {
            image: pre1,
            titre: '5 000',
            descrip: t('network_of_5000_entrepreneurs')
        },
        {
            image: pre2,
            titre: '30 000',
            descrip: t('find_ccca_nearby')
        },
        {
            image: pre3,
            titre: '25',
            descrip: t('representatives_in_africa')
        }
    ];

    return (
        <div className='w-full bg-white px-[5%] max-lg:py-12 max-md:py-6 py-md'>
            <div className='relative z-50 grid w-full grid-cols-2 gap-10 overflow-hidden text-white bg-black rounded-lg max-lg:grid-cols-1 max-md:gap-4 bg-opacity-65 p-14 max-lg:px-10 max-md:px-5 max-sm:px-3 max-md:py-4'>
                <div className='absolute w-full h-full bg-black bg-opacity-75 max-md:bg-opacity-80'>
                    <img src={images} className='w-full h-full' alt='' />
                </div>
                <div className='absolute w-full h-full bg-black bg-opacity-35 z-3'></div>
                <div className='z-10 flex flex-col'>
                    {data.map((x, index) => (
                        <div key={index} className='flex flex-col gap-3 py-5 list-servise'>
                            <h1 className='m-0 text-[1.7rem] max-md:text-[1.2rem] font-bold'>{x.titre}</h1>
                            <span className='text-[1.2rem] max-md:text-[1rem]'>{x.descrip}</span>
                        </div>
                    ))}
                </div>
                <div className='z-10 flex flex-col gap-1 py-5 bg-black rounded-lg bg-opacity-20 pb-0 backdopf px-[4%]'>
                    <h1 className='font-bold text-[1.1rem] max-md:text-[.8rem] text-white'>{t('access_via_ccca')}</h1>
                    <div className='flex flex-col justify-center'>
                        {datas.map((x, index) => (
                            <div key={index} className='flex items-center py-[5%] gap-4 border-b-[1px] border-white last-of-type:border-none'>
                                <img src={x.image} alt={x.image} width={75} height={75} />
                                <div className='flex flex-col gap-0'>
                                    <span className='text-[1.7rem] max-md:text-[1.3rem] font-bold m-0'>{x.titre}</span>
                                    <span className='text-[1.2rem] max-md:text-[1rem] font-medium'>{x.descrip}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
