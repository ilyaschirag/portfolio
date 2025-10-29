import React from "react";
import Input from "./Input";

function Form(){

    function scroll(){
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

    }

    return(
        <div className="form" id="form">
            <h1>Contact Me</h1>
        <form action="">
            <label htmlFor="username">Enter Your Name</label>
            <Input labelID='username' labelName="Username" type='username' placeholder='Enter Your Name'/>

             <label htmlFor="mobile">Enter Your Contact Number</label>
            <Input labelID='mobile' labelName="mobile Number" type='Number' placeholder='Enter Your Contact Number'/>

            <label htmlFor="email">Enter Your Email Address</label>
            <Input labelID='email' labelName="Email" type='email' placeholder='Enter Your Email Address'/>

            <label htmlFor="services">Select Service  </label>
            <select name="" id="services">
                <option value="">Services</option>
                <option value="">Web Site Development</option>
                <option value="">Web Site Maintence</option>
                <option value="">Video Editing</option>
            </select>

            <input type="submit" className="buttonSubmit" />
        </form>
        </div>
    )
}

export default Form;