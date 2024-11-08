import React, { useState } from 'react'
import Navbar from '../components/Navbar/index';
import logo from '../assets/1x/icone.png'
import logo1 from '../assets/1x/icone.png'
import { A11y, Autoplay, EffectFade, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import banner2 from '../assets/background.jpg'
import Titre from '../components/Formations/Titre';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import emailjs from "@emailjs/browser"


export default function Formation() {
    const [open, setOpen] = useState(false)
    const [choix, setChoix] = useState(true)
    const [nom, setNom] = useState('')
    const [mail, setMail] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')
    const [stat, setStat] = useState('')
    const Banners = (props) => {
        const { image, descrip } = props
        return (
            <div className='relative h-[400px] max-md:h-[250px] bg-opacity-45 bg-primary'>
                <img src={image} className='object-cover w-full h-full' alt='' />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 max-md:bg-opacity-50'></div>
                <div className='absolute w-[100%] top-[50%] text-start -translate-y-[50%] bg-red z-[200] text-white flex flex-col px-[4%]'>
                    {/* <h1 className='text-deco'>{marque}</h1> */}
                    <div className='flex flex-col w-full max-md:justify-center'>
                        {/* <h1 className='mb-1 mt-1 text-[2rem] font-bold'>{titre}</h1> */}
                        <span className='text-[3.7rem] max-lg:text-[2rem] max-md:text-[1.6rem] text-center font-bold'>{descrip}</span>
                    </div>
                </div>
            </div>
        )
    }
    const data = [
        {
            prog: 'Programme de formation Affaires Afrique',
            formation: [
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
            ],
        },
        {
            prog: 'Programme de formation Affaires Canada / Québec',
            formation: [
                {
                    titre: 'Programme de Perfectionnement des Capacités des Dirigeants et Entrepreneurs (PPCDE)',
                    descrip: ''
                },
                {
                    titre: 'Programme de formation sur le Repreneuriat',
                    descrip: ''
                },
                {
                    titre: 'Programme Acquisition et Gestion d’entreprise',
                    descrip: ''
                }
            ],
        }
    ]

    

    const sendEmail = () => {
    const templateParams = {
        prog:choix,
        name: nom,
        tel: tel,
        mail: mail,
        message: message,
        stat: stat,
        to: 'info@cc-ca.ca'
    }
        emailjs
            .send(
                'service_lsm0da1',
                'template_twvg6aw',
                templateParams,
                'GvD_PjWrMcfFFe5bp'
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const Modal = () => {
        return (
            <Dialog open={open} onClose={setOpen} className="relative z-[100]">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-100 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center w-full sm:mt-0">
                                        <DialogTitle as="h1" className="text-base font-semibold leading-6 text-gray-900">
                                            Souscription au programme
                                        </DialogTitle>
                                        <div className='mt-2 flex flex-col gap-4'>
                                            <div className='flex items-center gap-2'>Formation:
                                                <span className='text-secondary font-semibold text-center leading-5 text-[.85rem]'>{choix}</span></div>
                                            <div className="flex flex-col w-full gap-3">
                                                <input className='formulaire' value={nom} onChange={(e)=>setNom(e.target.value)} type='text' placeholder='Nom et Prenom' />
                                                <input className='formulaire' value={tel} onChange={(e) => setTel(e.target.value)} type='tel' placeholder='Numero de telephone' />
                                                <input className='formulaire' value={mail} onChange={(e) => setMail(e.target.value)} type='email' placeholder='Adresse Mail' />
                                                <select className='formulaire' onChange={(e) => setStat(e.target.value)}>
                                                    <option>Selectionner type</option>
                                                    <option value={'Etudiant'}>Etudiant</option>
                                                    <option value={'Entreprise'}>Entreprise</option>
                                                </select>
                                                <textarea className='formulaire' value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder='Description'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => choisir()}
                                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Soumettre
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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

    const choisir = async () => {
        await sendEmail()
        setOpen(!open)
    }
    const check = async (x) => {
        await setChoix(x);
        setOpen(!open)
    }
  return (
    <>
          {/* <main> */}
          <Modal />
          <header className='relative'>
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
          </header>
          <div className="px-[5%] bg-[#F7F9F9] w-full flex flex-col gap-20 py-md max-md:py-12">           
              {data?.map((x,index)=>
             <div key={index} className='w-full'>
                  <Titre titre={x.prog} />
                 
                      <div className='grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 mt-8 max-sm:grid-cols-1'>
                    {x.formation?.map((y,index2) =>
                      <div key={index2} className='flex relative rounded-md overflow-hidden bg-white border-t-[3px] border-secondary flex-col items-center justify-center shadow-md p-9 pb-xl transition-all duration-500 hover:bg-primary hover:text-white'>
                          <h1 className='text-center '>{y.titre}</h1>
                          <span>{y.descrip}</span>
                            <button onClick={() => check(y.titre)} className='absolute font-semibold bottom-5 text-green-600'>S'inscrire</button> 
                      </div>
                    )}
                </div>
            </div>
              )}
          </div>    
          </>
  )
}
