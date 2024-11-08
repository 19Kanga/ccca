import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Banner from '../../components/Banner';
import Annimated from '../../components/Annimated';
import jambo from '../../assets/jambotv.PNG';
import vidJambo from '../../assets/videos/Publier.mp4';
import actual from '../../assets/1x/page.jpg';
import Infolettre from '../../components/Infolettre';
import Publicite from '../../components/Publicite';

export default function ActualiteDetail() {
    const { t } = useTranslation();
    const { id } = useParams();
    
    const actualites = [
        {
            id: 1,
            image: jambo,
            titre: t('news_title1'),
            descrip:'',
            date: '23 Juil 2024',
            videoUrl: vidJambo
        }
    ];

    const actualite = actualites.find((item) => item.titre === id);
    console.log(actualite)

    if (!actualite) {
        return <div className='px-[5%] py-14'>{t('news_not_found')}</div>;
    }

    const getEmbeddedVideoUrl = (url) => {
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const videoId = url.split('v=')[1] || url.split('/').pop();
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    };

    return (
        <Annimated>
            {/* <Banner title={actualite.titre} /> */}
            <div className='px-[5%] py-12 pt-8 flex gap-[3rem]'>
                <div className='flex flex-col w-[73%] gap-6 max-w-screen-lg max-md:w-full'>
                    {actualite.videoUrl!=='' ? 
                        <div className='mt-4'>
                            <video
                                src={getEmbeddedVideoUrl(actualite.videoUrl)}
                                title={actualite.titre}
                                className='w-full h-[500px] rounded-md'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                controls
                            />
                        </div> :
                        <div className='mt-4'>
                            <img
                                src={actualite.image}
                                alt='#'
                                title={actualite.titre}
                                className='w-full h-[500px] object-cover rounded-md'
                            />
                        </div>
                    }
                   
                    <h1 className='text-[2rem] font-bold text-primary max-md:text-[1.2rem]'>{actualite.titre}</h1>
                    <span className='text-gray-500'>{t('published_on')}: {actualite.date}</span>
                    <p className='text-[1.1rem] text-gray-700 leading-relaxed'>{actualite.descrip}</p>
                </div>

                <div className='w-[27%] max-md:hidden flex flex-col gap-8'>
                    <Publicite />
                    <Infolettre />
                </div>
            </div>
        </Annimated>
    );
}
