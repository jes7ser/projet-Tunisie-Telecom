import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-gray-800'>
        
        {/* Logo et description */}
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt='' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Etre le premier choix de connectivité pour les ménages, les jeunes et les entreprises. Nous nous engageons à offrir une meilleure vie connectée à tous et 
            partout en Tunisie en apportant une expérience utilisateur attrayante, simple et instantanée.
          </p>
        </div>

        {/* Liens de navigation */}
        <div>
          <p className='text-xl font-medium mb-5'>Entreprise</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className='text-xl font-medium mb-5'>Contactez-nous</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>71001298</li>
            <li>contact@TunisieTelecom.com</li>
          </ul>
        </div>
      </div>

      {/* Footer bas de page */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2025 © TunisieTelecom.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
