import React from 'react';
import {Link} from 'react-router-dom';


export default function Header() {
  
  return ( 
    <header className='w-full flex justify-between px-20 h-20'>
      <Link to='/' className='text-3xl font-bold main-link'>Cocktail</Link>
    </header>
  );
}

