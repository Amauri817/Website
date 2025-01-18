import React from "react";
import NavTab from "./navTab";
import Image1 from '../../assets/portpic4.png'
import Image2 from '../../assets/portpic3.png'
import Image3 from '../../assets/Inv.png'
import { Link } from "react-router-dom";

const ProjectBod: React.FC = () => {

  return (
    <body>
        <div>
            <NavTab />
        </div>
        <div className="container">
            <h3>Projects</h3>
            <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                <div className="col-md">
                    <h5><Link to="/sonicContent">Sonic Inspired Game</Link></h5>
                    <Link to="/sonicContent"><img src={Image1} alt="sonic"/></Link>
                </div>
                <div className="col-md">
                    <h5><Link to="/portalContent">Portal Gun Game</Link></h5>  
                    <Link to="/portalContent"><img src={Image2} alt="portal gun"/></Link>
                </div>
            </div>
            <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                <div className="col-md">
                    <h5><Link to="/inventoryContent">Shop and Inventory Demo</Link></h5>
                    <Link to="/inventoryContent"><img src={Image3} alt="inventory demo"/></Link>
                </div>
            </div>
        </div>
    </body>
  )
}

export default ProjectBod;
