import React,{useEffect} from 'react'

export const Topnav = () =>{
  
    return(
    <div>
        <nav className="purple darken-4">
        <div className="nav-wrapper">
          <a href="/test" className="brand-logo" style={{paddingLeft:"10px"}}>Lost But Found</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            
            <li><a href="badges.html">Login</a></li>
            <li><a href="collapsible.html">Register</a></li>
          </ul>
        </div>
      </nav>
    </div>
    )
}