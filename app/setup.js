import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Bluetooth from '../app/routes/Bluetooth';
import Home from '../app/routes/home';
import User from '../app/routes/user';
import Data from '../app/routes/Data';
import Datafetch from '../app/routes/Datafetch';

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="Bluetooth" component={Bluetooth} title="Bluetooth" type="replace" hideNavBar initial={true}  />
                <Scene key="Home" component={Home} title="Home" type="replace" hideNavBar />
                <Scene key="User" component={User} title="User" type="replace" hideNavBar />
                <Scene key="Data" component={Data} title="Data" type="replace" hideNavBar />
                <Scene key="Datafetch" component={Datafetch} title="Datafetch" type="replace" hideNavBar />
            </Scene>
        </Router>
    );
}
export default App;