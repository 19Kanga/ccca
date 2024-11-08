import React from 'react'
import { ArrowDown01Icon } from 'hugeicons-react'
import banner from '../assets/footer.jpg'
import logo from '../assets/1x/icone.png'
import { Link } from 'react-router-dom' 
import { motion } from 'framer-motion'

export default function Acceuil() {
  const config = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }
  return (
    <motion.div variants={config} initial='initial' animate='animate' exit='exit' transition={{ duration: 2 }} className='w-full relative h-[100vh] max-md:h-[100vh] text-white flex flex-col font-semibold items-center justify-center text-center text-[3.4rem] max-md:text-[1.5rem] max-md:px-2 uppercase'>
          <img className='absolute w-full h-full object-cover max-md:object-top scale-70,' src={banner} alt='' />
          <img className='absolute w-[90%] h-[90%] -left-80 max-md:left-0 opacity-80 object-contain' src={logo} alt='' />
          <div className='absolute w-full h-full z-2 gradient'></div>
          <div className='flex flex-col items-center justify-center'>
            <span data-aos='fade-up' data-aos-once='false' data-aos-delay='200'>Bienvenue à la</span>
            <span data-aos='fade-up' data-aos-once='false' data-aos-delay='900'>chambre de commerce Canada Afrique</span>
            <span data-aos='fade-up' data-aos-once='false' data-aos-delay='1500'>( La CCCA ) </span>
            <Link to={'/a'} className='absolute bottom-24 text-[0.75rem] flex flex-col items-center justify-center btn-click rounded-lg py-2 px-16'>
              <ArrowDown01Icon className='icon-acceuil' color={'white'} size={'3rem'} />
              Cliquez ici
            </Link>
          </div>
    </motion.div>
  )
}
