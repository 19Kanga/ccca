import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pays() {
    const { nation }=useParams()
  return (
    <div className='text-center p-[5%]'>Bienvenue à {nation}</div>
  )
}
