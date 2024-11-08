import React from 'react'
import { motion } from 'framer-motion'

export default function Annimated({children,props}) {
  const config = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit:{opacity:0}
  }
  return (
    <motion.div className='relative' variants={config} initial='initial' animate='animate' exit='exit' transition={{ duration:.5,ease:"easeInOut" }} {...props}>
        {children}
    </motion.div>
  )
}
