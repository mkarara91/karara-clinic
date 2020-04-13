import React from "react";
import styles from './App.scss';

class App extends React.PureComponent {
    render() {
        return (
            <div className={styles.app}>
                <h1 className={styles.title}>Hello World!</h1>
            </div>
        );
    }
}

export default App;
