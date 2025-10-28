import React from "react";

function Education(){
    return(
        <div className="education">
            <div className="educationHeading">
                <h1>Education</h1>
            </div>
            
            <div className="timelineEducation">
                <div className="degreeEducation">
                    <div className="Btech">1</div>
                    <div className="horizontalLine"></div>
                    <div className="BtechContent">
                         <h3>B.Tech in Computer Science and Engineering</h3>
                         <p class="institute">Chandigarh Group Of Colleges Landran</p>
                         <p class="duration">SEP 2021 – MAY 2025</p>
                         <p class="duration">80%</p>
                    </div>
                </div>

                <div className="twelthEducation">
                    <div className="Btech">2</div>
                    <div className="horizontalLine"></div>
                    <div className="BtechContent">
                         <h3>Higher Secondary Education (Class 12th) </h3>
                         <p class="institute">G.L. Public School Kanina</p>
                         <p class="duration">Apr 2020 – Mar 2021</p>
                         <p class="duration">85.4%</p>
                    </div>
                </div>

                <div className="tenthEducation">
                    <div className="Btech">3</div>
                    <div className="horizontalLine"></div>
                    <div className="BtechContent">
                         <h3>Secondary Education (Class 10th) </h3>
                         <p class="institute">G.L. Public School Kanina</p>
                         <p class="duration">Apr 2018 – Mar 2019</p>
                         <p class="duration">81.4%</p>
                    </div>
                </div>
        
            </div>

        </div>
    )
}

export default Education;