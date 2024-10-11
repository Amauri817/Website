import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // This function will check the scroll position
    const handleScroll = () => {
      if (window.scrollY > 100) {  // Show taskbar when scrolled down 100px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Hook to listen to the scroll event
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
      };
    }, []);
    
  return (
    <div className={`sidebar_container ${isVisible ? 'visible' : ''}`}>

      <Link to='#top' >
        <div className="sidebar_items">
            Home
        </div>
      </Link>

      <Link to='#about' >
        <div className="sidebar_items">
            About
        </div>
      </Link>

      <Link to='#skills'>
        <div className="sidebar_items">
            Skills
        </div>
      </Link>

      <Link to='#projects' >
        <div className="sidebar_items">
            Projects
        </div>
      </Link>

      <Link to='#certifications' >
        <div className="sidebar_items">
            Certificications
        </div>
      </Link>

      <Link to='#contact' >
        <div className="sidebar_items">
            Contact
        </div>
      </Link>
    </div>
  );
}

export default SideBar;