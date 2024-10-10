import { Link } from 'react-router-dom';
import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const NavTab: React.FC = () => {

  return (
      <div className='header'>
        <nav>
          <ul>
            <Link to='/'><li>home</li></Link>
            <Link to="/reac"><li>Vite</li></Link>
            <Link to="/vit"><li>React</li></Link>
          </ul>
        </nav>
      </div>
  )
}

export default NavTab;