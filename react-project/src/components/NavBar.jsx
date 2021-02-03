import React from "react"
 
const NavBar = (props) =>{
    return  (
        <nav className="navbar navbar-expand-md navbar-light bg-dark">
        <div className="container-fluid">
              <a className="navbar-brand text-white" href="#">{props.brand}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
               aria-expanded="false" aria-label="Toggle navigation">
                <span clasName="navbar-toggler-icon"></span>
              </button>
              <button type="button" data-target="#collapseNavbar" data-toggle="collapse" class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="collapseNavbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="">{props.link_1}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="">{props.link_2}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="">{props.link_3}</a>
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="">{props.link_4}</a>
                  </li> 
                </ul>
              </div>
        </div>
        </nav>
    )
  }
 
  export default NavBar;