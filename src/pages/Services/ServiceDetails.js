import React,{useRef,useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import entrep from '../../assets/videos/entrepreunariat.jpg'
import repreun from '../../assets/videos/repreunariat.jpg'
import coop from '../../assets/videos/cooperation.jpg'
import francop from '../../assets/videos/francophonie.jpg'
import maillage from '../../assets/videos/maillageAffaire.jpg'
import incubat from '../../assets/videos/incubation.jpg'
import formac from '../../assets/videos/jummelage.jpg'
import Annimated from '../../components/Annimated'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2';
import Incubations from '../Incubations'

import boreal from '../../assets/videos/boreal.svg'
import agoraliance from '../../assets/videos/Logo AGORAlliance.webp'
import digihub from '../../assets/videos/digihub2.png'
import entreprendreici from '../../assets/videos/Entreprendre_ici_Logo_seul_185.png'
import institutleader from '../../assets/videos/INSTITUT_LEADERSHIP-logo.jpg'
import mentorat from '../../assets/1x/mentorat.PNG'
import TemplateFormations from '../../components/Formations/TemplateFormations'


export default function ServiceDetails() {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [opens, setOpens] = useState(false)
    const [progs, setProgs] = useState('')
    const [ecole, setEcole] = useState('')
    const [forma, setForma] = useState('')

    const nom = useRef('')
    const mail = useRef('')
    const tel = useRef('')
    const message = useRef('')
    const stat = useRef('')
    const prog = useRef('')

    const progress = useRef('')
    const nameE = useRef('')

    const {nameservice}=useParams()
    const datas = [
        {
            title: 'Entrepreneuriat',
            image:entrep,
            para: [
                {
                    p: 'La CCCA offre un service complet en matière de démarrage d’entreprise au Canada. À travers son réseau d’experts en entrepreneuriat au Canada, les membres de la CCCA peuvent solliciter nos services afin de les accompagner à démarrer et à réaliser leurs entreprises au Canada ou dans un pays d’Afrique où elle est représentée.'
                },
                {
                    p: 'La CCCA s’appuie sur des partenariats solides ainsi que sur des organismes d’accompagnement en entrepreneuriat au Canada.Ainsi, nous pouvons suggérer des idées d’entreprises innovantes, faire un accompagnement dans la rédaction du projet entrepreneurial, le plan d’affaires ainsi que la planification stratégique, et également le plan de communication marketing.'
                },
                {
                    p: 'En outre, le service d’appui à l’accompagnement de la CCCA est structuré de son incubateur intégré qui offre un environnement complet et des outils clés pour démarrer une entreprise, ouvrir une filiale ou réactiver une entreprise dormante au Canada et en Afrique'
                }
            ],
            liste: [
                {
                    libele: 'Nos Partenaires:',
                    option: [
                        boreal,
                        institutleader,
                        digihub,
                        agoraliance,
                        entreprendreici
                    ]
                }
            ]
        },
        {
            title: 'Repreunariat',
            image: repreun,
            para: [
                {
                    p: "La CCCA se donne pour mandat d’attirer des investisseurs, des gens d’affaires basés en Afrique et qui souhaitent reprendre une entreprise en général et au Québec en particulier. Le repreneuriat est un programme économique qui est particulièrement mis en avant par le gouvernement du Québec à travers le ministère de l’économie, de l’innovation et de l’énergie ainsi que le ministère de l’immigration, de la francisation et de l’intégration.Ce programme repose sur une problématique: près de 25% des 65 ans et plus ont l’intention de fermer leurs entreprises par manque de relève.Moins de 20% des entrepreneurs résidants au Québec ont l’intention de reprendre les entreprises existantes.Plus de 60% sont plutôt intéressés à démarrer une entreprise."
                }
            ],
            liste: [
                {
                    libele: 'Les avantages avec le programme du repreneuriat sont directement perceptibles :',
                    option: [
                        'Il est plus facile d’obtenir du financement parce que l’entreprise présente déjà un historique financier et des actifs',
                        'L’image de marque et la réputation de l’entreprise sont déjà établies',
                        'Les produits au service de l’entreprise sont déjà bien alignés dans un marché concurrentiel',
                        'Il y a peu de risque de faillite car l’entreprise est déjà dans sa phase productive',
                        'Il existe déjà une relation entre les clients et les fournisseurs',
                        'Le personnel est déjà suffisamment formé et aguerri',
                        'Dans certains camps, l’ancien dirigeant peut aider à faire la transition pour que la reprise soit optimale',
                    ]
                }
            ],
            prog:[]
        },
        {
            title: 'Francophonie',
            image: francop,
            para: [
                {
                    p: "La CCCA est avant tout un marché économique francophone qui relie la francophonie canadienne et celle africaine.Elle s’ouvre ensuite vers les économies anglophones afin de susciter des dynamiques d’affaires impulsées par la volonté de commercialiser en langue française. À travers la francophonie, la CCCA entend attirer les économies diverses au sein d’un écosystème drainé par la langue française.La CCCA offre également des espaces d’apprentissage du français comme langue d’affaires.",
                },
                {
                    p: "À ce titre, elle offre un programme de francisation à tout entrepreneur ou investisseur qui choisit de s’installer au Québec ou au sein de communautés francophones au canada."
                }
            ],
            liste: [
                
            ],
            prog:[]
        },
        {
            title: 'Coopération Internationale',
            image: coop,
            para: [
                {
                    p: "La CCCA regroupe en son sein des expertises pour conduire des missions commerciales aussi bien au canada qu’en Afrique.Ce service vise à accompagner des gouvernements, institutions publiques ou para publiques, des organisations à but non lucratif, des entreprises, qui souhaitent effecteur une mission commerciale, de prospection ou d’exploration en vue de générer en développement d’affaires de partenariats ou de représentations.",
                }
            ],
            liste: [
                
            ],
            prog:[]
        },
        {
            title: 'Maillage d\'Affaires',
            image: maillage,
            para: [
                {
                    p: "La CCCA offre un programme de maillage d’affaires à travers des salons, des forums, des foires organisées sous forme de rencontre B to B et B to C et dont l’objectif est de permettre aux participants de nouer ou conclure des alliances d’affaires entre le canada et l’Afrique.À ce titre, la CCCA a plusieurs concepts évènementiels d’affaires qui se tiennent annuellement au canada ou dans l’un des pays africains où elle possède une délégation.",
                },
                {
                    p: "La CCCA collabore également avec des partenaires organisateurs pour attirer des délégations canadiennes d’entrepreneurs ou investisseurs pour participer à des évènements économiquement importants en Afrique, et inversement, cette dernière à travers ses délégués pays, mobilise des délégations africaines d’entrepreneurs et ou d’investisseurs pour prendre part à des événements d’affaires organisés au Canada.",
                }
            ],
            liste: [
                
            ],
            prog:[]
        },
        {
            title: 'Programme de Mentorat',
            image: maillage,
            para: [
                {
                    p: "le Réseau Mentorat Laval aide les entrepreneurs à trouver le mentor qui les fera grandir. Nous croyons que la réussite des entreprises passe avant tout par le mieux-être des personnes qui les dirigent. Nous nous appuyons sur le plus grand réseau de mentorat du Québec pour donner accès à des mentors d’expérience, quel que soit le stade de développement de l’entreprise",
                },
                {
                    p: "Le Réseau Mentorat Laval vous offre la possibilité d’adhérer à du mentorat individuel, du mentorat de groupe ou du mentorat en résidence. ",
                }
            ],
            liste: [
            ],
            prog: [
                {
                    titre: 'Mentorat de groupe',
                    descrip: 'Animées par des mentors possédant une riche expérience entrepreneuriale, les rencontres de mentorat de groupe visent le partage et la participation de tous les mentorés. Ce type d\'accompagnement permet aux entrepreneurs de comparer leur parcours à celui de leurs pairs, d\'échanger sur des aspects tant humains que pratico-pratiques selon des thématiques spécifiques, et de se créer un réseau d\'entrepreneurs. Le mentorat de groupe est complémentaire au mentorat individuel.Une dizaine de rencontres mensuelles animées par des mentors avec une cohorte de 8 à 10 entrepreneurs se posant les mêmes questions et vivant des défis similaires.',
                    detail: [
                        {
                            libelle: 'Comprends',
                            value: ['9 rencontres de groupe mensuelles de 3h animées par un mentor.'],
                        },
                        {
                            libelle: 'Tarifs',
                            value: ['600$ /année'],
                        }
                    ],
                    link:'#'
                },
                {
                    titre: 'Mentorat individuel',
                    descrip: 'Le mentorat individuel vous offre un accompagnement 100% personnalisé et centré sur vos défis personnels. Vous développerez avec votre mentor une relation de longue durée, basée sur la confiance et la confidentialité. VOUS êtes le maître à bord des sujets à discuter, selon votre horaires et vos besoins.  et il n’y a pas de limites au nombre de rencontres entre le mentor et le mentoré.',
                    detail: [
                        {
                            libelle: 'Comprends',
                            value: ['Rencontres illimitées de 1 h à 2 h avec un mentor', 'Suivi de la qualité de la relation mentorale'],
                        },
                        {
                            libelle: 'Tarifs',
                            value: ['50$ /mois incluant l’adhésion au Réseau Mentorat national donnant droit à de nombreux privilèges auprès de nos partenaires.'],
                        }
                    ],
                    link: '#'
                },
                {
                    titre: 'Mentorat individuel pour entrepreneur collectif',
                    descrip: "Le mentorat pour entrepreneur collectif a été mis sur pied pour aider les dirigeants d'organismes à but non lucratif(OBNL) ou de coopératives dans leurs défis particuliers.En vous inscrivant, vous bénéficierez de l’accompagnement de mentors détenant une expérience en gestion et en développement d’entreprises comme la vôtre.Ils pourront vous accompagner dans votre cheminement personnel et professionnel.",
                    detail: [
                        {
                            libelle: 'Comprends',
                            value: ['Rencontres illimitées de 1 h à 2 h avec un mentor', 'Suivi de la qualité de la relation mentorale'],
                        },
                        {
                            libelle: 'Tarifs',
                            value: ['50$ /mois incluant l’adhésion au Réseau Mentorat national donnant droit à de nombreux privilèges auprès de nos partenaires.'],
                        }
                    ],
                    link: '#'
                },
                {
                    titre: 'Autres services',
                    descrip: "",
                    detail: [
                        {
                            libelle: 'Le Réseau Mentorat Laval offre également :',
                            value: ['Du mentorat en résidence (mentorat ponctuel)'],
                        }
                    ],
                    link: ''
                },
                {
                    titre: 'Exclusif',
                    descrip: "Tous les membres de la Chambre de Commerce Canada Afrique (La CCCA) Bénéficient d'une reduction éxceptionnelle",
                    detail: [
                    ],
                    link: ''
                }
            ]
        },
        {
            title: 'Incubations',
            image: incubat,
            para: [
                {
                    p: "La CCCA à travers son programme d’incubation et d’accélération intitué « CCCA - Propuls » accompagne des entrepreneurs résident au canada de l’idéation au démarrage d’une entreprise.A travers ses 4 parcours, CCCA - Propuls vous permettra d’acquérir des ressources  clés pour démarrer une entreprise au Canada et la réaliser.",
                }
            ],
            liste: [

            ],
            prog:[]
        },
        {
            title: 'Formations',
            image: formac,
            para: [
                {
                    p: "La CCCA à travers son programme De formation accompagne des entrepreneurs résident en afrique de l’idéation au démarrage d’une entreprise.A travers ses 2 grands types de formations.",
                }
            ],
            liste: [

            ],
            templ:[
                {
                    title: 'Programme de formation Affaires Canada / Québec',
                    descrip: 'Ce programme de formation est donné par des experts en développement d’affaires basés aussi bien au Canada qu’en Afrique. Il vise a apporté des clés pour réussir son entrée en affaires dans l’un des pays africain où nous avons une représentation Officielle. Les thèmes sont variés, non exhaustifs et peuvent aussi être adapté selon le besoin. Entre autres thématiques que la CCCA propose :',
                    formm: [
                        {
                            libele: 'Programme de formation Affaires Canada / Québec',
                            link:"#"
                        },
                        {
                            libele: 'Programme de formation sur le Repreneuriat',
                            link: "#"
                        },
                        {
                            libele: 'Programme acquisition et Gestion d\'entreprise',
                            link: "#"
                        }
                    ]
                },
                {
                    title: 'Programme de formation Affaires Afrique',
                    descrip: 'Ce programme de formation est donné par des experts en développement d’affaires basés aussi bien au Canada qu’en Afrique. Il vise a apporté des clés pour réussir son entrée en affaires dans l’un des pays africain où nous avons une représentation Officielle. Les thèmes sont variés, non exhaustifs et peuvent aussi être adapté selon le besoin. Entre autres thématiques que la CCCA propose :',
                    formm: [
                        {
                            libele: 'Fiscalités et Impôts sur les entreprises en Afrique (pays de votre choix)',
                            link: ''
                        },
                        {
                            libele: 'Droit des affaires en Afrique',
                            link: ''
                        },
                        {
                            libele: 'Négoce/Import/Export en Afrique',
                            link: ''
                        },
                        {
                            libele: ' Commerce international / Commerce au sein de la ZLECAF',
                            link: ''
                        },
                        {
                            libele: 'Créer une filiale en Afrique (l’un des pays où nous sommes représentés) ',
                            link: ''
                        },
                        {
                            libele: 'Intelligence Commerciale',
                            link: ''
                        },
                        {
                            libele: ' Procédures douanières en Afrique (pays de choix)',
                            link: ''
                        },
                        {
                            libele: 'Tourisme / Culture et Mentalités africaines ',
                            link: ''
                        },
                        {
                            libele: 'Commerce équitable',
                            link: ''
                        },
                        {
                            libele: 'Secteur d’investissement en Afrique à forte croissance',
                            link: ''
                        }
                    ]
                }
            ],
            prog:[],
        }
    ]
    
    const formation = [
        {
            titre: 'Fiscalités et Impôts sur les entreprises en Afrique (pays de votre choix)',
            descrip: ''
        },
        {
            titre: 'Droit des affaires en Afrique',
            descrip: ''
        },
        {
            titre: 'Négoce/Import/Export en Afrique',
            descrip: ''
        },
        {
            titre: ' Commerce international / Commerce au sein de la ZLECAF',
            descrip: ''
        },
        {
            titre: 'Créer une filiale en Afrique (l’un des pays où nous sommes représentés) ',
            descrip: ''
        },
        {
            titre: 'Intelligence Commerciale',
            descrip: ''
        },
        {
            titre: ' Procédures douanières en Afrique (pays de choix)',
            descrip: ''
        },
        {
            titre: 'Tourisme / Culture et Mentalités africaines ',
            descrip: ''
        },
        {
            titre: 'Commerce équitable',
            descrip: ''
        },
        {
            titre: 'Secteur d’investissement en Afrique à forte croissance',
            descrip: ''
        }
    ];

    const programme = [
        {
            id: '1',
            titre: 'Programme de Perfectionnement des Capacités des Dirigeants et Entrepreneurs (PPCDE)',
            descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            id: '2',
            titre: 'Programme de formation sur le Repreneuriat',
            descrip: 'Test'
        }
    ]

    const ecoles = [
        {
            id: '1',
            titre: 'HEC Montreal'
        },
        {
            id: '2',
            titre: 'Universite Laval'
        },
        {
            id: '3',
            titre: 'ENAPS'
        },
        {
            id: '4',
            titre: 'Universite BOREAL'
        }
    ]

    const sous_form = [
        {
            ecol: 'HEC Montreal',
            detail: [
                {
                    titre: 'Intelligence numérique(Big Data et IA)',
                },
                {
                    titre: 'Communication, Marketing et vente',
                },
                {
                    titre: 'Developpement Durable et Ethique',
                },
                {
                    titre: 'Finances et Comptabilités',
                },
                {
                    titre: 'Leadership et ressources humaines',
                },
                {
                    titre: 'Stratégie, Innovation et prise de décision',
                }
            ]
        }
        // {universite laval}
        ,
        {
            ecol: 'Universite Laval',
            detail: [
                {
                    titre: "Certificat Universitaire en Gouvernance des sociétés"
                },
                {
                    titre: "Formation Continue en gouvenance"
                },
                {
                    titre: "Formation En organisation"
                }
            ]
        }
        // {Boreal}
        ,
        {
            ecol: 'Universite BOREAL',
            detail: [
                {
                    titre: "Entrepreneuriat"
                },
                {
                    titre: "Commerce International (Import-Exprt Canada-Afrique/ Afrique/Canada)"
                },
                {
                    titre: "Expertise minière"
                }
            ]
        }
    ]
    const sendEmail = (templateParams, template) => {
        let res;
        emailjs
            .send(
                'service_lsm0da1',
                template,
                templateParams,
                'GvD_PjWrMcfFFe5bp'
            )
            .then((result) => {
                setLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Requête effectué avec success',
                    showConfirmButton: false,
                    timer: 1700,
                    customClass: {
                        title: 'text-[1rem] text-primary'
                    }
                })
                setOpen(false)
                setOpens(false)
            }, (error) => {
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Requête échoué',
                    showConfirmButton: false,
                    timer: 1700,
                    customClass: {
                        title: 'text-[1rem]'
                    }

                })
            });
        return res
    }

 

    const choisirCanada = async () => {
        setLoading(true);
        const templateParams = {
            prog: programme?.find((x) => x.id === progs)?.titre,
            name: nom.current.value,
            ecole: ecole,
            progress: progress.current.value,
            forma: forma,
            nameE: nameE.current.value,
            mail: mail.current.value,
            message: message.current.value,
            stat: stat.current.value,
            to: 'info@cc-ca.ca'
        }
        await sendEmail(templateParams, 'template_lw9hzmf')
    }
    const info = datas?.filter((z) => z.title === nameservice)
  return (
      <Annimated>
          <Dialog Dialog open={opens} onClose={setOpens} className="relative z-[100]" >
              <DialogBackdrop
                  transition
                  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
              />

              <div className="fixed inset-0 w-screen overflow-y-auto z-100">
                  <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                      <DialogPanel
                          transition
                          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                      >
                          {loading &&
                              <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                                  <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                  <span className="sr-only">Loading...</span>
                              </div>
                          }
                          <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">
                                  <div className="w-full mt-3 text-center sm:mt-0">
                                      <DialogTitle as="h1" className="text-base font-semibold leading-6 text-gray-900">
                                          Souscription au service {nameservice}
                                      </DialogTitle>
                                      <div className='flex flex-col gap-4 mt-2'>
                                          {/* <div className='flex items-center gap-2'>Formation:
                                                <span className='text-secondary font-semibold text-center leading-5 text-[.85rem]'>{choix}</span></div> */}

                                          <div className="flex flex-col w-full gap-3">
                                              <input className='formulaire' ref={nom} type='text' placeholder='Nom et Prenom' />
                                              <input className='formulaire' ref={mail} type='email' placeholder='Adresse Mail' />
                                              <input className='formulaire' ref={progress} type='number' placeholder='Valeur comprise entre 0 et 100' />
                                              <select className='formulaire' ref={stat}>
                                                  <option>Selectionner votre status</option>
                                                  <option value={'Particulier'}>Particulier</option>
                                                  <option value={'Entreprise'}>Entreprise</option>
                                              </select>
                                              <input className='formulaire' ref={nameE} type='text' placeholder='Nom de Votre Entreprise' />
                                              <select className='formulaire' onChange={(e) => setProgs(e.target.value)}>
                                                  <option>Selectionner un programme</option>
                                                  {programme?.map((x, index) =>
                                                      <option key={index} value={x.id}>{x.titre}</option>
                                                  )}
                                              </select>
                                              {progs === '1' &&
                                                  <>
                                                      <select className='formulaire' value={ecole} onChange={(e) => setEcole(e.target.value)}>
                                                          <option>Selectionner une école</option>
                                                          {ecoles?.map((x, index) =>
                                                              <option key={index} value={x.titre}>{x.titre}</option>
                                                          )}
                                                      </select>
                                                      <select className='formulaire' value={forma} onChange={(e) => setForma(e.target.value)}>
                                                          <option>Selectionner une formation</option>
                                                          {sous_form?.find((y) => y.ecol === ecole)?.detail?.map((x, indexs) =>
                                                              <option key={indexs} value={x.titre}>{x.titre}</option>
                                                          )}
                                                      </select>
                                                  </>
                                              }

                                              <textarea className='formulaire' ref={message} rows={4} placeholder='Description'></textarea>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                  type="button"
                                  onClick={() => choisirCanada()}
                                  className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-green-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                              >
                                  Soumettre
                              </button>
                              <button
                                  type="button"
                                  data-autofocus
                                  onClick={() => setOpens(false)}
                                  className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              >
                                  Annuler
                              </button>
                          </div>
                      </DialogPanel>
                  </div>
              </div>
            </Dialog>
          {/* <h1 className='text-[1.5rem] font-bold text-center'>{nameservice}</h1> */}
          
          <div  className='flex flex-col gap-4'>
              <div className='relative w-full h-[300px]'>
                  <img src={info[0]?.image} width={100} height={100} loading='lazy' alt='#' className='object-cover w-full h-full' />
              </div>
                <div className='flex flex-col gap-4'>
                  {info[0]?.para?.map((y,index) =>
                    <p key={index} className='text-[1.1rem] max-md:text-[1rem]'>{y.p}</p>
                  )}
                  </div>
                  {(nameservice !== 'Formations' && nameservice !== 'Incubations') &&
                      <div>
                          {info[0]?.liste?.map((y, index) =>
                              <div className='mt-3' key={index}>
                                  <h6 className='text-[1.1rem] max-md:text-[1rem]'>{y.libele}</h6>
                                  <ul className={`${nameservice === "Entrepreneuriat" ? 'grid grid-cols-6 max-md:grid-cols-2 w-[100%]' :'list-disc  ps-10'} gap-6 max-md:ps-4 mt-2`}>
                                      {y.option?.map((z, ind) =>
                                        <>
                                        {
                                            nameservice ==='Entrepreneuriat' ?
                                          <li className="block" key={ind}><img className='h-[70px] w-full' src={z} alt='#' /></li>:
                                          <li key={ind}>{z}</li>
                                        }
                                        </>
                                      )}
                                  </ul>
                              </div>
                          )}
                  </div>
                  }
                  {info[0]?.prog?.length > 0 && 
                        <div className='flex flex-col gap-10'>
                      {info[0]?.prog?.map((item, indo) =>
                          <div key={indo} className='flex flex-col gap-3'>
                              <h5 className='text-secondary text-[1.5rem] m-0'>{item.titre}</h5>
                              <p className='text-[1.1rem] text-justify'>{item.descrip}</p>
                              {item?.detail?.map((a, ak) =>
                                  <div key={ak}>
                                      <span className='text-[1.4rem] text-primary font-semibold'>{a?.libelle}</span>
                                      <ul className="list-disc ps-5 max-md:ps-4">
                                          {a?.value?.map((t) =>
                                              <li className='text-[1.1rem]'>{t}</li>
                                          )}
                                      </ul>
                                  </div>
                              )}
                              {item?.link !== '' && <NavLink to={item.link} className={'text-white mx-auto w-fit p-3 font-semibold px-8 text-[.9rem] rounded-md bg-secondary'}>Je m'inscrire</NavLink>}
                          </div>
                      )}
                      <div >
                          <span className='text-secondary font-semibold text-[1.5rem] mb-4'>Parténaire présentateur</span>
                          <img src={mentorat} alt='#' className='w-[210px] mt-3 h-[100px]' />
                      </div>
                        </div>
                    }
                  {nameservice === 'Incubations' &&
                      <Incubations />
                  }
                  {nameservice === 'Formations' &&
                  <div>
                      {info[0]?.templ?.map((y)=>
                        <div>
                              <h3>{y?.title}</h3>
                              <p>{y?.descip}</p>
                              {/* <div className="flex items-center gap-4">formation <ArrowRight01Icon /></div> */}
                              <div>
                              </div>
                            <TemplateFormations />
                        </div>
                        )}
                    </div>
                  }
              {(nameservice !== 'Formations' && nameservice !== 'Incubations' && nameservice !== 'Programme de Mentorat')&&
                  <button onClick={()=>setOpens(true)} className='px-6 py-3 mt-4 font-semibold text-white rounded-sm bg-secondary'>souscrire</button>
              }
              </div>
      </Annimated>
  )
}
