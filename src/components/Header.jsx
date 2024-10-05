import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import img1 from "./9.png";


 

function Header(){
    return(
        <div>
<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <img className="headerimg" src={img1}></img>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="/" className="nav-link px-2 link-secondary">Home</NavLink></li>
        <li><NavLink to="/Featured" className="nav-link px-2">Features</NavLink></li>
        <li><NavLink to="/Pricing" className="nav-link px-2">Pricing</NavLink></li>
        <li><NavLink to="#" className="nav-link px-2">FAQs</NavLink></li>
        <li><NavLink to="/About" className="nav-link px-2">About</NavLink></li>
      </ul>

      <div class="col-md-3 text-end">
        <NavLink to="/Login">
        <button type="button" className="btn btn-outline-primary me-2" >Login</button></NavLink>
        <NavLink to="/Sign-up">
        <button type="button" className="btn btn-primary" >Sign-up</button></NavLink>
      </div>
    </header>

        </div>

    )
}

export default Header;