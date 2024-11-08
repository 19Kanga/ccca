import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/effect-fade';
import jambo from '../../assets/jambotv.PNG';
import pad from '../../assets/1x/page.jpg';
import atc from '../../assets/1x/atl02.png';
import actual from '../../assets/actual1.jpg';
import actual2 from '../../assets/actu2.avif';
import actual3 from '../../assets/actual2.jpg';
import vidJambo from '../../assets/videos/Publier.mp4';
import Banner from '../../components/Banner';
import Infolettre from '../../components/Infolettre';
import Annimated from '../../components/Annimated';
import { ArrowRight01Icon, ArrowLeft01Icon } from 'hugeicons-react';
import Publicite from '../../components/Publicite';
import moment from 'moment';

export default function CccaRevue() {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;  

    const data = [
        {
            id: 2,
            image: pad,
            type: 'interne',
            url:'',
            titre: 'DECROISSANCE ET CROISSANCE DES PME AU CANADA : Le cas du Québec',
            article:'no 11124',
            descrip: "Chaque année, près de 7200 entreprises ferment les portes au Québec depuis une bonne décennie. Est-ce le résultat d’une insuffisance en programmes gouvernementaux pour penser le futur d’une telle activité importante pour l’économie ? ",
            date: "2024-11-02",
            videoUrl: vidJambo
        },

        {
            id: 3,
            image: atc,
            type: 'interne',
            url:'',
            titre: 'LE TAMIS DE L’IMMIGRATION QUÉBÉCOISE PLUS RESSERRÉ',
            article:'no 21124',
            descrip: "L’année suivante sera davantage difficile pour les immigrants qui visent le Québec. L’accessibilité se présente plus réduite à cause de la suspension de deux programmes à savoir le PEQ(Programme de l’Expérience Québécoise) pour les diplômés, et le PRTQ (Programme Régulier des Travailleurs Qualifiés).",
            date: "2024-11-04",
            videoUrl: vidJambo
        }
    ];

    
    const filteredData = data.filter((item) => {
        const matchesSearchQuery = item.titre.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDate = selectedDate ? item.date === selectedDate : true;
        return matchesSearchQuery && matchesDate;
    });

   
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Annimated>
            <Banner title={"CCCA REVUE"} />
            <div className="px-[5%] w-full flex gap-[3rem] py-14 max-md:py-12">
                <div className='w-[73%] max-md:w-full'>
                    <div className='flex flex-col gap-4 pb-4'>
                        <div className='flex flex-col gap-4 md:flex-row'>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t('search_by_title')}
                                className="border-[1px] border-primary p-2 px-4 w-full md:w-[50%] outline-none rounded-md"
                            />
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="border-[1px] border-primary p-2 px-4 w-full md:w-[50%] outline-none rounded-md"
                            />
                        </div>
                        <span className='text-[.8rem] font-semibold'>{filteredData.length} {t('results')}</span>
                    </div>
                    <div className='flex flex-col'>
                        {paginatedData.map((x) => (
                            <a href={x.type==='interne'?`/a/CCCA REVUE/${x.article}`:x.url} key={x.id} target={x.type==='externe'?'_blank':''} rel='noreferrer' className='relative w-full flex max-md:flex-col py-5 flex-row-reverse gap-5 overflow-hidden transition-all duration-500 border-b-[1px] border-primary last-of-type:border-none cursor-pointer'>
                                <div className='w-[35%] max-md:h-[300px] relative max-md:w-full'>
                                    <img className='absolute object-cover w-full h-full rounded-md' src={x.image} alt={x.titre} />
                                </div>
                                <div className='flex flex-col max-md:items-center max-md:p-0 gap-3 max-md:gap-2 w-[65%] max-md:w-full'>
                                    <h1 className='text-[1.6rem] hover:text-secondary transition-all duration-300 max-md:text-[1.1rem] max-md:text-center font-semibold text-primary'>{x.titre}</h1>
                                    <span className='text-[1.1rem] max-md:text-center max-md:text-[.9rem] font-normal'>{x.descrip}</span>
                                    <span className='text-[.75rem] text-gray-500 font-semibold'>- {x.date}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className='flex items-center justify-center w-full pt-10'>
                        <ul className='flex gap-1 p-2'>
                            <li
                                className={`p-1 px-4 ${currentPage === 1 ? 'text-gray-400' : 'cursor-pointer'}`}
                                onClick={handlePreviousPage}
                            >
                                <ArrowLeft01Icon />
                            </li>
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <li
                                    key={index}
                                    className={`p-1 px-4 ${currentPage === index + 1 ? 'text-white bg-secondary' : 'bg-gray-300 cursor-pointer'}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </li>
                            ))}
                            <li
                                className={`p-1 px-4 ${currentPage === totalPages ? 'text-gray-400' : 'cursor-pointer'}`}
                                onClick={handleNextPage}
                            >
                                <ArrowRight01Icon />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-[27%] max-md:hidden flex flex-col gap-8'>
                    <div className='bg-primary text-white flex flex-col gap-4 px-8 py-[1.5rem]'>
                        <h3 className='text-[1.3rem] font-medium'>{t('your_choices')}</h3>
                        <span className='text-[.85rem]'>{t('publications')}</span>
                        <button
                            className='border-[1px] border-white py-1 px-4 w-full'
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedDate('');
                                setCurrentPage(1);
                            }}
                        >
                            {t('reset_choices')}
                        </button>
                    </div>
                    <Publicite />
                    <Infolettre />
                </div>
            </div>
        </Annimated>
    );
}
