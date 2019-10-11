import React,{useEffect} from "react"
import 'materialize-css/dist/css/materialize.min.css'
import  M from 'materialize-css/dist/js/materialize.min.js'

export const Logincard = () => {
    useEffect(() =>{
        M.AutoInit()

    })
    return(
    <div class='container' style={{position:"absolute",left:"35%",top:"20%"}}>
      <div class="card z-depth-5  " style={{width:"30rem",height:"70vh",borderRadius:"10px"}}>
        <div class="card-content " style={{textAlign:"center"}}>
          <span class="card-title" ><b>LOGIN</b> </span>
            <div style={{marginTop:"20%"}}>
            <div class="input-field col s12">
            <input id="email" type="email" class="validate"/>
            <label for="email">Email</label>
            </div>
            <div class="input-field col s12" style={{marginTop:"50px"}}>
            <input id="password" type="password" class="validate"/>
            <label for="password">Password</label>
            </div>
            <div style={{marginTop:"15%"}}>
            <a href="/test " class="waves-effect waves-light btn-large z-depth-3" style={{width:"50%",borderRadius:"500px",background:"linear-gradient(to right, #8e2de2, #4a00e0)"}}>Button</a>
            </div>
            
        </div>


          
        </div>
        
      </div>
    </div>
 
       

        
    )
}