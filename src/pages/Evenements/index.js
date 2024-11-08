import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';

import imag from '../../assets/apropos/240619_20H48-49_8508-HRres_10po@300dpi-sRgb.jpg'
import imag2 from '../../assets/1x/samuca.jpg'
import imag3 from '../../assets/1x/sicaf.jpg'
import imag7 from '../../assets/apropos/imag7.webp'
import bois from '../../assets/1x/bois.jpg'
import ref from '../../assets/1x/ref.jpg'
import Annimated from '../../components/Annimated';
// import { Link } from 'react-router-dom';
// import Select from 'react-select';
// <Select
//     className="m-lg-2 yo"
//     options={options}
//     placeholder="Type d'entreprise"
//     onChange={(e) => setJanv(e.value)}
// // isDisabled
// />

export default function Evenements() {
  const { t } = useTranslation();

  const data = [
    {
      id:1,
      imag: bois,
      titre: 'Salon de la Construction Durable et de la  Transformation du Bois : Bâtir un futur souhaité',
      descrip: "Le Salon de Construction Durable et Transformation du Bois, prévu pour novembre 2025, sera un événement international majeur réunissant des acteurs clés des secteurs de la construction et de la transformation du bois provenant du Canada et de plusieurs pays d’Afrique",
      date: '29 Avril - 01 Mai 2025'
    },
    {
      id: 2,
      imag: imag2,
      titre: 'Salon des Municipalités Canada-Afrique Francophone (SAMUCA) ',
      descrip: "Il a été pensé et mûri avec le concours de la Chambre de Commerce Canada-Afrique (La CCCA), afin de répondre à une problématique spécifique bilatérale : Comment résoudre le problème crucial de la main d’œuvre dans les entreprises municipales ainsi que des débouchées économiques ,et répondre à l’enjeu de développement et de modernisation des communes en Afrique francophone spécialement.",
      date: 'Avril 2025'
    },
    {
      id: 3,
      imag: imag3,
      titre: 'Salon International du Café Africain (SICAF)',
      descrip: 'Le Salon International du Café Africain (SICAF), qui se tiendra pour la première fois au Canada, est une plateforme unique dédiée à la promotion du café africain. Cet événement vise à sensibiliser le marché canadien aux richesses inexplorées du café africain et à encourager les transformateurs et distributeurs canadiens à explorer ce marché prometteur. ',
      date: '02 - 04 juillet 2025'
    },
    {
      id: 4,
      imag: imag7,
      titre: 'Programme de Perfectionnement des Capacités des Dirigeants et Entrepreneurs (PPCDE)',
      descrip: 'Dans le cadre de Programme de Perfectionnement des Capacités des Dirigeants et Entrepreneurs, la Chambre de Commerce Canada Afrique et la société de développement d\'affaires Franchise Opportunités Canada Inc. ont établi un partenariat stratégique avec le HEC de Montréal, l\'Université LAVAL, le collège Boréal et l\'Ecole Nationale d\'Administration Publique: pour permettre aux dirigeants, cadres d\'entreprise privés et publiques de suivre des formations de perfectionnement, de courte durée, au Canada',
      date: 'Mai 2025'
    }
  ];

  const datas = [
    {
      imag: ref,
      titre: 'Rencontre des Entrepreneurs Francophones 2023',
      descrip: 'Après la France et la Côte d’Ivoire, c’était le tour du Québec d’accueillir le grand événement de la francophonie économique. La Rencontre des Entrepreneurs Francophones (REF23) est l’événement annuel de l’Alliance des Patronats Francophones.',
      link:'https://www.cpq.qc.ca/laref23/'
    
    },
    {
      imag: imag,
      titre: 'Rendez vous d\'Affaire de la Francophonie (La RAF24)',
      descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has',
      link:'#'
    }
  ];

  return (
    <Annimated>
      {/* <main> */}
      
      <Banner title={t('events_title')} />
      <div className="px-[5%] flex max-md:flex-col gap-10 max-md:gap-[4.5rem] w-full py-14 max-md:py-12">
        <div className='flex flex-col w-[66%] max-md:w-full gap-1'>
          <p className='text-[1.8rem] text-primary font-semibold max-md:text-[1.3rem] pb-2 border-b-[1px] border-primary'>Evènements à venir</p>
          <div className='grid grid-cols-1 gap-3 mt-4'>
            {data?.map((x, index) =>
              <a href={`/a/Evenements/${x.id}`} key={index} className='relative flex flex-row-reverse items-center pb-4 max-md:flex-col gap-2 border-b-[1px] border-primary last-of-type:border-none overflow-hidden transition-all duration-500 rounded-sm shadow-sm cursor-pointer '>
                <div className='relative w-[35%] max-md:w-full h-full max-md:h-[180px]'>
                  <img className='absolute object-cover w-full h-full' src={x.imag} alt='#' />
                </div>
                <div className='flex flex-col gap-3 w-[65%] max-md:w-full pe-8 max-md:px-2 max-md:text-center pb-5'>
                  <h1 className='text-[1.5rem] max-md:text-[1.2rem] hover:text-secondary transition-all duration-300 font-semibold text-primary'>{x.titre}</h1>
                  <span className='text-[1.1rem] max-md:text-[.95rem] font-light'>{x.descrip.slice(0,170)} ...</span>

                  <span className='italic text-green-600 text-[.8rem]'>{x.date}</span>
                </div>
                {/* <div className='absolute '>
                  <span className='text-gray-400 text-[.8rem]'>16, Janv 2024</span>
                </div> */}
              </a>
            )}
            </div>
        </div>
        <div className='flex flex-col w-[34%] max-md:w-full gap-1'>
          <p className='text-[1.8rem] text-primary font-semibold max-md:text-[1.3rem]  pb-2 border-b-[1px] border-primary'>Evènements Passés</p>
          <div className='grid grid-cols-1 gap-6 mt-4 gap-12max-lg:grid-cols-2 max-md:grid-cols-1'>
            {datas?.map((x, index) =>
              <a href={x.link} target='_blank' rel='noreferrer' key={index} className='relative flex w-full gap-1 overflow-hidden transition-all duration-500 rounded-sm shadow-md cursor-pointer '>
                <div className='w-[40%] relative'>
                  <img className='absolute object-cover w-full h-full' src={x.imag} alt='#' />
                </div>
                <div className='w-[60%] py-3 px-3 max-md:px-2 flex flex-col gap-1'>
                  <h1 className='text-[1rem] hover:text-secondary font-semibold text-primary'>{x.titre.slice(0,35)}...</h1>
                  <span className='text-[.8rem] font-light'>{x.descrip.slice(0,106)}...</span>
                </div>
                {/* <div className='bottom-0 left-0 w-full px-8 py-2 border-t-[1px] absolute'>
                  <span className='text-gray-400 text-[.8rem]'>16, Janv 2024</span>
                </div> */}
              </a>
            )}
          </div>
        </div>
      </div>
    </Annimated>
  );
}
