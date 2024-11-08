import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Banner from '../../components/Banner';
import Annimated from '../../components/Annimated';
import jambo from '../../assets/jambotv.PNG';
import articl from '../../assets/1x/article1.pdf';
import article from '../../assets/1x/articlen°21124.pdf';
import vidJambo from '../../assets/videos/Publier.mp4';
import actual from '../../assets/1x/page.jpg';
import atc from '../../assets/1x/atl02.png';
import Infolettre from '../../components/Infolettre';
import Publicite from '../../components/Publicite';
import moment from 'moment';

export default function RevueDetail() {
    const { t } = useTranslation();
    const { id } = useParams();
    
    const actualites = [
        {
            id: 2,
            image: actual,
            type: 'interne',
            url:'',
            titre: 'DECROISSANCE ET CROISSANCE DES PME AU CANADA : Le cas du Québec',
            article:'no 11124',
            descrip: "Chaque année, près de 7200 entreprises ferment les portes au Québec depuis une bonne décennie. Est-ce le résultat d’une insuffisance en programmes gouvernementaux pour penser le futur d’une telle activité importante pour l’économie ? ",
            date: '2024/11/02',
            videoUrl: '',
            fille: articl
        },
        {
            id: 3,
            image: atc,
            type: 'interne',
            url:'',
            titre: 'LE TAMIS DE L’IMMIGRATION QUÉBÉCOISE PLUS RESSERRÉ',
            article:'no 21124',
            descrip: "L’année suivante sera davantage difficile pour les immigrants qui visent le Québec. L’accessibilité se présente plus réduite à cause de la suspension de deux programmes à savoir le PEQ(Programme de l’Expérience Québécoise) pour les diplômés, et le PRTQ (Programme Régulier des Travailleurs Qualifiés).",
            date: '2024/11/04',
            videoUrl: '',
            fille: article
        }
    ];

    const actualite = actualites.find((item) => item.article === id);
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
                    <span className='text-black italic'>Article {actualite?.article}</span>
                    <span className='text-gray-500'>{t('published_on')}: {moment(actualite.date).format("YYYY-MM-DD")}</span>
                    <p className='text-[1.1rem] text-gray-700 leading-relaxed'>{actualite.descrip}</p>
                    <a href={actualite?.fille} className='px-5 font-bold text-center text-white w-fit  py-2 rounded-md bg-secondary' download>Télécharger l'article {actualite?.article}</a>
                </div>

                <div className='w-[27%] max-md:hidden flex flex-col gap-8'>
                    <Publicite />
                    <Infolettre />
                </div>
            </div>
        </Annimated>
    );
}
