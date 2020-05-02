import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styles from './App.module.scss';
import HeaderMenu from "./Header/HeaderMenu";
import Logo from "./Header/Logo";
import AboutPage from "./about/AboutPage";
import WorkingHoursPage from "./WorkingHoursPage";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <h2>Home</h2>
    },
    {
        path: "/about",
        main: () => <AboutPage />
    },
    {
        path: "/workingHours",
        main: () => <WorkingHoursPage/>
    }
];

class App extends React.PureComponent {
    render() {
        return (
            <div className={styles.app}>
                <Router>
                    <div className={styles.header}>
                        <Logo/>
                        <HeaderMenu />
                    </div>
                    <div className={styles.mainContent}>
                        <Switch>
                            {routes.map((route, index) => (
                                // You can render a <Route> in as many places
                                // as you want in your app. It will render along
                                // with any other <Route>s that also match the URL.
                                // So, a sidebar or breadcrumbs or anything else
                                // that requires you to render multiple things
                                // in multiple places at the same URL is nothing
                                // more than multiple <Route>s.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
