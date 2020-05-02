import React from "react";
import style from "./AboutPage.module.scss"


const Background = ()=> {
    return (
        <div className={style.background}>
            <div className={style.main}>
                <h3>Background</h3>
                <ul>
                    <li>Alexandria Main University Hospital Residency (1978-80)</li>
                    <li>Dept General Surg, Alex Faculty of Medicine (1980-83)</li>
                    <li>CHUV, Lausanne, Switzerland Residency (1984-86)</li>
                    <li>Cardio thoracic Surg Dept, Alex Fac Med (1986 till now)</li>
                    <li>Prof Cardio-thoracic Surgery (1998 till now)</li>
                    <li>Cons Cardio-thoracic Surg Ped Insur Hosp (1995 till now)</li>
                    <li>Past Head of the Dept of Cardio-thoracic Surg Alexandria (2011-2014)</li>
                    <li>Past Deputy Editor Journal of the Egyptian Society of Cardio-thoracic Surgery - Elsevier (JESCTS)</li>
                    <li>Past IT Editor of the ESCTS</li>
                    <li>Member of the executive committee of the ESCTS</li>
                    <li>Treasurer of ESCTS</li>
                    <li>Member of the promotion committee of CTS Lecturers and Ass Professors</li>
                </ul>
            </div>
            <div className={style.other}>
                <div className={style.mainPracticeAreas}>
                    <h4>ORGANIZATIONS</h4>
                    <ul>
                        <li><a target="_blank" href={"https://www.ctsnet.org/society/ctsnet"}>Cardiothoracic Surgery Network</a></li>
                        <li><a target="_blank" href={"https://www.ctsnet.org/society/eacts"}>European Association for Cardio-Thoracic Surgery</a></li>
                    </ul>
                </div>

                <div className={style.mainPracticeAreas}>
                    <h4>OTHER INTERESTS</h4>
                    <ul>
                        <li>Oesophageal surgery and stenting.</li>
                        <li>Corrosive Oesophageal Strictures.</li>
                        <li>Pediatric Cardiac Surgery.</li>
                        <li>Valve Surgery.</li>
                        <li>Surgery of bronchogenic carcinoma.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Background;