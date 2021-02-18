import React from "react";
import { NavLink } from "react-router-dom";
 import "./styles.css";
export default function Header() {

  return (
    <div className="leftside">
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/upload">upload</NavLink></li>
        <li><NavLink to="/algorithm">algorithm Settings</NavLink></li>
        <li><NavLink to="/detect_anomalies">detect anomalies</NavLink></li>
        <li><NavLink to="/display_results">display results</NavLink></li>
        <li><NavLink to="/anlalyze_results">anlalyze results</NavLink></li>
        
      </ul>
    </div>
  );
}