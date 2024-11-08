import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Annimated from '../../components/Annimated'
import Banner from '../../components/Banner'
import cmr from '../../assets/pays/cmr.jpg'
import angol from '../../assets/pays/angola.jpg'
import cong from '../../assets/pays/congo.jpg'
import tchad from '../../assets/pays/tchad.jpg'
import gabon from '../../assets/pays/gabon.jpg'
import guineE from '../../assets/pays/guineeEquato.jpg'
// import centra from '../../assets/pays/c.jpg'
import nigeria from '../../assets/pays/nigeria.jpg'
import civ from '../../assets/pays/civ.jpg'
import ghana from '../../assets/pays/ghana.jpg'
import guine from '../../assets/pays/republiqGuinee.jpg'
import rca from '../../assets/pays/rca.jpg'
//l'est
import burundi from '../../assets/pays/burundi.jpg'
import ouganda from '../../assets/pays/ouganda.jpg'
// import kenya from '../../assets/pays/zamb.jpg'
import alge from '../../assets/pays/algerie.jpg'
import maroc from '../../assets/pays/maroc.jpg'
import tunisie from '../../assets/pays/tunisie.jpg'
import madag from '../../assets/pays/madagascar.jpg'

export default function Zone() {
    const { zone,nation } = useParams()
    const data = [
        {
            pays: 'Afrique',
            datas: [
                {
                    titre: 'Afrique Centrale',
                    pays: [
                        {
                            nom: 'Cameroun',
                            link: cmr
                        },
                        {
                            nom: 'Angola',
                            link: angol
                        },
                        {
                            nom: 'Congo',
                            link: cong
                        },
                        {
                            nom: 'Tchad',
                            link: tchad
                        },
                        {
                            nom: 'Gabon',
                            link: gabon
                        },
                        {
                            nom: 'Guinée équatoriale',
                            link: guineE
                        },
                        {
                            nom: 'République Centrafricaine',
                            link: rca
                        }
                    ]
                },
                {
                    titre: 'Afrique de l\'Ouest',
                    pays: [
                        {
                            nom: 'Nigeria',
                            link: nigeria
                        },
                        {
                            nom: 'Burkina Faso',
                            link: '#'
                        },
                        {
                            nom: 'Cap-vert',
                            link: '#'
                        },
                        {
                            nom: 'Côte d\'ivoire',
                            link: civ
                        },
                        {
                            nom: 'Gambie',
                            link: '#'
                        },
                        {
                            nom: 'Ghana',
                            link: ghana
                        },
                        {
                            nom: 'Guinée',
                            link: guine
                        },
                        {
                            nom: 'Guinée-Bissau',
                            link: '#'
                        },
                        {
                            nom: 'Libéria',
                            link: '#'
                        },
                        {
                            nom: 'Mali',
                            link: '#'
                        }
                    ]
                },
                {
                    titre: 'Afrique de L\'est',
                    pays: [
                        {
                            nom: 'Burundi',
                            link: burundi
                        },
                        {
                            nom: 'Kenya',
                            link: '#'
                        },
                        {
                            nom: 'Djibouti',
                            link: '#'
                        },
                        {
                            nom: 'Malawi',
                            link: '#'
                        },
                        {
                            nom: 'Maurice',
                            link: '#'
                        },
                        {
                            nom: 'Mozambique',
                            link: '#'
                        },
                        {
                            nom: 'Rwanda',
                            link: '#'
                        },
                        {
                            nom: 'Ouganda',
                            link: ouganda
                        },
                        {
                            nom: 'Zambie',
                            link: '#'
                        }
                    ]
                },
                {
                    titre: 'Afrique du Nord',
                    pays: [
                        {
                            nom: 'Algérie',
                            link: alge
                        },
                        {
                            nom: 'Ègypte',
                            link: '#'
                        },
                        {
                            nom: 'Lybie',
                            link: '#'
                        },
                        {
                            nom: 'Maroc',
                            link: maroc
                        },
                        {
                            nom: 'Mauritanie',
                            link: '#'
                        },
                        {
                            nom: 'Soudan',
                            link: '#'
                        },
                        {
                            nom: 'Tunisie',
                            link: tunisie
                        }
                    ]
                },
                {
                    titre: 'Afrique Australe',
                    pays: [
                        {
                            nom: 'Botswana',
                            link: '#'
                        },
                        {
                            nom: 'Lesotho',
                            link: '#'
                        },
                        {
                            nom: 'Namibie',
                            link: '#'
                        },
                        {
                            nom: 'Suaziland',
                            link: '#'
                        },
                        {
                            nom: 'Afrique du Sud',
                            link: '#'
                        }
                    ]
                },
                {
                    titre: 'Océan Indien',
                    pays: [
                        {
                            nom: 'Comore',
                            link: '#'
                        },
                        {
                            nom: 'Madagascar',
                            link: madag
                        }
                    ]
                }
            ]
        },
        {
            pays: 'Canada',
            datas: [
                {
                    titre: 'Alberta',
                },
                {
                    titre: 'Colombie-Britannique',
                },
                {
                    titre: 'Île-du-Prince-Édouard',
                },
                {
                    titre: 'Manitoba',
                },
                {
                    titre: 'Nouvelle-Écosse',
                },
                {
                    titre: 'Québec',
                },
                {
                    titre: 'Saskatchewan',
                },
                {
                    titre: 'Terre-Neuve-et-Labrador',
                }
            ]
        }
    ]

    // console.log(data?.find((x) => x.pays === nation)?.datas?.find((x) => x.titre === zone)?.pays)
    return (
        <Annimated>
            <Banner title={zone} />
            <div className='text-center p-[5%] grid grid-cols-4 gap-7 max-md:gap-4 max-lg:grid-cols-3 max-md:grid-cols-2'>
                {data?.find((x,index)=>x.pays===nation)?.datas?.find((x)=>x.titre===zone)?.pays?.map((y,index)=>
                <NavLink key={index} to={`/a/Bureau/${nation}/${zone}/${y.nom}`} className='flex flex-col items-center justify-center gap-2 py-5 transition-all duration-500 rounded-md shadow hover:scale-105 shadow-slate-400'>
                    <img className='h-[120px] max-md:w-[150px] max-md:h-[80px] w-[200px] object-cover' src={y.link} alt='' />
                    <span className='font-semibold text-[1.2rem]'>{y.nom}</span>
                </NavLink>
                )}
            </div>
        </Annimated>
    )
}
