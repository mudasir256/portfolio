import React from 'react';
import techImage from '../assets/tech/Gmail-logo.png';
import linkedin from '../assets/tech/linkedin-logo-free-download-free-png.webp';
import youtube from '../assets/tech/youtb.png';
import facebook from '../assets/tech/facebook-logo-2019.png';
const footer = () => {
  return (
    <div className='text-center '>
      <div className="social">
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
          <img src={techImage} alt="Tech Image" /> 
        </a>
        <a href="https://www.linkedin.com/in/syed-mudasir-bukhari-a06244241/" target="_blank">
          <img src={linkedin} alt="Tech Image" /> 
        </a>
        <a href="https://www.youtube.com/channel/UCmDUbUR91USma_DR0aqb2Kw" target="_blank">
          <img src={youtube} height="20px" width="35px" alt="Tech Image" /> 
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008635203955" target="_blank">
          <img src={facebook} height="20px" width="30px"  alt="Tech Image" /> 
        </a>
      </div>
    </div>
  );
}

export default footer;
