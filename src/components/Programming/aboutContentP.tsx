import React from "react";

const AboutAdd: React.FC = () => {

    return (
        <body style={{paddingTop:'50px', marginTop:'100px'}} id="about" >
            <div className="container">
                <h3>About Me</h3>
                <p>
                    <h4>A little about me</h4>
                    <p>
                    Hi, I'm a passionate Full-Stack Developer with a strong background in Typescrip, React, JavaScript,
                    and Node.js. I am currently working as a consultant at Xfinity, I specialize in building scalable, effiecient,
                    and user-friendly applications. With the experience I have in Restful API development, SQL databases, mongoDB, 
                    and AI integrations, I found a new love for solving complex problems and optimizing workflows.
                    </p>

                    <p>
                    I’m always eager to learn new technologies and enhance my skills in software architecture and automation. 
                    Whether it’s developing a seamless front-end experience or designing robust back-end systems, I focus on 
                    creating high-quality, maintainable solutions.
                    </p>

                    Feel welcomed the explore my <a href="https://github.com/Amauri817?tab=repositories" target="_blank">GitHub</a> or
                    connect via <a href="https://www.linkedin.com/in/amauri-brown/" target="_blank">LinkedIn</a>
                </p>
            </div>
        </body>
    )
};

export default  AboutAdd;