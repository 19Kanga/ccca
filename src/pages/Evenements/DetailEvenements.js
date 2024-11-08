import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import BannerEvenement from '../../components/BannerEvenement';

import $ from 'jquery'
// import event from '../../assets/apropos/240619_20H48-49_8508-HRres_10po@300dpi-sRgb.jpg'
import imag2 from '../../assets/apropos/imag2.png'
import imag3 from '../../assets/apropos/imag3.png'
import imag7 from '../../assets/apropos/imag7.webp'
import imag8 from '../../assets/1x/pretexte.jpg'
import imag9 from '../../assets/1x/enjeux.jpg'
import imagM from '../../assets/banner_maison.jpg'
import imag10 from '../../assets/1x/samuca.jpg'
import imag11 from '../../assets/1x/sicaf.jpg'
import { ArrowRight01Icon, CheckListIcon } from 'hugeicons-react';
import Infolettre from '../../components/Infolettre';
import doc from '../../assets/pays/sicaf.pdf'
import doc1 from '../../assets/1x/samuca.pdf'
import bois from '../../assets/1x/bois1.jpg'
import bois1 from '../../assets/1x/artisan.jpg'
import Publicite from '../../components/Publicite';
import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cteq from '../../assets/1x/cteq.webp'
import quebec from '../../assets/1x/quebec.png'
import pn from '../../assets/1x/pn.svg'
import chambers from '../../assets/1x/chambers.avif'
import fga from '../../assets/1x/fga.svg'
import fit from '../../assets/fit.png'
import hec from '../../assets/hec.svg'
import ifpf from '../../assets/ifpf.png'

export default function DetailEvenements() {
  const { id } = useParams();
  const { t } = useTranslation();

  const data = [
    {
      id: 1,

      title: 'Salon de la Construction Durable et de la  Transformation du Bois : Bâtir un futur souhaité',
      thumbnail: '',
      date: '29 Avril - 01 Mai 2025',
      lieux: 'Québec',
      descrip: "Le Salon de Construction Durable et Transformation du Bois, prévu pour novembre 2025, sera un événement international majeur réunissant des acteurs clés des secteurs de la construction et de la transformation du bois provenant du Canada et de plusieurs pays d’Afrique. Cet événement se tiendra sous le thème “Innovations, Développement Durable et Coopération Internationale”.",
      image: bois,
      corps: [
        {
          titre: t('objectives_title'),
          detail: {
            libelle: t('objectives_intro'),
            descrip: [
              t('objective1'),
              t('objective2'),
              t('objective3')
            ],
            profile: bois1
          }
        },
        {
          titre: t('why_participate'),
          detail: {

            libelle: '',
            descrip: [
              "Opportunités d’affaires : Le salon est une plateforme pour établir des relations commerciales solides entre les entreprises canadiennes et africaines, ouvrant la voie à des projets conjoints dans les domaines du bâtiment et de l’industrie du bois.",
              'Découvertes d’innovations : Des solutions novatrices en construction écologique et en transformation du bois seront présentées, incluant des démonstrations de technologies vertes et des panels sur l’utilisation des matériaux renouvelables.',
              'Échanges d’expertise : Participez à des conférences et ateliers animés par des experts de renommée mondiale, où seront abordés les sujets liés à la durabilité environnementale, l’économie circulaire, et la valorisation des ressources forestières.'
            ],
            profile: bois
          }
        },
        {
          titre: 'Thèmes Majeurs',
          detail: {
            libelle: '',
            descrip: [
              "Gestion durable des forêts et certification environnementale",
              'Techniques de construction en bois et impact carbone',
              'Valorisation des déchets de bois et économie circulaire',
              "Financement des projets durables"
            ],
            profile: bois1
          }
        },
        {
          titre: 'Un Événement Clé pour le Futur',
          detail: {
            libelle: 'Cet événement se distingue par son approche intercontinentale qui encourage la coopération Sud-Nord et la co-création de solutions adaptées aux défis climatiques mondiaux. Le Canada, fort de son savoir-faire dans la gestion durable des forêts et la construction en bois, collaborera avec les pays africains pour favoriser un développement harmonieux et respectueux de l’environnement.',
            descrip: [
            ],
            profile: ''
          }
        },
        {
          titre: '',
          detail: {
            libelle: 'Ce salon sera une occasion unique pour les professionnels de la construction et de la transformation du bois d’échanger, d’apprendre et de construire ensemble un avenir plus durable pour l’industrie.',
            descrip: [
            ],
            profile: ''
          }
        }
      ]
    },
    {
      id: 2,
      title: 'Salon des Municipalités Canada - Afrique (SAMUCA)',
      abrrev: 'La SAMUCA',
      thumbnail: doc1,
      date: 'Avril 2025',
      lieux: 'Canada',
      descrip: "Le SAMUCA est un concept exclusif de Franchise Opportunités Canada , (FOC) Inc.. Il a été pensé et mûri avec le concours de la Chambre de Commerce Canada-Afrique (La CCCA), afin de répondre à une problématique spécifique bilatérale : Comment résoudre, au Canada, d’une part, le problème crucial de la main d’œuvre dans les entreprises municipales ainsi que des débouchées économiques et comment, d’autre part, répondre à l’enjeu de développement et de modernisation des communes en Afrique francophone spécialement, grâce à des coopérations de jumelage, d’appui à la formation et la gestion communale ainsi qu’au renforcement des capacités de gouvernance locale et l’incitation aux investissements internationaux et/ou partenariats publics-privés (PPP). Le choix du Canada et des pays d’Afrique francophone et Anglephone est lié à une vision fédératrice sous le paradigme de la francophonie institutionnelle. Le SAMUCA se donne pour ambition de faire de cette foire des municipalités, un moment unique de partage des expériences urbaines (ou rurales), culturelles et économiques entre le CANADA et l’Afrique francophone. Tracer le premier pôle de coopération internationale directe et institutionnelle entre le Canada et l’ensemble des pays d’Afrique Francophone et Anglephone.",
      image: imag2,
      corps: [
        {
          titre: 'Contexte',
          detail: {
            libelle: 'Au Canada, le Ministère des Municipalités et de l’Habitation incarne une vision globale et intégrée du fonctionnement et du développement des Municipalités, des MRC et des ARK. Par contre, des organismes comme la Fédération Québécoise des Municipalités et l’Union Québécoise des Municipalités participent respectivement à une cohésion inter-municipale ainsi qu’à une valorisation des potentiels économiques et culturels des municipalités québécoises à travers notamment le Salon PMEs Municipales (FQM), la Semaine de la Municipalité et le Collaboratoire Uni-cité (UQM). De l’autre côté, en Afrique francophone, les Communes, comme on les appelle, commencent seulement tout doucement à s’émanciper des tutelles politiques du pouvoir central. La mise en place des Ministères de la Décentralisation et l’Aménagement du territoire au Sénégal, en Côte d’Ivoire, au Burkina-Faso, en République Démocratique du Congo, au Gabon et au Cameroun, participe à cette nouvelle approche de gouvernance territoriale axée sur le développement et l’autonomie des Communes. Suivant cette approche, la majorité de ces pays d’Afrique francophone s’est dotée d’une organisation supra-communale : l’Association des Maires du Sénégal (AMS), l’Union des Villes et Communes de Côte d’Ivoire (UVICOCI), l’Association des Municipalités du Burkina Faso (AMBF), l’Association nationale des villes et communes de la RDC (ANVC/RDC), l’Association des Maires du Gabon (AMG) et les Communes et Villes Unies du Cameroun (CVUC).',
            descrip: [
            ],
            profile: imag10
          }
        },
        {
          titre: 'Pretexte',
          detail: {
            libelle: '',
            descrip: [
              "Le développement local, l’aménagement du territoire, l’amélioration des conditions de vie des populations et l’appui aux entreprises sont devenus des missions centrales et prioritaires des organismes municipaux à travers le monde. Unité administrative et politique la plus proche des populations, la Municipalité doit être au cœur même de la vie sociale de chaque citoyen. Afin de favoriser cet état de chose, les municipalités développent des projets, des formations, des accompagnements, des partenariats ainsi que des investissements. Dans le cadre des partenariats et de la coopération internationale, c’est le modèle des jumelages qui a toujours prévalu. Mais aujourd’hui, ce modèle doit être amélioré en mettant plus en avant l’idée des municipalités comme unité publique de création d’opportunités d’PMEs ou de partenariats économiques décentralisés. Les subventions ainsi que les subsides des gouvernements centraux ne permettent plus de répondre aux exigences de développement local et d’autonomisation des municipalités. Il faut donc se tourner vers des partenariats économiques et surtout vers la coopération internationale, afin de rendre possible des opportunités de développements économiques et commerciaux entre d’une part, les municipalités du Québec et les municipalités d’Afrique francophone ; mais surtout d’autre part, entre les entreprises qui sont soit des agences municipales soit alors qui évoluent au sein du territoire municipal comme des facteurs de croissance locaux."
            ],
            profile: imag8
          }
        },
        {
          titre: 'Déroulement',
          detail: {
            libelle: 'Ce Salon va se tenir chaque deux ans, avec une alternance entre les zones d’intérêt. Par exemple, une édition, notamment la première, se tiendra dans une ville de la province du Québec. L’édition suivante, le SAMUCA se tiendra plutôt dans une ville africaine francophone partenaire. Il s’agira d’un salon B2B entre des interlocuteurs, des conférences thématiques, des ateliers ou séminaires de renforcement de la gouvernance publique, des keynotes,',
            descrip: [

            ],
            profile: ''
          }
        },
        {
          titre: 'Enjeux',
          detail: {
            libelle: 'De part et d’autre, les enjeux sont centrée sur :',
            descrip: [
              "le développement local ; comment optimiser la qualité de vie des populations, comment renforcer les stratégies de croissance, comment résoudre le problème de la main d’œuvre et du chômage, comment faire des entreprises locales des facteurs de croissance économique intégrée, comment rendre opérationnel le principe d’autonomie globale des régions ?",
              "l’aménagement du territoire ; comment rendre adéquat l’offre infrastructurel par rapport à la demande populationnelle sans cesse croissante et hétéroclite, comment résoudre le problème de l’accès aux logements de qualité, l’accès à l’eau potable, aux infrastructures sanitaires et aux ressources disponibles ?",
              "Le développement durable ; comment formuler les exigences de développement dans la préservation de l’environnement, comment optimiser la gestion et le traitement des déchets ménagers et des eaux usées, comment construire des édifices publiques et domestiques durables, comment reboiser ou préserver la biodiversité local ?",
              "L’inter-communalité ; comment rationaliser des jumelages effectifs, prolifiques et productifs, comment rendre possible des échanges de services ainsi des ressources humaines, techniques, et opérationnelles ?"
            ],
            profile: imag9
          }
        },
        {
          titre: 'Objectifs',
          detail: {
            libelle: '',
            descrip: [
              "Faciliter une mise en relation et une collaboration entre les municipalités québécoises et les municipalités africaines",
              "Favoriser une coopération décentralisée internationale",
              "Faire des municipalités un levier de la coopération économique et commerciale entre le Canada en général, le Québec en particulier, et les pays d’Afrique Francophone à travers des agences municipales ou des entreprises locales.",
              "Travailler à l’élaboration d’une convention inter-municipalité Cnada-Afrique Francophone, permettant des échanges multisectoriels",
              "Créer un Réseau des Municipalités Cananda-Afrique francophone (RMCAF)"
            ],
            profile: ''
          }
        }
      ]
    },
    {
      id: 3,
      title: 'Salon International du Café Africain (SICAF)',
      thumbnail: doc,
      abrrev: 'La SICAF',
      date: '02 - 04 juillet 2025',
      lieux: 'Canada',
      descrip: "Nous sommes enchantés de vous accueillir au Salon International du Café Africain, un événement exceptionnel dédié à célébrer la passion et l'art du café. Ce salon se déroulera dans l’une des belles provinces du CANADA, reconnue pour sa riche culture francophone et son dynamisme économique. \n\nLe SICAF est une occasion unique de rassembler des professionnels, des producteurs, des torréfacteurs et des passionnés de café du monde entier. Ensemble, nous explorerons les tendances actuelles, partagerons des connaissances et créerons des opportunités de collaboration dans cette industrie en constante évolution.\n\tNous vous invitons à plonger dans un univers riche en saveurs, en innovations et en échanges stimulants.Préparez - vous à découvrir des exposants de premier plan, à participer à des conférences inspirantes et à élargir votre réseau professionnel.\n\tBienvenue au Salon International du Café au CANADA, où chaque fève raconte une histoire.",
      image: imag3,
      corps: [
        {
          titre: 'Qu\'est- ce que le Salon international du Café Africain? ',
          detail: {
            libelle: 'Le Salon International du Café (SICAF), qui se tiendra pour la première fois au Canada, est une plateforme unique dédiée à la promotion du café africain. Cet événement vise à sensibiliser le marché canadien aux richesses inexplorées du café africain et à encourager les transformateurs et distributeurs canadiens à explorer ce marché prometteur.',
            descrip: [
            ],
            profile: imag11
          }
        },
        {
          titre: 'Notre vision',
          detail: {
            libelle: '',
            descrip: [
              "Nous visons à établir des partenariats solides et fructueux, combinant à la fois des contributions de contenu et un soutien financier. Ce document explore les différentes possibilités de coopération, adaptées à votre image et à vos objectifs.",
              "Le Canada, avec ses grandes régions métropolitaines de plus de 8, 5 millions d'habitants, représente une plateforme d'accès idéale au marché nordaméricain. C'est également un carrefour majeur pour les événements et congrès internationaux.",
              "Ainsi, il est évident que le Canada habitué aux grands rendez - vous, est une destination privilégiée pour accueillir la première édition canadienne du Salon International du Café Africain (SICAF)."
            ],
            profile: ''
          }
        }
      ]
    }
    ,
    {
      id: 4,
      title: t('event_title4'),
      thumbnail: '',
      date: 'Mai 2025',
      lieux: 'Canada',
      descrip: "Dans le cadre du programme de perfectionnement des capacités des Dirigeants et des Entrepreneurs(PPCDE), la Chambre de Commerce Canada Afrique et la société de développement d'affaires Franchise Opportunités Canada Inc. ont établi un partenariat stratégique avec le HEC de Montréal, l'Université LAVAL, le Collège Boréal et l'Ecole Nationale d'Administration Pulique; pour permettre aux dirigeants, cadres d'entreprise privés et publiques de suivre des formations de perfectionnement, de courte durée, au canada.",
      image: imag7,
      corps: [
        {
          titre: 'Contexte',
          detail: {
            libelle: "Le PPCDE s'appuie sur des formations taillées sur mesure et repondant aux besoins de performance et d'innovation des entreprises dans un écosystème de compétitivité et de croissance. L'ensemble des formations proposées repose sur un format de courte durée(1 à 5 jours), et est offert en mode présentiel.La formation est assortie d'une attestation ou d'un certificat de formation délivrée par l'institution d'enseignement supérieur choisie.",
            descrip: [
            ],
            profile: imagM
          }
        },
        {
          titre: 'Pretexte',
          detail: {
            libelle: "Le PPCDE obéit à une politique de cohorte de formations. il est conçu suivant les besoins de formation d'une entreprise et est modulable en fonction de l'effectif de la cohorte et de certaines exigences spécifiques propres à l'entreprise ou à l'organisation.",
            descrip: [
            ],
            profile: ''
          }
        },
        {
          titre: 'Déroulement',
          detail: {
            libelle: "Le PPCDE repose sur 3 volets qui permettent d'optimiser le séjour de chaque dirigeant, cadre ou entrepreneur au Canada: la formation, les Affaires et le tourisme.",
            descrip: [
              "le 1er volet se deroulesur une période de déterminée par l'école de formation choisie;",
              "le 2nd volet est organisé par la Chambre de Commerce Canada Afrique et permet à la cohorte ou l'entreprise de découvrir des opportunités d'affaires exceptionnelles au canada notamment à travers des opportunités de partenariat BtoB, BtoC, BtoG; l'investissement direct, la création d'une filiale et le repreneuriat",
              "le 3éme volet est coordonné par Franchise Opportunités Canada Inc. et vise à faire découvrir une region du Canada autour d'échanges interculturels entre la cohorte et les Canadiens.",
            ],
            profile: imag9
          }
        }
      ]
    }
  ];

  const partenaire = [
    {
      link: 'https://ctequebec.com/',
      image: cteq,
    },
    {
      link: 'https://www.quebecinternational.ca/',
      image: quebec,
    },
    {
      link: 'https://www.printempsnumerique.ca/',
      image: pn,
    },
    {
      link: 'https://canadaafrica.ca/',
      image: chambers,
    },
    {
      link: 'https://fedefranco.ca/',
      image: fga,
    },
    {
      link: 'http://franchise-it-tech.com/',
      image: fit,
    },
    {
      link: 'https://www.hec.ca/',
      image: hec,
    },
    {
      link: 'http://franchise-it-tech.com/',
      image: ifpf,
    }
  ]


  const info = data.find((x) => x.id === parseInt(id));
  const Tableau = ({head,corp}) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="text-white bg-blue-900">
              {head?.map((x) =>
                <th className="px-4 py-2 border">{x}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {corp?.map((x)=>
            <tr className="border relative">
              {x?.map((y) =>
                y?.libelle!==null?
                <td className='border px-4 py-2 text-[0.85rem]'>
                    {y.libelle}
                </td> :
                <td>
                  {y?.list?.map((z) =>
                      <tr colSpan={y?.list?.length} className='border-b last-of-type:border-b-0'><td className='px-4 py-2 text-[0.85rem]'>{z}</td></tr>
                  )}
                </td> 
              )}
            </tr>
            )}
            {/* Ajouter les autres lignes de la même manière */}
          </tbody>
        </table>
      </div>
    )
  }

  const offre = [
    {
      type: 'Formule à la carte',
      head: [
        'N°',
        'Supports',
        'Caractéristiques',
        'Qte',
        'Montant',
        'Avantages'
      ],
      body: [
        [{libelle:'01'}, {libelle:'Affiches'}, {libelle:'Format A0'}, {libelle:''}, {libelle:'2000 $CAD'}, {libelle:'Proximité assurée Forte Visibilité Economique'}],
        [{libelle:'02'}, {libelle:'Affichettes'}, {libelle:'40*60 cm'}, {libelle:''}, {libelle:'2000 $CAD'}, {libelle:'Proximité assurée Forte Visibilité Economique'}],
        [{ libelle: '03' }, { libelle: 'Banderoles' }, { libelle: null, list: ['Double face impression numérique', "Une face : - Entrée principale site de l’évènement - Dans les salles de conférence"] }, { libelle: '' },
          { libelle: null, list: ['Extrémité 2000 $CAD', '1000 $CAD'] }, { libelle: 'Très forte visibilité dans les points urbains à forte audience Forte visibilité sur le site de l’évènement et partout où l’affichage sera fait' }],
        [{ libelle: '04' }, { libelle: 'Cartons d’invitations' }, { libelle: '' }, { libelle: '' }, { libelle: '2000 $CAD' }, { libelle: 'Vous offre une grande visibilité' }],
        [{ libelle: '05' }, { libelle: 'Catalogue officiel' }, {
          libelle: null, list: ['1ère de couverture', '3ème de couverture', '2ème de couverture', 'Page intérieure droite', 'Page intérieure gauche', '½ page', '¼ page','bandeau'] }, { libelle: '' },
          { libelle: null, list: ['5000 $CAD', '4000 $CAD', '3000 $CAD', '2000 $CAD', '1700 $CAD', '1000 $CAD', '500 $CAD', '350 $CAD'] }, {
            libelle: 'Facilite la conservation Forte visibilité Augmentation de votre notoriété pendant et après l’évènement'
          }],
        [{ libelle: '06' }, { libelle: 'Fond et avant du podium Cérémonie d’ouverture' }, { libelle: '' }, { libelle: '' }, { libelle: '2000 $CAD' }, { libelle: '' }],
        [{ libelle: '07' }, { libelle: 'Dérouleurs muraux' }, { libelle: '' }, { libelle: '' }, { libelle: '1000 $CAD' }, { libelle: '' }],
        [{ libelle: '08' }, { libelle: 'Habillement des hôtesses' }, { libelle: '' }, { libelle: '' }, { libelle: '5000 $CAD' }, { libelle: '' }],
        [{ libelle: '09' }, { libelle: 'Spots radio' }, { libelle: '' }, { libelle: '' }, { libelle: '3000 $CAD' }, { libelle: '' }],
        [{ libelle: '10' }, { libelle: 'Spots TV' }, { libelle: '' }, { libelle: '' }, { libelle: '3000 $CAD' }, { libelle: '' }],
        [{ libelle: '11' }, { libelle: 'Stand d’exposition' }, {
          libelle: null, list: ['Catégorie A : 36m²', 'Catégorie B : 24m²', 'Catégorie C : 18m²', 'Catégorie D : 9m²', 'Table et chaise']
        }, { libelle: '' },
          { libelle: null, list: ['1500 $CAD', '1000 $CAD', '700 $CAD', '500 $CAD', '500 $CAD'] }, {
            libelle: ''
          }],
        [{ libelle: '12' }, { libelle: 'Polos (exclusivité)' }, { libelle: '' }, { libelle: '' }, { libelle: '3000 $CAD' }, { libelle: 'Forte visibilité de la marque' }],
        [{ libelle: '13' }, { libelle: 'T-shirt' }, { libelle: '' }, { libelle: '' }, { libelle: '2000 $CAD' }, {
          libelle: 'Assurer une très grande notoriété'
        }],
        [{ libelle: '14' }, { libelle: 'Casquettes' }, { libelle: '' }, { libelle: '' }, { libelle: '4000 $CAD' }, {
          libelle: 'Facilité de conservation Forte visibilité'
        }],
      ]
    },
    {
      type: 'Package'
    },

  ]
  console.log(offre.filter((x) => x.type === "Formule à la carte")[0].body)

  $(function () {
    let toggleValue = false;
    $(document).on('click', '.settings-btn', function () {
      toggleValue = !toggleValue
      const pixel = $(this).siblings().prop('scrollHeight');
      if (toggleValue) {
        $(this).siblings().css('height', `${pixel}px`);
        $(this).children().last().addClass('rotate-[90deg]');
      } else {
        $(this).siblings().css('height', `0px`);
        $(this).children().last().removeClass('rotate-[90deg]');
      }
    })
  })
  return (
    <>
      <BannerEvenement datas={{ title: info?.title, date: info?.date, image: info?.image, lieux: info?.lieux }} />
      <div className='px-[5%] flex gap-[2.5rem] py-10 max-md:py-8 max-md:w-full'>
        <div className=' w-[75%] max-md:w-full flex flex-col gap-10'>
          <p className='text-[1.15rem] text-justify max-md:text-[1.05rem]'>{info?.descrip}</p>
          <div className='flex flex-col gap-[3rem]'>
            {info?.corps?.map((x, index) =>
              <div key={index} className='flex flex-col gap-2 max-md:gap-2'>
                <h1 className={`font-bold ${index === 0 ? 'text-start' : 'text-center'} text-[1.6rem] max-md:text-[1.4rem] text-primary`}>{x.titre}</h1>
                <div key={index} className='clear-both max-md:flex max-md:flex-col max-md:gap-4'>
                  {/* <div className='flex flex-col'> */}
                  {x?.detail.profile === '' ? '' : <img className={`zaza w-[40%] ${index !== 0 && 'h-full'} object-cover max-md:w-full ${index % 2 === 0 ? 'float-right ms-8' : 'float-left me-8'} max-md:ms-0 max-md:me-0`} src={x?.detail.profile} alt='#' />}
                  <p className='text-[1.1rem]  text-justify'>{x?.detail?.libelle}</p>
                  <ul className='flex flex-col gap-2'>
                    {x?.detail?.descrip.length > 1 ?
                      x?.detail?.descrip?.map((y, ind) =>
                        <li className='items-start gap-6 text-[1.1rem] text-justify max-md:text-[1rem]' key={ind}><CheckListIcon className='float-left text-secondary' />&nbsp;&nbsp;{y}</li>
                      ) :
                      x?.detail?.descrip?.map((y, ind) =>
                        <li className='items-start gap-6 text-[1.1rem] text-justify max-md:text-[1rem]' key={ind}>{y}</li>
                      )
                    }
                  </ul>
                  {/* </div> */}

                </div>
              </div>
            )}
          </div>
          {info?.thumbnail !== '' ? <a href={info?.thumbnail} className='w-full p-2 text-center text-white bg-secondary' download>Télecharger le document de {info?.abrrev}</a> : ''}
          <div id='offre'>
            <h3 className='border-b-2 text-[1.2rem] font-semibold uppercase max-md:text-[1.1rem] py-3 border-secondary'>Choisir votre Offre Commerciale</h3>
            {offre?.map((x,index)=>
            <div key={index} className='flex flex-col overflow-hidden border-b-2 border-secondary'>
              <div className='settings-btn cursor-pointer py-4 w-full text-[1.1rem] max-md:text-[0.9rem] font-semibold flex justify-between items-center uppercase px-4 bg-gray-100 text-primary'>
                <span className=''>{x.type}</span>
                <ArrowRight01Icon className='font-bold transition-all duration-500' />
              </div>
              <div className='overflow-x-auto overflow-y-hidden transition-all duration-500' style={{ height: 0 }}>
                {/* {x?.detail?.map((y, ind) => */}
                  <Tableau head={x.head} corp={x.body} />
                {/* )} */}
              </div>
            </div>
            )}
          </div>
        </div>
        <div className='w-[25%] max-md:hidden flex flex-col gap-8'>
          <Publicite />
          <div className='flex flex-col gap-3'>
            <h5 className='uppercase text-[0.7rem] mb-0 font-light'>Nos Parténaires</h5>
            <div className='py-5 bg-gray-100 px-7'>
              <div className='flex items-center gap-3'>
                <Swiper
                  modules={[Scrollbar, A11y, Autoplay]}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={15}
                  slidesPerView={1}
                // effect='fade'
                >
                  {partenaire?.map((x) =>
                    <SwiperSlide className='bg-gray-100'>
                      <a target='_blank' rel='noreferrer' className='flex items-center justify-center px-2 py-1 bg-gray-100 rounded-sm' href={x.link}>
                        <img className=" h-[65px]" src={x.image} alt='' />
                      </a>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
          <Infolettre />
        </div>
      </div>
    </>
  );
}
