import React from "react";
import web from '../assets/WebDevelopment.png';
import jsBootcamp from '../assets/Bootcamp.png'
import pythonCertificate from '../assets/PythonCertificate.png'

function Certification(){
    return(
        <div className="certification">
            <div className="certiHeading">
                <h1>Certifications</h1>
            </div>
            <div className="certificates">
                <div className="Certificate">
                    <img src={web} alt="" />
                    <p>Web Development</p>
                </div>

                 <div className="Certificate">
                    <img src={jsBootcamp} alt="" />
                    <p>JS and React Js</p>
                </div>

                 <div className="Certificate">
                    <img src={pythonCertificate} alt="" />
                    <p>Python</p>
                </div>
            </div>

        </div>
    )
}

export default Certification