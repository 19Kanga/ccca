import React, { useEffect, useState} from 'react'
import TopBar from './TopBar'
import logo from '../../assets/1x/icone.png'
import logor from '../../assets/1x/icone blanc.png'
import { NavLink } from 'react-router-dom'
import { ArrowDown01Icon, ArrowRight01Icon, ArrowRightDoubleIcon, Cancel01Icon, Menu01Icon } from 'hugeicons-react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { FlagIcon, GB, FR, DE, ES, DK, NL } from 'react-flag-kit';
// import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'jquery/dist/jquery'
// import bannerc from '../../assets/bannerc.jpg'
import $ from 'jquery'
export default function Navsbar() {
  // const [opens,setOpens]=useState(false)
  const navigate = useNavigate();

  const data = [
    {
      titre: 'Entrepreneuriat',
      descrip: "La CCCA offre un service complet en matière de démarrage d’entreprise au Canada. À travers son réseau d’experts en entrepreneuriat au Canada, les membres de la CCCA peuvent solliciter nos services afin de les accompagner à démarrer et à réaliser leurs entreprises au Canada ou dans un pays d’Afrique où elle est représentée"
    },
    {
      titre: 'Francophonie',
      descrip: 'La CCCA est avant tout un marché économique francophone qui relie la francophonie canadienne et celle africaine.Elle s’ouvre ensuite vers les économies anglophones afin de susciter des dynamiques d’affaires impulsées par la volonté de commercialiser en langue française.À travers la francophonie, la CCCA entend attirer les économies diverses au sein d’un écosystème drainé par la langue française.La CCCA offre également des espaces d’apprentissage du français comme langue d’affaires.'
    },
    {
      titre: 'Repreunariat',
      descrip: 'La CCCA se donne pour mandat d’attirer des investisseurs, des gens d’affaires basés en Afrique et qui souhaitent reprendre une entreprise en général et au Québec en particulier. Le repreneuriat est un programme économique qui est particulièrement mis en avant par le gouvernement du Québec à travers le ministère de l’économie, de l’innovation et de l’énergie ainsi que le ministère de l’immigration, de la francisation et de l’intégration.'
    },
    {
      titre: 'Coopération Internationale',
      descrip: "La CCCA regroupe en son sein des expertises pour conduire des missions commerciales aussi bien au canada qu’en Afrique.Ce service vise à accompagner des gouvernements, institutions publiques ou para publiques, des organisations à but non lucratif,des entreprises, qui souhaitent effecteur une mission commerciale, de prospection ou d’exploration en vue de générer en développement d’affaires de partenariats ou de représentations."
    },
    {
      titre: 'Maillage d\'Affaires',
      descrip: 'La CCCA offre un programme de maillage d’affaires à travers des salons, des forums, des foires organisées sous forme de rencontre B to B et B to C et dont l’objectif est de permettre aux participants de nouer ou conclure des alliances d’affaires entre le canada et l’Afrique.À ce titre, la CCCA a plusieurs concepts évènementiels d’affaires qui se tiennent annuellement au canada ou dans l’un des pays africains où elle possède une délégation.'
    },
    {
      titre: 'Programme de Mentorat',
      descrip: 'le Réseau Mentorat Laval aide les entrepreneurs à trouver le mentor qui les fera grandir. Nous croyons que la réussite des entreprises passe avant tout par le mieux-être des personnes qui les dirigent. Nous nous appuyons sur le plus grand réseau de mentorat du Québec pour donner accès à des mentors d’expérience, quel que soit le stade de développement de l’entreprise'
    },
    {
      titre: 'Formations',
      descrip: 'Ce programme de formation est donné par des experts en développement d’affaires basés aussi bien au Canada qu’en Afrique. Il vise a apporté des clés pour réussir son entrée en affaires dans l’un des pays africain où nous avons une représentation Officielle.'
    },
    {
      titre: 'Incubations',
      descrip: 'La CCCA à travers son programme d’incubation et d’accélération intitué « CCCA-Propuls » accompagne des entrepreneurs résident au canada de l’idéation au démarrage d’une entreprise.'
    }
  ]

  const afrique = [
    {
      titre: 'Afrique Centrale',
      pays: [
        {
          nom: 'Cameroun',
          link: '#'
        },
        {
          nom: 'Angola',
          link: '#'
        },
        {
          nom: 'Congo',
          link: '#'
        },
        {
          nom: 'Tchad',
          link: '#'
        },
        {
          nom: 'Gabon',
          link: '#'
        },
        {
          nom: 'Sao Tomé-et-Principe',
          link: '#'
        },
        {
          nom: 'Guinée équatoriale',
          link: '#'
        },
        {
          nom: 'République Centrafricaine',
          link: '#'
        }
      ]
    },
    {
      titre: 'Afrique de l\'Ouest',
      pays: [
        {
          nom: 'Nigeria',
          link: '#'
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
          link: '#'
        },
        {
          nom: 'Gambie',
          link: '#'
        },
        {
          nom: 'Ghana',
          link: '#'
        },
        {
          nom: 'Guinée',
          link: '#'
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
          link: '#'
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
          link: '#'
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
          link: '#'
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
          link: '#'
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
          link: '#'
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
          link: '#'
        }
      ]
    }
  ]

  const canada = [
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

  // const datas = [
  //   {
  //     image:bannerc,
  //     title: "Presentation",
  //     descrip: "La Chambre de Commerce Canada Afrique est un organisme chargé de représenter les intérêts des entreprises commerciales, industrielles et de services, d’assurer la formation des entrepreneurs et d’apporter un appui aux entreprises. Elle représente les professionnels des secteurs du commerce, de l'industrie et des services auprès des autorités publiques locales et internationales intervenant dans les domaines relevant de ses missions.La CCCA assume des missions à caractère représentatif, consultatif, de soutien et de promotion."
  //   },{
  //     image:bannerc,
  //     title: "Nos valeurs fondamentales",
  //     descrip: "Nous croyons que la force de l’action réside dans le dynamisme et l’altruisme, et c’est pourquoi La CCCA s’appuie sur trois verbes d’action qui définissent notre ADN: • Collaborer: Encourager une synergie économique où les entreprises, institutions et gouvernements travaillent ensemble pour atteindre des objectifs communs. • Unir: Créer des liens solides entre le Canada et l’Afrique, favorisant une meilleure compréhension et coopération. • Agir: Mettre en œuvre des actions concrètes pour développer des partenariats durables, impulsant une croissance mutuelle bénéfique."
  //   },
  // ]

  const activite = [
    {
      titre: 'Plateforme d’Échange Commercial',
      descrip: "Création d'une plateforme numérique qui met en relation les entreprises canadiennes et africaines.Cette plateforme pourrait permettre le partage d'informations sur les produits, services, opportunités d'investissement et projets en cours."
    },
    {
      titre: 'Webinaires et Ateliers de Formation',
      descrip: "Organisation de webinaires sur des sujets clés tels que l'entrée sur le marché, la culture d'affaires, la législation locale et les pratiques commerciales durables."
    },
    {
      titre: 'Missions Commerciales',
      descrip: 'Organisation de missions commerciales régulières, tant au Canada qu’en Afrique, pour permettre aux entreprises de rencontrer des partenaires potentiels et de découvrir les marchés locaux.'
    },
    {
      titre: 'Foires et Salons Professionnels',
      descrip: "Organisation ou participation à des salons commerciaux pour mettre en avant les entreprises des deux régions.Cela pourrait inclure des stands, des présentations et des opportunités de réseautage"
    },
    {
      titre: 'Programme de Mentorat',
      descrip: "Mise en place d'un programme de mentorat reliant des entreprises établies avec des start- ups ou des PME souhaitant se développer à l'international"
    },
    {
      titre: 'Initiatives d’Innovation et de Durabilité',
      descrip: "Soutien à des projets innovants et durables, par exemple à travers des concours d’innovation ou des incubateurs d'entreprises axés sur des solutions aux défis économiques et environnementaux."
    },
    {
      titre: 'Forum Annuel des Affaires Canada Afrique',
      descrip: "Organisation d'un forum annuel rassemblant des leaders d’opinion, des entrepreneurs et des représentants gouvernementaux des deux régions pour discuter des opportunités économiques et des défis à surmonter"
    },
    {
      titre: 'Publications et Ressources Éducatives',
      descrip: "Création de rapports, d'études de marché et de guides pratiques sur les secteurs clés pour le commerce et l’investissement entre le Canada et l'Afrique."
    },
    {
      titre: 'Réseaux Sociaux et Communication',
      descrip: "Utilisation des réseaux sociaux pour promouvoir les entreprises, partager des success stories et informer sur les événements et opportunités."
    },
    {
      titre: 'Soutien à la Francophonie',
      descrip: "Développement d'initiatives spécifiques pour promouvoir les échanges au sein de la francophonie, comme des événements bilingues ou des projets visant à valoriser la langue française dans le contexte des affaires. "
    }
  ]
  // const [res,setRes]=useState(false)
  const menu = document.querySelectorAll('.navsbar li')
  // const navs = document.querySelectorAll('.navsbar')
  // const navbare = document.querySelectorAll('.navsbar')
  const changePage = (x) => {
    menu.forEach((item) => item.classList.remove('active'));
    $('.navsbar').removeClass('active')
    $('.mobiles').removeClass('absolute')
    setMobileopen(false)
    navigate(`/a/Bureau/Afrique/${x}`)
  }
  const changePageC = (x) => {
    menu.forEach((item) => item.classList.remove('active'));
    setMobileopen(false)
    $('.navsbar').removeClass('active')
    $('.mobiles').removeClass('absolute')
    navigate(`/a/Bureau/Canada/${x}`)
  }
  // const block = document.querySelector('.navsbar .block-menu')

  //  async function activeLink() {
  //    console.log(this.classList.add("active"))
  //   menu.forEach((item) => item.classList.remove('active'));
  //   // leste.forEach((item) => item.classList.remove('active'));
  //    if (this.classList.add("active")) {
  //     this.classList.add("active")     
  //   } else {
  //     this.classList.remove("active")         
  //   }
  // }
  
  // menu.forEach((item) => item.addEventListener("click", activeLink))
  useEffect(() => {
    // $(document).ready(function () {
    //   $('.navsbar .za').each(function () {
    //     $(this).on('click', () => {
    //       // menu.forEach((item) => item.classList.remove('active'));
    //       if (!$(this).hasClass('active')) {
    //         $(this).addClass('active')
    //       } else {
    //         $(this).removeClass('active')
    //       }
    //     })
    //   })
    // })
  })
  
  // const SlideItems = ({x}) => {
  //   return (
  //     <div className='flex flex-col gap-2 p-3 mt-0'>
  //       <h2 className='font-bold text-[1.1rem]'>{x.title}</h2>
  //       <div className='flex gap-4'>
  //         <span className='text-justify text-[1rem] w-full'>{x.descrip}</span>   
  //         {/* <div className='relative w-1/3'>
  //           <img className='absolute object-cover w-full h-full' src={x.image} alt="#" />
  //         </div> */}
  //       </div>
  //     </div>
  //   )
  // }
  const [open,setOpen]=useState(false)
  const [opens,setOpens]=useState(false)
  const [opena,setOpena]=useState(false)
  const [openba,setOpenba]=useState(false)
  const [openca, setOpenca] = useState(false)
  const [mobileopen,setMobileopen]=useState(false)
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({ firstName: '', lastName: '' });
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [language, setLanguage] = useState('en'); // Langue par défaut: anglais


  const handleOpen = () => {
    setOpena(false)
    setOpenba(false)
    setOpens(false)
    setOpen(!open)
  }
  const handleOpens = () => {
    setOpen(false)
    setOpena(false)
    setOpenba(false)
    setOpenca(false)
    setOpens(!opens)
  }
  const handleOpena = () => {
    setOpen(false)
    setOpenba(false)
    setOpenca(false)
    setOpens(false)
    setOpena(!opena)
  }
  const handleOpenba = () => {
    setOpen(false)
    setOpena(false)
    setOpenca(false)
    setOpens(false)
    setOpenba(!openba)
  }
  const handleOpenca = () => {
    setOpen(false)
    setOpena(false)
    setOpens(false)
    setOpenba(false)
    setOpenca(!openca)
  }
  const changePageMenu = (x) => {
    setOpen(false)
    setOpena(false)
    setOpens(false)
    setOpenba(false)
    setOpenca(false)
    setMobileopen(false)
    $('.navsbar').removeClass('active')
    $('.mobiles').removeClass('fixed')
    navigate(`/a/${x}`)
  }
  const handleScrolle = () => {
    const scrol = $(window).scrollTop()
    if (scrol >= 180) {
      $('.mobiles').addClass('sticky top-0')
    }
    if (scrol >= 300) {
      setOpen(false)
      setOpena(false)
      setOpens(false)
      setOpenba(false)
      setOpenca(false)
    }
    // console.log(scrol)
  }
  window.addEventListener('scroll', handleScrolle)

  const handleMenuOpen = () => {
    setMobileopen(true)
    $('.mobiles').addClass('fixed')
    $('.navsbar').addClass('active')
    // $('#root').addClass('overflow-hidden')
  }
  const handleMenuClose = () => {
    setMobileopen(false)
    $('.mobiles').removeClass('fixed')
    $('.navsbar').removeClass('active')
  }

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log('Langue sélectionnée :', lang);
    setShowLanguageMenu(false);
  };

  // Détermine le drapeau à afficher pour la langue active
  const getFlag = (lang) => {
    switch (lang) {
      case 'fr':
        return <FlagIcon code="FR" size={16} />;
      case 'de':
        return <FlagIcon code="DE" size={16} />;
      case 'es':
        return <FlagIcon code="ES" size={16} />;
      case 'dk':
        return <FlagIcon code="DK" size={16} />;
      case 'nl':
        return <FlagIcon code="NL" size={16} />;
      default:
        return <FlagIcon code="GB" size={16} />;
    }
  };
  return (
    // <div className='headers'>
    <>
          <TopBar />
          <div className='relative px-[5%] py-8 z-[900] bg-white flex items-center max-lg:hidden justify-between'>
              <div className=''>
                <NavLink to={'/a'} className='flex items-center gap-1'>
                      <img src={logo} width={45} height={45} alt="#" />
                      <div className='flex flex-col font-semibold text-[1.13rem] leading-[1.4rem]'>
                          <span>Chambre de Commerce</span>
                          <span>Canada Afrique</span>
                      </div>
                </NavLink>
              </div>
              <div className='flex'>
                <NavLink to={'/a/Devenir-membre'} className='px-4 text-[.85rem] font-semibold'>Devenir Membre</NavLink>
                  {/* <NavLink className='px-4 text-[.85rem]'>Devenir Membre</NavLink> */}
              </div>
          </div>
          <div className='mobiles transition-all duration-500 bg-secondary bar-rouge w-full px-[5%] z-[100] font-medium flex justify-between items-center gap-1'>           
            <NavLink to={'/a'} className='items-center gap-1 max-md:py-2 logo-mobile'>
              <img src={logor} width={35} height={35} alt="#" />
              <div className='flex flex-col text-white font-semibold text-[.85rem] leading-[1rem]'>
                <span>Chambre de commerce</span>
                <span>Canada Afrique</span>
              </div>
          </NavLink>
            <ul className=' text-white text-[.9rem] font-medium shadow-sm navsbar'>
                  <li className='cursor-pointer za' onClick={() => changePageMenu('Apropos-de-nous/Présentation')}>
                    <NavLink to={'#'} className='block px-5 py-4 navlink'>A propos de nous</NavLink>
                  </li>
                  <li className={`cursor-pointer za ${opens? 'active':''}`} onClick={handleOpens}>
                      <NavLink className='flex items-center gap-1 px-5 py-4 link navlink'>Nos Services <ArrowDown01Icon className='icones' size={'1.1rem'} /></NavLink>
                      <div className={`left-[5%] text-black block-menu bg-gray-200 w-[90%] px-20 pt-7 pb-10`}>
                        <div className='flex items-center font-semibold text-[1.1rem] gap-2 border-b-[3px] border-secondary pb-2'>
                          <h4>Nos Services</h4>
                          <ArrowRight01Icon className='' size='1rem'/>
                        </div>
                        <div className='grid grid-cols-3 gap-12 mt-4 text-black max-md:grid-cols-1 gap-y-7 max-md:gap-4'>
                          {data?.map((x,index)=>
                            <div key={index} className='flex flex-col gap-2'>
                              <span onClick={() => changePageMenu(`Services/${ x.titre }`)}  className='flex text-[1.1rem] font-medium capitalize hover:text-secondary items-center gap-1'><ArrowRightDoubleIcon color='#E30713' />{x.titre}</span>
                              <span className='text-[.85rem] max-md:hidden text-gray-600 font-extralight text-justify h-[60px] overflow-hidden text-ellipsis'>{x.descrip}</span>
                              <NavLink to={`/a/Services/${x.titre}`} className='text-secondary max-md:hidden'>Lire plus...</NavLink>
                            </div>
                          )}
                        </div>
                      </div>
                  </li>
                  <li className='cursor-pointer za' onClick={()=>changePageMenu('Evenements')}>
                    <NavLink to={'#'} className='block px-5 py-4 navlink'>Nos Evenements</NavLink>
                  </li>
                  <li className={`cursor-pointer za ${opena? 'active':''}`} onClick={handleOpena}>
                    <NavLink className='px-5 z-[100] link flex py-4 gap-1 items-center navlink'>Nos Activités <ArrowDown01Icon className='icones' size={'1.1rem'} /></NavLink>
                      <div className={`left-[5%] text-black block-menu top-[100%] bg-gray-200 w-[90%] px-20 pt-7 pb-10`}>
                        <div onClick={()=>navigate('/a/Activites/List')} className='flex items-center font-semibold text-[1.1rem] gap-2 border-b-[3px] border-secondary pb-2'>
                          <h4>Nos Activités</h4>
                          <ArrowRight01Icon className='' size='1rem'/>
                        </div>
                        <div className='grid grid-cols-3 gap-12 mt-4 text-black max-md:grid-cols-1 gap-y-7 max-md:gap-4 sous-bl'>
                          {activite?.map((x,index)=>
                            <div key={index} className='flex flex-col gap-2'>
                              <span onClick={() => changePageMenu(`Activites/${x.titre}`)} className='text-[1.1rem] font-medium capitalize transition-all duration-300 hover:text-secondary items-start gap-1'><ArrowRightDoubleIcon color='#E30713' className='float-left' />{x.titre}</span>
                              <span className='text-[.85rem] max-md:hidden text-gray-600 font-extralight text-justify h-[60px] overflow-hidden text-ellipsis'>{x.descrip}</span>
                              <NavLink to={`/a/Activites/${x.titre}`} className='text-secondary max-md:hidden'>Lire plus...</NavLink>
                            </div>
                          )}
                        </div>
                      </div>
                  </li>
                  <li className={`cursor-pointer za ${openba? 'active':''}`} onClick={handleOpenba}>
                    <NavLink className='flex items-center gap-1 px-5 py-4 link navlink'>Bureaux d'Afrique<ArrowDown01Icon className='icones' size={'1.1rem'} /></NavLink>
                    <div className={`left-[5%] text-black block-menu top-[100%] bg-gray-200 w-[90%] px-20 pt-7 pb-10`}>
                        <div className='flex items-center font-semibold text-[1.1rem] gap-2 border-b-[3px] border-secondary pb-2'>
                          <h4>Bureaux d'Afrique</h4>
                          <ArrowRight01Icon className='' size='1rem'/>
                        </div>
                        <div className='grid grid-cols-3 gap-12 mt-4 text-black max-md:grid-cols-1 gap-y-7 max-md:gap-4'>
                          {afrique?.map((x,index)=>
                            <div key={index} className='flex flex-col gap-2'>
                              <span onClick={() => changePageMenu(`Bureau/Afrique/${x.titre}`)} className='flex cursor-pointer text-[1.1rem] font-medium capitalize transition-all duration-300 hover:text-secondary items-center gap-1'><ArrowRightDoubleIcon color='#E30713' />{x.titre}</span>
                              <ul className='text-[.95rem] max-md:hidden !bg-transparent flex flex-col gap-2 font-medium text-justify'>
                                {x.pays?.map((y,indexs)=>
                                  <li key={indexs} className='bg-transparent cursor-pointer hover:text-secondary' onClick={() => changePage(`${x.titre}/${y.nom}`)}><span>{y.nom}</span></li>
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                  </li>
                  <li className={`cursor-pointer za ${openca? 'active':''}`} onClick={handleOpenca}>
                    <NavLink className='flex items-center gap-1 px-5 py-4 link navlink'>Représentation au Canada<ArrowDown01Icon className='icones' size={'1.1rem'} /></NavLink>
                    <div className={`left-[5%] w-[90%] text-black block-menu top-[100%] bg-gray-200 px-20 pt-7 pb-10`}>
                        <div className='flex items-center font-semibold text-[1.1rem] gap-2 border-b-[3px] border-secondary pb-2'>
                          <h4>Représentation au Canada</h4>
                          <ArrowRight01Icon className='' size='1rem'/>
                        </div>
                        <div className='grid grid-cols-3 gap-12 mt-4 text-black max-md:grid-cols-1 gap-y-7 max-md:gap-4'>
                          {canada?.map((x,index)=>
                            <div key={index} className='flex flex-col gap-2'>
                              <span onClick={() => changePageC(`all/${x.titre}`)} className='flex text-[1.1rem] font-medium cursor-pointer capitalize transition-all duration-300 hover:text-secondary items-center gap-1'><ArrowRightDoubleIcon color='#E30713' />{x.titre}</span>
                              {/* <ul className='text-[.95rem] !bg-transparegap-1nt flex flex-col gap-2 text-gray-600 font-extralight text-justify'>
                                {x.pays?.map((y)=>
                                  <li className='bg-transparent'><NavLink to={y.link}>{y.nom}</NavLink></li>
                                )}
                              </ul> */}
                            </div>
                          )}
                        </div>
                      </div>
                  </li>
                  <li className='cursor-pointer za' onClick={() => changePageMenu('Actualites')}>
                    <NavLink to={`#`} className='block px-5 py-4 navlink'>Actualités</NavLink>
                  </li>
                  <li className='cursor-pointer za' onClick={() => changePageMenu('CCCA REVUE')}>
                    <NavLink to={`#`} className='block px-5 py-4 navlink'>CCCA REVUE</NavLink>
                  </li>
                  <li className='derniers'>
                    <a className='py-4 px-3 text-center font-semibold text-[.95rem] border-b-[1px] border-gray-300' href={'/a/Devenir-membre'}>Dévenir Membre</a>
                    <div className="flex items-center">
                    <a href={'/login'} className='w-[70%] px-[9%] py-3 border-r-[1px] font-semibold text-[.95rem] border-gray-300' >Connexion</a>
                      <button
                        onClick={toggleLanguageMenu}
                        className='!flex items-center text-[.7rem] w-[30%] px-4 py-3 justify-center gap-2 cursor-pointer'
                        title='Changer de langue'
                        
                      >
                        {getFlag(language)} <FaChevronDown />
                      </button>
                      {showLanguageMenu && (
                        <div className='absolute right-0 top-0 mt-2 z-[1000] bg-white border border-gray-300 rounded shadow-lg w-40'>
                          <div
                            onClick={() => handleLanguageChange('fr')}
                            className='px-4 py-2 text-[.7rem] cursor-pointer hover:bg-gray-100 flex items-center gap-2'
                          >
                            <FlagIcon code="FR" size={16} /> Français
                          </div>
                          <div
                            onClick={() => handleLanguageChange('en')}
                            className='px-4 py-2 text-[.7rem] cursor-pointer hover:bg-gray-100 flex items-center gap-2'
                          >
                            <FlagIcon code="GB" size={16} /> Anglais
                          </div>

                        </div>
                      )}
                    </div>
                  </li>
            </ul>
            <button onClick={!mobileopen? handleMenuOpen:handleMenuClose} className='max-md:py-2'>{!mobileopen ? <Menu01Icon color='white' size={25} /> : <Cancel01Icon color='white' size={25} />}</button>
          </div>
    </>
  )
}
