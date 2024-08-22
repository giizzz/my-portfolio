import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import "./header.css"
const header = () => {
  return (
    <header>
     <nav className='head'>
      <div className='icon'>
        <Image
        src="/img/2.png"
        className='logo'
        width={45}
        height={45}
        priority={true}/>
        
      </div>
      <div className='parts'>
        <div className='l'><Link href="/">Home</Link></div>
        <div className='l'><Link href="/about">About</Link></div>
        <div className='l'><Link href="/contact">Contact</Link></div>      
      </div>
     </nav>
    </header>
    
  )
}

export default header;
