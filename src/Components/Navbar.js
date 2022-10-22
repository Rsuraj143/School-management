import "./Navbar.css" 

import React, {useState} from 'react'
import {Link} from "react-router-dom"


 const Navbar = () => {
    

  return (
    <div className="header container-fluid pb-5 pt-3">
        <Link to="/">
            <h1>School Management</h1>
        </Link>
        <ul className="nav-manu">
            
            <li>
                <Link to="/staff">Staff</Link>
            </li>
            <li>
                <Link to="/student">Student</Link>
            </li>
            <li>
                <Link to="/course">Course</Link>
            </li>           
        </ul>
        
        
    </div>
  )
}
export default Navbar