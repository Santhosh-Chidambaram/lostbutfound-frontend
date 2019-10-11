import React,{useEffect} from "react"

export const Registercard = () => {
  
    return(
    <div className='container' style={{position:"absolute",left:"35%",top:"20%"}}>
      <div className="card z-depth-5  " style={{width:"30rem",height:"70vh",borderRadius:"10px"}}>
        <div className="card-content " style={{textAlign:"center"}}>
          <span className="card-title" ><b>REGISTER</b> </span>
            <div >
            <div className="input-field col s12">
            <input id="email" type="email" className="validate"/>
            <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
          <input  id="username" type="text" className="validate"/>
          <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s6">
          <input id="icon_telephone" type="tel" className="validate"/>
          <label htmlFor="icon_telephone">Telephone</label>
          </div>
 
            <div className="input-field col s12" >
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12" >
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Repeat Password</label>
            </div>
            <div style={{marginTop:"5%"}}>
            <a href="/test " className="waves-effect waves-light btn-large z-depth-3" style={{width:"50%",borderRadius:"500px",background:"linear-gradient(to right, #8e2de2, #4a00e0)"}}>Button</a>
            </div>
            
        </div>


          
        </div>
        
      </div>
    </div>
 
       

        
    )
}