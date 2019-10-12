import React from 'react'

const Switchtab = () =>{
    return(
        <div className="container" style={{paddingTop:'10px',marginLeft:"500px"}}>
        <div class="row">
        <div class="col s6">
        <ul class="tabs">
            <li class="tab col s6"><a href="#test1">Lost</a></li>
            <li class="tab col s6"><a class="active" href="#test2">Found</a></li>
            
        </ul>
        </div>
        </div>
        </div>
       
    )
}

export default Switchtab