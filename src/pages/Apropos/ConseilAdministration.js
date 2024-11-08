import React from 'react';
import profile1 from '../../assets/apropos/240619_22H43-44_8721-HRres_10po@300dpi-sRgb.jpg';
import profile2 from '../../assets/apropos/IMG-20241011-WA0001.jpg';
import profile3 from '../../assets/1x/tania.jpg';
import Annimated from '../../components/Annimated';
import { Link } from 'react-router-dom';

export default function ConseilAdministration() {
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
    
    return (
        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8'>
            {data.map((x, index) => (
                <Link to={`/a/Apropos-de-nous/Conseil-d-administration/${encodeURIComponent(x.name)}`} key={index}>
                    <div className='relative h-[240px] max-md:h-[300px]'>
                        <img className='absolute top-0 left-0 object-cover object-top w-full h-full' src={x.profile} alt={x.name} />
                    </div>
                    <div className='flex flex-col items-center justify-center py-3 px-2'>
                        <h6 className='font-bold'>{x.name}</h6>
                        <span className='text-[.9rem]'>{x.titre}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
