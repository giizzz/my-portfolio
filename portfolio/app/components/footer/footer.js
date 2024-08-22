import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./footer.css"
const footer = () => {
  return (
    <footer className='footer'>
      <div className='contact'>
        <ul>
          <li><a title='linkedin' target='_blank' href='https://www.linkedin.com/in/gizem-p-437701284/?trk=opento_sprofile_topcard'><FaLinkedin /></a></li>
          <li><a title='github' target='_blank' href='https://github.com/giizzz'><FaGithub /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default footer;
