
import React, { useState } from 'react'
import contactPhoto from '../../assets/2151440495.jpg'
import { TelephoneIcon } from 'hugeicons-react'
import { Location01Icon } from 'hugeicons-react'
import { Globe02Icon } from 'hugeicons-react'
import { Mail01Icon } from 'hugeicons-react'
import { NavLink } from 'react-router-dom'
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';


function Contact() {

  const [loading,setLoading]=useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [descrip, setDescrip] = useState('');
  const { t } = useTranslation();

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
          title: 'Mail envoyé avec success',
          showConfirmButton: false,
          timer: 1900,
          customClass: {
            title: 'text-[1rem] text-primary'
          }
        })
      }, (error) => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Echec de l\'envoi du Mail',
          showConfirmButton: false,
          timer: 1900,
          customClass: {
            title: 'text-[1rem]'
          }

        })
      });
    return res
  }
  const sendRequete = async () => {
    if (name !== '' && email !== '' && descrip !== '') {
      setLoading(true);
      const templateParams = {
        name: name,
        tel: tel,
        mail: email,
        message: descrip,
        to: 'info@innov-technology-ltd.site'
      }
      await sendEmail(templateParams, 'template_twvg6aw')
    } else {
      alert("donnée manquante")
    }
  }


  return (  
    <div className='px-[5%] relative py-md w-full'>
      {loading &&
        <div className='fixed z-[1000] w-full h-full top-0 flex items-center justify-center bg-white bg-opacity-80 left-0 text-black'>
          <svg className="w-20 h-20 text-white bg-black animate-spin" viewBox='0 0 24 24'></svg>
        </div>
      }
      <img src={contactPhoto} className='absolute top-0 left-0 object-cover w-full h-full z-1' alt='' />
      <div className='absolute top-0 left-0 w-full h-full z-2 bg-primary bg-opacity-80'></div>
      <div className='flex flex-col'>
        <h1 className='text-white z-10 text-center text-[2.5rem] max-md:text-[1.8rem] mb-5 font-semibold'>{t('contact_us')}</h1>
        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-14 max-sm:grid-cols-1'>
          <div className='relative gap-5 pt-5 overflow-hidden text-white'>
            <div className='flex gap-6 items-center font-medium mb-10 text-[1.5rem]'>
              <Mail01Icon size={'3rem'} />
              <span>info@cc-ca.ca</span>
            </div>
            <div className='flex gap-6 items-center font-medium mb-10 text-[1.5rem]'>
              <TelephoneIcon size={'3rem'} />
              <span>+1 (438) 388-3606</span>
            </div>
            <div className='flex gap-6 items-center font-medium mb-10 text-[1.5rem]'>
              <Globe02Icon size={'3rem'} />
              <NavLink to={'http://cc-ca.ca'}>www.cc-ca.ca</NavLink>
            </div>
            <div className='flex gap-6 items-center font-medium text-[1.5rem]'>
              <Location01Icon size={'4rem'} />
              <span>400 - 257 rue Sherbrooke Est, Montréal, H2X 1E3, QC, Canada</span>
            </div>
          </div>
          <div className='relative'>
            {/* <p className="text-[1.5rem] max-md:text-[1.2rem] font-semibold w-full text-center mb-3 text-white capitalize ">posez nous vos questions !</p> */}
            <div className='flex flex-col gap-4 mt-5'>
              <input type='text' className='p-3 px-4 border-none rounded-sm outline-0' onChange={(e) => setName(e.target.value)}  placeholder={t('enter_name')} />
              <input type='text' className='p-3 px-4 border-none rounded-sm outline-0' onChange={(e) => setEmail(e.target.value)} placeholder={t('enter_email')} />
              <input type='number' className='p-3 px-4 border-none rounded-sm outline-0' onChange={(e) => setTel(e.target.value)} placeholder={t('enter_phone')} />
              <textarea rows={4} className='p-3 px-4 border-none rounded-sm outline-0' onChange={(e) => setDescrip(e.target.value)} placeholder={t('ask_questions')} />
              <button onClick={() => { sendRequete() }} className='p-3 text-white rounded-md bg-secondary'>{t('send_button')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
