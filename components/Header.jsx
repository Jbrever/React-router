import React from "react";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
function Header(){
  const navigate = useNavigate();
  
  function goToContact(){
    navigate('/contact');
  }
  function goToHelp(){
    navigate('/help');
  }
    return(
      <>
      <nav>
        <ul style={{display:"flex" , justifyContent:'center' , gap:"30px"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/help">Help</Link></li> */}
          
          <li><button onClick={goToContact}>Contact</button></li>
          <li><button onClick={goToHelp}>Help</button></li>

        </ul>
      </nav>
      </>
    )
}

export default Header;