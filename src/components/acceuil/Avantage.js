'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../../assets/globes.png';
import image2 from '../../assets/agreement_3375267.png';
import image3 from '../../assets/academic-cap.png';
import image4 from '../../assets/shields.png';
import image5 from '../../assets/diamond_5214557.png';
import image6 from '../../assets/eye_14174521.png';
import { ArrowRight02Icon } from 'hugeicons-react';
import { useNavigate } from 'react-router-dom';

function Avantage() {
    const { t } = useTranslation();
    const data = [
        {
            image: image4,
            titre: t('advantage_secure_investment'),
            descrip: t('advantage_secure_investment_desc'),
            libelle: t('become a member'),
            link: '/a/Devenir-membre'
        },
        {
            image: image1,
            titre: t('advantage_network_strength'),
            descrip: t('advantage_network_strength_desc'),
            libelle: t('member_list'),
            link: '/a/Devenir-membre'
        },
        {
            image: image3,
            titre: t('advantage_access_training'),
            descrip: t('advantage_access_training_desc'),
            libelle: t('calendar'),
            link: '/a/Devenir-membre'
        },
        {
            image: image6,
            titre: t('advantage_visibility'),
            descrip: t('advantage_visibility_desc'),
            libelle: t('more_details'),
            link: '/a/Devenir-membre'
        },
        {
            image: image2,
            titre: t('advantage_influential_partnership'),
            descrip: t('advantage_influential_partnership_desc'),
            libelle: t('become_partner'),
            link: '/a/Devenir-membre'
        },
        {
            image: image5,
            titre: t('advantage_exclusive_offers'),
            descrip: t('advantage_exclusive_offers_desc'),
            libelle: t('view_promotions'),
            link: '/a/Devenir-membre'
        }
    ]
    const navigate= useNavigate()
    // const changePage = (x) => {
    //     navigate(x)
    // }
  return (
    //   <div className='bg-tiers'>
      <div className='w-full bg-opacity-1 relative bg-primary overflow-hidden px-[5%] py-md'>
          <div className='absolute flex items-center justify-center w-[800px] h-[800px] rounded-[100%] bg-gray-100 -right-[10%] -top-[15%]'>
            <div className='w-[80%] ms-[13%] -mt-[11%] z-5 h-[80%] rounded-[100%] bg-secondary'></div>
          </div>
          <div className='flex flex-col'>
          <h1 className='text-white text-[2.3rem] z-[10] max-md:text-[1.8rem] max-md:text-center mb-6 font-semibold'>Nos Avantages</h1>
          <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1'>
              {data?.map((x,index)=>
              <div key={index} className='relative flex flex-col items-start gap-4 px-10 py-8 pb-md bg-white rounded-md max-md:px-7'>
                      <img src={x.image} className='w-[65px] h-[65px]' alt='#'></img>
                <h1 className='text-[1.5rem] max-md:text-[1.1rem] text-primary font-bold'>{x.titre}</h1> 
                <span className='text-[1rem] font-normal'>{x.descrip}</span>
                      <a href={"/a/Devenir-membre"} className='bg-secondary  absolute bottom-6 text-white font-medium flex items-center gap-2 px-5 text-[.8rem] py-2 rounded-md'>{x.libelle} <ArrowRight02Icon /> </a>
              </div>
              )}
              </div>
          </div>
          </div>
    //   </div>
  )
}

export default Avantage;
