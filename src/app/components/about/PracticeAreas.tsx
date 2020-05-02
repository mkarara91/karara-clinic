import React from "react";
import style from "./AboutPage.module.scss";

const PracticeAreas = ()=> {
    return (
        <div className={style.practiceAreas}>
            <div className={style.mainPracticeAreas}>
                <h4>Main Practice Areas</h4>
                <ul>
                    <li>Cardiac</li>
                    <li>Congenital</li>
                    <li>Thoracic</li>
                </ul>
            </div>
        </div>);
};

export default PracticeAreas;