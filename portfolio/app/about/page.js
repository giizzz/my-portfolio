"use client"
import React from 'react'
import "./about.css"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { useEffect,useState, useTransition } from 'react'
import Link from 'next/link'

const page = () => {

  const [data,setData]=useState([]);
  const [clic,setClic]=useState();
  

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('/data/personal.json');
      const result = await response.json();
      setData(result);
      if(result.length > 0){
        setClic(result[0].id);
      }
    };
    fetchData();
  },[]);

  const clickFunc = (id) => {
    setClic (id);
  };

  
  const[tab,setTab]=useState("skills");
  const[startTransition,isPending]=useTransition();
  const HandleTabChance = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  let SkillsList=[
    {src: "/img/html.png", id:1, name:"html"},
    {src: "/img/css.png", id:2, name:"css"},
    {src: "/img/js.png", id:3, name:"js"},
    {src: "/img/react.png", id:4, name:"react"},
    {src: "/img/next.png", id:5, name:"next"}
  ];

  return (
    <div className='about'>
      <div className='part-1'>
        <div className='left-part'>
          <div className='h-container'><h1>Hi, I'm <br/>Gizem...</h1></div>
          <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Web Developer",
            1000,
            "UI/UX Designer",
            1000
          ]}
          repeat={Infinity}
          speed={50}
          className='animated-text'
          />
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
      </div>
      <div className='part-2'>
        <div className='tabHead'>
        {data.map(item => (
          <button 
            key={item.id} 
            className={`tabButton ${clic === item.id ? 'active' : ''}`}
            onClick={() => clickFunc(item.id)}
          >
            {item.baslik}
          </button>
        ))}
       </div>
       <div className='tabBody'>
       {data.map(item => (
         clic === item.id && (
          <div key={item.id} className='tabContent'>
            {item.desc.split('\n').map((descItem, index) => (
             <p key={index}>{descItem}</p>
            ))}
          </div>
         )
      ))}
       </div>
      </div>
      <div className='part-3'>
        {SkillsList.map((img)=>(
          <div className="skill"
          key={img.id}>
            <Image
              src={`/img/${img.name}.png`}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>  
      <div className='part-4'>
        <h2>Projects</h2>
        <div className='projects'>
        <section className='sec sec-1'>
          <h5>Portfolio Website</h5>
          <Image
            src={'/img/v1.png'}
            width={400}
            height={200}
          ></Image>
        </section>
        <section className='sec sec-2'>
          <h5>Website About Social Responsibility</h5>
          <Image
            src={'/img/v2.png'}
            width={400}
            height={200}
          ></Image>
        </section>
        
        </div>
      </div>
      
    </div>
  )
}
export default page;

