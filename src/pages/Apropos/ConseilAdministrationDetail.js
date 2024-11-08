import React from 'react';
import { useParams } from 'react-router-dom';
import profile1 from '../../assets/apropos/240619_22H43-44_8721-HRres_10po@300dpi-sRgb.jpg';
import profile2 from '../../assets/apropos/IMG-20241011-WA0001.jpg';
import profile3 from '../../assets/apropos/240619_20H36-48_8490-HRres_10po@300dpi-sRgb.jpg';
import Annimated from '../../components/Annimated';
import Infolettre from '../../components/Infolettre';

export default function ConseilAdministrationDetail() {
    const { name } = useParams();
    const data = [
        {
            profile: profile1,
            name: 'Dr. Armand NGAKETCHA',
            titre: 'Président de la CCCA'
        },
        {
            profile: profile2,
            name: 'Karl Miville de Chêne',
            titre: 'Vice-Président de la CCCA'
        },
        {
            profile: profile3,
            name: 'Tania Louis',
            titre: 'Sécrétaire Générale'
        },
    ];

 
    const actualite = data.find((item) => item.name === decodeURIComponent(name));

    if (!actualite) {
        return <div className='px-[5%] py-14'>Information non trouvée.</div>;
    }

    return (
        <Annimated>
            <div className='px-[5%] py-12 flex gap-[3rem]'>
                <div className='flex flex-col w-[75%] gap-6 max-w-screen-lg max-md:w-full'>
                    <div className='relative h-[400px] max-md:h-[300px]'>
                        <img className='object-cover object-top w-full h-full rounded-md' src={actualite.profile} alt={actualite.name} />
                    </div>
                    <h1 className='text-[2rem] font-bold text-primary max-md:text-[1.2rem]'>{actualite.name}</h1>
                    <p className='text-[1.1rem] text-gray-700 leading-relaxed'>{actualite.titre}</p>
                </div>

                <div className='w-[25%] max-md:hidden flex flex-col gap-8'>
                    <Infolettre />
                </div>
            </div>
        </Annimated>
    );
}
