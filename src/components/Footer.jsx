import React from "react";
import github from '../assets/githubLogo.png'
import insta from '../assets/instaLogo.png'
import linkedIn from '../assets/linkedinLogo.png'

function Footer(){
    return(
        <div className='footer'>
            <a href="https://www.instagram.com/code_with_sutta?igsh=NTN3cTVqdXQweG82"><img src={insta} alt=""  /></a>
            <a href="https://www.linkedin.com/in/chirag-goyal-26b752364/"><img src={linkedIn} alt=""  /></a>
            <a href="https://github.com/ilyaschirag"><img src={github} alt=""  /></a>
        </div>
    )
}

export default Footer