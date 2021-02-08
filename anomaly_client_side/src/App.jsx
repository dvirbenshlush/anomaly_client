import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home.component.jsx';
import Upload from './components/Upload.component.jsx'
// import SignUp from "./components/SignUp.component";
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
                </Switch>
        </Router>
    );
}

export default App;