import React, {useEffect} from 'react';
import '../components/Programming/program.css'
import NavTabP from "../components/Programming/navTabP";
import Pcontent from "../components/Programming/programBody";
import AboutAdd from "../components/Programming/aboutContentP";
import CertAdd from "../components/Programming/certificationContent";
import FooterContent from "../components/Programming/footer";
import ProjectAdd from "../components/Programming/projectsContentP";
import ContactAdd from "../components/Programming/contactContentP";
import Skills from "../components/Programming/skillsContents";
import SideBar from "../components/Programming/sideTab";

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