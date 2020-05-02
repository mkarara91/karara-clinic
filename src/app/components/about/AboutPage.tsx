import React from "react";
import BusinessCard from "./BusinessCard";
import PracticeAreas from "./PracticeAreas";
import style from "./AboutPage.module.scss";
import Background from "./Background";


class AboutPage extends React.PureComponent {
    render() {
        return (
            <div className={style.aboutPage}>
                <h2>Khaled S. Karara, M.D., Professor</h2>
                <div className={style.aboutRow}>
                    <BusinessCard/>
                    <PracticeAreas/>
                </div>
                <div className={style.aboutRow}>
                    <Background/>
                </div>
            </div>);
    }
}

export default AboutPage;
