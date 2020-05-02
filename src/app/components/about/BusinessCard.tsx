import React from "react";
import style from "./AboutPage.module.scss";
// @ts-ignore
import ProfilePicture from "../../../resources/karara-img.jpg";

const BusinessCard = () => {
    return (
        <div className={style.businessCard}>
            <div className={style.profilePicture}>
                <img src={ProfilePicture}/>
            </div>
            <div className={style.businessDetails}>
                <h4>Alexandria Faculty of Medicine, <br/>
                    Department of Cardiothoracic Surgery</h4>
                <span>282 Port Said Street, Alexandria, Egypt</span>
                <span>+201223175350</span>
                <span>Khaled.karara@hotmail.com</span>
            </div>
        </div>);
};

export default BusinessCard;