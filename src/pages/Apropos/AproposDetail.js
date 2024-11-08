import React from 'react'
import { useParams } from 'react-router-dom'

export default function AproposDetail() {
    const { detail } = useParams()
    const datas = [
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
    return (
        <div>
            {/* <h1 className='text-[1.5rem] font-bold text-center'>{nameservice}</h1> */}
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <p className='text-[1.1rem]'>{datas?.find((x) => x.title === detail)?.descrip} </p>
                </div>
                <div>
                    <h6 className='text-[1.1rem] font-bold'>Objectifs :</h6>
                    <ul className='list-disc ps-10 mt-2'>
                        {datas?.find((x) => x.title === detail)?.objectif?.map((y) =>
                            <li>{y}</li>
                        )}
                    </ul>
                </div>

            </div>
        </div>
    )
}
