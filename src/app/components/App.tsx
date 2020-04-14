import React from "react";
import styles from './App.module.scss';
import HeaderMenu from "./Header/HeaderMenu";

class App extends React.PureComponent {
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.header}>
                    <div>
                        <h1>Prof Dr Khaled Karara</h1>
                    </div>
                    <HeaderMenu />
                </div>
            </div>
        );
    }
}

export default App;
