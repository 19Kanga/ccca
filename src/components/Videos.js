'use client'
import React from 'react'
// import videos from '../assets/videos/Publier.mp4'
// import Titre from './Titre'

export default function Videos() {
  // const sources ='https://youtu.be/fYyOQJ1LGwo'

  return (
    <div className='w-full'>
      {/* <Titre texte='Activite' /> */}
      {/* <iframe
        width="100%"
        height="405"
        src={sources}
        title="Youtube Player"
        frameBorder="0"
        allowFullScreen
      /> */}
      <iframe width="889" height="500" src="https://www.youtube.com/embed/ZJIIQ0faCag" title="Cameroun : Paul Biya de retour après plusieurs semaines d&#39;absence • FRANCE 24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {/* <iframe width="525" height="294" src="https://www.youtube.com/embed/NHss9QNrUwI" title="Paroles d&#39;apprentis - Lucie Roger" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
  );
}
