import React from 'react'
import Navsbar from '../components/Navbar/Navsbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
// import { motion } from 'framer-motion'

export default function Layouts() {
  const config = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit:{opacity:0}
  }
  return (
    <div className='' >
        <Navsbar />
        <Outlet />
        <Footer />
    </div>
  )
}
