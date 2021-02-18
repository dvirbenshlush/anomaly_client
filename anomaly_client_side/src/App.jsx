import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home.component.jsx';
import Upload from './components/Upload.component.jsx'
import AlgoSettings from './components/AlgoSettings.component.jsx'
import DetectAnomalies from "./components/DetectAnomalies.component";
import Display_Results from "./components/Display_Results.component";

// import Employee from "./components/Employee.component";


const App = (props) =>  {
    return (
        <Router>
            <Switch>
                <Route { ...props } exact path="/">
                    <Home/>
                </Route>
                <Route { ...props } exact path="/upload">
                    <Upload/>
                </Route>
                <Route { ...props } exact path="/algorithm">
                    <AlgoSettings/>
                </Route>
                <Route { ...props } exact path="/detect_anomalies">
                    <DetectAnomalies/>
                </Route>
                <Route { ...props } exact path="/display_results">
                    <Display_Results/>
                </Route>
                </Switch>
        </Router>
    );
}

export default App;