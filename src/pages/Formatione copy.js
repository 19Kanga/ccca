import React, { useRef, useState } from 'react'
// import Navbar from '../components/Navbar/index';
// import logo from '../assets/1x/icone.png'
// import logo1 from '../assets/1x/icone.png'
// import { A11y, Autoplay, EffectFade, Scrollbar } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import banner2 from '../assets/footer.jpg'
import Titre from '../components/Formations/Titre';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2';


export default function Formation() {
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
    //             </div>
    //         </div>
    //     )
    // }
    const formation= [
        {
            titre: 'Fiscalités et Impôts sur les entreprises en Afrique (pays de votre choix)',
            descrip: ''
        },
        {
            titre: 'Droit des affaires en Afrique',
            descrip: ''
        },
        {
            titre: 'Négoce/ Import/Export en Afrique',
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

    const programme= [
        {   
            id: '1',
            titre: 'Programme de Perfectionnement des Capacités des Dirigeants et Entrepreneurs (PPCDE)',
            descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            id:'2',
            titre: 'Programme de formation sur le Repreneuriat',
            descrip: 'Test'
        }
    ]

    const ecoles = [
        {
            id: '1',
            titre:'HEC Montreal'
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
            detail:[
                {
                    titre:'Intelligence numérique(Big Data et IA)',
                },
                {
                    titre:'Communication, Marketing et vente',
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

    const data = [
        {
            prog: 'Affaires Afrique',
            descrip: "Ce programme de formation est donné par des experts en développement d’affaires basés aussi bien au Canada qu’en Afrique. Il vise a apporté des clés pour réussir son entrée en affaires dans l’un des pays africain où nous avons une représentation Officielle. Les thèmes sont variés, non exhaustifs et peuvent aussi être adapté selon le besoin.",
            check:'afrique',
        },
        {
            prog: 'Affaires Canada / Québec',
            descrip: "Lorem Ipsum is simply dummy text of the but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the",
            check: 'canada',
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
                    timer:1700,
                    customClass: {
                        title:'text-[1rem] text-primary'
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

    const Modal = () => {
        return (
            <Dialog open={open} onClose={setOpen} className="relative z-[100]">
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
                                            Souscription au programme Afrique
                                        </DialogTitle>
                                        <div className='flex flex-col gap-4 mt-2'>
                                            <div className="flex flex-col w-full gap-3">
                                                <input className='formulaire' ref={nom} type='text' placeholder='Nom et Prenom' />
                                                <input className='formulaire' ref={tel} type='tel' placeholder='Numero de telephone' />
                                                <input className='formulaire' ref={mail} type='email' placeholder='Adresse Mail' />
                                                <select className='formulaire list' ref={stat}>
                                                    <option>Selectionner votre status</option>
                                                    <option value={'Etudiant'}>Etudiant</option>
                                                    <option value={'Entreprise'}>Entreprise</option>
                                                </select>
                                                <select className='formulaire' ref={prog}>
                                                    <option>Selectionner une formmation</option>
                                                    {formation?.map((x,index) =>
                                                        <option key={index} value={x.titre}>{x.titre}</option>
                                                    )}
                                                </select>
                                                <textarea className='formulaire' ref={message} rows={4} placeholder='Description'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => choisirAfrique()}
                                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-green-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Soumettre
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen(false)}
                                    className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Annuler
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        )
    }
 


    const choisirAfrique = async () => {
        setLoading(true);
        const templateParams = {
            prog: prog.current.value,
            name: nom.current.value,
            tel: tel.current.value,
            mail: mail.current.value,
            message: message.current.value,
            stat: stat.current.value,
            to: 'info@cc-ca.ca'
        }
        await sendEmail(templateParams,'template_twvg6aw')
    }
    const choisirCanada = async () => {
        setLoading(true);
        const templateParams = {
            prog: programme?.find((x)=>x.id ===progs)?.titre,
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
        await sendEmail(templateParams,'template_lw9hzmf')
    }
    const check = async (x,y) => {
        // await setChoix(x);
        if (y === 'afrique') {
            setOpen(!open) 
        } else {
            setOpens(!opens)
        }
    }
  return (
    <>
          {/* <main> */}
          <Modal />
          <Dialog open={opens} onClose={setOpens} className="relative z-[100]">
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
                                          Souscription au programme Canada / Quebec
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
                                              <select className='formulaire' onChange={(e)=>setProgs(e.target.value)}>
                                                  <option>Selectionner un programme</option>
                                                  {programme?.map((x,index) =>
                                                      <option key={index} value={x.id}>{x.titre}</option>
                                                  )}
                                              </select>
                                              {progs === '1' &&
                                                  <>
                                                <select className='formulaire' value={ecole} onChange={(e)=>setEcole(e.target.value)}>
                                                  <option>Selectionner une école</option>
                                                  {ecoles?.map((x,index) =>
                                                      <option key={index} value={x.titre}>{x.titre}</option>
                                                  )}
                                              </select>
                                                  <select className='formulaire' value={forma} onChange={(e) => setForma(e.target.value)}>
                                                  <option>Selectionner une formation</option>
                                                  {sous_form?.find((y) => y.ecol === ecole)?.detail?.map((x,indexs) =>
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
          {/* <Modales /> */}
          {/* <header className='relative'>
              <Swiper
                  modules={[Scrollbar, A11y, Autoplay, EffectFade]}
                  autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                  }}
                  spaceBetween={0}
                  slidesPerView={1}
                  effect='fade'
              >
                  <SwiperSlide className=''>
                      <Banners
                          titre="L'expertise au service de votre Cybersécurité"
                          image={banner2}
                          descrip="Formations"
                      />
                  </SwiperSlide>
              </Swiper>
              <div className='absolute z-[100] top-0 w-full'>
                  <Navbar logo={logo} logos={logo1} />
              </div>
          </header> */}
          <div className="px-[5%] w-full flex flex-col gap-20 py-md max-md:py-12">           
              
             <div className='w-full'>
                  <Titre titre={'Programmes de Formations'} />
                 
                    <div className='grid px-[12%] max-md:px-1 grid-cols-2 gap-12 max-lg:grid-cols-2 max-md:grid-cols-1 mt-8 max-sm:grid-cols-1'>
                    {data?.map((y,index2) =>
                        <div key={index2} onClick={() => check(y.titre, y.check)} className='flex  relative rounded-md overflow-hidden cursor-pointer bg-white border-b-[10px] hover:scale-105 hover:shadow-2xl hover:shadow-slate-300 first-of-type:border-primary last-of-type:border-secondary flex-col gap-3 items-center shadow-lg p-9 transition-all duration-500'>
                          <div className="w-full">
                                <div className='rounded-md overflow-hidden h-[130px] w-full bg-opacity-70 first-of-type:bg-primary'></div> 
                          </div>
                            <h1 className='text-center text-[1.5rem] mb-1 first-of-type:text-primary font-semibold'>{y.prog}</h1>
                          <span className='text-[1rem] font-normal'>{y.descrip}</span>
                          {/* <button  className='absolute font-medium text-[1.1rem] bottom-5 hover:text-secondary '>Participer à la formation</button>  */}
                            
                      </div>
                    )}
                </div>
            </div>
          </div>    
          </>
  )
}
