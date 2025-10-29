import React from "react";
import github from '../assets/githubLogo.png'
import insta from '../assets/instaLogo.png'
import linkedIn from '../assets/linkedinLogo.png'

function Footer(){
    return(
        <div className='footer'>
            <a href=""><img src={insta} alt=""  /></a>
            <a href=""><img src={linkedIn} alt=""  /></a>
            <a href="https://github.com/ilyaschirag"><img src={github} alt=""  /></a>
        </div>
    )
}

export default Footer