import { Link } from 'react-router-dom';
import React from 'react';


const NavTab: React.FC = () => {

    return (
        <div className='header'>
          <nav>
            <Link to="/"><span>☜(ﾟヮﾟ☜) Back</span></Link>
            <ul>
                <Link to="/designPage"><li>Home</li></Link>
                <Link to="/projectsContent"><li>Projects</li></Link>
                <Link to="/aboutContent"><li>About</li></Link>
                <Link to="https://drive.google.com/file/d/1hJZQ1l_UEjwsGXtms2Tgda6rqiOmFIvr/view?usp=sharing" target='blank'><li>Resume</li></Link>
                <Link to="/contactContent"><li>Contact</li></Link>
            </ul>
            <Link to="/designPage"><h2 className='Logo'> Amauri Brown <br/> <span>Technical Designer</span> </h2></Link>
          </nav>
        </div>
    )
  }

export default NavTab;