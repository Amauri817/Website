import React from "react";
import NavTab from "./navTab";

const ContactBod: React.FC = () => {
    
    return (
        <body>
            <div>
                <NavTab />
            </div>
            <div className="container">
                <h3>Contacts</h3>
                <h2 id="contacts"> 
                    <a href="https://www.linkedin.com/in/amauri-brown-a7279a251/" target="_blank">Linkedin</a>
                    <a href="mailto:brownamauri@icloud.com">✉</a>
                    <a href="https://github.com/Amauri817" target="_blank">GitHub</a>
                </h2>
            </div>
        </body>
    )
};

export default ContactBod;