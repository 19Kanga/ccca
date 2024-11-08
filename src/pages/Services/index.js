import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';
// import banner2 from '../../assets/background.jpg'
import {ArrowRight02Icon} from 'hugeicons-react'
import Banner from '../../components/Banner';
import Annimated from '../../components/Annimated';

export default function Services() {
    // const Banners = (props) => {
    //     const { image, descrip } = props
    //     return (
    //         <div className='relative h-[400px] max-md:h-[250px] bg-opacity-45 bg-primary'>
    //             <img src={image} className='object-cover w-full h-full' alt='' />
    //             <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 max-md:bg-opacity-50'></div>
    //             <div className='absolute w-[100%] top-[50%] text-start -translate-y-[50%] bg-red z-[200] text-white flex flex-col px-[4%]'>
    //                 {/* <h1 className='text-deco'>{marque}</h1> */}
    //                 <div className='flex flex-col w-full max-md:justify-center'>
    //                     {/* <h1 className='mb-1 mt-1 text-[2rem] font-bold'>{titre}</h1> */}
    //                     <span className='text-[3.7rem] max-lg:text-[2rem] max-md:text-[1.6rem] text-center font-bold'>{descrip}</span>
    //                 </div>
    //                 {/* <Link className='font-medium text-[15px]' href={'#'}>READ MORE</Link> */}
    //             </div>
    //         </div>
    //     )
    // }

    const data = [
        {
            titre: 'Coaching d\'entreprise',
            descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
            titre: 'Conseil aux entreprises',
            descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
            titre: 'Exécution de projets',
            descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        // {
        //     titre: 'Conseils aux gouvernements',
        //     descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        // },
        {
            titre: 'Mise à disposition de profils',
            descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
            titre: 'Gestion des événements',
            descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
            titre: 'Gestion du changement',
            descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        }
    ]
    return (
        <Annimated>
            <Banner title={'Services'} />
            <div className="px-[5%] w-full py-md max-md:py-12">
                {/* <p className='text-[1.8rem] font-semibold text-primary max-md:text-[1rem] text-center'>Lorem Ipsum is simply dummy text of</p> */}
                <div className='grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1'>
                    {data?.map((x, index) =>
                        <div key={index} className='relative transition-all duration-500 hover:scale-105 flex flex-col gap-2 rounded-lg shadow-lg cursor-pointer shadow-slate-200 p-14 pb-lg'>
                            <h1 className='text-[1.2rem] text-primary text-center'>{x.titre}</h1>
                            <span className='font-medium text-center opacity-75'>{x.descrip}</span>
                            <div className='absolute w-[50px] h-[50px] shadow-gray-200 bottom-6 left-1/2 -translate-x-1/2 rounded-[50px] shadow-sm flex justify-center items-center'>
                                <ArrowRight02Icon />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Annimated>
    )
}
