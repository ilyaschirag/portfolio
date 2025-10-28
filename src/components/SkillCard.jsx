import React from "react";

function SkillCard(props){
    return(
        <div className="skillCard " id={props.id}>
            <img src={props.img} alt="" />
            <h1>{props.tech}</h1>
        </div>
    )
}

export default SkillCard;