
import { NavLink } from 'react-router-dom'
import React from 'react'
import { Cancel01Icon, Menu01Icon } from 'hugeicons-react'
import 'jquery/dist/jquery'
import $ from 'jquery'


function NavbarOrder({ logo,logos }) {
  
  $(document).ready(function () {
    const btn = $('.btn-menu')
    const btnClose = $('.btn-close')
    const items = $('.items')
    const backdrop = $('.backdrop')
    btn.click(() => { backdrop.addClass('active'); items.addClass('active'); $('body').addClass('overflow-hidden') })
    btnClose.click(() => { backdrop.removeClass('active'); items.removeClass('active'); $('body').removeClass('overflow-hidden') })
  });


  return (
      <div className='text-center w-full flex items-center justify-between px-[5%] py-3  navbar !text-black shadow-lg' >
          <NavLink className='flex items-center gap-1 max-md:gap-1' href="/">
            <img src={logos} alt='' width={55} height={55} className='images w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px]' id="images" />
            <div className='flex flex-col font-bold text-start'>
                <span className='text-[.9rem] font-bold max-md:text-[0.8rem]'>CHAMBRE DE COMMERCE</span>
                <span className='text-[.9rem] font-bold max-md:text-[0.8rem]'>CANADA AFRIQUE</span>
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
        <div className='absolute top-0 p-2 -right-10 lg:hidden bg-primary btn-close'> <Cancel01Icon color={'white'} /></div>
              <ul className='gap-4 text-[.95rem] font-medium ul1'>
                <li><NavLink to={'/'}>Acceuil</NavLink></li>
                <li><NavLink to={'/'}>A propos de nous</NavLink></li>
                <li><NavLink to={'/Formations'}>Formations</NavLink></li>
                <li><NavLink to={'/Incubation'}>Incubation</NavLink></li>
                {/* <li><NavLink to={'/Evenements'}>Evénements</NavLink></li> */}
                {/* <li><NavLink href={'#'}>Membres</NavLink></li> */}
                <li><NavLink to={'/Contacts'}>Contacts</NavLink></li>
            </ul>
            <button className='bg-secondary text-white px-4 font-[600] py-2 rounded-sm flex items-center justify-center text-[0.9em] text-[600] devenir-membre'>Devenir membre</button>
          </div>
          <div className='cursor-pointer lg:hidden btn-menu'>
              <Menu01Icon color='primary' size={25} />
          </div>
    </div>
  )
}


export default NavbarOrder