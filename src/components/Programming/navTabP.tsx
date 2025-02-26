import { Link } from 'react-router-dom';
import React from 'react';
import './navTabP.css'

const NavTabP: React.FC = () => {

  return (
      <div className='header' id='top'>
        <nav className='nas'>
        <Link to="/programPage"><h2 className='Logo'> Amauri Brown <br/> <span>Programmer</span> </h2></Link>
          <ul>
            <Link to="#about"><li>About</li></Link>
            <Link to="#skills"><li>Skills</li></Link>
            <Link to="#projects"><li>Projects</li></Link>
            <Link to="#certifications"><li>Certificate</li></Link>
            <a href="https://drive.google.com/file/d/1hJZQ1l_UEjwsGXtms2Tgda6rqiOmFIvr/view?usp=sharing" target='blank'><li>Resume</li></a>
            <Link to="#contact"><li>Contact</li></Link>
          </ul>
          <Link to="/"><span>Back (☞ﾟヮﾟ)☞</span></Link>
        </nav>
      </div>
  )
}

export default NavTabP;
