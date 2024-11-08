
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState} from 'react'
import { Menu01Icon } from 'hugeicons-react'
import 'jquery/dist/jquery'
import { Cancel01Icon } from 'hugeicons-react'
import $ from 'jquery'


function Navbar({ logo,logos }) {
  // const menu = document.body.querySelector('.menu')
  const[open,setOpen]=useState(false)
    useEffect(() => {
      const navbar = window.document.querySelector('.navbar')
      const img = window.document.querySelector('#images')
      const handleScrolle = () => {
        if (window.scrollY > 130) {
          navbar.classList.add('is-sticky')
          navbar.classList.add('shadow-lg')
          img.setAttribute('src', logo.src)
          img.setAttribute('srcset', logo)
        } else {
          navbar.classList.remove('is-sticky');
          navbar.classList.remove('shadow-lg');
          img.setAttribute('src', logos.src)
          img.setAttribute('srcset', logos)
        }
      }
      window.addEventListener('scroll', handleScrolle)
    }, [logo,logos])
  
  $(document).ready(function () {
    const btn = $('.btn-menu')
    const btnClose = $('.btn-close')
    const items = $('.items')
    const backdrop = $('.backdrop')
    btn.click(() => { backdrop.addClass('active'); items.addClass('active'); $('body').addClass('overflow-hidden') })
    btnClose.click(() => { backdrop.removeClass('active'); items.removeClass('active'); $('body').removeClass('overflow-hidden') })
  });


  return (
    <div className='text-center w-full flex items-center justify-between px-[5%] py-2 navbar' >
          <NavLink className='flex items-center gap-1 max-md:gap-1' href="/">
            <img src={logos} alt='' width={50} height={50} className='images w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px]' id="images" />
            <div className='flex flex-col font-bold text-start'>
                <span className='text-[1.1rem] font-bold max-md:text-[0.8rem]'>CHAMBRE DE COMMERCE</span>
                <span className='text-[1.1rem] font-bold max-md:text-[0.8rem]'>CANADA AFRIQUE</span>
            </div>
          </NavLink>
          <div className='backdrop'></div>
      <div className='gap-5 text-[0.9rem] items'>
          <NavLink className='flex items-center gap-1 mb-10 lg:hidden max-md:mb-4 max-md:gap-1' to="/">
            <img src={logos} alt='' width={50} height={50} className='images w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px]' id="images" />
            <div className='flex flex-col font-bold text-start !text-black'>
              <span className='text-[1.1rem] font-bold max-md:text-[0.8rem]'>CHAMBRE DE COMMERCE</span>
              <span className='text-[1.1rem] font-bold max-md:text-[0.8rem]'>CANADA AFRIQUE</span>
            </div>
          </NavLink>
          <div className='absolute top-0 p-2 -right-10 lg:hidden bg-secondary btn-close'>
          <Cancel01Icon color={'white'} />
          </div>
            <ul className='gap-4 text-[.95rem] font-medium ul1'>
                <li><NavLink to={'/'}>Acceuil</NavLink></li>
                <li><NavLink to={'/Formations'}>Formations</NavLink></li>
                <li><NavLink to={'/Incubation'}>Incubation</NavLink></li>
                {/* <li><NavLink to={'/Evenements'}>Evénements</NavLink></li> */}
                <li><NavLink to={'/Contacts'}>Contacts</NavLink></li>
          <li className=''>
            <NavLink to={'#'} onClick={() => setOpen(!open)} data-target='dropdown-default' className='dropdown-toggle'>A propos de nous</NavLink>
            <div id='' className={`rounded-md overflow-hidden sous-menu ${open ? 'active' : ''}`}>
              <ul className='flex flex-col'>
                <li><NavLink to={'/Mission'} className='block w-full px-5 py-2 rounded-md hover:bg-secondary hover:text-white'>Missions & Valeurs</NavLink></li>
                <li><NavLink to={'/Services'} className='block w-full px-5 py-2 rounded-md hover:bg-secondary hover:text-white'>Nos Services</NavLink></li>
                <li><NavLink className='block w-full px-5 py-2 rounded-md hover:bg-secondary hover:text-white' to={'/Activite'}>Nos Activités</NavLink></li>
                <li><NavLink className='block w-full px-5 py-2 rounded-md hover:bg-secondary hover:text-white' to={'/Evenements'}>Evenements</NavLink></li>
                <li><NavLink className='block w-full px-5 py-2 rounded-md hover:bg-secondary hover:text-white'>Délegation Africaines</NavLink></li>
                <li><NavLink className='block w-full px-5 py-2 rounded-md hover:bg-secondary hover:text-white'>Délegation Canadiennes</NavLink></li>
              </ul>
            </div>
          </li>
            </ul>

            <div className='btn-grp'>
              <button className='bg-secondary text-white px-4 font-[600] py-2 rounded-sm flex items-center justify-center text-[0.9em] text-[600] devenir-membre'>Devenir membre</button>
            </div>
          </div>
          <div className='cursor-pointer lg:hidden btn-menu'>
              <Menu01Icon color='primary' size={25} />
          </div>
    </div>
  )
}


export default Navbar