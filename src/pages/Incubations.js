import { ArrowRight01Icon, ArrowRight02Icon } from 'hugeicons-react';
import React, { useRef, useState } from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import $ from 'jquery'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2';


export default function Incubations() {

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [progs, setProgs] = useState('')
    const [stat,setStat]=useState('')
    const nom = useRef('')
    const mail = useRef('')
    // const tel = useRef('')
    const message = useRef('')
    // const prog = useRef('')

    const progress = useRef('')
    const nameE = useRef('')

    //mail send
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
    const sendRequete = async () => {
        setLoading(true);
        const templateParams = {
            prog: progs,
            name: nom.current.value,
            progress: progress.current.value,
            nameE: nameE.current.value,
            mail: mail.current.value,
            message: message.current.value,
            stat: stat,
            to: 'info@cc-ca.ca'
        }
        await sendEmail(templateParams, 'template_lw9hzmf')
    }
    //fin mail send

    const data = [
        {
            titre: 'Développement de projets multi-acteurs',
            duree: '2h00',
            langue: 'Français',
            sousProg:[]
        },
        {
            titre: 'Entrepreneuriat et levée de fonds publics pour la recherche et insitutionnels',
            duree: '2h00',
            langue: 'Français',
            sousProg:[]
        },
        {
            titre: 'Formation a l\'entrepreneuriat',
            duree: '1h30',
            langue: 'Français',
            sousProg: [
                'Equipe et organisation',
                'Marketing, Commercialisation et Communication',
                'Gestion et Financement',
                'Juridique et Autres'
            ]
        },
        {
            titre: 'Développement et financement d\'un incubateur',
            duree: '2h00',
            langue: 'Français',
            sousProg:[]
        },
        
    ]


    const handleSelect = async (x) => { 
        await setProgs(x)
        setOpen(true)
    };
    
    $(function () {
        let toggleValue = false;
        $(document).on('click', '.open-sousprog', function () {
            toggleValue = !toggleValue
            const pixel = $(this).siblings().prop('scrollHeight');
            if (toggleValue) {
                $(this).siblings().css('height', `${pixel}px`);
                // $(this).siblings().removeClass('hidden');
                $('.pako').children().last().addClass('h-fit');
            } else {
                $(this).siblings().css('height', `0px`);
                // $(this).siblings().addClass('hidden');
                $('.pako').children().last().removeClass('h-fit');
            }
        })
    })
    return (
        <>
            <Dialog Dialog open={open} onClose={setOpen} className="relative z-[100]" >
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
                                      <DialogTitle as="h1" className="text-[1.3rem] font-semibold leading-6 text-gray-900">
                                          Souscription au service Incubations
                                      </DialogTitle>
                                      <div className='flex flex-col gap-4 mt-4'>
                                          {/* <div className='flex items-center gap-2'>Formation:
                                                <span className='text-secondary font-semibold text-center leading-5 text-[.85rem]'>{choix}</span></div> */}
                                            <span className='font-semibold text-primary bg-gray-100 p-3 border-[1px] border-black'>{progs}</span>
                                          <div className="flex flex-col w-full gap-3">
                                              <input className='formulaire' ref={nom} type='text' placeholder='Nom et Prenom' />
                                              <input className='formulaire' ref={mail} type='email' placeholder='Adresse Mail' />
                                              <select className='formulaire' onChange={(e)=>setStat(e.target.value)}>
                                                  <option value={'Particulier'}>Particulier</option>
                                                  <option value={'Entreprise'}>Entreprise</option>
                                              </select>
                                              {stat==="Entreprise" &&
                                                    <input className='formulaire' ref={nameE} type='text' placeholder='Nom de Votre Entreprise' />
                                               }
                                              <input className='formulaire' ref={progress} type='number' placeholder='Etat de l\entreprise sur 100' />
                                              
                                              <textarea className='formulaire' ref={message} rows={4} placeholder='Description'></textarea>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                  type="button"
                                    onClick={() => sendRequete()}
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
                <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 pako'>
                    {data?.map((x,index)=>
                    <div key={index} className='relative border-[1px] border-b-[5px] rounded-sm transition-all px-14 max-md:px-10 duration-500 border-primary pt-8 pb-[8.6rem] flex flex-col gap-2'>
                            <h1 className='text-[1.2rem] font-semibold'>{x.titre}</h1>
                            {x?.sousProg.length > 0 &&
                                <div className='flex flex-col gap-1 overflow-hidden'>
                                    <span className='text-secondary text-[1.1rem] cursor-pointer font-semibold flex items-center open-sousprog gap-3'><ArrowRight01Icon /> sous programmes</span>
                                    <ul className='list-disc transition-all duration-500 ps-5' style={{ height:0 }}>
                                        {x?.sousProg?.map((z,ind)=>
                                            <li key={ind}>{z}</li>
                                        )}
                                    </ul>
                                </div>
                            }
                            <div className='absolute left-0 flex flex-col w-full gap-3 px-14 max-md:px-10 bottom-6'>
                                <span className='font-medium opacity-75'>Langue: {x.langue}</span>
                                <span className='font-medium opacity-75'>Durée: {x.duree}</span>
                                <span onClick={()=>handleSelect(x.titre)} className='flex items-center self-center gap-3 font-medium cursor-pointer text-secondary btn-souscrire'>Souscrire<ArrowRight02Icon className='transition-all duration-300 icones'/></span>
                            </div>
                    </div>
                    )}
            </div>
        </>
    )
}
