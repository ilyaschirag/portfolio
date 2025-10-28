import React from "react";
import sql from '../assets/sql.png';
import c from '../assets/c.png';
import cpp from '../assets/cpp.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import SkillCard from "./SkillCard";

function Skills(){
    return(
        <>
            <div className="skills">
                 <div className="techHeading">
                     <h1>Technical Skills</h1>
                </div>

                <div className="techs">
                    <SkillCard img={html} tech="HTML" id="HTML"/>
                    <SkillCard img={css} tech="CSS" id="CSS"/>
                    <SkillCard img={js} tech="JS" id="JS"/>
                    <SkillCard img={react} tech="React JS" id="REACT"/>
                    <SkillCard img={sql} tech="SQL" id="SQL"/>
                    <SkillCard img={c} tech="C" id="C"/>
                    <SkillCard img={cpp} tech="CPP" id="CPP"/>
                    <SkillCard img={python} tech="Python" id="PYTHON"/>
                </div>
            </div>
        </>
    )
}

export default Skills