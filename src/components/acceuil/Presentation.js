'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pre1 from '../../assets/loader.PNG';
import video from '../../assets/videos/mont.mp4';
import { PlayCircleIcon, PauseIcon } from 'hugeicons-react';
import 'jquery/dist/jquery';
import $ from 'jquery';

export default function Presentation() {
    const { t } = useTranslation();
    const [play, setPlay] = useState(false);

    $(document).ready(function () {
        const vid = $('.videos')[0];
        const playButton = $('.btn-play');
        const pauseButton = $('.btn-pause');
        playButton.click(() => { vid.play(); setPlay(true); });
        pauseButton.click(() => { vid.pause(); setPlay(false); });
        $('.videos').on('ended', () => $(this).load());
    });

    return (
        <div className='grid grid-cols-2 max-lg:grid-cols-1 w-full gap-14 max-md:gap-2 px-[5%] py-md max-md:py-10'>
            <div className='relative overflow-hidden rounded-md grille'>
                <div className={`absolute top-[50%] bg-red left-[50%] ${play ? '' : 'hidden'} -translate-x-[50%] -translate-y-[50%] cursor-pointer z-50 btn-pause`}>
                    <PauseIcon size={70} color='white' />
                </div>
                <div className={`absolute top-[50%] ${play ? 'hidden' : ''} bg-red left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer z-50 btn-play`}>
                    <PlayCircleIcon size={70} color='white' />
                </div>
                <video
                    width="100%"
                    height="100%"
                    poster={pre1}
                    autoPlay={false}
                    title="Youtube Player"
                    className='absolute w-full h-full videos max-lg:relative'
                >
                    <source src={video} />
                </video>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-secondary text-[1.6rem] w-[78%] max-md:w-[100%] max-md:text-[1.3rem] font-semibold capitalize' style={{ lineHeight: '35px' }}>
                    {t('ccca_title')}
                </h3>
                <h1 className='text-primary text-[2.1rem] max-md:text-[2rem] font-semibold'>{t('presentation')}</h1>
                <p className='text-[1rem] text-justify font-normal'>
                    {t('ccca_description')}
                </p>
            </div>
        </div>
    );
}
