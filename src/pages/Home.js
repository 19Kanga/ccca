import React from 'react';
import { useTranslation } from 'react-i18next';
import Presentation from '../components/acceuil/Presentation';
import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Objectif from '../components/acceuil/Objectif';
import Services from '../components/acceuil/Services';
import Contact from '../components/acceuil/Contact';
import Avantage from '../components/acceuil/Avantage';
import Mission from '../components/acceuil/Mission';
import cteq from '../assets/1x/cteq.webp';
import quebec from '../assets/1x/quebec.png';
import pn from '../assets/1x/pn.svg';
import chambers from '../assets/1x/chambers.avif';
import fga from '../assets/1x/fga.svg';
import fit from '../assets/fit.png';
import hec from '../assets/hec.svg';
import ifpf from '../assets/ifpf.png';
import event from '../assets/2149304766.jpg';
import cana from '../assets/cana.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';

import imag1 from '../assets/apropos/240619_20H48-49_8508-HRres_10po@300dpi-sRgb.jpg'

import imag4 from '../assets/apropos/240619_22H03-40_8569-HRres_10po@300dpi-sRgb.jpg'
import imag5 from '../assets/apropos/240619_22H04-11_8573-HRres_10po@300dpi-sRgb.jpg'
import imag6 from '../assets/apropos/240619_22H07-03_8582-HRres_10po@300dpi-sRgb.jpg'
import imag2 from '../assets/1x/samuca.jpg'
import imag3 from '../assets/1x/sicaf.jpg'

import imag7 from '../assets/apropos/imag7.webp'
import bois from '../assets/1x/bois.jpg'
import {ArrowRight02Icon, Calendar01Icon, Location01Icon } from 'hugeicons-react';

import Publicite from '../components/Publicite';

export default function Home() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const data = [
        { link: 'https://ctequebec.com/', image: cteq },
        { link: 'https://www.quebecinternational.ca/', image: quebec },
        { link: 'https://www.printempsnumerique.ca/', image: pn },
        { link: 'https://canadaafrica.ca/', image: chambers },
        { link: 'https://fedefranco.ca/', image: fga },
        { link: 'http://franchise-it-tech.com/', image: fit },
        { link: 'https://www.hec.ca/', image: hec },
        { link: 'http://franchise-it-tech.com/', image: ifpf }
    ];

    const datas = [
        {
            id:1,
            image: bois,
            jours: '29 - 01',
            mois: 'Avril - Mai 2025',
            titre: 'Salon de la Construction Durable et de la  Transformation du Bois : Bâtir un futur souhaité',
            descrip: "Le Salon de Construction Durable et Transformation du Bois, prévu pour novembre 2025, sera un événement international majeur réunissant des acteurs clés des secteurs de la construction et de la transformation du bois provenant du Canada et de plusieurs pays d’Afrique"
        },
        {
            id:2,
            image: imag2,
            jours: '',
            mois: 'Avril 2025',
            titre: 'Salon des Municipalités Canada - Afrique (SAMUCA) ',
            descrip: "Il a été pensé et mûri avec le concours de la Chambre de Commerce Canada-Afrique (La CCCA), afin de répondre à une problématique spécifique bilatérale : Comment résoudre le problème crucial de la main d’œuvre dans les entreprises municipales ainsi que des débouchées économiques ,et répondre à l’enjeu de développement et de modernisation des communes en Afrique francophone spécialement."
        },
        {

            id:3,
            image: imag3,
            jours: '02 - 04',
            mois: 'Juillet 2025',
            titre: 'Salon International du Café Africain (SICAF)',
            descrip: 'Le Salon International du Café Africain (SICAF), qui se tiendra pour la première fois au Canada, est une plateforme unique dédiée à la promotion du café africain. Cet événement vise à sensibiliser le marché canadien aux richesses inexplorées du café africain et à encourager les transformateurs et distributeurs canadiens à explorer ce marché prometteur. '
        },
        {
            id:4,
            image: imag7,
            jours: '',
            mois: 'Mai 2025',
            titre: 'Programme de Perfectionnement des Capacités des Dirigeants et Entrepreneurs (PPCDE)',
            descrip: 'Dans le cadre de Programme de Perfectionnement des Capacités des Dirigeants et Entrepreneurs, la Chambre de Commerce Canada Afrique et la société de développement d\'affaires Franchise Opportunités Canada Inc. ont établi un partenariat stratégique avec le HEC de Montréal, l\'Université LAVAL, le collège Boréal et l\'Ecole Nationale d\'Administration Publique: pour permettre aux dirigeants, cadres d\'entreprise privés et publiques de suivre des formations de perfectionnement, de courte durée, au Canada'
        }
    ]

    const datac = [
        { title: t('activity1_title'), descrip: t('activity1_desc'), mois: 'OCT', jrs: '28' },
        { title: t('activity2_title'), descrip: t('activity2_desc'), mois: 'NOV', jrs: '30' },
        { title: t('activity3_title'), descrip: t('activity3_desc'), mois: 'NOV', jrs: '17' }
    ];

    const dataImage = [imag1, imag2, imag3, imag4, imag5, imag6];

    const navigateDetail = (x) => {
        navigate('/a/Evenements/' + x);
    };

    return (
        <>

            <div className='h-[calc(100vh-185px)] relative flex items-center w-full'>
                <img src={event} alt='#' className='absolute object-cover object-right w-full h-full z-1' />
                <div className='absolute w-full h-full bg-[linear-gradient(90deg,_#062338FF_38%,_#ffffff0d)] max-md:bg-[linear-gradient(180deg,_rgba(0,0,0,.2)_1%,_#062338FF)] z-2'></div>
                <div className='px-[5%] min-[2080px]:w-53% z-10 text-white min-[1360px]:w-[65%] flex flex-col gap-4 max-md:w-full'>
                    <h6 className='text-[0.75rem] text-opacity-60 font-bold'>ÈVÈNEMENT À VENIR</h6>
                    <p className='text-[2.8rem] max-md:text-[1.6rem] leading-tight font-bold'>Salon de la Construction Durable et de la  Transformation du Bois : Bâtir un futur souhaité</p>
                    <div className='flex items-center gap-10 my-3 max-md:flex-col max-md:items-start max-md:my-1 max-md:justify-center max-md:gap-3'>


                        <div className='font-bold text-[1rem] max-md:text-[.95rem] flex items-center gap-2'><div className='h-[40px] max-md:h-[30px]  max-md:w-[30px] w-[40px] flex items-center justify-center bg-white rounded-[50px]'><Location01Icon className='text-secondary max-md:size-4'/></div> <span>Québec</span></div>

                        <div className='font-bold text-[1rem] max-md:text-[.95rem] flex items-center gap-2'><div className='h-[40px]  max-md:h-[30px]  max-md:w-[30px] w-[40px] flex items-center justify-center bg-white rounded-[50px]'><Calendar01Icon className='text-secondary max-md:size-4'/></div> <span>15 Novembre 2025</span></div>
                    </div>
                    <div className='grid w-[70%] max-md:w-full grid-cols-2 max-md:text-[.9rem] gap-4 mt-2'>
                        <a href={'/a/Evenements/'+1} className='py-2 font-semibold text-center text-white rounded-md bg-secondary'>{t('details')}</a>
                        <NavLink to={'/a/Devenir-membre'} className='py-2 font-semibold text-center text-white border-2 border-white rounded-md '>S'enregistrer</NavLink>
                    </div>
                </div>
            </div>

            <div className='bg-[#062338] px-[5%] py-5'>
                <div className='flex items-center gap-3'>
                    <Swiper modules={[Scrollbar, A11y, Autoplay]} autoplay={{ delay: 4000, disableOnInteraction: false }} spaceBetween={15} breakpoints={{ 300: { slidesPerView: 1 }, 700: { slidesPerView: 2 }, 1000: { slidesPerView: 4 } }}>
                        {data.map((x, index) => (
                            <SwiperSlide key={index} className='bg-gray-100'>
                                <NavLink className='flex items-center justify-center px-2 py-1 bg-gray-100 rounded-sm' to={x.link}>
                                    <img className="h-[65px]" src={x.image} alt='' />
                                </NavLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="flex flex-col items-center sm:items-start bg-red">
                <Presentation />
                <Mission />
                <Avantage />

                <div className='px-[5%] w-full gap-[3rem] max-md:gap-[3.5rem] flex max-md:flex-col py-md max-md:py-12'>
                        {/* <div className="w-full flex max-md:flex-col gap-[3.8rem]"> */}
                            <div className='w-[70%] flex flex-col gap-2 max-md:w-full'>
                                <h1 className='text-primary text-[2rem] border-b-[1px] border-primary pb-1 max-md:text-[2rem] font-semibold'>Evènements à venir</h1>
                                <div className='flex flex-col'>
                                    {datas?.map((x, index) =>
                                        <a href={'/a/Evenements/'+x.id} key={index} className='relative w-full flex max-md:flex-col items-center py-5 flex-row-reverse gap-5 overflow-hidden transition-all duration-500 border-b-[1px] border-primary last-of-type:border-none cursor-pointer '>
                                            <div className='w-[40%] relative max-md:w-full h-[205px]' style={{ backgroundImage: `url(${x.image})`,backgroundSize:'cover',backgroundPosition:'center' }}>
                                                <div className='absolute top-[7%] z-[10] flex flex-col items-center justify-center left-[5%] w-[80px] h-[70px] bg-[rgba(255,255,255,.9)] backdrop-blur'>
                                                    <h1 className='font-extrabold m-0 text-[1.15rem]'>{x.jours}</h1>
                                                    <span className='text-[.8rem] font-semibold text-center'>{x.mois}</span>
                                                </div>
                                                {/* <img className='absolute object-cover w-full h-full' src={activite1} alt='#' /> */}
                                            </div>
                                            <div className='flex flex-col gap-3 w-[60%] max-md:w-full'>
                                                <h1 className='text-[1.5rem] max-2xl:text-[1.5rem] max-xl:[1.3rem] hover:text-secondary transition-all duration-300 max-lg:[1.22rem] max-md:text-[1.2rem] max-md:text-center font-bold text-primary'>{x.titre}</h1>
                                                <span className='text-[1.1rem] max-md:text-[.95rem] max-md:text-center  font-light'>{ x.descrip.slice(0, 200) }...</span>

                                                {/* <span className='text-[.75rem] text-gray-500 font-semibold'>- 21 Sept 2024</span> */}
                                            </div>
                                        </a>
                                    )}

                                </div>
                                <a href={'/a/Evenements'} className='mt-2 mx-auto hover:text-secondary transition-all duration-300 font-semibold text-[1.2rem] flex gap-3 items-center'> Voir plus <ArrowRight02Icon /></a>
                            </div>
                            <div className='w-[30%] max-md:w-full flex flex-col gap-8'>
                                <div className='flex flex-col gap-3'>
                                    <h1 className='text-primary text-[2rem] border-b-[1px] border-primary pb-1 max-md:text-[2rem] font-semibold'>Activités</h1>
                                    {datac?.map((x,index)=>
                                    <div key={index}  className='flex gap-4 px-3 py-3 bg-gray-200 max-md:items-center'>
                                        <div className='flex flex-col items-center justify-center bg-[rgba(255,255,255,.9)] py-2'>
                                            <img src={cana} width={40} height={40} className='h-[40px] w-[100px]' alt="#" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <h1 className='text-[.9rem] max-md:text-[1.1rem] font-semibold text-primary'>{x.title}</h1>
                                            <span className="text-[.8rem] font-medium text-opacity-75">{x.descrip}</span>
                                        </div>
                                    </div>
                                    )}
                                </div>
                                <div className='flex flex-col w-full gap-3'>
                                    <h1 className='text-primary text-[1.9rem] border-b-[1px] border-primary pb-1 max-md:text-[2rem] font-semibold'>Galleries</h1>
                                    <LightGallery
                                        speed={200}
                                        plugins={[lgZoom]} 
                                        elementClassNames='grid grid-cols-3 gap-1 max-md:items-center'
                                        >
                                        {dataImage?.map((x,index)=>
                                            // <div key={index}  className='relative '>
                                            <img src={x} key={index} alt='#' className="cursor-pointer h-[110px] max-md:h-[130px] w-full object-cover" />
                                            // </div>
                                        )}
                                    </LightGallery>
                                </div>
                                <div><Publicite /></div>
                            </div>
                        {/* </div> */}
                </div>
                <Services />
                <Objectif />
                <Contact />
            </div>
        </>
    );
}
