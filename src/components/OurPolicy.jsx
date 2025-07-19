

import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center text-center py-20 gap-12 text-xs sm:text-sm md:text-base text-gray-700'>
      
      {/* Politique d’échange */}
      <div className='flex flex-col items-center'>
        <img src={assets.exchange_icon} className='w-12 mb-4' alt="Icône échange" />
        <p className='font-semibold'>Politique d’échange simple</p>
        <p className='text-gray-400'>Nous proposons une politique d’échange sans complications</p>
      </div>

      {/* Politique de retour */}
      <div className='flex flex-col items-center'>
        <img src={assets.quality_icon} className='w-12 mb-4' alt="Icône retour" />
        <p className='font-semibold'>Politique de retour sous 7 jours</p>
        <p className='text-gray-400'>Nous proposons une politique de retour gratuit sous 7 jours</p>
      </div>

      {/* Support client */}
      <div className='flex flex-col items-center'>
        <img src={assets.support_img} className='w-12 mb-4' alt="Icône support" />
        <p className='font-semibold'>Meilleur support client</p>
        <p className='text-gray-400'>Nous offrons un support client 24h/24 et 7j/7</p>
      </div>

    </div>
  );
};

export default OurPolicy;


