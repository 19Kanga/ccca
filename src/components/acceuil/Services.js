import React from 'react';
import { useTranslation } from 'react-i18next';
import { A11y, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from 'moment';
import 'moment/locale/fr';
import jambo from '../../assets/jambotv.PNG';
import pad from '../../assets/1x/page.jpg';
import actual from '../../assets/actual1.jpg';
import actual2 from '../../assets/actu2.avif';
import actual3 from '../../assets/actual2.jpg';
import { NavLink } from 'react-router-dom';

function Services() {
  const { t, i18n } = useTranslation();
  moment.locale(i18n.language); // Set moment locale based on selected language

  const data = [                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    {
      type:'interne',
      image: jambo,
      libelle: 'Interview du Président de la Chambre de Commerce Canada Afrique sur Jambo TV',
      date: moment('2024-07-23').format('LL'), // Format date in localized format
      link: '/a/Actualites/1',
    },
    {
      image: actual,
      type: 'externe',
      libelle: t('brain_drain_africa'),
      date: moment('2024-10-09').format('LL'),
      link: 'https://francopresse.ca/actualite/2024/10/07/exode-des-cerveaux-lafrique-se-vide-au-profit-du-canada/',
    },
    {
      image: actual2,
      type: 'externe',
      libelle: t('quebec_recruitment'),
      date: moment('2024-10-02').format('LL'),
      link: 'https://ici.radio-canada.ca/nouvelle/2108988/recruter-infirmieres-afrique-ethique-caq-maroc-tunisie',
    },
    {
      image: actual3,
      libelle: t('green_hydrogen_opportunities'),
      date: moment('2024-09-10').format('LL'),
      link: 'https://www.investircanada.ca/news/exploiter-possibilites-pour-lhydrogene',
    },
  ];

  const SlideItems = ({ item }) => (
    <a href={item?.type !== 'interne' ? item.link :'/a/Actualites/'+item.libelle} className="flex relative flex-col items-center justify-start gap-2 bg-white overflow-hidden">
      <div className='relative w-[100%] h-[250px]'>
        <img src={item.image} className='absolute object-cover w-full h-full' alt='~#' />
      </div>
      <div className='flex flex-col justify-start gap-3 px-5 py-2 pb-2 h-[140px] max-lg:h-[160px] max-md:h-[130px]'>
        <h1 className='font-bold text-primary hover:text-secondary text-[1.15rem] overflow-hidden text-ellipsis max-md:text-[1.05rem]'>
          {item.libelle}
        </h1>
        <span className='font-bold absolute bottom-4 uppercase text-gray-500 text-[.8rem] max-md:text-[.8rem]'>
          {item.date}
        </span>
      </div>
    </a>
  );

  return (
    <div className='bg-secondary px-[5%] py-14 w-full'>
      <h1 className='text-white text-[2.1rem] max-md:text-[2rem] mb-4 font-semibold'>{t('news')}</h1>
      <div className=''>
        <Swiper
          modules={[Scrollbar, Autoplay, A11y]}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 1, spaceBetween: 15 },
            730: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper"
          scrollbar={{ draggable: true }}
        >
          {data.map((x, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <SlideItems item={x} />
            </SwiperSlide>
          ))}
        </Swiper> 
      </div>
    </div>
  );
}

export default Services;
