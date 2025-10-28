import React from "react";
import main from "../assets/chirag2.png"
function About(){
    return(
        <div className="about">
            <div className="aboutText">
                <h1>Chirag |</h1>
                <h1>Software Developer</h1>
                <p>Full-stack developer specializing in React.js <br/> and responsive web design.</p>
                <button>Contact Me</button>
            </div>

            <div className="aboutImage">
                <img src={main} alt="" />
            </div>
        </div>
    )
}

export default About