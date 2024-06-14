import {NavLink , Link} from "react-router-dom"
import { useState } from "react"

export default function LoggedInNavBarClient(){
 const [hambugMenu , setHambugMenu] = useState(false)

  function handleClick(){
    setHambugMenu(prevState=> !prevState)
  }

  function removeHandle(){
    setHambugMenu(false)
  }



     const activeStyles ={
        fontWeight: "bold",
        TextDecoration: "underline"
     }

   
    //  const dropDown = {
    //     display: hambugMenu? "flex" : "none"
    //  }

    return(
        <nav className="navBar" >
        <figure>
       <img src="enomalogo2.PNG" alt="" width="40px"/>

        </figure>
        {/*  .navBar--links // navBar--links-display--none  */}
        <div className={`navBar--links ${!hambugMenu && "navBar--links-display--none"}`} >
            <div className="HAF--links">
              <NavLink to="/clientLoggedInHome" Style={({isActive})=> isActive? activeStyles : null} onClick={removeHandle}>Home</NavLink>
              <NavLink to="/clientLoggedInAbout" Style={({isActive})=> isActive? activeStyles : null} onClick={removeHandle}>About us</NavLink>
              <NavLink to="/clientLoggedInFaq" >FAQ</NavLink>
            </div>
            <Link to="/" style={{border:"1px solid black",color:"white",height:"2rem", width:"7rem", display:"grid",placeItems:"center",borderRadius:"10px"}}>
                log out 
                </Link>
             </div>
        <span className="hamburger" onClick={handleClick}>&#9776;</span>
    </nav> 
    )
}