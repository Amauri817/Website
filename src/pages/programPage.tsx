import React, {useEffect} from 'react';
import NavTabP from "../components/navTabP";
import Pcontent from "../components/programBody";
import AboutAdd from "../components/aboutContentP";
import CertAdd from "../components/certificationContent";
import FooterContent from "../components/footer";
import ProjectAdd from "../components/projectsContentP";
import ContactAdd from "../components/contactContentP";
import Skills from "../components/skillsContents";
import SideBar from "../components/sideTab";

const Program: React.FC = () => {
    
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

    return (
      <div>
        <NavTabP />
        <Pcontent />
        <AboutAdd />
        <Skills />
        <ProjectAdd />
        <CertAdd />
        <ContactAdd />
        <FooterContent />
        <SideBar />
      </div>
    )
  };
  
  export default Program;