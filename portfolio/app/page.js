"use client"
import React from 'react'
import Image from 'next/image';
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import "./layout.js"


const page = () => {
  
  const [downloadURL, setDownloadURL] = useState("");

  const download = async () => {
    try {
      const response = await fetch('/data/cv.pdf', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadURL(url);
      return url;
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  const handleDownload = async () => {
    const url = await download();
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Gizem-Piroğlu-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className='home'>
    <section className='part_1'>
        <div className='left-part'>
          <h3>Hello,my name is Gizem. I am a frontend developer. I create interactive and responsive web application. I working with JavaScript, React, Next.js, HTML and CSS. I am a team player and quick learner.</h3>
          <button onClick={handleDownload} type="button">
            Download CV <FiDownload className='dl-icon' />
          </button>
        </div>
        <div className='right-part'>
          <div className='img-box'>
          </div>
          <div className='img-box2'>
          </div>
          <Image
          src="/img/foto.jpg"
          className='photo '
          width={250}
          height={250}
          priority={true}/>
          
        </div>
      </section>
      <div>
         
      </div>
    </div>
  )
}

export default page;
