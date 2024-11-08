import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Annimated from '../../components/Annimated'
import Banner from '../../components/Banner'
import Partenaires from '../../components/acceuil/Partenaires'
// import cmr from '../../assets/pays/cmr.jpg'
// import angol from '../../assets/pays/angola.jpg'
// import cong from '../../assets/pays/congo.jpg'
// import tchad from '../../assets/pays/tchad.jpg'
// import gabon from '../../assets/pays/gabon.jpg'
// import guineE from '../../assets/pays/guinéeEquato.jpg'
// // import centra from '../../assets/pays/c.jpg'
// import nigeria from '../../assets/pays/nigeria.jpg'
// import civ from '../../assets/pays/civ.jpg'
// import ghana from '../../assets/pays/ghana.jpg'
// import guine from '../../assets/pays/republiqGuinee.jpg'
// import rca from '../../assets/pays/rca.jpg'
// //l'est
// import burundi from '../../assets/pays/burundi.jpg'
// import ouganda from '../../assets/pays/ouganda.jpg'
// // import kenya from '../../assets/pays/zamb.jpg'
// import alge from '../../assets/pays/algerie.jpg'
// import maroc from '../../assets/pays/maroc.jpg'
// import tunisie from '../../assets/pays/tunisie.jpg'
// import madag from '../../assets/pays/madagascar.jpg'

export default function ListActivite() {

    const data = [
        {
            title: 'Plateforme d’Échange Commercial',
            descrip: "Création d'une plateforme numérique qui met en relation les entreprises canadiennes et africaines.Cette plateforme pourrait permettre le partage d'informations sur les produits, services, opportunités d'investissement et projets en cours.",
            objectif: ["Faciliter les transactions et renforcer les partenariats."],
        },
        {
            title: 'Webinaires et Ateliers de Formation',
            descrip: "Organisation de webinaires sur des sujets clés tels que l'entrée sur le marché, la culture d'affaires, la législation locale et les pratiques commerciales durables.",
            objectif: ["Fournir des ressources et des conseils pratiques aux entreprises souhaitant naviguer entre les marchés canadien et africain."],
        },
        {
            title: 'Missions Commerciales',
            descrip: "Organisation de missions commerciales régulières, tant au Canada qu’en Afrique, pour permettre aux entreprises de rencontrer des partenaires potentiels et de découvrir les marchés locaux.",
            objectif: ["Encourager les investissements mutuels et renforcer les relations d'affaires"],
        },
        {
            title: 'Foires et Salons Professionnels',
            descrip: "Organisation ou participation à des salons commerciaux pour mettre en avant les entreprises des deux régions.Cela pourrait inclure des stands, des présentations et des opportunités de réseautage.",
            objectif: ["Accroître la visibilité et la réputation des entreprises participantes."],
        },
        {
            title: 'Programme de Mentorat',
            descrip: " Mise en place d'un programme de mentorat reliant des entreprises établies avec des start- ups ou des PME souhaitant se développer à l'international.",
            objectif: ["Créer un réseau solide et favoriser le partage d'expériences."],
        },
        {
            title: 'Initiatives d’Innovation et de Durabilité',
            descrip: " Soutien à des projets innovants et durables, par exemple à travers des concours d’innovation ou des incubateurs d'entreprises axés sur des solutions aux défis économiques et environnementaux.",
            objectif: [" Promouvoir l'innovation et les pratiques commerciales durables."],
        },
        {
            title: 'Forum Annuel des Affaires Canada Afrique',
            descrip: "Organisation d'un forum annuel rassemblant des leaders d’opinion, des entrepreneurs et des représentants gouvernementaux des deux régions pour discuter des opportunités économiques et des défis à surmonter.",
            objectif: ["Renforcer la coopération et favoriser les échanges d’idées."],
        },
        {
            title: 'Publications et Ressources Éducatives',
            descrip: "Création de rapports, d'études de marché et de guides pratiques sur les secteurs clés pour le commerce et l’investissement entre le Canada et l'Afrique.",
            objectif: ["Fournir des ressources et des conseils aux entreprises."],
        },
        {
            title: 'Réseaux Sociaux et Communication',
            descrip: " Utilisation des réseaux sociaux pour promouvoir les entreprises, partager des success stories et informer sur les événements et opportunités.",
            objectif: ["Renforcer la visibilité et l'attractivité des entreprises des deux régions."],
        },
        {
            title: 'Soutien à la Francophonie',
            descrip: "Développement d'initiatives spécifiques pour promouvoir les échanges au sein de la francophonie, comme des événements bilingues ou des projets visant à valoriser la langue française dans le contexte des affaires.",
            objectif: ["Favoriser un développement inclusif et la création d’un réseau francophone solide."],
        },
    ]
    // console.log(data?.find((x) => x.pays === nation)?.datas?.find((x) => x.titre === zone)?.pays)
    return (
        <Annimated>
            <Banner title={'Nos Activités'} />
            <div className='p-[5%] flex py-14 flex-col gap-6'>
                <span className='text-[1.5rem] max-md:text-[1.1rem] font-semibold text-center'>Dans un monde interconnecté, la Chambre de Commerce Canada-Afrique se
                    positionne en tant que catalyseur de collaboration, mettant en avant
                    des activités innovantes qui favorisent les échanges fructueux entre
                    nos deux régions.
                </span>

                <div className='w-full max-md:overflow-x-auto overflow-y-hidden'>
                    <table className='table w-full max-md:w-[900px]'>
                        <thead className='border-[1px] bg-gray-200 border-primary'>
                            <th className='w-[30%] p-2'>Activité</th>
                            <th className='w-[40%] border-x-[1px] border-primary p-2'>Description</th>
                            <th className='w-[30%] p2'>Objective(s)</th>
                        </thead>
                        <tbody className='w-full border-x-[1px] border-primary'>
                            {data.map((x, index) =>
                                <tr key={index} className='border-b-[1px] border-primary'>
                                    <td className='w-[30%] p-5 font-semibold text-primary'>{x.title}</td>
                                    <td className='w-[40%] font-medium bg-green-200 border-x-[1px] border-primary p-5'>{x.descrip}</td>
                                    <td className='w-[30%] p-5 bg-red-200'>
                                        <ul className='mt-1'>
                                            {x?.objectif?.map((y, ind) =>
                                                <li key={ind}>{y}</li>
                                            )}
                                        </ul>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Partenaires />
        </Annimated>
    )
}
