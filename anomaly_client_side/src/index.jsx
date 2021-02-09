import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from "./Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home.component.jsx';
import Upload from './components/Upload.component.jsx'
import AlgoSettings from './components/AlgoSettings.component.jsx'
// import runTest from './components/runTest.component.jsx'
import Test from './components/Test.component.jsx'


const headerStyle = {
    padding: 10,
    background: "darkcyan"
  };

ReactDOM.render( 
     <Router>
    {/* <header style={headerStyle}>Header</header> */}
    <div className="main">
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/upload" component={Upload} />
        <Route path="/algorithm" component={AlgoSettings} />
        <Route path="/test" component={Test} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();