import React from 'react'

export default function Titre({texte}) {

  return (
    <div className='titre'>
      <h2 className='text-[2.5rem] m-0 font-bold'>{texte}</h2>
    </div>
  );
}
