import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Missions() {


    return (
        <>
            {/* <main> */}
            {/* <header className='relative'>
                <Swiper
                    modules={[Scrollbar, A11y, Autoplay, EffectFade]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect='fade'
                >
                    <SwiperSlide className=''>
                        <Banners
                            titre="L'expertise au service de votre Cybersécurité"
                            image={banner2}
                            descrip="Missions & Valeurs"
                        />
                    </SwiperSlide>
                </Swiper>
                <div className='absolute z-[100] top-0 w-full'>
                    <Navbar logo={logo} logos={logo1} />
                </div>
            </header> */}
            <div className="px-[10%] max-md:px-[5%] w-full py-md max-md:py-12">
                <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
                    <div className='flex items-center justify-center order-2'>
                        <div className='w-[250px] h-[250px] flex items-center justify-center bg-primary text-white rounded-[100px]'>
                            <span className='text-[2.2rem] text-center font-semibold'>Mission</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-[1.1rem] text-justify'>La Chambre de Commerce Canada-Afrique a pour mission de servir de
                            catalyseur au développement économique et commercial entre le Canada
                            et les pays africains. Nous nous engageons à faciliter les échanges
                            commerciaux, encourager les investissements mutuels, et promouvoir
                            des partenariats stratégiques. Grâce à des ressources, des formations
                            et un réseau dynamique, nous soutenons les entreprises dans leur
                            expansion et leur adaptation aux marchés locaux, tout en mettant en
                            avant l'innovation et la durabilité.</span>
                    </div>
                </div>
            </div>
            <div className="px-[10%] bg-[#F7F9F9] w-full py-md max-md:py-12">
                <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                    <div className='flex items-center justify-center'>
                        <div className='w-[250px] h-[250px] flex items-center justify-center bg-secondary text-white rounded-[100px]'>
                            <span className='text-[1.8rem] text-center font-semibold'>Nos Valeurs Fondamentales</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-5'>
                        <div className='flex items-center justify-center order-1 gap-5 max-md:flex-col'>
                            <div className='w-[47%] p-4 border-2 rounded-md border-primary'>
                                {/* <img src='' alt='#' /> */}
                                <h6 className='font-bold text-primary'>Unir</h6>
                                <span className='text-[.75rem] leading-2'>Encourager une synergie économique où les entreprises,
                                    institutions et gouvernements travaillent ensemble pour atteindre des
                                    objectifs communs</span>
                            </div>
                            <div className='w-[47%] p-4 border-2 rounded-md border-primary'>
                                <h6 className='font-bold text-primary'>Agir</h6>
                                <span className='text-[.75rem] leading-2'>Encourager une synergie économique où les entreprises,
                                    institutions et gouvernements travaillent ensemble pour atteindre des
                                    objectifs communs</span>
                            </div>
                        </div>
                        <div className='w-[47%] p-4 border-2 rounded-md border-primary'>
                            <h6 className='font-bold text-primary'>Collaborer</h6>
                            <span className='text-[.75rem] leading-2'>Encourager une synergie économique où les entreprises,
                                institutions et gouvernements travaillent ensemble pour atteindre des
                                objectifs communs</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[5%] w-full py-md max-md:py-12">
                <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
                    <div className='flex items-center justify-center order-2'>
                        <span className='text-[2.5rem] text-center text-primary font-bold'>Vision</span>
                    </div>
                    <div className='flex flex-col items-center gap-5'>
                        <span className='text-[1.1rem]'>Notre vision est de devenir le principal hub d'échanges économiques
                            entre le Canada et l'Afrique, favorisant une coopération bilatérale
                            florissante et durable. Nous aspirons à créer un écosystème où les
                            entreprises des deux régions peuvent prospérer, échanger des idées,
                            et collaborer pour relever les défis économiques et environnementaux.
                            En valorisant la langue française comme vecteur d'opportunités, nous
                            souhaitons renforcer les liens au sein de la francophonie canadienne
                            et africaine, tout en contribuant à un avenir économique inclusif et
                            prospère pour tous.</span>
                    </div>
                </div>
            </div>
        </>
    )
}
