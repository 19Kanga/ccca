import React from 'react'

export default function Titre({ titre }) {

    return (
        <h1 className='text-primary text-[2rem] max-md:text-[1.5rem] text-center mb-6 font-semibold'>{titre}</h1>
    );
}
