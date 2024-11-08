import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo1 from '../../assets/1x/icone.png';
import { Facebook02Icon, NewTwitterIcon, Linkedin02Icon, InstagramIcon } from 'hugeicons-react';
import $ from 'jquery';

function Footer() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    
    const handleChange = (x) => {
        navigate(x);
        $(window).on('load');
    };

    return (
        <div className='bg-gray-500'>
            <div className='bg-opacity-75 text-white pt-14 pb-5 px-[5%]'>
                <div className='grid grid-cols-4 gap-3 pb-8 max-md:gap-4 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1'>
                    <div className='mt-3'>
                        <Link to={'/a'} className='flex items-center gap-2 max-md:gap-1'>
                            <img src={logo1} alt='' width={60} height={60} className='images' id="images" />
                            <div className='flex flex-col font-bold text-start'>
                                <span>{t('chamber_of_commerce')}</span>
                                <span>{t('canada_africa')}</span>
                            </div>
                        </Link>
                        <div className='flex items-center gap-2 mt-5'>
                            <Link to='#' className='w-[30px] h-[30px] flex justify-center items-center transition-all hover:scale-110'><Facebook02Icon size={20} /></Link>
                            <Link to='#' className='w-[30px] h-[30px] flex justify-center items-center transition-all hover:scale-110'><NewTwitterIcon size={20} /></Link>
                            <Link to='#' className='w-[30px] h-[30px] flex justify-center items-center transition-all hover:scale-110'><Linkedin02Icon size={20} /></Link>
                            <Link to='#' className='w-[30px] h-[30px] flex justify-center items-center transition-all hover:scale-110'><InstagramIcon size={20} /></Link>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h5 className='m-0 mb-2 text-[1.1rem] font-medium'>{t('links')}</h5>
                        <ul className='text-[.9rem] font-normal flex flex-col gap-3'>
                            <li><Link to={'/a/Devenir-membre'}>{t('become_member')}</Link></li>
                            <li><Link to={'/a/Apropos-de-nous/Présentation'}>{t('about_us')}</Link></li>
                            <li><Link to={'/a/Evenements'}>{t('our_events')}</Link></li>
                            <li><Link to={'/a/Contact'}>{t('contact')}</Link></li>
                            <li><Link to={'/a/Actualites'}>{t('news')}</Link></li>
                            <li><Link to={'/a/CCCA REVUE'}>CCCA REVUE</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <h5 className='m-0 mb-2 text-[1.1rem] font-medium'>{t('become_member')}</h5>
                        <ul className='text-[.9rem] font-normal flex flex-col gap-3'>
                            <li><Link to={'/pourquoi_devenir_membre'}>{t('why_become_member')}</Link></li>
                            <li><Link to={'/Avantage_membre'}>{t('member_benefits')}</Link></li>
                            <li><Link to={'Devenir_benevole'}>{t('become_volunteer')}</Link></li>
                            <li><Link to={'/nouvelle_des_membres'}>{t('member_news')}</Link></li>
                            <li><Link to={'/Pub'}>{t('advertising_partnership')}</Link></li>
                            <li><Link to={'/Repertoire_membre'}>{t('member_directory')}</Link></li>
                            <li><Link to={'/Outils'}>{t('tools_resources')}</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <h5 className='m-0 mb-2 text-[1.1rem] font-medium'>{t('newsletter')}</h5>
                        <span className='text-[.9rem] font-normal'>{t('newsletter_info')}</span>
                        <div className='flex items-center w-full px-1 py-1 my-3 overflow-hidden bg-white rounded-sm'>
                            <input className='px-4 py-1 text-sm rounded-sm w-[100%] outline-0 border-0' type='text' placeholder={t('enter_email')} />
                            <button className='flex items-center justify-center gap-2 px-5 py-1 text-sm rounded-sm bg-secondary'>
                                {t('subscribe')}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-3 max-md:flex-col max-md:justify-center'>
                    <span className='text-[.85rem] max-md:text-[.82rem]'>&copy; 2024 - {t('chamber_of_commerce')} {t('canada_africa')}</span>
                    <div className='flex items-center gap-4 text-[12px]'>
                        <Link className='underline' to={'/policy'}>{t('privacy_policy')}</Link>
                        <Link className='underline' to={'/plan'}>{t('site_map')}</Link>
                    </div>
                </div>
            </div>
            <div className='border-t-[1px] border-opacity-40 border-white py-4 flex justify-center items-center'>
                <NavLink className='flex gap-1 text-[.8rem] text-white text-opacity-70 items-center' to={'http://franchise-it-tech.com/'}>
                    &copy; {t('designed_by')} <span className='font-bold text-white'>Franchise-IT</span>
                </NavLink>
            </div>
        </div>
    );
}

export default Footer;
