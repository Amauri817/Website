import React from "react";
import Img from "../../../public/Certificate.png"

const CertAdd: React.FC = () => {
    
    return (
        <body id="certifications">
            <div className="container">
                <h3>Certificate</h3>
                <h5 style={{textAlign:'center'}}>Michigan State University(Full-Stack Development)</h5>
                <h5 style={{textAlign:'center'}}>(January 2025)</h5>
                <h1><a href="https://drive.google.com/file/d/14TCB87Q_qodXTj-IJOpWDeXnNaU11CPp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <img src={Img} alt="My Coding Certificate" /></a></h1>
            </div>
        </body>

    )
};

export default  CertAdd;