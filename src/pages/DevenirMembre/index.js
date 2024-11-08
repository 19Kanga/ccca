import React from 'react'
import Banner from '../../components/Banner'
import Infolettre from '../../components/Infolettre'
import { ArrowRight01Icon, Mail01Icon, TelephoneIcon } from 'hugeicons-react'
import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cteq from '../../assets/1x/cteq.webp'
import quebec from '../../assets/1x/quebec.png'
import pn from '../../assets/1x/pn.svg'
import chambers from '../../assets/1x/chambers.avif'
import fga from '../../assets/1x/fga.svg'
import fit from '../../assets/fit.png'
import hec from '../../assets/hec.svg'
import ifpf from '../../assets/ifpf.png'
// import presi from '../../assets/president.jpg'
import bannersMembre from '../../assets/2149241214.jpg'
import { NavLink } from 'react-router-dom';
import $ from 'jquery'
import Annimated from '../../components/Annimated';
import Publicite from '../../components/Publicite';


export default function DevenirMembre() {


  const data = [
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

  const state = [
    {
      num: '+2000',
      libele: 'Adhérent'
    },
    {
      num: '+500',
      libele:'Membres'
    },
    {
      num: '+25',
      libele: 'Décideurs'
    },
    {
      num: '+10',
      libele: 'Activités'
    },
    {
      num: '+50',
      libele: 'Experts'
    }
  ]

  const membre = [
    {
      title: 'Elargir son réseau',
      option: [
        'Profitez de plus de 150 occasions de réseautage variées chaque année qui répondent à tous les types de besoins',
        'Réseautez tout en découvrant des endroits inédits du Canada',
        'Participez à des rencontres d’affaires exclusives aux membres',
        'Profitez des périodes de prévente pour certaines de nos activités',
        'Rencontrez des acheteurs en quête de nouveaux produits',
        'Développez votre réseau à l’international et partez à la conquête de nouveaux marchés',
        'Inspirez-vous des expériences vécues par d’autres gens d’affaires',
        'Obtenez de 15 à 35 % de réduction sur le prix d’inscription à nos activités'
      ]
    },
    {
      title: 'Apprendre et S\'informer',
      option: [
        'Développez vos compétences grâce à nos ateliers de formation sur les meilleures pratiques d’affaires',
        'Apprenez l’abc du commerce international grâce à la formation offerte par la CCCA aux entreprises',
        'Inspirez-vous des plus grands noms de la scène politique et économique qui se partagent notre prestigieuse tribune',
        'Visitez notre centre de documentation pour obtenir de l’information stratégique',
        'Profitez de nos forums pour échanger sur les grands enjeux stratégiques',
        'Découvrez de nouvelles occasions d’affaires à l’étranger',
        'Obtenez de l’information sur les ressources disponibles pour le démarrage et la croissance de votre entreprise'
      ]
    },
    {
      title: 'Obtenir de la visibilité',
      option: [
        'Affichez-vous dans les versions papier et électronique de notre répertoire des membres',
        'Publiez gratuitement des offres spéciales aux autres membres dans notre site Web',
        'Inspirez-vous des plus grands noms de la scène politique et économique qui se partagent notre prestigieuse tribune',
        'Visitez notre centre de documentation pour obtenir de l’information stratégique',
        'Profitez de nos forums pour échanger sur les grands enjeux stratégiques',
        'Découvrez de nouvelles occasions d’affaires à l’étranger',
        'Obtenez de l’information sur les ressources disponibles pour le démarrage et la croissance de votre entreprise'
      ]
    },
    {
      title: 'Croître à l\'international',
      option: [
        'Affichez-vous dans les versions papier et électronique de notre répertoire des membres',
        'Publiez gratuitement des offres spéciales aux autres membres dans notre site Web',
        'Inspirez-vous des plus grands noms de la scène politique et économique qui se partagent notre prestigieuse tribune',
        'Visitez notre centre de documentation pour obtenir de l’information stratégique',
        'Profitez de nos forums pour échanger sur les grands enjeux stratégiques',
        'Découvrez de nouvelles occasions d’affaires à l’étranger',
        'Obtenez de l’information sur les ressources disponibles pour le démarrage et la croissance de votre entreprise'
      ]
    }
  ]


  // const check = async (x, y) => {
  //   // await setChoix(x);
  //   if (y === 'afrique') {
  //     setOpen(!open)
  //   } else {
  //     setOpens(!opens)
  //   }
  // }
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

  const tables = [
    {
      type:'Entrepreneur',
      detail: [
        {
          title: 'Entrepreneur - Etudiant',
          descrip:
          {
            libelle: 'Pour les étudiants ayant à coeur le monde des affaires et voulant être en contact avec la communauté d’affaire au Canada et en Afrique',
            option: ['Réconnaissance lors de nos activités ou de nos communications', 'Exclusivité pour les événements réservés aux membres']
          }
          ,
          price: {
            af: '50',
            can: '350'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/jL7YrF2F',
            can: 'https://ccca.mykajabi.com/offers/LEoLj73q'
          }
        }
      ]    
    },
    {
      type: 'ENTREPRISES',
      detail: [
        {
          title: 'Startup',
          descrip:
          {
            libelle: 'Pour les nouvelles entreprises en activité depuis moins de deux ans',
            option: [
              'Réconnaissance lors de nos activités ou de nos communications',
              'Exclusivité pour les événements réservés aux partenaires-clients',
              'Participation à un podcast / Webinaire',
              'Visibilité du logo lors de nos événements à la hauteur du prix membre.'
            ]
          }
          ,
          price: {
            af: '150',
            can: '500'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/72f28T2q',
            can: 'https://ccca.mykajabi.com/offers/RQopXZ7D'
          }
        },
        {
          title: 'Travailleur autonome',
          descrip:
          {
            libelle: 'Pour les entreprises ayant entre 1 à 4 employés',
            option: [
              'Réconnaissance lors de nos activités ou de nos communications',
              'Exclusivité pour les événements réservés aux partenaires-clients',
              'Participation à un podcast et/ou webinaire',
              'Visibilité du logo lors de nos événements à la hauteur du prix membre.'
            ]
          }
          ,
          price: {
            af: '100',
            can: '400'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/566akTmd',
            can: 'https://ccca.mykajabi.com/offers/Q7oPuFTt'
          }
        },
        {
          title: 'Entreprise 5 à 49 employés',
          descrip:
          {
            libelle: '',
            option: [
              'Réconnaissance lors de nos activités ou de nos communications',
              'Exclusivité pour les événements réservés aux partenaires-clients',
              'Jusqu’à 5 employés inclus dans l’adhésion',
              'Participation à un podcast et/ou webinaire',
              'Visibilité du logo lors de nos événements à la hauteur du prix membre'
            ]
          }
          ,
          price: {
            af: '300',
            can: '800'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/z5dd8yzp',
            can: 'https://ccca.mykajabi.com/offers/hmw2A6PF'
          }
        },
        {
          title: 'Entreprise 50 employés et +',
          descrip:
          {
            libelle: 'Pour les entreprises ayant plus de 51 employés',
            option: [
              'Prix partenaire-client lors des événements publics',
              ' Exclusivité pour les événements réservés aux partenaires-clients',
              'Jusqu’à 10 employés inclus dans l’adhésion',
              'Participation à un podcast et/ou webinaire',
              'Visibilité du logo lors de nos événements à la hauteur du prix membre.'
            ]
          }
          ,
          price: {
            af: '900',
            can: '1500'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/3wSJ32MJ',
            can: 'https://ccca.mykajabi.com/offers/8z78LhP2'
          }
        }
      ]
    },
    {
      type: 'OBNL / INSTITUTS',
      detail: [
        {
          title: 'Organisme publique',
          descrip:
          {
            libelle: '',
            option: ['Prix partenaire-client lors des événements publics', 'Exclusivité pour les événements réservés aux partenaires-clients', 'Participation à un podcast','Nombre maximum: Illimité']
          }
          ,
          price: {
            af: '500',
            can: '1000'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/ejVX6AJt',
            can: 'https://ccca.mykajabi.com/offers/kFuE5wZ4'
          }
        },
        {
          title: 'Politique',
          descrip:
          {
            libelle: 'Pour les personnes politiques désirant rencontrer la communauté d’affaire en Afrique et au Canada',
            option: ['Prix partenaire-client lors des événements publics', 'Exclusivité pour les événements réservés aux partenaires-clients', 'Pour une personne']
          }
          ,
          price: {
            af: '2000',
            can: '2500'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/7P2i2i23',
            can: 'https://ccca.mykajabi.com/offers/A6EkBFFC'
          }
        }
      ]
    },
    {
      type: 'PARTENAIRES PRESTIGES',
      detail: [
        {
          title: 'Gold',
          descrip:
          {
            libelle: 'Membership gratuit pour 100 membres de l’organisation',
            option: [
              'Accès gratuit au PPCDE pour une cohorte de 100 membres',
              '2 tickets aux programmes de fromation',
              'Aucune limite d’employés inscrits',
              'Prix partenaire-client lors des événements publics',
              'Exclusivité pour les événements réservés aux partenaires-clients',
              'Jusqu’à 2 employés inclus dans l’adhésion', 'Participation à au moins 1 podcast / Webinaire par an.']
          }
          ,
          price: {
            af: '5000',
            can: '10000'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/8j2Wv3pa',
            can: 'https://ccca.mykajabi.com/offers/JFmegYyd'
          }
        },
        {
          title: 'Silver',
          descrip:
          {
            libelle: 'Membership gratuit pour 50 membres de l’organisation',
            option: ['Accès gratuit au PPCDE pour une cohorte de 50 membres','Prix partenaire-client lors des événements publics', 'Exclusivité pour les événements réservés aux partenaires-clients', 'Jusqu’à 3 employés inclus dans l’adhésion','Participation à au moins 2 podcasts / Webinaire chaque année']
          }
          ,
          price: {
            af: '3500',
            can: '7500'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/hiMzDnxb',
            can: 'https://ccca.mykajabi.com/offers/Z3PqAdXf'
          }
        },
        {
          title: 'Platine',
          descrip:
          {
            libelle: 'Membership gratuit pour 25 membres de l’organisation',
            option: ['Accès gratuit au PPCDE pour une cohorte de 25 membres','Nombre maximum: Illimité (participation obligatoire à un comité).','Participation gratuite aux activités de la chambre']
          }
          ,
          price: {
            af: '1500',
            can: '2600'
          },
          link: {
            af: 'https://ccca.mykajabi.com/offers/ZBpiKdey',
            can: 'https://ccca.mykajabi.com/offers/UnpFoik4'
          }
        },
      ]
    }
  ]
  const Tableau = ({item}) => {
    return (
      <div className='flex border-[1px] max-md:w-[900px] border-primary last-of-type:mb-1 mb-7'>
        <div className='p-2 w-[20%] flex items-center justify-center border-r-[1px] border-primary'>{item.title}</div>
        <div className='p-3 w-[40%] flex flex-col items-center justify-center border-r-[1px] border-primary'>
          <h6>{item?.descrip?.libelle}</h6>
          <ul className='list-disc ps-5'>
            {item?.descrip?.option?.map((x,indexe)=>
              <li key={indexe}>{x}</li>
            )}
          </ul>
        </div>
        <div className='flex flex-col w-[15%] border-r-[1px] border-primary'>
          <div className='flex items-center justify-center p-3 h-1/2'>Canada</div>
          <div className='p-3 h-1/2 flex items-center justify-center border-t-[1px] border-primary'>Afrique</div>
        </div>
        <div className='flex flex-col w-[15%] border-r-[1px] border-primary'>
          <div className='flex items-center justify-center p-3 h-1/2'>{item.price.can}{item.price.can !== 'Gratuit' ? ',00 $CAD' : ''}</div>
          <div className='p-3 h-1/2 flex items-center justify-center border-t-[1px] border-primary'>{item.price.af}{item.price.af !== 'Gratuit' ? ',00 $CAD' : ''}</div>
        </div>
        <div className='w-[10%] text-green-600'>
          <a href={item.link.can} target='_blank' rel='noreferrer' className='flex items-center justify-center p-3 hover:text-secondary h-1/2'> souscrire</a>
          <a href={item.link.af} target='_blank' rel='noreferrer' className='hover:text-secondary p-3 h-1/2 flex items-center justify-center border-t-[1px] border-primary'> souscrire</a>
        </div>
      </div>
    )
  }
  return (
    <Annimated>
      
          <Banner title='Dévenir Membre' />
           <div className='px-[5%] w-full flex gap-[4rem] py-14 max-md:py-12 '>
              <div className='w-[75%] max-md:w-full flex flex-col gap-12 max-md:px-0'>
                <div className='flex flex-col gap-2'>
                  <img className='w-full h-[150px] object-cover' src={bannersMembre} alt="#" />
                  {/* <button onClick={()=>setOpens(true)} className='w-1/3 px-6 py-3 text-white max-md:w-full bg-secondary'>Devenir Membre</button> */}
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-bold uppercase text-[1.3rem] max-md:text-[1.2rem] text-secondary py-4 border-b-2 border-secondary'>Choisir votre Catégorie de Membership pour La CCCA</h1>
                  <div className='flex flex-col w-full'>
                    {tables?.map((x,index)=>
                    <div key={index} className='flex flex-col overflow-hidden border-b-2 border-secondary'>
                        <div className='settings-btn cursor-pointer py-4 w-full text-[1.1rem] max-md:text-[0.9rem] font-semibold flex justify-between items-center uppercase px-4 bg-gray-100 text-primary'>
                          <span className=''>{x.type}</span>
                          <ArrowRight01Icon className='font-bold transition-all duration-500' />
                        </div>
                        <div className='overflow-x-auto overflow-y-hidden transition-all duration-500' style={{ height: 0 }}>
                          {x?.detail?.map((y,ind) =>
                            <Tableau key={ind} item={y} />
                          )}
                        </div>
                      </div>
                    )}
                    
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <h1 className='text-[1.3rem] max-md:text-[1.2rem] font-bold'>La Chambre de Commerce Canada Afrique (La CCCA), c’est :</h1>
                  <div className='grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-3'>
                    {state?.map((x,index)=>
                    <div key={index} className='flex flex-col items-center justify-center gap-1 p-6 text-white rounded-sm bg-primary'>
                      <span className='font-bold text-[1.5rem]'>{x.num}</span>
                      <p className='font-medium text-[.9rem]'>{x.libele}</p>
                    </div>
                    )}
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <h1 className='text-[1.3rem] max-md:text-[1.2rem] font-bold'>Pourquoi devénir membre de la chambre?</h1>
                  <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1'>
                    {membre?.map((x,index)=>
                    <div key={index} className='flex flex-col gap-5 p-6 px-8 py-8 border-2 rounded-sm border-primary'>
                      <h1 className='font-bold underline  text-primary text-[1.5rem]'>{x.title}</h1>
                      <ul className='list-disc ps-[1rem] text-[.95rem]'>
                        {x.option?.map((y,ind)=>
                          <li key={ind}>{y}</li>
                        )}
                      </ul>
                    </div>
                    )}
                  </div>
                </div>
                {/* <div className='flex flex-col gap-5'>
                  <h1 className='text-[1.3rem] max-md:text-[1.2rem] font-bold mb-10'>Témoignages des membres</h1>
                  <div className='grid grid-cols-2 gap-6 max-md:gap-12 max-md:grid-cols-1'>
                      <div className='relative flex flex-col gap-3 p-6 rounded-md shadow shadow-slate-400 pt-md'>
                        <div className='absolute overflow-hidden rounded-full object-top w-[100px] -top-[12%] left-1/2 -translate-x-1/2 h-[100px]'>
                          <img src={presi} alt='#' className='absolute object-cover w-full h-full' />
                        </div>
                        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type and scrambled it to
                        </p>
                        <div className='flex flex-col items-center justify-center'>
                          <span className='flex flex-col gap-1 text-[1rem] font-bold text-primary'>Dr. Lionel Jieumeni</span>
                          <span className='text-[.75rem] italic'>CEO KBG</span>
                        </div>
                      </div>
                      <div className='relative flex flex-col gap-3 p-6 rounded-md shadow shadow-slate-400 pt-md'>
                        <div className='absolute overflow-hidden rounded-full object-top w-[100px] -top-[12%] left-1/2 -translate-x-1/2 h-[100px]'>
                          <img src={presi} alt='#' className='absolute object-cover w-full h-full' />
                        </div>
                        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type and scrambled it to
                        </p>
                        <div className='flex flex-col items-center justify-center'>
                          <span className='flex flex-col gap-1 text-[1rem] font-bold text-primary'>Dr. Lionel Jieumeni</span>
                          <span className='text-[.75rem] italic'>CEO KBG</span>
                        </div>
                      </div>
                  </div>
                  
                </div> */}
              </div>
              <div className='w-[25%] flex flex-col gap-10 max-md:hidden'>
                  <div className='flex flex-col gap-3'>
                      <h5 className='uppercase text-[0.7rem] mb-0 font-light'>Pour plus d'informations</h5>
                      <div className='bg-primary px-8 flex flex-col gap-2 py-[1rem]'>
                          <span className='text-white'>Téléphone</span>
                          <div className='font-semibold bg-gray-100 px-4 py-3 rounded-sm flex item-center gap-3 text-[1rem]'>
                            <TelephoneIcon />
                            +1 (438) 388-3606
                          </div>
                      </div>
                      <div className='bg-primary px-8 flex flex-col gap-2 py-[1rem]'>
                          <span className='text-white'>Couriel</span>
                          <div className='font-semibold bg-gray-100 px-4 py-3 rounded-sm flex item-center gap-3 text-[1rem]'>
                            <Mail01Icon />
                           info@cc-ca.ca
                          </div>
                      </div>
                  </div>
                  <div className='flex flex-col gap-3'>
                      <h5 className='uppercase text-[0.7rem] mb-0 font-light'>Nos Parténaires</h5>                     
                      <div className='px-8 py-5 bg-gray-100'>
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
                          {data?.map((x) =>
                            <SwiperSlide className='bg-gray-100'>
                              <NavLink className='flex items-center justify-center px-2 py-1 bg-gray-100 rounded-sm' to={x.link}>
                                <img className=" h-[65px]" src={x.image} alt='' />
                              </NavLink>
                            </SwiperSlide>
                          )}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                  <Publicite />
                  <Infolettre />
              </div>
          </div>
    </Annimated>
  )
}
