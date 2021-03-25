import React from "react";
import { NavLink } from "react-router-dom";
 import "./styles.css";
export default function Header() {

  return (
  <div className="topnav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/upload">upload</NavLink>
        <NavLink to="/algorithm">algorithm Settings</NavLink>
        <NavLink to="/display_results">display results</NavLink>
        <NavLink to="/analyze_results">anlalyze results</NavLink>    
    </div>
  );
}