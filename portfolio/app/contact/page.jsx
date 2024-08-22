"use client";
import React,{useState} from 'react'
import "./contact.css"
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { FiSend } from "react-icons/fi";

 const page = () => {
  
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    
    <div className='contact'>
      <div className='section-1'>
        <div className='section-left'>
          <h1>Say hi to me!</h1>
          <p>I will try my best <br/>to get back to you..</p>
        </div>
        <div className='section-right'>

        {emailSubmitted ? (
          <p className="mail-mes">Email sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>

          <label htmlFor='email'>Your E-mail Adress</label>
          <input name='email' type='email' id='email' required></input>

          <label htmlFor='subject'>Subject</label>
          <input name='subject' type='text' id='subject' required></input>

          <label htmlFor='message'>Your Messagge</label>
          <textarea name='message' id='message' required></textarea>
        
          <button className='send-button' type='submit' >Send <FiSend className='sub-icon'/></button>
          
          </form>
        )}
        </div>
      </div>
      <div className='section-2'>
        <div>
        <FiMail />
          <p>gizempiroglu.gp@gmail.com</p>
        </div>
        <div>
        <FiPhone />
          <p>+(90)552 740 26 18</p>
        </div>
        <div>
        <TfiLocationPin />
          <p>Bolu-TURKEY</p>
        </div>
      </div>
    </div>
  );
};

export default page;