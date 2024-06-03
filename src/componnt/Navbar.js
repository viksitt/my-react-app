import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

    <div className="container-fluid">
      <Link className="navbar-brand" To="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" To="/" >Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" >link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
          </li>
        </ul>

        {/* //switch */}
     
 <div className="d-flex">
            <div className="bg-primary round mx-1" onClick={()=>{props.togglemode('primary')}}  style={{height: '30px', width:'30px' , cursor:'pointer'}}></div>

            <div className="bg-danger round mx-1" onClick={()=>{props.togglemode('danger')}}  style={{height: '30px', width:'30px' , cursor:'pointer'}}></div> 

            <div className="bg-p=success round mx-1" onClick={()=>{props.togglemode('success')}}  style={{height: '30px', width:'30px' , cursor:'pointer'}}></div>

            <div className="bg-warning round mx-1" onClick={()=>{props.togglemode('warning')}}  style={{height: '30px', width:'30px' , cursor:'pointer'}}></div>
            </div>

            {/* //switch */}
            <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={()=>{props.togglemode(null)}}/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">toggle mode</label>
</div>

      </div>
    </div>
  </nav>
   
  );
}
